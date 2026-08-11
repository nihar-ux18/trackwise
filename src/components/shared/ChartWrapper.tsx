"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export type TrendPoint = { label: string; score: number }

export function ChartWrapper({ data, title = "Performance trend" }: { data: TrendPoint[]; title?: string }) {
  return <Card className="rounded-lg border border-border bg-surface-1 shadow-none"><CardHeader className="p-5 pb-2"><CardTitle className="text-base font-semibold text-ink">{title}</CardTitle><p className="mt-1 text-[13px] text-ink-muted">A view of attendance consistency across the internship.</p></CardHeader><CardContent className="p-5 pt-3"><div className="h-[220px] w-full"><ResponsiveContainer width="100%" height="100%"><LineChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -18 }}><XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fill: "var(--ink-subtle)", fontSize: 12 }} /><YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fill: "var(--ink-subtle)", fontSize: 12 }} /><Tooltip contentStyle={{ border: "1px solid var(--border)", borderRadius: "var(--radius-md)", background: "var(--surface-1)", color: "var(--ink)", fontSize: 12 }} formatter={(value) => [`${value}%`, "Attendance"]} /><Line type="monotone" dataKey="score" stroke="var(--primary)" strokeWidth={2} dot={{ r: 3, fill: "var(--primary)", strokeWidth: 0 }} activeDot={{ r: 5 }} /></LineChart></ResponsiveContainer></div></CardContent></Card>
}
