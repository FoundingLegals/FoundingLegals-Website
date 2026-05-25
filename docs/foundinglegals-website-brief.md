# FoundingLegals    Website Restructure Brief

**Version:** 1.0
**Prepared for:** Web Development Team
**Strategic direction:** SaaS-led positioning for already-incorporated Indian founders
**Live site:** www.foundinglegals.com

---

## 1. Executive Summary

### Current state
The website currently leads with services we don't yet offer at scale (incorporation, GST filings, ROC, fundraising). The actual product    a SaaS platform for managing agreements, team, documents, policies, and compliance reminders    is buried. This creates positioning confusion and lowers conversion.

### What we're changing
We are repositioning the website as a **SaaS platform for already-incorporated Indian founders**. Services (incorporation, CA filings, fundraising paperwork) will be presented as a "coming soon" partnership offering, not the headline. The SaaS product becomes the hero.

### Strategic outcome
- A founder visiting the site understands within 10 seconds what we do and who we serve.
- Pricing is visible without contacting sales.
- Trust signals (lawyer-reviewed templates, named legal advisors) appear above the fold.
- The site converts to free trial signups, not "Schedule Demo" calls.

### Success metrics for this redesign
- Free trial signup conversion rate: target 3–5% of unique visitors.
- Pricing page bounce rate: under 60%.
- Average time-on-site: 90+ seconds.
- Mobile conversion parity with desktop (currently likely broken).

---

## 2. Brand & Voice Guidelines

### Tone
**Founder-to-founder.** We are not a corporate legal services firm. We are operators who built tools we wished we had.

### Voice rules

| Do | Don't |
|---|---|
| Use specific numbers (₹40,000, 7 days, 25 templates) | Use vague claims ("complete," "seamless," "world-class") |
| Write in active voice | Use passive corporate constructions |
| Address the founder directly ("you") | Address "enterprises" or "stakeholders" |
| Use plain English at 9th-grade reading level | Use legalese or consultant jargon |
| Name the lawyer/CA/founder behind every claim | Make anonymous claims of expertise |
| Acknowledge what we don't do yet | Overpromise on services we haven't shipped |

### Words to ban from the site
- "Architect" (as a verb)
- "Engineered for"
- "Precision," "excellence," "robust"
- "Empower," "enable," "unlock"
- "Sophisticated," "strategic," "comprehensive"
- "Cutting-edge," "next-generation," "best-in-class"
- "IPO Ready" (we are not. Remove this.)

### Voice example    before and after

**Before (current):** *"Execute your Private Limited registration with absolute accuracy, from name reservation to final certification."*

**After:** *"We'll register your Pvt Ltd in 7 days. You'll know exactly what's happening at every step."*

### Critical: language quality
Every word on the site must be proofread by a professional copywriter before launch. This is a legal product. Typos and grammar errors immediately destroy trust. Budget ₹15,000–25,000 for a copywriter to review every page, every email, every template description, and every microcopy element (button labels, error messages, form placeholders). **This is non-negotiable.**

---

## 3. Header / Navigation Structure

### Desktop header (left to right)

**Left:**
- FoundingLegals logo (links to homepage)

**Center    main navigation:**

| Menu Item | Type | Behavior |
|---|---|---|
| Product | Dropdown | Reveals 5 feature pages on hover/click |
| Pricing | Direct link | Scrolls to pricing section on homepage OR dedicated /pricing page |
| For Founders | Dropdown | Reveals Blog, Templates Library (free preview), Founder Resources |
| Services | Direct link with "Coming Soon" badge | Routes to /services teaser page |
| Company | Dropdown | Reveals About, Partner CAs, Contact, Careers |

**Right:**
- `Login`    text link, secondary styling
- `Start Free Trial`    solid button, primary CTA, brand color

### Product dropdown contents

When user hovers/clicks "Product":

1. **Agreements**    25+ lawyer-reviewed templates with e-sign
2. **Team Management**    Headcount, compensation, ESOP tracking
3. **Documents**    Centralized vault with e-sign
4. **Policies**    Employee handbook, privacy policies, IT policy
5. **Compliance Calendar**    Due-date reminders for founders

