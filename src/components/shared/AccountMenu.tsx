"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useSyncExternalStore, type FormEvent } from "react"
import { ChevronDown, LogOut, UserPen } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { mockSessionKey, mockSessionRoleKey } from "@/components/shared/MockRouteGuard"
import { users, type User } from "@/lib/mock-data"

type EditableProfile = {
  name: string
  avatarInitials: string
}

function subscribeToSessionChange(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange)
  return () => window.removeEventListener("storage", onStoreChange)
}

function initialsFromName(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "TW"
}

export function AccountMenu({ user: fallbackUser }: { user: User }) {
  const router = useRouter()
  const sessionUserId = useSyncExternalStore(
    subscribeToSessionChange,
    () => window.localStorage.getItem(mockSessionKey) ?? fallbackUser.id,
    () => fallbackUser.id
  )
  const user = users.find((candidate) => candidate.id === sessionUserId) ?? fallbackUser
  const [savedProfile, setSavedProfile] = useState<EditableProfile | null>(null)
  const profile = savedProfile ?? { name: user.name, avatarInitials: user.avatarInitials }
  const [draftProfile, setDraftProfile] = useState<EditableProfile>(profile)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [savedMessage, setSavedMessage] = useState("")

  function openProfileDialog() {
    setSavedMessage("")
    setDraftProfile(profile)
    setDialogOpen(true)
  }

  function handleDialogChange(open: boolean) {
    setDialogOpen(open)

    if (!open) {
      setDraftProfile(profile)
    }
  }

  function handleChangePhoto() {
    setDraftProfile((current) => ({
      ...current,
      avatarInitials: current.avatarInitials === "TW" ? initialsFromName(current.name) : "TW",
    }))
  }

  function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextProfile = {
      name: draftProfile.name.trim() || user.name,
      avatarInitials: draftProfile.avatarInitials,
    }

    setSavedProfile(nextProfile)
    setSavedMessage("Profile updated for this demo session.")
    setDialogOpen(false)
  }

  function handleLogOut() {
    window.localStorage.removeItem(mockSessionKey)
    window.localStorage.removeItem(mockSessionRoleKey)
    router.replace("/login")
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" className="h-auto gap-2 rounded-md border-l border-border px-0 py-1 pl-3 pr-1 text-ink hover:bg-surface-2" />}>
          <Avatar className="size-8 rounded-full">
            <AvatarFallback className="rounded-full bg-primary/10 text-xs font-semibold text-primary">{profile.avatarInitials}</AvatarFallback>
          </Avatar>
          <span className="hidden text-sm font-medium sm:inline">{profile.name}</span>
          <ChevronDown className="hidden size-4 text-ink-subtle sm:inline" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 border border-border bg-surface-1 p-1 shadow-none">
          <DropdownMenuItem onClick={openProfileDialog} className="cursor-pointer px-3 py-2 text-ink hover:bg-surface-2 focus:bg-surface-2 focus:text-ink">
            <UserPen className="size-4 text-ink-muted" />
            Edit Profile
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogOut} variant="destructive" className="cursor-pointer px-3 py-2 text-status-flagged focus:bg-[var(--status-flagged-bg)] focus:text-status-flagged">
            <LogOut className="size-4 text-status-flagged" />
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={dialogOpen} onOpenChange={handleDialogChange}>
        <DialogContent className="border border-border bg-surface-1 p-0 shadow-none sm:max-w-[480px]">
          <form onSubmit={handleSave}>
            <DialogHeader className="p-6 pb-3">
              <DialogTitle className="text-lg font-semibold text-ink">Edit profile</DialogTitle>
              <DialogDescription className="text-sm leading-6 text-ink-muted">Update how your account appears in this prototype.</DialogDescription>
            </DialogHeader>

            <div className="grid gap-5 p-6 pt-3">
              <div className="flex items-center gap-4">
                <Avatar className="size-16 rounded-full">
                  <AvatarFallback className="rounded-full bg-primary/10 text-base font-semibold text-primary">{draftProfile.avatarInitials}</AvatarFallback>
                </Avatar>
                <div>
                  <Button type="button" variant="outline" onClick={handleChangePhoto}>
                    Change photo
                  </Button>
                  <p className="mt-2 text-[12px] text-ink-subtle">Mock preview only</p>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="profile-name" className="text-ink">Username / display name</Label>
                <Input id="profile-name" value={draftProfile.name} onChange={(event) => setDraftProfile((current) => ({ ...current, name: event.target.value }))} className="border-border bg-surface-1 text-ink" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="profile-email" className="text-ink">Email</Label>
                <Input id="profile-email" value={user.email} readOnly className="border-border bg-surface-2 text-ink-muted" />
              </div>

              <Link href="/forgot-password" className="w-fit text-sm font-medium text-primary hover:underline">
                Change Password
              </Link>
            </div>

            <DialogFooter className="border-border bg-surface-2 p-4">
              <Button type="button" variant="outline" onClick={() => handleDialogChange(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-primary text-white hover:bg-[var(--primary-hover)]">
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {savedMessage && <span className="sr-only" role="status">{savedMessage}</span>}
    </>
  )
}
