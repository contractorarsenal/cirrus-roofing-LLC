# Cirrus Roofing Local SEO, UX, and Lead Generation Audit

Audit date: July 6, 2026  
Business: Cirrus Roofing  
Primary market: Watsonville, Santa Cruz County, and Monterey County  
Audited source: local static site files in `Websites/Client-Sites/Cirrus Roofing/`

## Scope And Source Notes

The pasted brief did not include a live website URL. The local files define the canonical domain as `https://cirrusroofingco.com/`, but a direct DNS check on July 6, 2026 returned `Could not resolve host: cirrusroofingco.com`. Public search also did not surface the Cirrus domain or the linked Yelp profile. Because of that, this audit separates:

- Confirmed findings from the local site files.
- Public competitor and guideline findings from accessible third-party pages.
- Items requiring live hosting, Google Search Console, Google Analytics, Google Business Profile, PageSpeed Insights, or backend access.

Primary local files reviewed:

- `index.html`
- `about.html`
- `contact.html`
- `images/logo-nav.png`
- `images/logo-footer.png`

External sources reviewed:

- Knox Roofing: https://www.knoxroofing.com/
- Scudder Roofing: https://www.scudderroofing.com/
- Moriarty's Roofing: https://www.moriartysroofing.com/
- Shelton Roofing: https://sheltonroofing.com/
- Dority Roofing and Solar: https://dorityroofing.com/
- Ross Roofing and Solar: https://www.rossroofing1950.com/
- Daddario Roofing: https://www.daddarioroofing.com/
- Noble Pride Roofing: https://www.nobleprideroofing.com/
- Hollister Roofing: https://hollisterroofing.com/
- Google Business Profile guidelines: https://support.google.com/business/answer/3038177
- CSLB license lookup: https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx
- Santa Cruz Area Chamber: https://www.santacruzchamber.org/
- Monterey Peninsula Chamber: https://www.montereychamber.com/
- Salinas Valley Chamber: https://www.salinaschamber.com/
- NRCA: https://www.nrca.net/
- GAF contractor directory/resources: https://www.gaf.com/en-us/roofing-contractors

## 1. Executive Summary

1. The biggest ranking problem is structural: Cirrus has only three pages. Competitors rank and convert with individual service pages, project galleries, reviews, credentials, financing/warranty pages, and sometimes city pages.
2. The canonical domain in the code, `cirrusroofingco.com`, does not currently resolve by DNS. If that is the intended live domain, this is the highest-priority blocker.
3. The homepage is trying to rank for too many services and locations at once: roofing, metal, flat, hot mop, gutters, emergency repairs, Watsonville, Santa Cruz, Salinas, Monterey, Marina, Seaside, Pacific Grove, Carmel, and more.
4. The homepage estimate forms are not real lead forms. They show a success message but do not submit anywhere, and their fields do not have `name` attributes. Only `contact.html` posts to Web3Forms.
5. Multiple claims are unverified: "CA Licensed," "5-star Yelp Rating," Yelp review quotations, "24/7 emergency service," and "20 to 30 years of experience." These should be removed or softened until proof is supplied.
6. The address from the brief, `3000 King Hall Rd, Watsonville, CA 95076`, is not visible on the site and is not in schema. The site only says Watsonville, CA 95076.
7. The current copy overuses the same phrases. Across the three pages, "We Don't Rush Quality" appears about 30 times, "20 to 30 years" about 25 times, and "Free estimate" about 36 times.
8. Competitors are stronger on trust signals. Scudder, Noble Pride, Moriarty's, Ross, and Dority display license numbers, awards, credentials, warranties, financing, project portfolios, or strong local proof.
9. Cirrus has a good positioning hook: careful, old-school craftsmanship. The fix is to make that more specific and proof-backed, not repeat it in every section.
10. The fastest path to growth is: get the domain live, fix forms and tracking, verify credentials/reviews, publish service pages, build top city pages, add real project proof, and align the Google Business Profile with the new page structure.

## 2. Critical Problems

| Issue | Location | Why It Matters | Recommended Fix | Priority | Difficulty | Expected Impact |
|---|---|---|---|---|---|---|
| Canonical domain does not resolve | `https://cirrusroofingco.com/` | A non-resolving domain cannot rank or generate leads. | Configure DNS/hosting, verify HTTPS, publish final files, then test 200 status. | Critical | Medium | Very high |
| Homepage forms do not submit | `index.html` hero and contact section | Visitors may believe they submitted a request, but no lead is captured. | Wire both forms to Web3Forms or backend, add `name` attributes, send to thank-you page, track events. | Critical | Low | Very high |
| Unverified license and review claims | Hero, About, Contact, reviews section | Unsupported claims can damage trust and create compliance risk. | Add verified CSLB license number, verified review links, or remove claims. | Critical | Low | High |
| Missing service pages | Sitewide nav/footer | Cirrus cannot target high-intent terms like roof repair, roof replacement, metal roofing, flat roofing, hot mop roofing. | Build individual pages for each revenue service. | High | Medium | Very high |
| Missing location pages | Sitewide | Competitors have stronger local relevance in Santa Cruz, Monterey, Capitola, Marina, etc. | Build priority city pages with original local proof, not doorway copy. | High | Medium | High |
| Address mismatch/incomplete NAP | Schema, footer, contact | The brief lists a street address, but the website and schema omit it. | Confirm if address is customer-facing. Add consistent NAP or hide address if GBP service-area rules require it. | High | Low | High |
| Over-repeated phrases | All pages | The site starts to feel bloated and less credible. | Keep the brand tagline in 2-3 strategic places, then use specific proof and plain language. | High | Low | Medium |
| Reviews appear placeholder or unverifiable | `index.html`, `contact.html` | Fake-looking testimonials reduce trust and risk platform/policy issues. | Replace with verified Google/Yelp reviews, screenshots only if compliant, or link to profiles. | High | Low | High |
| No robots.txt or sitemap.xml in local folder | Root | Search engines need clear crawl and discovery signals after launch. | Add `robots.txt` and `sitemap.xml`; submit sitemap in GSC. | High | Low | Medium |
| External GitHub-hosted images | Homepage/about images | GitHub attachments are not ideal production assets and may affect speed/ownership. | Move assets local/CDN, compress to WebP/AVIF, define dimensions. | Medium | Medium | Medium |
| No visible analytics/call tracking | Sitewide | Cannot know which pages/queries generate calls and estimate requests. | Add GA4, GTM, call click events, form events, and call-tracking DNI. | High | Medium | High |
| H1 text split into multiple H1s | Home/About/Contact | Headings are visually dramatic but semantically weak. | Use one complete H1 per page; style spans inside it. | Medium | Low | Medium |

