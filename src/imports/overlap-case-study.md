# Overlap
## Designing a football trip planner from 0 → 1

**Role:** Founding Product Designer
**Timeline:** October 2025 – present
**Platform:** iOS (React Native + Expo)
**Status:** Active development. Live user research begins next sprint.

---

## TL;DR

Overlap is a mobile app for American soccer fans planning international trips around matches. I joined as founding designer when it was a brief and a scraped-together webpage. Six months in, there's a working iOS prototype, a design system on its third rewrite, and a clear thesis.

The case study is about two decisions:

1. **The reframe.** Overlap isn't a sports app. It's a trip planner.
2. **A pre-launch design audit, before live research.** I walked the flows against ten persona profiles to surface naming friction, IA collisions, and — most importantly — gaps I'd grown blind to. It is not a substitute for user research. It's a structured self-critique that bought me one round of revisions before I spend a real user's hour.

Live research begins next sprint. This case study is what I've built, what I changed, and what I'm betting on.

---

## The problem

Three friends are planning a lads' trip to Europe. Flights booked, cities chosen, dates locked. Late in planning, someone drops it in the group chat: *"Wait. Can we catch any matches while we're there?"* One supports Arsenal. One supports Man United. One supports PSG. They have a weekend of work ahead:

- Cross-reference home-and-away schedules across three team websites
- Check matches against the travel window they've already locked
- Open Google Maps to see whether their cities have games that weekend
- Hunt tickets across StubHub, Ticombo, and club membership portals

The matches always get sorted. But it takes a weekend of eight browser tabs, and they usually drop games they would've loved to see because the logistics were too annoying to figure out.

If the match is in the Premier League, it gets worse. PL tickets are famously locked down — without membership, most matches are borderline impossible. **Availability is its own problem, separate from discovery.** Any honest solution has to surface what's actually gettable, not just what's on the schedule.

## Why now

The market is moving without a product for it.

- **45%** of American sports fans have traveled abroad to see a game *(Morning Consult, 2024)*
- Americans bought **more Euro 2024 tickets than any other nationality** — more than host country Germany *(UEFA ticketing data, 2024)*
- **35%** say they've planned a vacation specifically around their team's schedule *(Morning Consult, 2024)*

These people don't need convincing. They need a tool that removes the spreadsheet.

---

## The pivot — designing the wrong product, then the right one

When I started, I was designing a sports app. League standings. Match schedules. An MLS-first home screen built on familiar territory for a US audience.

A few weeks in, I realized I was designing the wrong product.

> **`[FIG 1 — Side-by-side: original MLS-first home (vertical match feed, league filter chips, scoreboard cards) vs. current trip-planner home (search-first, "Your Laps" carousel, suggested destinations). Annotate what changed and why.]`**

Two things shifted:

**One.** The use case isn't *"I want to see a match."* It's *"I'm going to be in Europe for ten days — what matches should I plan around?"* The trip is the container. Matches are the content that fits inside it.

**Two.** The wedge isn't domestic sports — it's **European soccer for American fans**. Accessible, culturally saturated, where the obsession already lives. A Liverpool-vs-Arsenal weekend with train travel to Manchester is the opportunity. MLS isn't.

Two design consequences:

- **"Trips" became "Laps."** Naming the unit of work was naming the product. Every feature serves *build a Lap* or *live a Lap*. Whether "Lap" survives contact with real users is a live question — covered below.
- **Search changed shape.** From a match listing to an Airbnb-style accordion. Matches surface as the *result* of the query, not the starting point.

---

## The product today

### Login

The app opens to a single mark: **Overlap** in Oswald Bold 62px, centered. No hero illustration. Two pill buttons: Create Account, Sign In. The restraint sets the typographic register for the rest of the app.

> **`[FIG 2 — Login screen at full device frame.]`**

### Search

Three accordion cards. A toggle at the top flips between *Matches* and *League*. Card order is **Where → When → Team** (revised — see audit section below).

> **`[FIG 3 — Search screen with the Where card expanded. Show map preview, city chips, closed cards above and below.]`**

### Results — travel first, list second

Results render on a map first, list second. Pins cluster by city with match-count overlays — *"3 matches within 30 miles"* — because the answer to *what can I see* is first a place, then a set of games.

> **`[FIG 4 — Search results, map view. Clustered UK pins, "3 matches within 30 miles" overlay on Manchester cluster, list toggle in top right.]`**

### Laps — where the product becomes different

A Lap holds matches, accommodation, and travel as a single timeline. Users invite collaborators via profile bubble. Three primitives — match, stay, travel — share one structure.

> **`[FIG 5 — Lap detail screen. 7-day timeline: two matches, hotel block, two train segments, collaborator row at top.]`**

---

## Design system

The system has been rewritten three times. Each rewrite was a tightening, not an expansion.

> **`[FIG 6 — Design token panel: color swatches with hex, three Oswald weights, Helvetica Neue body, button vocabulary, 8px grid.]`**

**Color.** A deep field-green, `#366322`, as primary. Specifically this green: it sits between the artificial-turf saturation of broadcast graphics and the muted moss of an actual pitch in February. The latter is the emotional register I wanted; the former is the visual recognition. Paired with a softer moss and a cream off-white. No gradients. No drop shadows unless load-bearing.

