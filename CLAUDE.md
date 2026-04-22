# CLAUDE.md — Contractor Website System (Master)

## 🎯 OBJECTIVE

Build and maintain high-converting contractor websites that:
- Generate consistent quote requests
- Rank locally on Google
- Reflect real-world contractor credibility
- Feel custom, not templated

---

# ⚙️ WORKFLOW ORCHESTRATION

## 1. PLAN MODE (MANDATORY)

Before ANY implementation:

Define:
- Section being worked on (Hero, Services, SEO, etc.)
- Goal (conversion, ranking, UX, clarity)
- Inputs (services, location, brand voice)
- Expected output

### Example
Task: Improve hero  
Goal: Increase conversions  
Output: Clear headline + local targeting + CTA above fold  

---

## 2. SYSTEM AWARENESS

This is NOT a portfolio site.

This is a:
→ **lead generation system for contractors**

Everything must prioritize:
- clarity
- trust
- speed
- conversion

---

## 3. SUBAGENT EXECUTION MODEL

Break work into focused components:

### Agent 1 — Content Structuring
- Extract:
  - services
  - locations
  - trust signals
  - differentiators

---

### Agent 2 — Copy Optimization
Rewrite for:
- clarity
- authority
- homeowner understanding
- local SEO

Always include:
- service + location early
- real-world language (no fluff)

---

### Agent 3 — UI / Layout
Ensure:
- strong visual hierarchy
- mobile responsiveness
- CTA visibility above fold
- simple, clean design

---

### Agent 4 — QA / Verification
Check:
- no missing content
- consistent tone
- working links
- SEO tags present
- indexability confirmed

---

# 🔍 GOOGLE INDEXING & TECHNICAL SEO (MANDATORY)

## 🎯 GOAL

Every page must:
- be indexable
- return status 200
- have no technical conflicts
- be eligible to rank

---

## 🚫 ISSUES TO PREVENT

### 1. Redirect Pages
Avoid:
- redirect chains
- unnecessary redirects
- http/https conflicts

✔ Fix:
- Final URL must resolve directly (200)

---

### 2. 404 Errors
No important page should return 404

✔ Fix:
- Verify all links:
  - navigation
  - buttons
  - internal links
- Ensure all pages exist:
  - /about.html
  - /contact.html

---

### 3. Noindex Errors
Never block pages unintentionally

✔ Fix:
```html
<meta name="robots" content="index, follow">