## 3. Existing Website Audit

### Website Structure

Confirmed current structure:

- Home: `index.html`
- About: `about.html`
- Contact: `contact.html`
- No services directory.
- No location pages.
- No project/gallery page.
- No reviews page.
- No emergency page.
- No blog/content hub.
- No `robots.txt`.
- No `sitemap.xml`.

The homepage is doing too much. It is trying to rank for the brand, primary service, all roofing types, emergency repair, gutters, all counties, and many cities. That helps Google understand the general business, but it is not enough to compete against roofing sites with dedicated pages for each service and market.

Footer links currently send service terms to `#services` or `contact.html`. This gives users a short path to contact, but it gives search engines no dedicated destination for "roof repair Watsonville," "metal roofing Santa Cruz," "flat roof repair Monterey," or "hot mop roofing Santa Cruz."

### On-Page SEO

Current title tags:

- Home: `Cirrus Roofing | Watsonville CA | Santa Cruz to Monterey County Roofer`
- About: `About Cirrus Roofing | Watsonville CA | Santa Cruz to Monterey County`
- Contact: `Contact Cirrus Roofing | Free Estimate | Santa Cruz to Monterey County`

Current positives:

- Local city/county signals are present.
- Phone number is visible and click-to-call links exist.
- The contact page has a real submit integration.
- There is LocalBusiness/RoofingContractor schema.
- There is FAQ schema on the homepage.
- Image alt text exists for key images.
- The brand positioning is clear: careful work, no shortcuts, quality over speed.

Current issues:

- Meta descriptions are overloaded with repeated phrases instead of unique page-specific intent.
- Meta keywords are present. They do not help modern SEO and make the site look over-optimized.
- H1s are split into multiple elements: `Cirrus` and `Roofing`, `We Don't Rush` and `Quality.`, `Get a Free` and `Estimate.`
- Homepage service cards do not link to real service pages.
- Location references are broad and repetitive.
- There is no crawlable depth beyond three pages.
- The site uses repeated proof claims without evidence.

### Phrase Repetition

Approximate counts across current files:

| Phrase | Approx. Count | Where It Helps | Where It Hurts |
|---|---:|---|---|
| `We Don't Rush Quality` | 30 | Hero, About page, one footer brand line | Announce bar, repeated trust blocks, CTA/footer duplication |
| `Old-school craftsmanship` | 3 | Good differentiator on About/Home | Needs real examples instead of repeated slogan use |
| `20 to 30 years` | 25 | Useful if verified as owner experience | Awkward wording and inconsistent with `20+`; should be verified and standardized |
| `Santa Cruz County to Monterey County` | 25 | Useful in title/meta/hero | Too broad when repeated on every section; use city-specific/local proof instead |
| `Get a free estimate` / `Free estimate` | 36+ | Primary CTA buttons/forms | Excessive in copy and metadata; can look spammy |

Recommended copy discipline:

- Tagline: use once in hero and once on About.
- Experience: replace "20 to 30 years" with the verified exact claim. If not verified, use "decades of hands-on roofing experience."
- Service area: use "Watsonville-based roofing contractor serving Santa Cruz County and Monterey County" on the homepage; use city-specific language on city pages.
- CTA: buttons can say "Request a Free Estimate"; body copy should explain what happens after the request.

### Technical SEO

Confirmed from local files:

- Canonicals point to `https://cirrusroofingco.com/...`
- DNS check failed for the canonical domain on July 6, 2026.
- No local `robots.txt` file.
- No local `sitemap.xml`.
- No visible GA4/GTM tracking.
- No conversion tracking.
- Homepage forms do not submit.
- Contact form uses Web3Forms.
- Images are mostly GitHub attachment URLs, not production-local assets.
- CSS and JS are inline and duplicated across pages.
- Schema omits street address.
- Schema sameAs points to an unverified Yelp URL.

Needs access to confirm:

- Core Web Vitals.
- PageSpeed Insights/Lighthouse field data.
- Index coverage.
- Redirect behavior for HTTP, HTTPS, `www`, trailing slash, and `/index.html`.
- Actual 404 template.
- Live SSL certificate status.
- Live form delivery.
- GSC query data.
- GA4 traffic and conversion data.
- GBP impressions, calls, messages, and direction requests.

### Local SEO Signals

Confirmed:

- Phone number is consistently shown as `(408) 670-3199`.
- Business name varies between `Cirrus Roofing` and `Cirrus Roofing Co.`
- Address is incomplete on the website and schema.
- The brief address is `3000 King Hall Rd, Watsonville, CA 95076`, but the site does not show the street address.
- The website references Yelp, but public verification was not available in this audit.
- The site says `CA Licensed`, but no CSLB license number appears.
- The site says emergency service is available, including `24/7 for storm damage`, but that claim is not independently verified.

Required verification before display:

- CSLB license number and status.
- Bonded/insured status.
- Whether the 3000 King Hall Rd address is eligible to display publicly under Google Business Profile rules.
- Whether the business should show address or be configured as a service-area business.
- Real Google/Yelp review count and rating.
- Whether emergency availability is genuinely 24/7.
- Warranty terms.
- Manufacturer certifications.

## 4. Competitor Research

Google review counts and ratings were not consistently available from accessible competitor pages. Do not scrape or invent them. Verify directly in Google Business Profile/local pack before finalizing client-facing comparisons.

