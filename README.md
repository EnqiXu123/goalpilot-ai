# goalpilot-ai
AI-powered financial goal planning app with emergency fund modelling, scenario simulation, and coaching insights.

PRODUCT REQUIREMENTS DOCUMENT (PRD)
Product Name
GoalPilot — AI-Powered Financial Goal Coach

Version
MVP v1.0 (Updated)

1. Problem Statement
Individuals face rising cost-of-living pressure and often manage multiple goals without clarity on prioritization or feasibility.

Common issues:

Unrealistic goal timelines
Lack of emergency preparedness
Multiple income streams not structured
Poor understanding of trade-offs
Decision paralysis
GoalPilot addresses this by:

Allowing flexible income and expense inputs
Including emergency fund planning
Running transparent feasibility formulas
Simulating trade-offs
Providing educational AI coaching insights

2. Scope
   
In Scope (MVP v1.0)
Landing page experience
Multiple income input fields (up to 10)
Separate fixed and variable expense inputs
Current savings input with include/exclude flow
Emergency fund auto-introduction and inclusion in feasibility
Up to 10 additional financial goals
Feasibility engine with explicit formulas
Scenario simulation with manual adjustments
AI coaching summary with fallback behavior
Validation with user-friendly error messaging
Educational disclaimer

Out of Scope (MVP v1.0)
Bank integrations
Real-time transaction syncing
Tax modeling
Investment modeling
Account login
Mobile native app
Notifications
Regulated financial advice
Product analytics instrumentation

4. Functional Requirements (User Story + Acceptance Criteria)
FR-01 — Landing Page
User Story
As a new user, I want to see what GoalPilot does before I start planning so I understand the value.

Acceptance Criteria

Landing page displays purpose and value proposition.
CTA button labeled Start Planning is visible.
Educational disclaimer is visible in footer.

FR-02 — Income Inputs
User Story
As a user, I want to enter multiple monthly income sources so my plan reflects reality.

Acceptance Criteria

System provides up to 10 income rows.
Each row includes optional source name and amount.
Amount accepts integers only in range 0..99,999,999.
Decimals and negative values are rejected with clear inline error.
Blank amount is treated as 0.
Total Monthly Income = sum(all income amounts).

FR-03 — Expense Inputs (Fixed + Variable)
User Story
As a user, I want to separate fixed and variable expenses so calculations are realistic.

Acceptance Criteria

Fixed monthly expense field is mandatory.
Fixed amount accepts integers only in range 0..99,999,999.
Optional fixed expense name is allowed.
Up to 10 variable expense rows are available.
Each variable row includes optional name and amount.
Variable amount accepts integers only in range 0..99,999,999.
Decimals and negatives are rejected with clear inline error.
Blank variable amounts are treated as 0.
Total Monthly Expense = Fixed Expense + sum(variable expenses).

FR-04 — Current Savings Input and Inclusion Choice
User Story
As a user, I want control over whether current savings is used in calculations.

Acceptance Criteria

Current savings input accepts integers only in range 0..99,999,999.
System asks: Do you want to include current savings into monthly saving calculations?
If user selects No, savings remains reserve-only and is excluded from feasibility math.
If user selects Yes, user manually allocates savings by amount to emergency fund and/or goals.
Allocation inputs accept integers >= 0.
Unallocated savings remains reserve.

FR-05 — Emergency Fund
User Story
As a user, I want emergency planning included so I can reduce risk.

Acceptance Criteria

Suggested emergency target is auto-calculated: 3 × Total Monthly Expense.
Emergency fund is included in feasibility engine as a goal.
Default emergency timeline is 12 months.
User can accept, edit, or set emergency target to 0.
Emergency amount accepts integers only in range 0..99,999,999.
If emergency target is 0, risk explanation is displayed and user can proceed.

FR-06 — Financial Goals
User Story
As a user, I want to add multiple goals with targets, timelines, and priority.

Acceptance Criteria

User can add up to 10 goals.
Each goal requires name, target amount, timeline (months), and priority rank.
Goal target accepts integers in range 1..99,999,999.
Goal timeline accepts integers in range 1..600.
System blocks adding more than 10 goals with clear message.

