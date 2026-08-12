"use client"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import type { UserRole } from "@/lib/mock-data/users"

const roleDashboard: Record<UserRole, string> = {
  student: "/student/dashboard",
  mentor: "/mentor/dashboard",
  industry: "/industry/dashboard",
}

const protectedPrefixes: Record<UserRole, string> = {
  student: "/student",
  mentor: "/mentor",
  industry: "/industry",
}

export const mockSessionKey = "trackwise_mock_user_id"
export const mockSessionRoleKey = "trackwise_mock_user_role"

export function dashboardForRole(role: UserRole) {
  return roleDashboard[role]
}

export function MockRouteGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const role = window.localStorage.getItem(mockSessionRoleKey) as UserRole | null

    if (!role || pathname === "/unauthorized") return

    const activeRole = (Object.keys(protectedPrefixes) as UserRole[]).find((candidate) => pathname.startsWith(protectedPrefixes[candidate]))

    if (activeRole && activeRole !== role) {
      router.replace("/unauthorized")
    }
  }, [pathname, router])

  return children
}