| Competitor | Primary City/Area | Website Strategy | Services Emphasized | Trust Signals | CTA/Offer | What Cirrus Should Adapt |
|---|---|---|---|---|---|---|
| Knox Roofing | Scotts Valley, Prunedale, Santa Cruz/Monterey | Large nav with service, residential, commercial, roof type, FAQ, blog, finance, testimonials | Repair, replacement, solar roofing, gutters, roof types, inspections | 40+ years, awards, reviews, two addresses, financing | Free estimate/contact | Build service pages, roof type pages, financing only if real, stronger awards/reviews |
| Scudder Roofing | Marina/Monterey County | Deep structure: services, emergency, financing, credentials, safety, portfolio, warranties, showroom | Roofing, repairs, maintenance, gutters, waterproofing, sheet metal, solar | Since 1982, license #445118, BBB/NRCA/industry logos, showroom | Free quote, 24/7 emergency | Add verified credentials, emergency page, project portfolio, warranty/insurance page |
| Moriarty's Roofing | Santa Cruz | Service pages by roof type plus projects and reviews | Composition, flat, metal, tile, shake, commercial, gutters, skylights, repairs | Lic #1012022, 25 years, process, projects | Free estimate | Build material pages and project filters; avoid duplicated/repetitive blocks |
| Shelton Roofing | Santa Cruz and Watsonville | Residential/commercial, blog, extensive service-area links | Residential, commercial, local roofing topics | Two local office addresses, blog posts around Santa Cruz questions | Phone/contact | Create useful local blog topics and city/service links, but avoid thin city pages |
| Dority Roofing and Solar | Monterey Peninsula | Premium/custom portfolio and specialty pages | Custom roofing, solar, waterproofing, skylights, copper gutters | 29 years, Velux, CertainTeed, Green Business, supplier partners, named projects | Quote form | Use premium project storytelling for Carmel/Monterey if Cirrus has comparable work |
| Ross Roofing and Solar | Marina | Traditional services, warranty, showroom, Diamond Certified | Residential, commercial, re-roofing, repairs, solar, waterproofing, decks | 75+ years, Diamond Certified, BBB-accredited claim, warranty | Call/free estimates | Add warranty/proof pages only after verification |
| Daddario Roofing | Capitola | Clean service structure, portfolio, reviews, real estate inspections | Residential, roof repair, roof inspections, roof types | Since 2001, Readers' Choice awards, Google-linked reviews, portfolio | Schedule free estimate | Add inspection page and real project/gallery proof |
| Noble Pride Roofing | Salinas/Monterey/Santa Cruz | Residential/commercial, gallery, referrals, warranties, financing, manufacturers, community | Residential, commercial, repair, roof products | License #792403, 30+ years, CCBA/NARI/Roofing Contractors CA, local project posts | Contact/call | Add manufacturer/warranty/community pages if true |
| Hollister Roofing | Hollister/San Benito adjacent | Service pages for repair, leak repair, replacement, installation, inspections, gutters, storm damage | Repair, leak, replacement, gutters, storm damage | Reviews, local history, licensed/bonded/insured claim | Free estimate | Use as adjacent-market structure benchmark; not a primary Santa Cruz/Monterey competitor |

### What Competitors Do Better

- They have more crawlable pages for services and roof types.
- They show stronger trust proof: license numbers, awards, associations, credentials, warranties, and reviews.
- They publish project galleries and portfolio proof.
- Several have financing, warranty, showroom, or inspection pages that reduce purchase anxiety.
- Several show multiple local signals through offices, service areas, and project locations.

### What Cirrus Already Does Better

- Cirrus has a clearer human positioning angle: careful work, old-school craft, no rush.
- The design has a stronger visual identity than several older competitor sites.
- Phone visibility is good.
- The message "quality over speed" is memorable if used with restraint.

### What Competitors Are Missing

- Many competitor pages are bloated, dated, or repetitive.
- Some competitors use generic manufacturer copy.
- Several do not explain local roof problems well: coastal moisture, salt air, fog, moss, flat roof drainage, and storm leaks.
- Some local pages are thin or over-optimized.

### Clearest Differentiation Opportunity

Cirrus should become the "careful local roofer with documented work" rather than a generic "best roofer" site. Pair the craftsmanship positioning with proof:

- Real project pages.
- Real owner/team photos.
- Verified license and insurance.
- Before/after roof photos.
- Clear estimate process.
- Honest repair-vs-replacement guidance.
- City-specific roofing conditions.

## 5. Keyword Map

Competition estimates are qualitative because no paid keyword tool or GSC data was available.

| Keyword Group | Example Keywords | Intent | Competition | Commercial Value | Target Page |
|---|---|---|---|---|---|
| Brand | Cirrus Roofing, Cirrus Roofing Watsonville | Navigational | Low | High | Home |
| Core local | roofing contractor Watsonville CA, roofing company Watsonville, roofer Watsonville | Transactional | Medium | Very high | Home + Watsonville page |
| Near me | roofer near me, roofing company near me, roof repair near me | Local transactional | High | Very high | GBP + Home |
| Roof repair | roof repair Watsonville, roof repair Santa Cruz, roof repair Salinas | Transactional | High | Very high | `/roof-repair/` plus city sections |
| Leak repair | roof leak repair, leak detection roof, leaking roof repair | Emergency/problem | Medium-high | Very high | `/roof-leak-repair/` |
| Emergency | emergency roof repair Santa Cruz, emergency roofer near me, storm roof repair | Emergency | Medium-high | Very high | `/emergency-roof-repair/` |
| Replacement | roof replacement Watsonville, re-roofing Santa Cruz, new roof estimate | Transactional | High | Very high | `/roof-replacement/` |
| Metal roofing | metal roofing contractor Santa Cruz, metal roof replacement Monterey | Transactional/research | Medium | High | `/metal-roofing/` |
| Flat roofing | flat roof repair Santa Cruz, flat roofing Monterey, low slope roof repair | Transactional | Medium | High | `/flat-roofing/` |
| Hot mop | hot mop roofing Santa Cruz, hot mop roof repair Monterey | Transactional/specialty | Low-medium | High | `/hot-mop-roofing/` |
| Tile roofing | tile roof repair Aptos, clay tile roof repair Monterey, concrete tile roofing | Transactional | Medium | High | `/tile-roofing/` plus clay subsection |
| Composition roofing | composition roof replacement Watsonville, asphalt shingle roofer | Transactional | Medium | High | `/composition-roofing/` |
| Gutters | gutter installation Watsonville, gutter repair Santa Cruz, downspout replacement | Transactional | Medium | Medium-high | `/gutters-downspouts/` |
| City pages | roofing company Santa Cruz, roofing contractor Aptos, roofer Capitola | Local transactional | Medium-high | Very high | City pages |
| County pages | Santa Cruz County roofing contractor, Monterey County roofing company | Local research/transactional | Medium | High | Home + service area page |
| Cost | roof replacement cost Santa Cruz, roof repair cost Monterey County | Informational/commercial | Medium | High | Blog + service pages |
| Comparison | roof repair vs replacement, metal vs composition roof coastal California | Research/commercial | Medium | Medium-high | Blog + service pages |
| Problem | roof leak after rain, moss on roof Santa Cruz, salt air roof damage | Problem-aware | Low-medium | Medium-high | Blog + service pages |

