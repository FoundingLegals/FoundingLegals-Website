# Developer Brief — Signup Consent & DPDP Just-in-Time Notice

**For:** `app.foundinglegals.com` engineering team
**From:** Legal / Compliance
**Date:** 29 May 2026
**Status:** Required before next production deploy of signup / KYC flows
**Source of truth:** Privacy Policy, Terms & Conditions, Cookie Policy and Refund & Cancellation Policy published at foundinglegals.com (effective 29 May 2026)

---

## 1. Why this is needed (one paragraph for the developer)

Under the Digital Personal Data Protection Act, 2023 (DPDP Act) and the IT (Intermediary Guidelines) Rules, 2021, the platform must obtain **free, specific, informed, unconditional and unambiguous consent** from each user before processing personal data, and must keep **evidence** of that consent. The current acceptance flow on `app.foundinglegals.com` is JS-rendered and Legal cannot verify it from the public HTML. This document specifies the **exact** behaviour the signup page must implement. Deviations require Legal sign-off.

---

## 2. Hard rules — do these or the flow is non-compliant

1. **Clickwrap, not browsewrap.** Account creation must be **blocked** until the user actively ticks the mandatory checkbox. No "by clicking Sign Up you agree…" foot-text-only patterns.
2. **All checkboxes must be unticked by default.** Pre-ticked = invalid consent under DPDP (s.6(1) — consent must be "unambiguous" and given by a "clear affirmative action").
3. **Mandatory consent (Terms + Privacy) must be a single checkbox separate from any optional consents.** No bundling.
4. **Optional consents must be genuinely optional.** Signup must succeed if a user leaves marketing consent unticked.
5. **Persist a tamper-evident consent record** for every successful signup (schema in §7).
6. **Live links** to the legal pages — opening in a new tab — must be present in the checkbox label. The current published URLs are:
   - `https://www.foundinglegals.com/terms`
   - `https://www.foundinglegals.com/privacy-policy`
   - `https://www.foundinglegals.com/cookie-policy`
   - `https://www.foundinglegals.com/refund-policy`
7. **Just-in-time DPDP notice** must be displayed at the point any KYC/SPDI is collected (PAN, Aadhaar, passport, bank account). Not only at signup.
8. **No Aadhaar collection in the signup step.** Aadhaar is collected only later, inside the specific filing workflow that requires it (e.g. SPICe+).
9. **Age gate** — block users who indicate they are under 18.
10. **Withdrawal of consent** must be at least as easy as giving it. Provide an in-app "Privacy & Consents" settings screen (see §9).

---

## 3. Signup form — required fields & field-level rules

| Field | Required | Validation | Notes |
|---|---|---|---|
| Full name | Yes | min 2 chars | — |
| Email | Yes | RFC 5322 + DNS MX check | Verify with OTP / magic link before account is active |
| Mobile number | Yes | E.164, India (+91), 10-digit | Verify with OTP before account is active |
| Password | Yes (if not OAuth) | min 10 chars, ≥1 upper, ≥1 number, ≥1 symbol | Store as salted hash (e.g. argon2id or bcrypt cost ≥ 12); never log |
| Country of residence | Yes | dropdown, default India | If outside India: block with message "Founding Legals currently serves users in India only." |
| Confirm 18+ | Yes | unticked checkbox | Combined into the mandatory checkbox below |
| Terms + Privacy acceptance | Yes | unticked checkbox | Label in §4 (a) |
| Marketing consent | No | unticked checkbox | Label in §4 (b). Submit must succeed without this. |

If the user signs up via **Google OAuth**, the checkboxes still apply: render them on a single follow-up step *before* the account is created. Do not auto-accept.

---

## 4. Exact UI copy — checkboxes

Use the copy below **verbatim**. Do not paraphrase.

### (a) Mandatory checkbox — Terms & Privacy

