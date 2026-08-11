"use client"

import { useState } from "react"
import { ApprovalButtons } from "@/components/shared/ApprovalButtons"
import { MilestoneCard } from "@/components/shared/MilestoneCard"
import type { Milestone, MilestoneStatus } from "@/lib/mock-data/milestones"

export function MentorMilestoneReview({ milestones }: { milestones: Milestone[] }) {
  const [reviewedMilestones, setReviewedMilestones] = useState(milestones)

  const updateStatus = (id: string, status: MilestoneStatus) => {
    setReviewedMilestones((current) => current.map((milestone) => milestone.id === id ? { ...milestone, status } : milestone))
  }

  return <div className="space-y-4">{reviewedMilestones.map((milestone) => <div key={milestone.id} className="space-y-3"><MilestoneCard milestone={milestone} className={milestone.status === "pending" ? "border-l-4 border-l-status-pending" : undefined} />{milestone.status === "pending" && <div className="flex justify-end"><ApprovalButtons role="mentor" onApprove={() => updateStatus(milestone.id, "approved")} onReject={() => updateStatus(milestone.id, "rejected")} /></div>}</div>)}</div>
}