Each item should have a one-line description and link to that feature page.

### Mobile header

- Logo (left)
- Hamburger menu (right)
- When opened: full-screen overlay with the same navigation structure stacked vertically
- `Start Free Trial` button pinned to bottom of mobile menu for visibility

### Sticky behavior
Header should stick to the top of the viewport on scroll, but reduce in height by 30% after the user scrolls past 100px (compact sticky header). Logo and CTA remain visible at all times.

### Top banner (optional, removable)
Above the header, a thin banner strip for time-sensitive announcements:

> 🎉 Free for 14 days. No credit card needed. [Start now →]

This banner should be dismissible (small × on the right), and the user's dismissal stored in a cookie for 30 days.

---

## 4. Page Inventory

The website should have the following pages. Each is detailed in the following sections.

| Page | URL | Priority | Status |
|---|---|---|---|
| Homepage | / | P0 | Rebuild |
| Pricing | /pricing | P0 | Build |
| Product    Agreements | /product/agreements | P1 | Build |
| Product    Team | /product/team | P1 | Build |
| Product    Documents | /product/documents | P1 | Build |
| Product    Policies | /product/policies | P1 | Build |
| Product    Compliance | /product/compliance | P1 | Build |
| Services (Coming Soon) | /services | P1 | Rebuild |
| About | /company/about | P1 | Edit |
| Partner CAs | /company/partner-cas | P2 | Build |
| Contact | /contact | P1 | Edit |
| Blog | /blog | P1 | Build (CMS) |
| Templates Library | /templates | P2 | Build |
| Login / Signup | (app subdomain) |    | Existing |
| FAQ | /faq | P2 | Build |
| Privacy Policy | /privacy | P0 | Build |
| Terms of Service | /terms | P0 | Build |
| Refund Policy | /refunds | P0 | Build |

---

## 5. Homepage    Section-by-Section Specification

### Section 1: Hero

**Layout:** Two-column on desktop (text left, product image/video right). Stacked on mobile (text first, visual below).

**Headline (H1):**
> Run your startup's legal, team, and paperwork in one place.

**Subhead:**
> FoundingLegals replaces the ₹40,000+ you spend on lawyers, templates, and scattered tools every year. Lawyer-reviewed agreements, team & compensation tracking, e-sign, and compliance reminders    built for Indian founders.

**Primary CTA button:**
> Start Free Trial

(Below the button, small grey text: *No credit card needed · 14-day free trial*)

**Secondary CTA:**
> See Pricing →

(Text link, scrolls to pricing section)

**Trust microcopy (below CTAs):**
> Trusted by [N] Indian founders · Templates reviewed by Adv. [Name]

(Update [N] dynamically from your database, or display a static number like "500+" once you have that traction. Update lawyer name once retainer is signed.)

**Visual:**
- Product screenshot or video of the **Agreements tab** or **Team tab** in action. Do NOT show incorporation flow.
- Recommended: a 15–20 second silent loop showing template selection → customization → e-sign flow.
- Add a subtle border and shadow to the product visual. Avoid floating screenshots in space.

### Section 2: The Problem

**Heading (H2):**
> Indian founders are paying too much for paperwork.

**Subhead:**
> Every offer letter, NDA, IP assignment, and vendor contract costs ₹3,000–₹10,000 from a lawyer. Templates from Google aren't reviewed for Indian law. And your team data lives across five different tools that don't talk to each other.

**Three-column problem grid:**

**Column 1:**
- Icon: 💸 (or styled icon)
- Headline: **Lawyer bills add up.**
- Body: ₹40,000+ a year on agreements that should take 10 minutes to generate.

**Column 2:**
- Icon: ⚠️
- Headline: **Free templates are risky.**
- Body: Most aren't valid under Indian law. One missing clause and your IP isn't yours.

**Column 3:**
- Icon: 🔀
- Headline: **Founder ops is fragmented.**
- Body: Google Drive, DocuSign, Zoho, spreadsheets, WhatsApp. Five tools for what should be one.

### Section 3: What FoundingLegals Does

**Heading (H2):**
> One platform for everything between hiring and Series A.

