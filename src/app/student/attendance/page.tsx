"use client"

import { useState } from "react"
import { CalendarCheck2, Check } from "lucide-react"
import { Sidebar } from "@/components/shared/Sidebar"
import { StatCard } from "@/components/shared/StatCard"
import { Topbar } from "@/components/shared/Topbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { attendance, users } from "@/lib/mock-data"

const currentUser = users.find((user) => user.id === "student-001")!
const studentAttendance = attendance.filter((record) => record.studentId === currentUser.id)
const presentCount = studentAttendance.filter((record) => record.status === "present").length
const attendancePercent = Math.round((presentCount / studentAttendance.length) * 100)

export default function AttendancePage() {
  const [checkedInToday, setCheckedInToday] = useState(false)

  return <div className="min-h-screen bg-canvas"><Sidebar role="student" /><div className="md:pl-[240px]"><Topbar user={currentUser} /><main className="mx-auto max-w-[1000px] space-y-8 px-5 py-8 md:px-8"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-medium text-primary">Student workspace</p><h1 className="mt-2 text-[30px] font-bold leading-tight tracking-[-0.4px] text-ink">Attendance</h1><p className="mt-2 text-[15px] text-ink-muted">Keep your internship attendance record current with a quick daily check-in.</p></div><Button type="button" onClick={() => setCheckedInToday((checkedIn) => !checkedIn)} className="w-fit" variant={checkedInToday ? "outline" : "default"}>{checkedInToday ? <><Check />Checked in today</> : <>Check in today <CalendarCheck2 /></>}</Button></div><section aria-label="Attendance summary" className="grid gap-4 sm:grid-cols-2"><StatCard label="Overall attendance" value={`${attendancePercent}%`} detail={`${presentCount} present, ${studentAttendance.length - presentCount} need attention`} icon={CalendarCheck2} /><Card className="rounded-lg border border-border bg-surface-1 shadow-none"><CardContent className="flex items-center gap-3 p-5"><div className="rounded-md bg-surface-2 p-2 text-primary"><CalendarCheck2 className="size-5" /></div><div><p className="text-[12px] font-medium uppercase tracking-[0.2px] text-ink-subtle">Today’s check-in</p><p className="mt-1 text-sm font-semibold text-ink">{checkedInToday ? "Recorded for today" : "Not recorded yet"}</p><p className="mt-1 text-[13px] text-ink-muted">{checkedInToday ? "Your attendance is ready for review." : "Use the button above when you arrive."}</p></div></CardContent></Card></section><Card className="rounded-lg border border-border bg-surface-1 shadow-none"><CardHeader className="p-5 pb-2"><CardTitle className="text-base font-semibold text-ink">Attendance history</CardTitle><p className="mt-1 text-[13px] text-ink-muted">Your recent internship check-in records.</p></CardHeader><CardContent className="p-5 pt-3"><div className="space-y-3">{studentAttendance.map((record) => <div key={record.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"><div className="flex items-center gap-2.5"><CalendarCheck2 className="size-4 text-primary" /><span className="text-sm text-ink">{new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(record.date))}</span></div><span className="text-[13px] font-medium capitalize text-ink-muted">{record.status}</span></div>)}</div></CardContent></Card></main></div></div>
}