FR-07 — Feasibility Calculation Engine
User Story
As a user, I want clear visibility of whether my plan is achievable.

Acceptance Criteria

Total Monthly Income = sum(income amounts).
Total Monthly Expense = Fixed Expense + sum(variable expenses).
Adjusted Monthly Income = Total Monthly Income + Income Increase (scenario).
Adjusted Monthly Expense = max(0, Total Monthly Expense - Spending Cut (scenario)).
Monthly Surplus = Adjusted Monthly Income - Adjusted Monthly Expense.
Remaining Emergency Target = max(0, Emergency Target - Savings Allocation to Emergency).
Remaining Goal Target_i = max(0, Goal Target_i - Savings Allocation to Goal_i).
Emergency Required Monthly = ceil(Remaining Emergency Target / Emergency Timeline).
Goal Required Monthly_i = ceil(Remaining Goal Target_i / Goal Timeline_i).
Total Required Monthly Saving = Emergency Required Monthly + sum(Goal Required Monthly_i).
If Total Required Monthly Saving <= Monthly Surplus, result is feasible; otherwise conflict exists.

FR-08 — Prioritization Logic
User Story
As a user, I want clear priority rules when funds are insufficient.

Acceptance Criteria

Priority order is deterministic: emergency fund first, then user-ranked goals.
Conflict explanations follow this same order.
Recommendations and allocation views follow this same order.

FR-09 — Scenario Explorer
User Story
As a user, I want to simulate adjustment strategies and see impact instantly.

Acceptance Criteria

Minimum 3 strategy options are always available: Cut Spending, Extend Timeline, Increase Income.
Manual input controls are provided for each strategy.
Any change recalculates surplus and feasibility instantly.
Risk indicator remains visible if emergency target is 0.

FR-10 — AI Coaching Insight
User Story
As a user, I want educational coaching insights about trade-offs and next actions.

Acceptance Criteria

Structured summary is sent to AI using aggregated numeric data and anonymized labels only.
Free-text personal labels are not sent.
AI output must include 3 sections: Trade-offs, Priority Order, Next Adjustments.
Output is labeled educational-only.
AI response target is under 10 seconds.
If timeout/failure occurs, system displays deterministic rule-based fallback with the same 3-section format.

FR-11 — Dashboard
User Story
As a user, I want one summary view so I can understand my plan quickly.

Acceptance Criteria

Dashboard displays total monthly income, total monthly expense, and monthly surplus.
Dashboard displays required monthly savings by emergency and goals.
Dashboard displays allocation breakdown and feasibility status.
Dashboard displays risk indicator when emergency target is 0.
Recalculate action is available.

FR-12 — Validation and Default Labels
User Story
As a user, I want clear validation and readable labels so I can correct errors quickly.

Acceptance Criteria

All numeric fields are integer-only.
Decimals and negatives are rejected with inline messages.
Mandatory fields cannot be blank.
Numeric range bounds are enforced per field.
Blank optional names are auto-labeled in outputs as Income N, Expense N, Goal N.

4. Non-Functional Requirements
NFR-01 — Input Validation
Clear, field-level, user-friendly error messaging.
Blocking validation for invalid mandatory inputs.
NFR-02 — Performance
Recalculation target < 200ms at max MVP load.
AI response target < 10s with fallback if exceeded.
NFR-03 — Usability
Guided flow with calm, non-judgmental language.
Clear field labeling and immediate feedback.
NFR-04 — Accessibility
Mobile responsive design.
High contrast and large touch/click targets.
Target standard: WCAG 2.2 AA.

NFR-05 — Data Handling and Privacy
No persistent financial data storage required for MVP.
Data handled session-only in app flow.
AI processing configured for zero retention.
Educational disclaimer always visible.

6. MVP Success Criteria (No Analytics)
Measured via pilot usability testing (manual observation/logging):

Plan completion rate >= 60%.
Median time-to-first-plan <= 8 minutes.
Scenario usage in >= 40% of pilot sessions.