Cannibalization rules:

- Home targets brand + broad Watsonville/Santa Cruz/Monterey roofing contractor.
- Service pages target service intent.
- City pages target broad city intent and link to relevant services.
- Blog posts answer informational questions and internally link to service pages.
- Do not create separate pages for every service-city combination unless there is real project proof and enough unique content.

## 6. Recommended Sitemap

### Core Pages

| Page | URL | Primary Keyword | Intent | Priority |
|---|---|---|---|---|
| Home | `/` | roofing contractor Watsonville CA | Broad local transactional | Critical |
| About | `/about/` | Watsonville roofing company | Trust/research | High |
| Contact | `/contact/` | contact Cirrus Roofing | Conversion | Critical |
| Free Estimate | `/free-estimate/` | free roofing estimate Watsonville | Conversion | High |
| Reviews | `/reviews/` | Cirrus Roofing reviews | Trust | High after verified reviews |
| Roofing Projects | `/roofing-projects/` | roofing projects Watsonville | Proof/research | High after real photos |
| Emergency Roofing | `/emergency-roof-repair/` | emergency roof repair Watsonville | Emergency transactional | High |
| Service Areas | `/service-areas/` | Santa Cruz County roofing service areas | Local research | Medium |

Do not add financing or warranties pages until those offers are verified.

### Service Pages

| Page | URL | Primary Keyword | Priority |
|---|---|---|---|
| Residential Roofing | `/residential-roofing/` | residential roofing contractor Watsonville | High |
| Roof Replacement | `/roof-replacement/` | roof replacement Watsonville CA | Critical |
| Roof Repair | `/roof-repair/` | roof repair Watsonville CA | Critical |
| Emergency Roof Repair | `/emergency-roof-repair/` | emergency roof repair Watsonville | High |
| Roof Leak Repair | `/roof-leak-repair/` | roof leak repair Watsonville | Critical |
| Metal Roofing | `/metal-roofing/` | metal roofing contractor Watsonville | High |
| Flat Roofing | `/flat-roofing/` | flat roofing contractor Watsonville | High |
| Hot Mop Roofing | `/hot-mop-roofing/` | hot mop roofing Watsonville | High |
| Composition Roofing | `/composition-roofing/` | composition roofing Watsonville | Medium-high |
| Tile Roofing | `/tile-roofing/` | tile roof repair Watsonville | Medium-high |
| Clay Roofing | `/clay-roofing/` | clay tile roofing Watsonville | Medium |
| Gutters and Downspouts | `/gutters-downspouts/` | gutter installation Watsonville | High |

### Location Pages

Build first:

- `/watsonville-ca-roofing/`
- `/santa-cruz-ca-roofing/`
- `/aptos-ca-roofing/`
- `/capitola-ca-roofing/`
- `/scotts-valley-ca-roofing/`
- `/salinas-ca-roofing/`
- `/monterey-ca-roofing/`

Build after proof/content is available:

- `/marina-ca-roofing/`
- `/seaside-ca-roofing/`
- `/carmel-ca-roofing/`

Group into service-area content until there is enough unique proof:

- Soquel
- Felton
- Ben Lomond
- Corralitos
- Rio del Mar
- La Selva Beach
- Freedom
- Live Oak
- Pacific Grove
- Castroville
- Moss Landing
- Gonzales
- Soledad
- King City

Location page requirements:

- 700-1,000 words minimum.
- City-specific roofing conditions.
- Relevant neighborhoods/nearby communities.
- Real project example if available.
- City-specific FAQ.
- Internal links to top services.
- Unique intro and service section.
- No duplicated doorway paragraphs.

## 7. Homepage Rebuild Plan

### Current Homepage Diagnosis

The homepage is strong visually but too long, too repetitive, and overburdened. It tries to cover the entire service menu, every city, trust, about, process, emergency, FAQ, and contact in one page. The bigger issue is not length alone; it is repetition without proof.

### Recommended Section Order

| Order | Section | Purpose | Keep/Rewrite/Move |
|---:|---|---|---|
| 1 | Top bar | Phone, service area, license once verified | Keep, simplify |
| 2 | Header/nav | Home, Services, Projects, Reviews, About, Contact | Rewrite nav once pages exist |
| 3 | Hero | State service + location + primary CTA | Rewrite |
| 4 | Proof strip | License, insured, years, rating, local projects | Keep only verified proof |
| 5 | Estimate form | Capture leads above fold | Keep but fix submit |
| 6 | Main services | Link to service pages | Rewrite and link |
| 7 | Emergency repair | Capture urgent calls | Keep, make direct call CTA |
| 8 | Project proof | Show real local work | Expand into real project cards |
| 9 | Reviews | Build trust | Replace with verified reviews |
| 10 | Why Cirrus | Explain craftsmanship in practical terms | Shorten |
| 11 | Process | Reduce estimate friction | Keep |
| 12 | Service areas | City links with context | Rewrite and link |
| 13 | FAQs | Answer buying questions | Keep, improve |
| 14 | Final CTA/footer | Phone, estimate, NAP, key links | Keep, correct NAP |

### Improved Homepage Copy Direction

Hero H1:

`Roofing Contractor in Watsonville, CA`

Supporting copy:

`Cirrus Roofing helps homeowners across Santa Cruz County and Monterey County with roof repair, roof replacement, leak repair, metal roofing, flat and hot mop roofing, tile roofing, and gutters. We take the time to inspect the roof properly, explain the work clearly, and build it to last.`

