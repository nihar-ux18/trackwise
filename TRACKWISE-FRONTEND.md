# TrackWise — Frontend Structure & Flow

**Frontend Stack:** Next.js 15 · Tailwind CSS · shadcn/ui · Recharts

---

## 1. Page List (by role)

### Public
| Page | Route | Contents |
|---|---|---|
| Landing | `/` | Problem statement + "Login" CTA |
| Login | `/login` | Single login form, redirects by role after auth |
| Forgot Password | `/forgot-password` | User enters registered email → receives reset link → sets new password |

### Student
| Page | Route | Contents |
|---|---|---|
| Dashboard | `/student/dashboard` | Attendance %, milestones summary (done/pending), readiness score preview card |
| Milestones | `/student/milestones` | List of submitted milestones + "Add Milestone" form (title, description, proof link, date) |
| Attendance | `/student/attendance` | Check-in button + calendar/list view of past attendance |
| Skill Gap Report | `/student/skill-gap` | AI-generated: readiness score, skill gap summary, 2-3 suggestions |

### Mentor (Faculty)
| Page | Route | Contents |
|---|---|---|
| Dashboard | `/mentor/dashboard` | List of assigned students, pending-approval count per student |
| Add Student | `/mentor/add-student` | Form to onboard a new student — name, email, auto-generated/set password |
| Student Review | `/mentor/team/[studentId]` | Full student view: milestones with Approve/Reject buttons, attendance log, performance trend chart |

### Industry Partner
| Page | Route | Contents |
|---|---|---|
| Dashboard | `/industry/dashboard` | Read-only list of linked students/teams |
| Student Profile | `/industry/student/[id]` | Read-only: verified (approved-only) milestones, skill-gap score, readiness summary |

**Total: ~11 pages**

---

## 2. Shared Components

| Component | Used For |
|---|---|
| `Sidebar` | Role-based nav links (different per role) |
| `Topbar` | User name/role display, logout |
| `StatCard` | Small metric box (e.g. attendance %, pending count) |
| `MilestoneCard` | One milestone entry + status badge (pending/approved/rejected) |
| `ApprovalButtons` | Approve/reject controls, mentor-only |
| `ChartWrapper` | Reused Recharts line/bar chart (attendance + performance trend) |
| `SkillGapCard` | AI score + summary + suggestions display |

---

## 3. App Flow by Role

**Student:**
Login → Dashboard (quick overview) → adds a Milestone (with proof) → checks in Attendance → later visits Skill Gap page to view AI-generated readiness score.

**Mentor:**
Login → Dashboard (list of students + pending approvals) → adds a new Student via Add Student page (issues credentials) → opens a student → reviews milestone submissions → Approves/Rejects each.

**Industry Partner:**
Login → Dashboard (only linked/shared students) → opens a student → views only approved/verified data → checks skill-gap/readiness score.

---

## 4. Role-Based Access Control

Each route group (`/student/*`, `/mentor/*`, `/industry/*`) checks the logged-in user's role before rendering the page.

- If a user tries to access a route outside their assigned role (e.g. a student visiting `/mentor/dashboard`), they should **not** see that page's content.
- **Approach:** Redirect them to their own dashboard automatically (silent redirect — no visible error, feels more like a real product).
- **Optional demo touch:** A dedicated `/unauthorized` page can be shown instead of a silent redirect, to visibly demonstrate access control during the pitch — useful since the whole project is built around verified, role-based access.
- Role check should happen via Next.js middleware or a layout-level guard, using the role stored on the logged-in user (from Supabase auth/user table).

---

## 5. Student Onboarding (by Mentor)

Mentors can add new students directly via `/mentor/add-student` — entering the student's name and email, and either setting or auto-generating a password for their account. This keeps student onboarding within the academic institution (rather than giving Industry Partners any account-creation control), and fits naturally alongside the mentor's existing role of verifying student data.

*Note: in a full production version, this would ideally sit under a dedicated Admin/Coordinator role — kept under Mentor here to stay within hackathon time constraints.*

---

## 6. Topbar Account Menu (all roles)

No dedicated Settings page. Instead, clicking the user avatar/name in the Topbar opens a dropdown with two options:

| Option | Behavior |
|---|---|
| Edit Profile | Opens a modal/dialog (not a new route) — see contents below |
| Log Out | Clears the mock session and redirects to `/login` |

**Edit Profile modal contents:**
- Profile picture — preview + placeholder upload (mock only, no real file storage)
- Username / display name — editable text field
- Email — read-only (tied to the mock account)
- "Change Password" — links out to the existing `/forgot-password` flow rather than duplicating that logic
- Save button — updates local/mock user state only, no backend call

This menu is shared across all three roles (Student, Mentor, Industry) using the same component — only the underlying user data shown differs.