**Subhead:**
> Built for Indian founders running companies with 5–50 people. Replace your legal stack, organize your team, and never miss a compliance deadline.

**Four feature cards (2x2 grid on desktop, stacked on mobile):**

#### Card 1: Lawyer-Reviewed Agreement Templates
- **Icon/visual:** Document with checkmark
- **Headline:** Agreement templates that hold up.
- **Body:** 25+ ready-to-use templates    offer letters, NDAs, IP assignment, founders agreements, vendor contracts. Customize in minutes, send for e-sign, store securely. Every template reviewed by senior Indian lawyers.
- **CTA:** Explore templates →

#### Card 2: Team & Compensation Tracking
- **Icon/visual:** People icon
- **Headline:** Your team, your numbers, in one place.
- **Body:** Add team members, track salaries and ESOPs, organize by sub-team, and see your monthly and annual burn at a glance. Goodbye spreadsheets.
- **CTA:** See team management →

#### Card 3: Document Vault & E-Sign
- **Icon/visual:** Vault/lock icon
- **Headline:** Send, sign, and store    without leaving the platform.
- **Body:** Aadhaar-based e-sign that's legally valid in India. Track who's signed, who's pending. Every document encrypted and version-controlled.
- **CTA:** Learn about e-sign →

#### Card 4: Company Policies, Ready to Go
- **Icon/visual:** Shield/policy icon
- **Headline:** The policies every Indian startup needs, pre-drafted.
- **Body:** Employee handbook, privacy policies, IT policy, website terms. Customize for your company in one sitting and share with your team in one click.
- **CTA:** See policies →

### Section 4: Lawyer Trust Block

**Heading (H2):**
> Templates you can actually trust.

**Subhead:**
> Every template is drafted and reviewed by practising Indian advocates with startup experience. When the law changes, we update them    so you don't have to.

**Trust card layout:**

A horizontal card with:
- **Left:** Photograph of lawyer (high-quality, professional)
- **Right:**
  - Name: Adv. [Full Name]
  - Qualification: LL.B., LL.M. (or as applicable)
  - Bar Council Registration: [Number]
  - One-line bio: *"15+ years advising Indian startups on employment, IP, and corporate law."*
  - Footer line: *"Templates last reviewed: [Month, Year]"*

If multiple lawyers/advisors are on retainer, show 2–3 in a row. This section is your highest-trust asset    invest in good photography.

### Section 5: Pricing

**Heading (H2):**
> Simple pricing. No "contact sales."

**Subhead:**
> All plans include lawyer-reviewed templates, e-sign, team management, and a 14-day free trial. No credit card required.

**Billing toggle (above the cards):**
- Two buttons: `Monthly` and `Annual (Save 17%)`
- Annual is selected by default
- Switching toggles all three tier prices in real time

**Three pricing cards (side-by-side on desktop, stacked on mobile):**

> **Full tier specifications are in Section 7 below.**

The middle tier (Growth) should be visually highlighted with a "Most Popular" badge at the top and a subtle brand-color border.

Each card includes:
- Tier name
- Price (large, prominent)
- Annual savings note (if annual selected)
- One-line tagline
- 6–8 feature bullets
- Single CTA button: `Start Free Trial`

**Below the cards:**
- Small text link: *Compare all features →* (expands a full comparison table)
- FAQ-style accordion: 3 common pricing questions (see below)

**Pricing FAQ accordion (closed by default):**
1. *What happens after the 14-day trial?*    You're moved to your selected plan. We'll email you 3 days before so you can choose to upgrade, downgrade, or cancel.
2. *Can I change plans later?*    Yes, anytime. Upgrades are immediate. Downgrades take effect at the end of your billing cycle.
3. *What if I exceed my plan's included usage?*    Overages are billed at the end of each month at clear per-unit rates (see "Pricing Details" page).

### Section 6: Social Proof

**Heading (H2):**
> Founders are switching to FoundingLegals.

**Layout:** Three testimonial cards in a row on desktop, swipeable carousel on mobile.

**Each testimonial card:**
- Profile photo (real, never stock)
- Quote (specific, with numbers)
- Founder name
- Role + Company name
- Company stage (e.g., "Seed-funded, 12 people")