Primary CTA:

`Request a Free Estimate`

Secondary CTA:

`Call (408) 670-3199`

Proof strip, only after verification:

`CSLB License #[number] | Insured | Watsonville-based | Verified [Google/Yelp] rating | Real local roofing projects`

Services intro:

`Roofing Services Built Around Your Home`

`Whether you are dealing with a roof leak after heavy rain, planning a full replacement, or comparing metal, tile, flat, hot mop, and composition roofing systems, Cirrus Roofing can inspect the roof and recommend the right next step.`

Emergency section:

`Roof Leak or Storm Damage? Call First.`

`Active leaks can spread quickly into insulation, drywall, and framing. If water is getting in now, call us so we can talk through the situation and schedule the fastest available repair response.`

About section:

`Careful Roofing From Experienced Hands`

`Cirrus Roofing was built around a simple standard: do the work carefully, explain the job honestly, and do not rush the details that keep a roof watertight.`

## 8. Page-Level SEO Plan

Use these as starting specs. Titles should stay close to 50-60 characters and meta descriptions close to 145-160 characters when implemented.

| Page | URL | Title Tag | Meta Description | H1 | H2 Sections | CTA | Schema | Length | Priority |
|---|---|---|---|---|---|---|---|---:|---|
| Home | `/` | Roofing Contractor Watsonville CA | Watsonville-based roofing contractor serving Santa Cruz and Monterey County. Roof repair, replacement, metal, flat, tile, hot mop, gutters. | Roofing Contractor in Watsonville, CA | Services; Emergency repairs; Projects; Reviews; Process; Service areas; FAQ | Request a Free Estimate | RoofingContractor, FAQPage, WebSite | 1,000-1,400 | Critical |
| About | `/about/` | About Cirrus Roofing | Learn about Cirrus Roofing, a Watsonville roofing company built on careful workmanship, clear estimates, and local roofing experience. | About Cirrus Roofing | Our story; How we work; What to expect; Service area; Credentials | Talk About Your Roof | AboutPage, Organization | 700-900 | High |
| Contact | `/contact/` | Contact Cirrus Roofing | Request a roofing estimate in Watsonville, Santa Cruz County, or Monterey County. Call or send project details to Cirrus Roofing. | Contact Cirrus Roofing | Estimate form; Call; Hours; Service areas; What happens next | Send Estimate Request | ContactPage, LocalBusiness | 500-700 | Critical |
| Reviews | `/reviews/` | Cirrus Roofing Reviews | Read verified customer reviews for Cirrus Roofing and see why local homeowners call for roof repair and replacement estimates. | Cirrus Roofing Reviews | Google reviews; Yelp reviews; Project feedback; Review request | Request an Estimate | Review page, LocalBusiness | 600-900 | High |
| Projects | `/roofing-projects/` | Roofing Projects in Santa Cruz and Monterey County | View local roofing projects by Cirrus Roofing, including repairs, replacements, tile, metal, flat roofing, and gutters. | Local Roofing Projects | Project gallery; Filter by service; Featured case studies; Before/after | See Similar Work | CollectionPage | 900+ | High |
| Roof Replacement | `/roof-replacement/` | Roof Replacement Watsonville CA | Need a new roof? Cirrus Roofing provides roof replacement estimates for homes in Watsonville, Santa Cruz, Salinas, and Monterey. | Roof Replacement in Watsonville, CA | Signs you need replacement; Materials; Process; Costs; FAQs | Request Replacement Estimate | Service, FAQPage | 900-1,200 | Critical |
| Roof Repair | `/roof-repair/` | Roof Repair Watsonville CA | Roof leak, missing shingles, storm damage, or tile issues? Request roof repair from Cirrus Roofing in Santa Cruz and Monterey County. | Roof Repair in Watsonville, CA | Common repairs; Leak diagnosis; Materials; Repair vs replacement; FAQs | Schedule Roof Repair | Service, FAQPage | 900-1,200 | Critical |
| Leak Repair | `/roof-leak-repair/` | Roof Leak Repair Watsonville CA | Get help with roof leaks, water stains, flashing issues, and storm-related leaks in Watsonville and nearby areas. | Roof Leak Repair | Leak signs; Inspection process; Emergency steps; Common causes; FAQs | Call About a Leak | Service, FAQPage | 800-1,100 | Critical |
| Emergency | `/emergency-roof-repair/` | Emergency Roof Repair Watsonville CA | Active roof leak or storm damage? Call Cirrus Roofing for urgent roof repair availability in Santa Cruz and Monterey County. | Emergency Roof Repair | What to do now; Tarping; Storm damage; Call process; FAQs | Call Now | Service, FAQPage | 700-1,000 | High |
| Metal Roofing | `/metal-roofing/` | Metal Roofing Contractor Watsonville CA | Explore metal roofing for coastal homes, including durability, maintenance, repair, and replacement options. | Metal Roofing Contractor | Benefits; Coastal performance; Styles; Installation; FAQs | Ask About Metal Roofing | Service | 900-1,200 | High |
| Flat Roofing | `/flat-roofing/` | Flat Roofing Contractor Watsonville CA | Flat and low-slope roofing repair and replacement for homes and small buildings in Santa Cruz and Monterey County. | Flat Roofing Contractor | Drainage; Leaks; Materials; Maintenance; FAQs | Request Flat Roof Estimate | Service | 800-1,100 | High |
| Hot Mop Roofing | `/hot-mop-roofing/` | Hot Mop Roofing Watsonville CA | Hot mop roofing repair and replacement for low-slope roofs, decks, and waterproofing needs. | Hot Mop Roofing | When hot mop fits; Repair signs; Process; Maintenance; FAQs | Ask About Hot Mop | Service | 700-1,000 | High |
| Composition Roofing | `/composition-roofing/` | Composition Roofing Watsonville CA | Composition shingle roofing estimates for roof replacement, repair, and storm damage in Watsonville and nearby cities. | Composition Roofing | Shingle options; Lifespan; Replacement; Repairs; FAQs | Request Shingle Estimate | Service | 700-1,000 | Medium-high |
| Tile Roofing | `/tile-roofing/` | Tile Roof Repair Watsonville CA | Tile, clay, and concrete roof repair and replacement for homes across Santa Cruz and Monterey County. | Tile Roofing | Clay vs concrete; Broken tiles; Underlayment; Leak repair; FAQs | Request Tile Roof Estimate | Service | 800-1,100 | Medium-high |
| Clay Roofing | `/clay-roofing/` | Clay Tile Roofing Watsonville CA | Clay tile roofing repair and replacement for local homes, including broken tile and underlayment issues. | Clay Tile Roofing | Clay tile issues; Repairs; Replacement; Maintenance | Ask About Clay Tile | Service | 600-900 | Medium |
| Gutters | `/gutters-downspouts/` | Gutter Installation Watsonville CA | Gutter and downspout installation, repair, and replacement for homes in Watsonville, Santa Cruz, Salinas, and Monterey. | Gutters and Downspouts | Gutter problems; Downspouts; Drainage; Roof protection; FAQs | Request Gutter Estimate | Service | 700-1,000 | High |
| Watsonville | `/watsonville-ca-roofing/` | Roofing Company Watsonville CA | Cirrus Roofing serves Watsonville homeowners with roof repair, roof replacement, leak repair, metal roofing, tile roofing, and gutters. | Roofing Company in Watsonville, CA | Local roof issues; Services; Project example; Neighborhoods; FAQs | Request Watsonville Estimate | LocalBusiness, Service | 800-1,000 | Critical |
| Santa Cruz | `/santa-cruz-ca-roofing/` | Roofing Contractor Santa Cruz CA | Roofing contractor serving Santa Cruz homes with roof repair, replacement, leak repair, flat roofing, metal roofing, and gutters. | Roofing Contractor in Santa Cruz, CA | Coastal conditions; Services; Project proof; FAQs | Request Santa Cruz Estimate | LocalBusiness, Service | 800-1,100 | Critical |
| Aptos | `/aptos-ca-roofing/` | Roofing Contractor Aptos CA | Roof repair and replacement for Aptos homes, including coastal moisture, tile, composition, flat roofing, and gutters. | Roofing Contractor in Aptos, CA | Coastal homes; Services; Nearby areas; FAQs | Request Aptos Estimate | LocalBusiness, Service | 700-1,000 | High |
| Capitola | `/capitola-ca-roofing/` | Roofing Contractor Capitola CA | Roofing services for Capitola homes, including roof leaks, storm repairs, replacement, gutters, and tile roofing. | Roofing Contractor in Capitola, CA | Coastal exposure; Services; Project proof; FAQs | Request Capitola Estimate | LocalBusiness, Service | 700-1,000 | High |
| Scotts Valley | `/scotts-valley-ca-roofing/` | Roofing Contractor Scotts Valley CA | Roofing repair and replacement for Scotts Valley homes, including storm damage, leaks, composition roofing, and gutters. | Roofing Contractor in Scotts Valley, CA | Trees/debris; Rain; Services; FAQs | Request Scotts Valley Estimate | LocalBusiness, Service | 700-1,000 | High |
| Salinas | `/salinas-ca-roofing/` | Roofing Company Salinas CA | Cirrus Roofing provides roof repair, replacement, metal roofing, tile roofing, flat roofing, and gutters in Salinas. | Roofing Company in Salinas, CA | Inland/coastal conditions; Services; Project proof; FAQs | Request Salinas Estimate | LocalBusiness, Service | 800-1,100 | High |
| Monterey | `/monterey-ca-roofing/` | Roofing Contractor Monterey CA | Roofing contractor serving Monterey homes with roof repair, replacement, leak repair, tile, metal, flat roofing, and gutters. | Roofing Contractor in Monterey, CA | Salt air; Fog/moisture; Services; FAQs | Request Monterey Estimate | LocalBusiness, Service | 800-1,100 | High |

