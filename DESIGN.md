---
version: alpha
name: TrackWise-design-system
description: "A trust-first verification platform for students, colleges, and companies. The system reads as clean, institutional, and calm — built to make 'verified' feel like the most important word on the page. Light-leaning neutral surfaces, a confident GHR-purple brand accent, an orange secondary accent for key CTAs, and a dedicated four-state verification color language (verified / pending / in-review / flagged) carry the entire visual identity. Typography is a clean, highly legible sans (Inter) — no decorative display type — because the product's job is to be believed, not admired. Cards and tables are the primary surface, not marketing hero sections."

colors:
  primary: "#5B21B6"
  primary-hover: "#4C1D95"
  primary-focus: "#6D28D9"
  on-primary: "#FFFFFF"
  accent: "#EA580C"
  accent-hover: "#C2410C"
  on-accent: "#FFFFFF"
  ink: "#0F172A"
  ink-muted: "#475569"
  ink-subtle: "#94A3B8"
  canvas: "#F8FAFC"
  surface-1: "#FFFFFF"
  surface-2: "#F1F5F9"
  surface-3: "#E2E8F0"
  border: "#E2E8F0"
  border-strong: "#CBD5E1"
  inverse-canvas: "#0F172A"
  inverse-ink: "#F8FAFC"
  status-verified: "#16A34A"
  status-verified-bg: "#DCFCE7"
  status-pending: "#D97706"
  status-pending-bg: "#FEF3C7"
  status-review: "#0EA5E9"
  status-review-bg: "#E0F2FE"
  status-flagged: "#DC2626"
  status-flagged-bg: "#FEE2E2"

typography:
  display-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.8px
  display-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.4px
  headline:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.2px
  card-title:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  body:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.2px
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  table-header:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.3px
  mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 16px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 16px
  button-secondary:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 16px
  button-danger:
    backgroundColor: "{colors.status-flagged}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 16px
  status-badge-verified:
    backgroundColor: "{colors.status-verified-bg}"
    textColor: "{colors.status-verified}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  status-badge-pending:
    backgroundColor: "{colors.status-pending-bg}"
    textColor: "{colors.status-pending}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  status-badge-review:
    backgroundColor: "{colors.status-review-bg}"
    textColor: "{colors.status-review}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  status-badge-flagged:
    backgroundColor: "{colors.status-flagged-bg}"
    textColor: "{colors.status-flagged}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  internship-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 20px
  data-table:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 0
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 10px 12px
  timeline-step:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 0
---

# TrackWise Design System

## Mission
Create implementation-ready, token-driven UI guidance for TrackWise — a Verified Internship Lifecycle Platform connecting students, colleges, and companies — optimized for trust, clarity, and fast verification workflows across a Next.js + Supabase dashboard product, while reflecting GH Raisoni College's brand identity (purple/orange).

## Brand
- Product/brand: TrackWise
- Audience: students, college mentors/administrators, and company verifiers
- Product surface: authenticated dashboard web app (light-mode primary)
- Core job: make verification status instantly legible and trustworthy
- Brand alignment: primary and accent colors are drawn from GH Raisoni College's own palette (purple/orange), tying the product visually to the host institute

## Overview
TrackWise is not a marketing-led product — it's a working tool people check daily to answer one question: "is this internship real, and where does it stand?" The system is built around that question. A calm neutral canvas (`#F8FAFC`) keeps noise low so the four-state verification language — **verified / pending / in-review / flagged** — can carry most of the visual weight. GHR purple (`#5B21B6`) is the primary brand accent, reserved for primary actions and active nav states; orange (`#EA580C`) is a secondary accent used sparingly for standout CTAs (e.g. "Add Milestone," "Add Student"), echoing the college's own branding without competing with the status colors. Cards and tables are the real UI, not hero sections — this is a system designed to be scanned quickly by people who need an honest answer.