**Example structure:**

> "Cut our legal spend by 70% in the first month. The offer letter template alone saved us a CA call every time we hired someone new."
>
>    **Priya Sharma**, Co-founder, ShopEasy
> *Seed-funded, 14 people*

**If you don't have testimonials yet:**

Replace this section temporarily with a **"Built for the Indian founder ecosystem"** block showing:
- Logos of accelerators/programs you're part of (TiE, Headstart, NSRCEL, etc.)
- Logos of news outlets that have covered you
- Or: a "Founders we've worked with" company logo wall (with permission)

Never use stock photos or fabricated quotes. Better to leave the section empty than to fake it.

### Section 7: Services Teaser

**Heading (H2):**
> When you need more, we've got you covered.

**Subhead:**
> Beyond the platform, FoundingLegals is building a network of vetted CAs and lawyers across India    for the moments you need expert hands. Incorporation, GST filings, ROC compliance, fundraising paperwork, and share allocations. Coming soon as add-ons to every plan.

**Three-icon row:**
- 🏢 **Incorporation**    Pvt Ltd, LLP, OPC registrations
- 📊 **CA & Compliance**    Monthly GST, ROC filings, audit support
- 💼 **Fundraising**    Term sheet review, share allotment, due diligence

**CTA:**
> Join the waitlist → (collects email for launch notification)

**Note to dev team:** This section is intentionally small and supporting. Do not let it dominate the page. It exists to signal long-term value, not to lead the pitch.

### Section 8: FAQ

**Heading (H2):**
> Questions founders ask before signing up.

**Layout:** Accordion-style, all closed by default. User clicks to expand.

**Questions to include (in this order):**

1. **Are these templates valid under Indian law?**
   Yes. Every template is drafted and reviewed by practising Indian advocates and updated when relevant laws or judgments change. We work primarily with employment, IP, contract, and corporate law specialists.

2. **Who reviews and updates the templates?**
   Our panel of advocates, led by Adv. [Name]. Each template carries the name and Bar Council registration of the reviewing lawyer. Updates are pushed to all users automatically.

3. **Does e-sign hold up in court in India?**
   Yes. We use Aadhaar-based eSign and digital signature certificates, both of which are legally recognized under the Information Technology Act, 2000 and admissible as evidence in Indian courts.

4. **Can I customize a template before sending?**
   Yes. Every template is fully editable. You can change company-specific details, add custom clauses, and apply your company branding before sending.

5. **Does FoundingLegals replace my CA?**
   No. Your CA handles statutory filings, audits, and tax matters that legally require a chartered accountant. FoundingLegals replaces the *paperwork and management* layer    agreements, policies, team records, compliance tracking    so your CA's time is spent on real work, not chasing documents.

6. **How is this different from Razorpay Rize or Vakilsearch?**
   Razorpay Rize focuses on incorporation. Vakilsearch is primarily a services marketplace. FoundingLegals is a SaaS platform for the day-to-day operations of an already-running startup    agreements, team management, policies, and compliance. Think of us as the operating layer that comes *after* incorporation.

7. **Can I export my data if I cancel?**
   Yes. At any time, you can export all your documents, team data, and agreements in standard formats (PDF, CSV, ZIP). Your data is yours.

8. **Is my data secure?**
   All documents are encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC 2 Type II compliant and follow Indian DPDP Act 2023 guidelines for data protection.

9. **Do you offer a free trial?**
   Yes. 14 days, full access to all features. No credit card required to start.

10. **What happens if I have a problem?**
    Starter plan users get email support (24-hour response). Growth and Scale plans get WhatsApp support with same-day response during business hours.

### Section 9: Final CTA

**Heading (H2):**
> Stop paying ₹40,000 a year to draft an offer letter.

**Subhead:**
> Start your free 14-day trial. No credit card. Cancel anytime.

**Primary CTA:**
> Get Started Free

**Below CTA (small text):**
> Join [N] Indian founders running their startup on FoundingLegals.

### Section 10: Footer

**Layout:** Four-column on desktop, stacked on mobile.

**Column 1    Brand:**
- Logo
- 1-line tagline: *"Built by founders, for Indian founders."*
- Social icons: LinkedIn, Twitter/X, Instagram