## 9. Technical SEO Checklist

### Immediate Website Fixes

- Publish the site on a resolving domain with HTTPS.
- Set preferred canonical root: `https://cirrusroofingco.com/`.
- Redirect `/index.html` to `/` or canonicalize properly.
- Add `robots.txt`.
- Add `sitemap.xml`.
- Replace homepage fake forms with real submissions.
- Add thank-you page: `/thank-you/`.
- Add GA4 and GTM.
- Track `tel:` clicks.
- Track form starts, submissions, errors, and thank-you views.
- Remove meta keywords.
- Convert split H1s into single logical H1 elements.
- Add complete LocalBusiness/RoofingContractor schema after NAP verification.
- Add `streetAddress` only if the address is meant to be public and GBP-compliant.
- Move images from GitHub attachments into production assets.
- Compress images to WebP/AVIF.
- Add width/height to all images.
- Build custom 404 page.
- Add breadcrumb schema to all non-home pages.
- Add Service schema to service pages.
- Add FAQ schema only where visible FAQs exist.

### Requires Backend/Analytics Access

- Confirm GSC indexing.
- Confirm live 301 redirect rules.
- Confirm HTTPS certificate and security headers.
- Run PageSpeed Insights after deployment.
- Check Core Web Vitals.
- Verify XML sitemap submission.
- Check crawl errors and 404s.
- Validate schema in Rich Results Test.
- Verify form delivery.
- Confirm spam protection.
- Confirm call tracking setup.
- Confirm GA4/GTM events.
- Confirm GBP website URL and UTM tracking.

## 10. Conversion Strategy

### Primary CTA

`Request a Free Estimate`

Use this for standard roofing, replacement, gutters, and non-urgent repairs.

### Secondary CTA

`Call (408) 670-3199`

Use this in the hero, sticky mobile bar, emergency page, and footer.

### Mobile UX

Add a sticky bottom mobile bar:

- Left button: `Call`
- Right button: `Estimate`

Keep it visible after the visitor scrolls past the hero. Do not hide the phone behind a menu.

### Form Fields

Standard estimate form:

- Full name, required.
- Phone, required.
- Email, optional.
- Service needed, required.
- City/ZIP, required.
- Project details, optional.
- Consent checkbox: `I agree to be contacted by phone, text, or email about my roofing request.`

