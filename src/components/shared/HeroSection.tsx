"use client"

import Link from "next/link"
import {
  ArrowRight,
  LayoutDashboard,
  ClipboardCheck,
  CalendarCheck2,
  BookOpenCheck,
  Download,
  ShieldCheck
} from "lucide-react"

export default function HeroSection() {
  return (
    <section className="animated-gradient-bg relative isolate flex flex-col items-center justify-start pt-8 pb-24 overflow-hidden px-5 md:px-8 text-white min-h-[1100px]">
      {/* Header Container */}
      <header className="flex w-full items-center justify-between gap-4 py-3 max-w-[1120px] mx-auto z-20">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-md bg-white/15 text-sm font-bold text-white ring-1 ring-white/25">
            TW
          </div>
          <div>
            <p className="font-semibold text-white leading-tight">TrackWise</p>
            <p className="text-[12px] text-white/70">Verified internships</p>
          </div>
        </div>
        <Link
          href="/login"
          className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-primary hover:bg-white/90 transition-colors shadow-sm"
        >
          Login <ArrowRight className="size-4" />
        </Link>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-[1120px] mx-auto flex flex-col items-center mt-16 md:mt-24 mb-16 px-4">
        <div className="inline-flex items-center rounded-pill border border-white/25 bg-white/15 px-3 py-1 text-[13px] font-medium text-white mb-6">
          Verified Internship Lifecycle Platform
        </div>
        <h1 className="text-4xl md:text-[64px] font-extrabold max-w-4xl tracking-tight leading-tight drop-shadow-sm mb-6 text-center text-white">
          Verified internships, done right
        </h1>
        <p className="text-base md:text-[18px] text-white/90 max-w-[700px] mb-10 text-center leading-relaxed font-sans">
          Track milestones, verify progress in real time, and give companies a trustworthy view of every student&apos;s internship journey.
        </p>
        <Link
          href="/login"
          className="bg-ink hover:bg-slate-900 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg flex items-center gap-2 text-sm hover:scale-[1.02] active:scale-[0.98] duration-150"
        >
          Get Started — it&apos;s free <ArrowRight className="size-4" />
        </Link>
      </div>

      {/* Dashboard Mockup (Glassmorphism card) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-2 md:px-6 mt-4">
        <div className="bg-white/85 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 overflow-hidden flex flex-col md:flex-row h-[550px] text-ink">
          
          {/* Sidebar */}
          <div className="w-full md:w-60 bg-white/50 border-b md:border-b-0 md:border-r border-border/20 p-5 flex flex-col gap-6 hidden md:flex">
            <div className="space-y-1">
              <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <LayoutDashboard className="size-5" />
              </div>
              <div className="flex items-center gap-3 px-3 py-2 bg-white rounded-md shadow-sm text-primary font-semibold text-sm">
                <LayoutDashboard className="size-[18px]" /> Dashboard
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-ink-muted hover:bg-white/50 rounded-md transition-colors text-sm cursor-pointer font-medium">
                <ClipboardCheck className="size-[18px]" /> Milestones
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-ink-muted hover:bg-white/50 rounded-md transition-colors text-sm cursor-pointer font-medium">
                <CalendarCheck2 className="size-[18px]" /> Attendance
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-ink-muted hover:bg-white/50 rounded-md transition-colors text-sm cursor-pointer font-medium">
                <BookOpenCheck className="size-[18px]" /> Reports
              </div>
            </div>
            
            <div className="mt-auto flex items-center gap-3 px-3 py-2 border-t border-border/10 pt-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                AS
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-semibold text-ink leading-none">Alex Student</span>
                <span className="text-[11px] text-ink-muted mt-1">Software Eng Intern</span>
              </div>
            </div>
          </div>
          
          {/* Main Dashboard Content */}
          <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-transparent flex flex-col text-left">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-ink tracking-tight">Overview</h3>
                <p className="text-xs md:text-sm text-ink-muted mt-1">Week 4 of 12</p>
              </div>
              <button className="bg-white px-4 py-2 rounded-lg border border-border text-xs md:text-sm font-semibold flex items-center gap-2 shadow-sm hover:bg-slate-50 transition-colors">
                <Download className="size-[16px] text-primary" /> Export
              </button>
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {/* Stat 1 */}
              <div className="bg-white p-4 rounded-xl border border-border/60 shadow-sm flex flex-col gap-2">
                <span className="text-ink-muted text-xs font-semibold uppercase tracking-wider">Progress</span>
                <div className="flex items-end gap-2">
                  <span className="text-2xl md:text-3xl font-bold text-ink leading-none">33%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1 overflow-hidden">
                  <div className="bg-primary h-full rounded-full w-1/3"></div>
                </div>
              </div>
              {/* Stat 2 */}
              <div className="bg-white p-4 rounded-xl border border-border/60 shadow-sm flex flex-col gap-2">
                <span className="text-ink-muted text-xs font-semibold uppercase tracking-wider">Hours Logged</span>
                <div className="flex items-end gap-2">
                  <span className="text-2xl md:text-3xl font-bold text-ink leading-none">142</span>
                  <span className="text-xs text-ink-muted mb-1 font-medium">/ 400</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1 overflow-hidden">
                  <div className="bg-primary h-full rounded-full w-[35.5%]"></div>
                </div>
              </div>
              {/* Stat 3 */}
              <div className="bg-white p-4 rounded-xl border border-border/60 shadow-sm flex flex-col gap-2">
                <span className="text-ink-muted text-xs font-semibold uppercase tracking-wider">Verification Status</span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[var(--status-verified-bg)] flex items-center justify-center text-status-verified">
                    <ShieldCheck className="size-4" />
                  </div>
                  <span className="text-sm font-bold text-status-verified">Up to date</span>
                </div>
              </div>
            </div>
            
            {/* Milestone Card */}
            <div className="bg-white rounded-xl border border-border/60 shadow-sm p-5 relative overflow-hidden flex-1 flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-status-verified"></div>
              
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-ink leading-tight">Backend API Integration</h4>
                    <p className="text-xs text-ink-muted mt-1">Milestone 4 • Submitted 2 days ago</p>
                  </div>
                  <div className="px-2.5 py-1 bg-[var(--status-verified-bg)] text-status-verified rounded-full text-[11px] font-semibold flex items-center gap-1">
                    <ShieldCheck className="size-3.5" /> Verified
                  </div>
                </div>
                
                <p className="text-xs md:text-sm text-ink-muted mb-4 leading-relaxed font-normal">
                  Successfully implemented the REST endpoints for user authentication and integrated them with the frontend login flow. All unit tests are passing with 90% coverage.
                </p>
              </div>
              
              <div className="flex items-center gap-3 pt-3 border-t border-border/30">
                <div className="flex -space-x-1.5">
                  <div className="w-7 h-7 rounded-full bg-primary/10 border-2 border-white z-20 flex items-center justify-center text-[10px] font-bold text-primary">
                    SJ
                  </div>
                  <div className="w-7 h-7 rounded-full bg-accent/10 border-2 border-white z-10 flex items-center justify-center text-[10px] font-bold text-accent">
                    TW
                  </div>
                </div>
                <span className="text-[11px] text-ink-muted font-medium">Reviewed by Sarah Jenkins (Mentor)</span>
              </div>
            </div>
            
            {/* Bottom transition indicator */}
            <div className="bg-white/50 rounded-xl border border-border/30 p-4 mt-3 flex items-center justify-center h-14">
              <div className="text-ink-muted text-xs flex items-center gap-2 font-medium">
                <div className="size-3.5 rounded-full border border-t-transparent border-primary animate-spin" />
                Loading previous milestones...
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-canvas to-transparent z-0"></div>
    </section>
  )
}
