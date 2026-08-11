"use client"

import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { UserRole } from "@/lib/mock-data/users"

export function ApprovalButtons({ role = "mentor", onApprove, onReject }: { role?: UserRole; onApprove?: () => void; onReject?: () => void }) {
  if (role !== "mentor") return null
  return <div className="flex gap-2"><Button type="button" size="sm" onClick={onApprove}><Check />Approve</Button><Button type="button" size="sm" variant="destructive" onClick={onReject}><X />Reject</Button></div>
}