## Colors
- **Primary (#5B21B6):** Primary actions — "Submit for verification," "Approve," main nav active state, links.
- **Accent (#EA580C):** Secondary CTA color — used sparingly for standout actions like "Add Milestone" or "Add Student." Not used for status or navigation.
- **Ink (#0F172A) / Ink Muted (#475569) / Ink Subtle (#94A3B8):** Three-step text hierarchy for headings, body, and metadata.
- **Canvas (#F8FAFC):** App background — quiet, not stark white, reduces eye fatigue for daily use.
- **Surface 1 (#FFFFFF):** Cards, tables, modals — sits lifted off canvas.
- **Surface 2/3:** Nested panels, table row hover, sidebar sections.
- **Status Verified (#16A34A) / bg (#DCFCE7):** Internship/milestone confirmed legitimate by mentor.
- **Status Pending (#D97706) / bg (#FEF3C7):** Submitted, awaiting first review.
- **Status Review (#0EA5E9) / bg (#E0F2FE):** Actively being checked by a verifier. Uses a distinct sky-blue so it never gets confused with the purple brand color.
- **Status Flagged (#DC2626) / bg (#FEE2E2):** Discrepancy found — needs human attention.

Status colors must **never** be reused for anything else in the product (no green "success toast" reusing verified-green casually) — status colors are semantically reserved so a glance at any screen tells the truth about verification state. Brand colors (`primary`, `accent`) must never be used as a status color, and vice versa — this keeps "is this button an action?" and "is this a verification state?" instantly distinguishable.

## Typography
Inter across the entire system — no display/text split like a marketing brand needs, because TrackWise doesn't need to perform; it needs to be read fast by tired students and busy mentors. Headings top out at 700 weight and 40px — restrained, not showy. `table-header` and `caption` styles carry extra letter-spacing for scannability in dense data views. `mono` (JetBrains Mono) is reserved for internship IDs, verification codes, and timestamps — anywhere exactness matters more than tone.

## Layout & Spacing
- **Base unit:** 4px, scaling `xxs(4) → xs(8) → sm(12) → md(16) → lg(24) → xl(32) → xxl(48) → section(80)`.
- Card interior padding: `lg` (20–24px). Table cell padding: `sm–md` (12–16px), dense enough for scanning many rows.
- Max content width: ~1200px for dashboard views; tables can run full-width within their panel.
- Dashboard grid: sidebar (fixed ~240px) + main content area; card grids 3-up desktop → 2-up tablet → 1-up mobile.

## Elevation & Depth
| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | `{colors.canvas}`, no border | Page background |
| 1 (card lift) | `{colors.surface-1}`, 1px `{colors.border}` | Cards, table containers, modals |
| 2 (hover/active) | `{colors.surface-2}` | Row hover, selected sidebar item |
| 3 (focus ring) | 2px `{colors.primary-focus}` outline at 40% opacity | Focused input, focused button |

No heavy shadows or gradients — depth comes from the surface ladder and hairline borders, keeping the system feeling institutional and calm rather than flashy.

## Shapes
| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Table cell chips |
| `{rounded.sm}` | 6px | Inline tags |
| `{rounded.md}` | 8px | Buttons, inputs, cards (default) |
| `{rounded.lg}` | 12px | Internship/milestone cards, modals |
| `{rounded.xl}` | 16px | Onboarding/empty-state illustrations |
| `{rounded.pill}` | 9999px | Status badges |
| `{rounded.full}` | 9999px | Avatars, timeline step dots |

## Components

### Buttons
- **`button-primary`** — Purple CTA for core verification actions ("Approve," "Submit"). Padding 10px 16px, `{rounded.md}`.
- **`button-accent`** — Orange CTA reserved for standout onboarding/creation actions ("Add Milestone," "Add Student"). Used sparingly — never for verification actions, to avoid diluting the status-color language.
- **`button-secondary`** — White/outlined, for "Cancel," "Export," secondary actions.
- **`button-danger`** — Reserved strictly for destructive/flagging actions ("Reject," "Flag Discrepancy") — uses `status-flagged` red so the danger signal matches the status language.

### Status Badges
Four pill badges (`status-badge-verified/pending/review/flagged`) are the most-repeated component in the product. They must appear consistently — same shape, same position (top-right of card or first table column) — across every surface: student dashboard, mentor review queue, industry portal.

### Internship / Milestone Card
`internship-card` — the primary content unit on student and industry dashboards. Structure: title/role (`card-title`), status badge top-right, key dates (`body-sm`), mentor/verifier indicator, primary action button bottom-right.

### Data Table
`data-table` — used in mentor review queues and industry views. Header row uses `table-header` typography with `ink-subtle` color; rows alternate `surface-1`/`surface-2` on hover only (not zebra-striped by default, to keep it calm).

### Verification Timeline
`timeline-step` — horizontal or vertical step indicator (Submitted → Pending → In Review → Verified/Flagged) shown on a milestone's detail view. Each step is a filled or outlined circle in the matching status color, connected by a `{colors.border}` line that fills with status color as steps complete.

### Inputs & Forms
`text-input` — used in submission forms (milestone details, attendance check-in, add-student form). Focus state adds the 2px primary-focus ring per the elevation table.

## Do's and Don'ts

### Do
- Reserve status colors exclusively for verification state — never repurpose them for generic UI feedback.
- Keep the canvas light and calm; let status color and the orange accent be the only saturated colors on any given screen.
- Use `{rounded.pill}` consistently for every status badge, everywhere, with no exceptions.
- Lead every dashboard view with the verification state, not the milestone description.
- Keep tables dense but legible — `body-sm` and `table-header` exist specifically for this.
- Use the orange accent deliberately and sparingly — it should draw the eye to one clear action per screen, not several.

### Don't
- Don't introduce a third brand accent color beyond `{colors.primary}` and `{colors.accent}` — it dilutes the trust signal.
- Don't use red/green/amber/sky-blue outside the four defined status use-cases.
- Don't use purple or orange as a status color, or a status color as a button/brand color.
- Don't add decorative gradients, illustrations-as-hero, or marketing-style atmosphere — this is a working tool.
- Don't let flagged/pending states look visually softer than verified — severity must read at a glance.
- Don't ship dark mode as the default; if added later, it's a secondary theme, not the brand identity.

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Desktop | 1280px | Sidebar + 3-up card grid |
| Tablet | 1024px | Sidebar collapses to icons; 2-up cards |
| Mobile-Lg | 768px | Sidebar becomes bottom nav or drawer; tables scroll horizontally |
| Mobile | 480px | Single-column cards; timeline switches to vertical |

### Touch Targets
- Primary/secondary/accent buttons: ≥44px tap height on touch viewports.
- Status badges are informational only — not tap targets, no minimum required.
- Table rows: ≥48px height on touch to keep row-tap navigation reliable.

### Collapsing Strategy
- **Data tables** → horizontal scroll with a sticky first column (student/company name) below 768px.
- **Verification timeline** → horizontal steps become a vertical list below 768px.
- **Sidebar nav** → icon rail at tablet, drawer/bottom-nav at mobile.

## Iteration Guide
1. Every new screen starts by asking: which verification state does this surface represent?
2. Reference components by their `components:` token name, not raw hex/px values.
3. Default body copy to `{typography.body}` at weight 400.
4. Status badges and colors are locked — do not create a fifth status without updating this file first.
5. Use `accent` only for creation/onboarding actions — if in doubt, default to `primary`.
6. Add new card/table variants as separate component entries rather than one-off overrides.
7. Re-check contrast (WCAG 2.2 AA) any time a status or brand color pairs with new background surfaces.

## Known Gaps
- Email/notification templates are not yet specified — should inherit `{colors.primary}` and status colors once designed.
- No dark theme is defined; treat as a future secondary theme, not a v1 requirement.
- Empty-state and error-state illustrations are not yet designed — placeholder `{rounded.xl}` panels can be used until final art is ready.
- Role-based view differences (student vs. mentor vs. industry partner) share this token set but haven't been separately audited for information density needs per role.