Emergency repair form:

- Full name.
- Phone.
- Property city/address.
- Is water actively leaking? yes/no.
- What happened? leak, storm damage, missing shingles/tiles, other.
- When are you available today?
- Photos upload if backend supports it.
- Strong call-first prompt: `For active leaks, call now.`

Gutter lead form:

- Name.
- Phone.
- City.
- Gutter service: install, repair, cleaning, downspouts, not sure.
- Home stories: 1, 2, 3+.
- Drainage issue notes.

Paid-ad traffic:

- Use shorter form: name, phone, service, city.
- Send to service-specific landing page.
- Include phone CTA above form.

Organic traffic:

- Use full standard form.
- Add internal links to service and city pages.
- Include FAQ and project proof before final CTA.

### Tracking

Recommended events:

- `phone_click_header`
- `phone_click_mobile_sticky`
- `phone_click_emergency`
- `estimate_form_start`
- `estimate_form_submit`
- `estimate_form_error`
- `thank_you_view`
- `service_page_cta_click`
- `gbp_website_click` via UTM

Use call tracking carefully:

- Keep the real business phone on GBP.
- If using dynamic number insertion on the website, preserve NAP consistency in schema/footer.
- Track Google Ads with forwarding numbers if running ads.

## 11. Google Business Profile Strategy

Follow Google's rules: use the real-world business name, accurate address/service area, fewest accurate categories, and no promotional spam in the business description.

### Recommended Categories

Primary:

- Roofing contractor

Secondary, only if accurate:

- Gutter service
- Skylight contractor, only if offered
- General contractor, only if licensed/positioned that way

Do not add solar categories unless Cirrus actually offers solar.

### Service Areas

Prioritize:

- Watsonville
- Santa Cruz
- Aptos
- Capitola
- Scotts Valley
- Soquel
- Salinas
- Monterey
- Marina
- Seaside
- Pacific Grove
- Carmel
- Castroville
- Moss Landing

Keep the overall service area realistic. Google notes that service-area boundaries should generally not extend farther than about two hours from the business base.

### Optimized GBP Description

`Cirrus Roofing is a Watsonville-based roofing contractor serving homeowners across Santa Cruz County and Monterey County. We provide roof repair, roof replacement, roof leak repair, emergency roof repair, metal roofing, flat and hot mop roofing, composition roofing, tile roofing, clay and concrete tile roofing, and gutter/downspout services. Our work is built around careful craftsmanship, clear communication, and roofing estimates that explain the real condition of your roof before work begins.`

### GBP Services

- Roof repair
- Roof replacement
- Emergency roof repair
- Roof leak repair
- Metal roofing
- Flat roofing
- Hot mop roofing
- Composition roofing
- Tile roofing
- Clay tile roofing
- Concrete tile roofing
- Gutter installation
- Gutter repair
- Downspouts

### Photos

Upload weekly until a strong base exists:

- Owner/team photos.
- Truck/jobsite photos.
- Before/after photos.
- Roof detail photos: flashing, valleys, vents, gutters, tile, flat roof drains.
- City-labeled project photos.
- Material photos.
- Cleanup photos.

### Posting Schedule

- Weekly project post.
- Monthly maintenance tip.
- Seasonal storm/leak post before rainy season.
- Review highlight after verified review.
- Emergency repair reminder during storms.

### Review Request Process

1. Confirm the customer is satisfied.
2. Send same-day SMS/email with the Google review link.
3. Ask for specific, honest feedback about communication, cleanup, timing, and roof result.
4. Follow up once after 3-5 days.
5. Respond to every review with the city and service type where appropriate.
6. Do not gate reviews or ask only happy customers.

## 12. Trust And Credibility Audit

Add only after verification:

- CSLB license number.
- Insurance status.
- Bonded status.
- Years in business.
- Owner years of experience.
- Manufacturer certifications.
- Workmanship warranty.
- Material warranty information.
- Real team photos.
- Real project photos.
- Before/after photos.
- Google reviews.
- Yelp reviews.
- Written estimate process.
- Cleanup process.
- Safety process.
- Material brands used.
- Local project examples.

Current claims to flag:

- `CA Licensed`: shown without license number. Verify through CSLB before display.
- `5-star Yelp Rating`: not publicly verified in this audit. Remove until proven.
- Yelp review names/quotes: appear generic and were not publicly verified. Replace with real sourced reviews.
- `24/7 emergency`: verify operationally. If not true, use `Call for urgent roof repair availability`.
- `20 to 30 years`: awkward and inconsistent. Verify exact claim and use one version.

## 13. Content Plan

Publish two assets per month minimum: one service/support article and one project case study. If project proof is available, prioritize case studies because they help both SEO and trust.

| Month | Topic | Primary Keyword | Intent | Location | Internal Links | CTA | Priority | Why It Attracts Qualified Traffic |
|---|---|---|---|---|---|---|---|---|
| 1 | What To Do When Your Roof Leaks After Heavy Rain | roof leak after rain | Emergency/problem | Santa Cruz County | Leak repair, emergency, roof repair | Call about a leak | Critical | Captures urgent leak calls |
| 1 | Roof Repair vs Roof Replacement: How To Decide | roof repair vs replacement | Comparison | Watsonville | Roof repair, replacement | Request inspection | High | Helps homeowners near buying decision |
| 2 | Common Roof Problems In Coastal Santa Cruz Homes | coastal roof problems Santa Cruz | Informational/commercial | Santa Cruz | Roof repair, metal, tile | Schedule inspection | High | Local relevance and service fit |
| 2 | Flat Roof Drainage Problems And Leak Warning Signs | flat roof drainage problems | Problem/service | Monterey County | Flat roofing, hot mop, leak repair | Request flat roof estimate | High | Targets flat/low-slope repair leads |
| 3 | Metal Roofing For Coastal Homes: Pros And Tradeoffs | metal roofing coastal homes | Commercial research | Monterey/Santa Cruz | Metal roofing, replacement | Ask about metal roofing | High | Good replacement-value keyword |
| 3 | Tile Roof Maintenance Before Rainy Season | tile roof maintenance | Informational/commercial | Aptos/Monterey | Tile roofing, leak repair | Request tile inspection | Medium-high | Captures high-value tile homes |
| 4 | How Moss And Algae Affect Roofs In Santa Cruz County | moss on roof Santa Cruz | Problem | Santa Cruz County | Roof repair, maintenance, replacement | Schedule roof check | Medium | Seasonal homeowner search |
| 4 | What A Roofing Estimate Should Include | roofing estimate checklist | Commercial research | Watsonville | Free estimate, replacement | Request estimate | High | Converts skeptical shoppers |
| 5 | Hot Mop Roofing: When It Makes Sense | hot mop roofing | Service research | Santa Cruz/Monterey | Hot mop, flat roofing | Ask about hot mop | High | Specialty term with lower competition |
| 5 | Gutter Problems That Cause Roof And Fascia Damage | gutter problems roof damage | Problem/service | Watsonville/Santa Cruz | Gutters, roof repair | Request gutter estimate | Medium-high | Cross-sells gutters and roof repair |
| 6 | Roof Replacement Costs: What Changes The Price | roof replacement cost | Cost/commercial | Santa Cruz/Monterey | Replacement, materials | Request estimate | High | Cost searches often precede estimates |
| 6 | Emergency Tarping And Temporary Roof Repairs | emergency roof tarping | Emergency | Countywide | Emergency, leak repair | Call now | High | Captures urgent storm traffic |