**Column 2    Product:**
- Agreements
- Team Management
- Documents & E-Sign
- Policies
- Compliance Calendar
- Pricing

**Column 3    Company:**
- About Us
- Partner CAs
- Blog
- Contact
- Careers

**Column 4    Resources:**
- Templates Library (free preview)
- Founder Resources
- Help Center
- API Documentation (when ready)

**Bottom strip:**
- © 2026 FoundingLegals (Arvya Tech Pvt Ltd). All rights reserved.
- Links: Privacy Policy · Terms of Service · Refund Policy · Sitemap
- "Made in India 🇮🇳" badge (small, right-aligned)

---

## 6. Other Page Specifications

### 6.1 Pricing Page (/pricing)

This page provides the deep version of the homepage pricing section.

**Sections:**
1. Hero: "Simple pricing. Built for Indian founders."
2. Billing toggle (Monthly / Annual)
3. Three pricing cards (same as homepage but with full feature lists)
4. Full feature comparison table (every feature, with checkmarks across tiers)
5. Add-on credits & overages table
6. Enterprise / Custom tier inquiry section
7. FAQ (8–10 pricing-specific questions)
8. Final CTA

### 6.2 Product feature pages

Each product feature page (/product/agreements, /product/team, etc.) follows the same template:

**Sections:**
1. Hero with feature-specific headline and product screenshot
2. "The problem we solve"    2-3 paragraphs
3. Key capabilities    4-6 specific features with screenshots
4. How it works    3-step visual walkthrough
5. Social proof    1-2 testimonials specifically about this feature
6. Pricing reminder    "Available on all plans" or "Included from Growth tier"
7. Final CTA

### 6.3 Services page (/services)

**Headline:** "Services coming soon    built around our platform."

**Subhead:** "We're partnering with vetted CAs and lawyers across India to deliver incorporation, compliance, and fundraising services as integrated add-ons to every FoundingLegals plan."

**Sections:**
1. What's coming (4 service areas with brief descriptions)
2. Who we're partnering with (placeholder until partnerships are signed)
3. Waitlist signup form
4. "Why we're doing this"    short founder note explaining the approach

**Important:** This page must clearly state that services are not yet live. Do not collect payment or take orders. Only collect waitlist emails.

### 6.4 About page (/company/about)