> ☐ I am 18 years or older. I have read and agree to the [Terms & Conditions](https://www.foundinglegals.com/terms), [Privacy Policy](https://www.foundinglegals.com/privacy-policy), [Cookie Policy](https://www.foundinglegals.com/cookie-policy) and [Refund & Cancellation Policy](https://www.foundinglegals.com/refund-policy) of Arvya Tech Pvt. Ltd. (CIN: U62011AP2025PTC121416). I consent to the processing of my personal data as described in the Privacy Policy.

- The links **must open in a new tab** (`target="_blank" rel="noopener noreferrer"`).
- The whole sentence is clickable to focus the checkbox; the links remain individually clickable.
- Error state if unticked on submit: *"Please confirm you have read and agree to the Terms & Privacy Policy to continue."*

### (b) Optional checkbox — Marketing consent

> ☐ I would like to receive product updates, offers and educational content about startup compliance from Founding Legals by email. I can withdraw this consent at any time from my account settings or via the unsubscribe link in any email.

- Must default to **unticked**.
- Submitting without this ticked must complete signup normally.

### (c) Optional checkbox — WhatsApp / SMS (only if such messaging is actually used)

> ☐ I agree to receive transactional service messages (deadline alerts, OTPs and incorporation/filing status updates) from Founding Legals on the mobile number above via SMS and WhatsApp.

- Skip this checkbox entirely if WhatsApp/SMS marketing is not in use. Currently the marketing site states SMS marketing is not used; transactional OTPs do not require this checkbox.

---

## 5. Just-in-time DPDP notice — KYC steps

Display this notice **inline, just above** the first input on any screen that collects KYC/SPDI (PAN, passport, Aadhaar, bank account, director details). Do not hide it inside a tooltip.

> **Why we need this information.** We are collecting this information solely for [purpose — e.g. "your private limited company incorporation under SPICe+"]. It will be processed by Arvya Tech Pvt. Ltd. as Data Fiduciary, shared only with the relevant government authority and the certifying professional acting on your filing, retained for the period required by law (typically 8 years), and protected with reasonable security safeguards. You may withdraw consent or request correction/erasure (subject to legal retention obligations) by writing to **info@foundinglegals.com** or via your account settings. For details, read our [Privacy Policy](https://www.foundinglegals.com/privacy-policy).

Render this as a dismissible info panel with an "I understand" acknowledgement that is recorded against the user's session for that specific KYC step.

### Aadhaar-specific notice (when Aadhaar is collected)

Show this in **addition** to the above, immediately above the Aadhaar input:

> **Aadhaar.** Provide your Aadhaar number only if you wish to use it for this statutory filing. We will use your Aadhaar **solely** for the incorporation filing you have requested, will not use it for authentication or any other purpose, and will not share it except with the relevant government authority and the certifying professional. We are migrating to DigiLocker / offline e-KYC for Aadhaar handling.

If/when DigiLocker integration is built, replace the manual Aadhaar input with a "Share via DigiLocker" button and remove the manual-entry option.

---

## 6. Layout reference (text-only mockup)

```
┌────────────────────────────────────────────────────────────┐
│   Create your Founding Legals account                      │
│   ──────────────────────────────────────                   │
│                                                            │
│   Full name           [______________________________]     │
│   Work email          [______________________________]     │
│   Mobile (+91)        [______________________________]     │
│   Password            [______________________________]     │
│   Country             [ India ▾ ]                          │
│                                                            │
│   ☐  I am 18 years or older. I have read and agree to      │
│      the Terms & Conditions, Privacy Policy, Cookie        │
│      Policy and Refund & Cancellation Policy of Arvya      │
│      Tech Pvt. Ltd. (CIN: U62011AP2025PTC121416). I        │
│      consent to the processing of my personal data as      │
│      described in the Privacy Policy.                      │
│                                                            │
│   ☐  I would like to receive product updates and           │
│      educational content about startup compliance from     │
│      Founding Legals by email. (Optional)                  │
│                                                            │
│   [        Create account        ]                         │
│                                                            │
│   Already have an account? Sign in                         │
└────────────────────────────────────────────────────────────┘
```

The "Create account" button must be **disabled** until the mandatory checkbox is ticked (not just rejected on submit — disable it visually).

---

## 7. Consent audit log — schema & rules

Every signup acceptance and every subsequent consent change must be persisted as an **append-only** record. Do **not** mutate existing rows.

**Table:** `consent_events`

| Column | Type | Notes |
|---|---|---|
| `id` | uuid (PK) | — |
| `user_id` | uuid (FK → users) | — |
| `event_type` | enum | `signup_accept`, `marketing_optin`, `marketing_optout`, `kyc_jit_ack`, `tos_reaccept`, `withdraw_all` |
| `consent_scope` | text[] | e.g. `['terms', 'privacy', 'cookies', 'refund']` for signup; `['marketing_email']` etc. |
| `granted` | boolean | `true` for opt-in, `false` for withdrawal |
| `document_versions` | jsonb | `{ "terms": "2026-05-29", "privacy": "2026-05-29", "cookies": "2026-05-29", "refund": "2026-05-29" }` |
| `ui_locale` | text | e.g. `en-IN` |
| `ip_address` | inet | Source IP at the time of action |
| `user_agent` | text | Full UA string |
| `request_id` | uuid | Same value sent to client + logged for correlation |
| `created_at` | timestamptz | Server time, UTC |
| `hash` | text | SHA-256 of the canonical JSON of the above fields. For tamper-evidence. |

**Rules:**

- The `document_versions` field must reference the **effective date** shown on each legal page at the moment of acceptance. Capture this from a server-side constant — do not trust the client.
- When any legal document changes effective date, prompt the user to re-accept on next login; record as `tos_reaccept`.
- Records must be retained for the life of the account **plus 3 years** after closure (matches the Privacy Policy retention schedule).
- Withdrawal events must be honoured immediately — propagate to downstream systems (e.g. marketing list) within 24 hours.

---

## 8. Backend & API requirements

1. **Server-side validation must re-check** that the mandatory checkbox was actually submitted as `true`. Do not trust the client; if absent, return `422` with code `consent_required`.
2. The signup endpoint must accept and return a `request_id` (UUID v4) that is logged on the client and persisted in the consent event.
3. **OTP / email verification gates** — until both email + mobile are verified, the account is in `pending_verification`. KYC screens must not be accessible from this state.
4. **Rate limiting** on signup and OTP endpoints to avoid abuse (e.g. 5 requests / IP / hour).
5. **No KYC field may be transmitted in URL params or stored in client-side state longer than needed.** PAN / Aadhaar input components must clear their value from memory after submission.
6. **TLS only** — block any plaintext HTTP for these endpoints.

---

## 9. In-app "Privacy & Consents" settings screen

Required so users can exercise DPDP rights without emailing support. Build a `/settings/privacy` route that lets the signed-in user:

- View when they accepted each policy and which version.
- Toggle the marketing consent off (and on again).
- Request a **data export** ("Download my data") — generates a ZIP of their personal data + uploaded documents.
- Request **account deletion / erasure** — triggers a confirm step and creates a `withdraw_all` event; actual deletion processed within 30 days, subject to statutory retention.
- See a link to the Grievance Officer: **Mr. Manoj Kumar Thota**, email **info@foundinglegals.com**, registered office address as on the marketing site.

Each action must write a `consent_events` row.

---

## 10. Things the developer must **not** do

- **Do not** auto-tick any checkbox.
- **Do not** make marketing consent a precondition of signup.
- **Do not** bundle Terms + Marketing into one checkbox.
- **Do not** show only a footer "by signing up you agree" line in place of the checkbox.
- **Do not** collect Aadhaar at signup.
- **Do not** silently re-use an old consent if the legal document version has changed — re-prompt.
- **Do not** store the consent record only in client-side `localStorage` — it must be in the server database.
- **Do not** log passwords, OTPs, full PAN / Aadhaar or bank account numbers in application logs. If present, redact (`XXXX-XXXX-1234`).

---

## 11. QA / acceptance checklist (give this to QA)

- [ ] All four legal links open the correct page in a new tab.
- [ ] Mandatory checkbox starts unticked; Create-account button is disabled until it is ticked.
- [ ] Submitting with only the optional marketing checkbox ticked is rejected with a clear error.
- [ ] Submitting with only the mandatory checkbox ticked succeeds (marketing consent not required).
- [ ] OAuth (Google) path still surfaces the same checkboxes before account creation.
- [ ] Country other than India returns a graceful "India only" message.
- [ ] A `consent_events` row is created on signup with correct `document_versions`, `ip_address`, `user_agent`, `request_id`, and a non-empty `hash`.
- [ ] Marketing toggle in `/settings/privacy` writes `marketing_optout` event and removes user from the next outbound email batch.
- [ ] On a forced bump of the Privacy Policy effective date, logging in re-prompts the user and records `tos_reaccept`.
- [ ] JIT notice is shown above the first input on each KYC screen.
- [ ] Aadhaar input shows the Aadhaar-specific notice and is **absent** from the signup page.
- [ ] No PAN / Aadhaar / password / OTP values appear in server or browser logs.
- [ ] Account deletion request creates a `withdraw_all` event and triggers the 30-day deletion workflow.

---

## 12. Rollout sequence

1. Implement backend `consent_events` table + endpoints first.
2. Implement signup UI changes behind a feature flag.
3. QA against the checklist above.
4. Legal sign-off (send screenshots + a sample `consent_events` row to Legal).
5. Migrate existing users: on their next login, prompt them to re-accept (one-time) and log `tos_reaccept`.
6. Production deploy.

---

## 13. Contacts for the developer

- **Legal / Grievance Officer:** Mr. Manoj Kumar Thota — `info@foundinglegals.com`
- **Document source of truth:** marketing-site repo — `/src/app/terms`, `/src/app/privacy-policy`, `/src/app/cookie-policy`, `/src/app/refund-policy`
- **Open clarification questions:** must be raised in writing to Legal before code is merged.

---

*End of brief. Sections §2, §4, §5, §7 and §10 are non-negotiable. Sections §3, §6, §8 and §9 may be adapted to your stack, provided the intent and the QA checklist in §11 are preserved.*