**Type.** Oswald in three weights for anything that needs to feel bold and sporty; Helvetica Neue for utility. Oswald specifically because it's the typeface of matchday programs and old kit numbers — the cultural shorthand for football typography long before it became a Google Font default.

**Shape.** Pill buttons at 32px radius. Input fields at 16px radius with trailing icon — one component, one shape vocabulary reused across form inputs and social login.

**Rhythm.** 8px grid. Cards at 24px padding. Bottom sheets at 16px top radius. Restraint over invention.

The most important system decision wasn't visual. It was vocabulary. **"Lap"** is the single most important word in the system — and the one most at risk of being changed by live research. If it survives, it becomes a moat. If it doesn't, the system is robust enough to swap in "Trip" without disturbing anything else.

---

## Pre-launch design audit

Before scheduling live research, I walked the current flows against ten persona profiles spanning age, geography, tech fluency, accessibility, and relationship to football — including a casual gift-buyer, a deaf user, a non-native English speaker, and a 12-person stag-do organizer.

**This is not user research.** It's a structured self-critique. Synthetic personas under-index on emotional behavior and over-index on stated preferences. I used the exercise the way I'd use a code review: a fresh set of eyes I could schedule on demand, with the explicit understanding that every finding is a hypothesis to be confirmed or killed in live testing.

What I'd hoped to get out of it: friction I'd grown blind to after six months in the file. What I actually got: a list of revisions, one feature demotion, two accessibility fixes I should have caught in initial design, and three questions I'm now taking into live research with sharper framing.

### Revisions I made immediately

**1. Search accordion reordered — Where → When → Team.**
The biggest assumption I'd carried from the pivot was that users start with fandom. Every comparable travel app (Airbnb, Booking, Expedia) leads with location. *"Who"* was also linguistically ambiguous; *"Team"* reads more clearly. The Airbnb-inspired structure stayed; the Airbnb-inspired *order* didn't.

**2. Coin Toss demoted from primary flow to optional affordance.**
Coin Toss — a playful randomizer for "you pick, no you pick" stalemates — was a top-level New Trip step. The audit suggested it would feel insulting to users mid-planning. I'm not killing it. Playful randomization can drive engagement when users self-select into it. But tucking it behind an *"I can't decide"* affordance instead of forcing it into the main flow.

This was the finding I most wanted to argue with. The feature I was most attached to wasn't doing the work I thought it was.

**3. "Skip for now" path added for casual fans and gift-buyers.**
The flow assumed an existing favorite team at onboarding. Given that a meaningful chunk of American Euro 2024 ticket-buyers are casual or gift purchasers, this was a real segment the app was rejecting at the door.

**4. Messages tab hidden behind a feature flag.**
A dead tab reads as an abandoned product. Five tabs became four until Messages has something to message about.

### Accessibility fixes — and the process change

Two issues that should never have made it to an audit:

- **Color-only password validation** (red/green dots) — WCAG 1.4.1 failure. Paired the color with iconography (✓ / ✗).
- **Badge contrast** — the `#717070` "Upcoming" badge on cream off-white didn't hit 4.5:1. Darkened the badge text.

These are foundational. The honest read is that I shipped past them because my own visual context for the system was already calibrated. The process change: every new screen now passes a two-minute pre-review check — color-independence, 4.5:1 contrast, focus order — before it goes into any prototype.

### Questions I'm taking into live research, not resolving here

- **"Lap" naming.** Five of ten persona profiles flagged it as unintuitive. The argument *for* keeping it is brand distinctiveness, which is real. But brand distinctiveness assessed by me isn't the same as comprehension assessed by users. A/B test in week one of live research.
- **The booking expectation gap.** Marketing language implies booking; v1 delivers manual entry. Where this breaks — first session or second-trip retention — is a question only real users can answer.
- **Saved vs Trips IA collision.** Three persona profiles couldn't distinguish them. Two prototype paths, both worth testing live.

---

## What's next, with dates

1. **Live research with 5–8 participants, starting next sprint.** Recruited from US-based soccer subreddits, supporters' clubs in Austin, and one stag-do planning Discord. First three sessions booked.
2. **Lap invite flow.** The collaborative trip is the promise. The invite flow is where it lives or dies. In design now.
3. **Ticket availability surface.** SeatGeek-style honesty about what's gettable. Especially for the Premier League.
4. **Onboarding fork** for casual / gift-buyer segment.
5. **Saved tab** out of placeholder state.

---

## What I've taken from this

**Vocabulary is the cheapest lever in design.** *"Trip"* would have worked. *"Lap"* made the team remember we were building something different. I'll name things this hard from now on — and test the names earlier.

**A self-critique pass is not research, and saying so out loud is the entire point.** It bought me one round of revisions before live testing. It also exposed two accessibility misses I should have caught in initial design. Both of those facts belong in the case study. Hiding either is the version of this exercise that hurts you.

**Competitive analysis is a trap if you try to make it comprehensive.** Two competitors deeply (Airbnb, Expedia). The rest is noise.

**Be willing to argue with your own audit, then lose.** Coin Toss was the finding I most wanted to dismiss. Sitting with it, then changing the design, taught me more than the findings I agreed with on first read.

---

**Figma:** [Overlap — full project](https://www.figma.com/design/5EBA0FtneFa7xFkhzsAtJx/Overlap-app)