### Project Case Study Templates

Publish only with real job details, photos, and permission.

Each case study should include:

- City.
- Roofing system.
- Original problem.
- Inspection findings.
- Recommended solution.
- Materials used.
- Timeline.
- Before-and-after photos.
- Challenges.
- Final result.
- Customer review, if verified.
- CTA.

Recommended first case studies:

- Watsonville roof leak repair after heavy rain.
- Santa Cruz composition roof replacement.
- Aptos tile roof repair with underlayment issue.
- Monterey flat or hot mop roof repair.
- Salinas gutter and downspout replacement.
- Capitola coastal roof maintenance or repair.
- Carmel/Monterey metal or premium tile project, only if real.

## 14. Backlink And Citation Plan

### Foundational Citations

- Google Business Profile.
- Bing Places.
- Apple Business Connect.
- Yelp.
- BBB, if eligible.
- Nextdoor Business.
- Angi/HomeAdvisor, only if the business can handle lead costs.
- Houzz, if project photos are strong.
- CSLB license profile.

### Local Authority Opportunities

- Santa Cruz Area Chamber directory.
- Monterey Peninsula Chamber directory.
- Salinas Valley Chamber directory.
- Watsonville Chamber/other local business associations, verify current membership path.
- Local sponsorships: youth sports, school programs, community events, nonprofit housing repair days.
- Local news/project features when there is a notable job or community angle.

### Roofing/Construction Authority

- NRCA membership/directory if eligible.
- Roofing Contractors Association of California if eligible.
- Central Coast Builders Association if eligible.
- Manufacturer contractor directories after certification: GAF, CertainTeed, Owens Corning, Malarkey, Velux, metal roofing suppliers.
- Supplier partner pages if relationships exist.

Do not buy backlink packages, PBN links, mass directory submissions, or fake guest posts.

## 15. 30-Day Implementation Plan

### Week 1

- Confirm final domain and publish with working DNS/HTTPS.
- Fix homepage forms and route all submissions to the same lead destination.
- Add thank-you page.
- Add GA4/GTM and conversion events.
- Confirm NAP: business name, phone, address/service-area status.
- Verify CSLB license and remove/replace unverified claims.
- Remove placeholder/unverified reviews.

### Week 2

- Add robots.txt and sitemap.xml.
- Rewrite homepage hero, proof strip, service section, and footer NAP.
- Build `/roof-repair/`, `/roof-replacement/`, and `/roof-leak-repair/`.
- Add Service schema and FAQ schema where appropriate.
- Optimize images and move them local.

### Week 3

- Build `/emergency-roof-repair/`, `/metal-roofing/`, `/flat-roofing/`, `/hot-mop-roofing/`.
- Build `/watsonville-ca-roofing/` and `/santa-cruz-ca-roofing/`.
- Add internal links from home/footer/nav.
- Start collecting verified reviews.

### Week 4

- Build `/salinas-ca-roofing/`, `/monterey-ca-roofing/`, `/aptos-ca-roofing/`, `/capitola-ca-roofing/`.
- Add first project case study.
- Submit sitemap in GSC.
- Connect GBP website link with UTM.
- Run PageSpeed Insights and fix top issues.

## 16. 90-Day Growth Plan

### Month 1

- Stabilize technical setup.
- Fix lead capture.
- Verify trust claims.
- Build top service pages.
- Launch top city pages.
- Start review request process.

### Month 2

- Add remaining service pages.
- Add projects page and at least 3 case studies.
- Publish 4 local support articles.
- Improve GBP photos and posts weekly.
- Add chamber/directory citations.

### Month 3

- Add remaining priority location pages.
- Expand internal links from blog to services and cities.
- Review GSC queries and adjust titles/H1s.
- Improve pages with impressions but low CTR.
- Build local backlinks from legitimate organizations.
- Test calls/forms and improve conversion rates.

## 17. Priority Scorecard

| Recommendation | Priority |
|---|---|
| Publish resolving domain and HTTPS | Critical |
| Fix homepage lead forms | Critical |
| Verify/remove license and review claims | Critical |
| Add GA4/GTM/conversion tracking | Critical |
| Add roof repair, replacement, leak repair pages | Critical |
| Add Watsonville and Santa Cruz pages | Critical |
| Add complete NAP and schema after verification | High |
| Add robots.txt and sitemap.xml | High |
| Add emergency, metal, flat, hot mop pages | High |
| Build project gallery/case studies | High |
| Replace unverified testimonials with verified reviews | High |
| Optimize GBP categories, services, photos, description | High |
| Add Salinas, Monterey, Aptos, Capitola pages | High |
| Move/optimize production images | Medium-high |
| Add gutter, tile, composition pages | Medium-high |
| Add content plan articles | Medium |
| Add chamber/citation links | Medium |
| Add financing/warranty pages | Low until verified |
| Add small-city pages | Low until enough unique proof exists |