**Sections:**
1. Hero: "We built FoundingLegals because we needed it."
2. The story (3-4 paragraphs in founder's voice)
3. Founder bio with photo
4. Team section (with photos)
5. Our values / how we work
6. Our advisors (legal panel)
7. Press / mentions (if applicable)
8. Contact CTA

---

## 7. Pricing Tier Details    Full Specification

### 7.1 The three-tier structure

The pricing is built on **flat-rate subscriptions with generous included usage**, plus **credits for premium actions and overages**.

**Monthly billing is the default display.** Annual billing offers a 17% discount.

### 7.2 Tier Details

#### Starter    ₹799/month (or ₹7,990/year)

**Tagline:** Everything a small founding team needs to get the paperwork right.

**Best for:** 1–5 person teams, pre-seed founders, solo founders.

**Included:**
- Up to 5 team members
- All 25+ lawyer-reviewed agreement templates
- 15 e-signatures per month
- 50 outbound emails per month (for sending documents)
- 5 WhatsApp document deliveries per month
- 2 GB document storage
- All company policy templates
- Compliance calendar with reminders
- Custom company branding on documents (logo + colors)
- Email support (24-hour response)

**Not included:**
- Lawyer review credits
- API access
- Custom theme designer
- Priority support
- Multiple sub-team organization

**CTA:** Start Free Trial

---

#### Growth    ₹1,999/month (or ₹19,990/year) ⭐ Most Popular

**Tagline:** For startups that have found product-market fit and are scaling the team.

**Best for:** 6–25 person teams, seed-funded startups.

**Included:**
- Up to 25 team members
- All Starter features
- 75 e-signatures per month
- 200 outbound emails per month
- 25 WhatsApp document deliveries per month
- 25 GB document storage
- **1 lawyer review credit per month** (customize a template, get it reviewed by a lawyer before sending)
- Multi-team / sub-team organization
- Custom document themes
- Investor data room
- ESOP tracking and management
- WhatsApp support (same-day response, business hours)

**Not included:**
- API access
- Dedicated success contact
- Custom contract drafting

**CTA:** Start Free Trial

---

#### Scale    ₹4,999/month (or ₹49,990/year)

**Tagline:** For growing startups preparing for Series A and beyond.

**Best for:** 25–50 person teams, Series A-ready companies.

**Included:**
- Unlimited team members
- All Growth features
- 250 e-signatures per month
- 500 outbound emails per month
- 100 WhatsApp document deliveries per month
- 100 GB document storage
- **3 lawyer review credits per month**
- API access
- Custom contract drafting (1 per quarter)
- Dedicated customer success contact
- Priority WhatsApp support (response within 2 hours, business hours)
- Compliance audit reports (quarterly)
- White-glove onboarding session

**CTA:** Start Free Trial

---

### 7.3 Credit & Overage Pricing

Display this as a clean table on the pricing page below the three tiers.

| Action | Starter | Growth | Scale | Overage Price |
|---|---|---|---|---|
| E-signature | 15/mo | 75/mo | 250/mo | ₹15 per extra (or ₹300 for pack of 25) |
| Document email | 50/mo | 200/mo | 500/mo | ₹0.50 per extra |
| WhatsApp delivery | 5/mo | 25/mo | 100/mo | ₹1 per extra |
| Lawyer review |    | 1/mo | 3/mo | ₹999 per extra credit |
| Document storage | 2 GB | 25 GB | 100 GB | ₹99 per 10 GB/month |
| Custom contract drafting |    |    | 1/quarter | ₹4,999 per contract |

**Credit rollover policy:**
- E-sign, email, and WhatsApp credits **do not roll over** month-to-month.
- Lawyer review credits **roll over up to 3 months** (so a Growth user can save 3 unused credits and use them in one month).
- Overage purchases are billed at the end of each month with the subscription.

**Credit packs (purchasable add-ons):**
- E-sign pack: 25 signatures for ₹300 (₹12 each)
- E-sign pack: 100 signatures for ₹1,000 (₹10 each)
- Lawyer review pack: 5 credits for ₹3,999 (₹800 each    save ₹1,000 vs. one-off)

### 7.4 Annual billing presentation

When the user toggles to "Annual" on the pricing page:
- Show the annual price (monthly equivalent in smaller text below)
- Show savings amount in green: "Save ₹X compared to monthly"

Example display for Growth tier:

> **₹1,665/month**
> *Billed annually at ₹19,990    Save ₹3,998*

---

## 8. Trust & Credibility Elements

### 8.1 Lawyer/Advisor display rules

Every page that mentions templates, agreements, or legal content must surface the reviewing lawyer. Use one of three treatments depending on context:

**Treatment A    Full trust card (homepage, about page, services page):**
- Photo, name, qualification, Bar Council registration, bio, last review date.

**Treatment B    Compact badge (template pages, agreement pages):**
- "Reviewed by Adv. [Name] · Bar Council Reg. [#]"    appears as a small footer line on each template.

**Treatment C    Inline mention (blog posts, FAQ answers):**
- Mention the lawyer's name when discussing legal interpretation.

### 8.2 Security & compliance badges

Display the following badges in the footer (and on the security page when built):

- 🔒 AES-256 Encryption
- 🛡️ SOC 2 Type II (if applicable; remove if not yet certified)
- 🇮🇳 DPDP Act 2023 Compliant
- ✅ Aadhaar eSign Approved
- 🏛️ MCA Authorized (only where accurate)

**Do not display badges for certifications you don't hold.** This is a legal product    false trust claims are catastrophic.

### 8.3 Testimonial collection guidelines

For the dev/marketing team    once the first 10 design partners are onboarded, structure testimonial collection as follows:

**Required fields:**
- Founder name and role
- Company name and stage
- Photo (professional headshot)
- Quote (75–125 words, including a specific number or outcome)
- Written permission to use likeness and quote

**Quote prompts (to send to design partners):**
1. What specific problem did FoundingLegals solve for you?
2. How much money or time did it save you? Be specific.
3. What's one feature you couldn't live without now?
4. Would you recommend it to another founder? Why?

---

## 9. Items to Remove or Demote from Current Site

The following content should be **removed from the homepage and primary navigation** but kept on dedicated pages for SEO and future use:

### Remove from homepage:
- "Precision Incorporation" / "Operational Excellence" sections (move to /services as "coming soon")
- "Investor Intelligence" / "Structured Round Execution" / "Expert Legal Advisory" (move to /product/fundraising    a P2 page for later)
- "Complete Startup Life-Cycle: From Incorporation to Global Scale" (delete entirely)
- "IPO Ready" stage tag (delete    not credible for current product)
- All corporate-consultant voice copy (rewrite in founder voice)

### Reword:
- "We architect the complete legal backbone of your startup" → cut entirely or rewrite.
- "Engineered for the Indian startup ecosystem" → "Built for Indian founders."
- "Strategic ROC Oversight," "Automated Audit Readiness" → rewrite with plain language and accurate scope.

### Pages to delete:
- Any page promising services you don't currently deliver. Replace with the /services "coming soon" page.

---

## 10. Technical & Operational Requirements

### 10.1 Analytics
- Implement **PostHog** or **Mixpanel** for product analytics.
- Implement **Google Analytics 4** for marketing analytics.
- Configure events for: signup start, signup complete, pricing page view, plan selection, trial start, trial-to-paid conversion.

### 10.2 A/B testing
- Use **PostHog feature flags** or **Google Optimize alternative** (e.g., GrowthBook).
- First tests to run:
  - Hero headline variant A vs B (functional vs cost-focused)
  - Pricing display: monthly default vs annual default
  - CTA button color/text variants

### 10.3 Forms & data
- All signup forms should pass UTM parameters to the backend for source attribution.
- Waitlist signups should sync to your email tool (Mailchimp, ConvertKit, or Brevo).
- Contact form submissions should route to a dedicated team inbox with auto-reply.

### 10.4 Performance
- Lighthouse score: 90+ for Performance, Accessibility, Best Practices, SEO.
- Page load time: under 2 seconds on 4G mobile.
- All images served as WebP with lazy loading.
- Product video on hero compressed to under 1 MB or hosted via Mux/Cloudinary.

### 10.5 SEO
- Every page needs unique title, meta description, and OG image.
- Schema.org markup for: Organization, SoftwareApplication, FAQPage, Product (pricing).
- Set up canonical URLs to prevent duplicate content.
- Submit sitemap to Google Search Console and Bing Webmaster Tools.

### 10.6 Accessibility
- WCAG 2.1 AA compliance minimum.
- All images have alt text.
- All forms have proper labels.
- Keyboard navigation works throughout.
- Color contrast ratio of 4.5:1 minimum for text.

### 10.7 Mobile responsiveness
- All pages must work on screens from 360px wide upwards.
- Test specifically on: iPhone SE, iPhone 14, Samsung Galaxy A-series (common in India), iPad.
- CTAs must be thumb-reachable on mobile (lower half of screen).

---

## 11. Implementation Action Plan

### Week 1    Foundation
- **Day 1–2:** Engage copywriter for full site copy revision. Brief them with this document.
- **Day 1–2:** Outreach to 15 lawyers on LinkedIn for retainer/review role.
- **Day 3–5:** Finalize pricing tier structure and credit allocations (this document is a starting point    pressure-test against your actual COGS).
- **Day 3–5:** Dev team begins homepage hero and problem section rebuild.

### Week 2    Core Rebuild
- **Day 6–7:** Sign at least one lawyer to retainer. Schedule professional photoshoot.
- **Day 8–10:** Build homepage sections 3–6 (features, lawyer trust, pricing, social proof).
- **Day 10:** Identify and reach out to 10 founders for design partner program (free 6 months for testimonial + weekly feedback).

### Week 3    Extended Build
- **Day 11–14:** Build /pricing, /services, and /faq pages.
- **Day 13–15:** Set up analytics, A/B testing infrastructure, and email integration.
- **Day 14:** Submit photos and bios for lawyer trust block.

### Week 4    Polish & Launch Prep
- **Day 16–18:** Full copywriter review and corrections across all pages.
- **Day 18–20:** QA across desktop, tablet, mobile, and major browsers.
- **Day 20:** Soft launch    share with 10 design partners and 20 trusted founders for feedback.
- **Day 21:** Apply final fixes from feedback.

### Week 5    Public Launch
- **Day 22:** Public relaunch announcement on LinkedIn, Twitter/X, founder communities.
- **Day 22–28:** Monitor analytics, fix bugs, respond to feedback.

---

## 12. Acceptance Criteria

The redesign is considered complete when:

- [ ] Homepage loads in under 2 seconds on 4G mobile.
- [ ] All copy has been reviewed and approved by a professional copywriter    zero typos, zero grammar errors.
- [ ] At least one named lawyer with photo, qualifications, and Bar Council number appears on the homepage and is referenced on every template.
- [ ] Pricing is visible on the homepage and on /pricing    no "contact sales" required for any tier.
- [ ] All three pricing tiers are functional in the app, with credit allocations enforced.
- [ ] Free trial signup flow works end-to-end without requiring a credit card.
- [ ] Mobile experience is equal to or better than desktop.
- [ ] Analytics events fire correctly for the key funnel: visit → pricing view → signup → trial start.
- [ ] All pages pass Lighthouse audit at 90+.
- [ ] The /services page clearly states "coming soon" and only collects waitlist emails.
- [ ] No content on the site implies services or features we don't currently deliver.
- [ ] Legal pages (Privacy, Terms, Refund Policy) are published and linked from the footer.

---

## 13. Open Questions for Founder Decision

The following decisions must be made by the founder before development can begin. Each one materially affects the build.

1. **Lawyer panel:** Are we going with one lead lawyer or a panel of 3? Budget implication: ₹50K–₹1.5L/month retainer.
2. **Final pricing:** Do we lock in ₹799 / ₹1,999 / ₹4,999, or test alternative anchors? Recommend running with these for the first 90 days, then adjusting based on signups.
3. **WhatsApp delivery:** Is this feature currently in the product, or aspirational? If aspirational, remove from pricing tiers until shipped.
4. **API access:** Is the API actually available, or is this a roadmap promise? If roadmap, mark "Coming soon" in the Scale tier.
5. **SOC 2 certification:** Do we currently have this? Remove the badge if not.
6. **Photoshoot budget:** Approve ₹15K–25K for professional photography of founder, team, and lead lawyer. This is essential for credibility.
7. **Copywriter engagement:** Approve ₹20K–30K for professional copywriting of all site copy. Non-negotiable for a legal product.
8. **Services launch date:** When realistically can incorporation/CA services launch? This affects the "coming soon" timing on the services page.

---

## 14. Budget Summary (Estimated)

| Item | One-time | Recurring |
|---|---|---|
| Copywriter (full site polish) | ₹20,000–30,000 |    |
| Professional photoshoot | ₹15,000–25,000 |    |
| Lawyer retainer |    | ₹50,000–1,50,000/month |
| Web development (this brief) | ₹1,00,000–2,50,000 |    |
| Analytics tools (PostHog, etc.) |    | ₹0–5,000/month (free tier likely sufficient at start) |
| Email tool (Brevo/Mailchimp) |    | ₹0–2,000/month |
| Hosting & CDN |    | ₹2,000–5,000/month |

**Total one-time: ₹1,35,000–3,05,000**
**Total recurring (month 1): ₹52,000–1,62,000**

These are estimates. Adjust based on your team capacity (in-house dev reduces dev cost significantly) and lawyer engagement scope.

---

## 15. Final Note

This document is a living brief. As the team starts implementing, questions and edge cases will arise    capture them in a shared doc and resolve them in weekly check-ins. Do not let scope creep delay the relaunch. The goal is a focused, fast, credible website live within 4–5 weeks, not a perfect one in 4 months.

Ship the rewrite, get feedback from real founders, then iterate.

---

**Document prepared by:** GTM Strategy
**Date:** May 2026
**Next review:** Post-launch (4–6 weeks after relaunch)
