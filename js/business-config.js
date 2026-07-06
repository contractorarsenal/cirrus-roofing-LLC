/**
 * Cirrus Roofing — Centralized Business Configuration
 *
 * This is the single source of truth for every fact the website displays
 * about the business. Trust-related claims (license, insurance, bonding,
 * years of experience, reviews, emergency availability, warranty,
 * certifications) are rendered ONLY when their matching "verified" flag
 * below is set to true AND the value is populated.
 *
 * INTERNAL NOTE FOR OWNER / DEVELOPER (not shown to site visitors):
 * Every field marked verified:false is a placeholder. Do not flip a
 * verified flag to true until the underlying fact has actually been
 * confirmed (CSLB lookup, insurance certificate, owner statement, etc).
 * Flipping a flag to true without verification will cause the site to
 * publish an unverified claim again — the exact problem this file exists
 * to prevent.
 */
window.CIRRUS_CONFIG = {
  business: {
    name: "Cirrus Roofing",
    legalName: null, // e.g. "Cirrus Roofing Co." — set once confirmed against CSLB/FBN records
    phone: "(408) 670-3199",
    phoneHref: "+14086703199",
    email: null, // no verified public business email on file — do not invent one
    domain: "https://cirrusroofingco.com",
  },

  address: {
    // Public-facing address display is gated separately from the physical
    // record on file. Do not surface a street address publicly until the
    // owner confirms it is eligible under Google Business Profile rules
    // (commercial storefront vs. service-area business).
    locality: "Watsonville",
    region: "CA",
    postalCode: "95076",
    country: "US",
    streetAddress: null,
    publicAddressApproved: false,
  },

  license: {
    cslbNumber: null,
    verified: false, // set true only after confirming an ACTIVE status on cslb.ca.gov
  },

  insurance: {
    verified: false,
  },

  bonded: {
    verified: false,
  },

  experience: {
    // "decades of hands-on experience" is a softened version of an
    // unverified "20 to 30 years" claim from earlier copy. It still has
    // not been confirmed by the owner and must stay hidden until it is.
    yearsStatement: null, // e.g. "20+ years" once confirmed
    verified: false,
  },

  emergency: {
    // Never render 24/7, same-day, or guaranteed-response-time language.
    available: false, // set true only once the owner confirms urgent/emergency capacity
    defensibleCopy: "Call to check urgent repair availability.",
  },

  hours: {
    verified: false,
    weekday: null,
    saturday: null,
  },

  reviews: {
    googleUrl: null,
    yelpUrl: "https://www.yelp.com/biz/cirrus-roofing-watsonville-3",
    // Star ratings / review counts / testimonial quotes are NEVER hardcoded
    // in markup. If verified review data exists, it belongs here as
    // structured entries, not as prose in HTML.
    verifiedReviews: [],
  },

  warranty: {
    verified: false,
    statement: null,
  },

  certifications: {
    // e.g. GAF, Owens Corning, CertainTeed — only listed once the owner
    // confirms an active manufacturer certification.
    verified: false,
    list: [],
  },

  projects: {
    // Real completed-project entries go here once photos/details are
    // supplied. Each entry: { title, city, service, material, problem,
    // solution, beforeImage, afterImage, description, completionDate,
    // reviewQuote, reviewAuthor, detailUrl }
    verifiedProjects: [],
  },

  analytics: {
    // Populate once real IDs exist. Leaving these null means the
    // corresponding script never loads and trackEvent() no-ops.
    ga4MeasurementId: null,
    gtmContainerId: null,
    googleAdsConversionId: null,
    callTracking: {
      enabled: false,
      provider: null,
    },
  },

  forms: {
    // Web3Forms is designed to be used with a public access key embedded
    // client-side — that is the provider's documented implementation
    // pattern (the key only authorizes submissions to the linked inbox,
    // it is not a secret credential). See https://web3forms.com/.
    web3formsAccessKey: "5131bf5e-7754-4830-9add-f6a6aa554211",
    endpoint: "https://api.web3forms.com/submit",
  },
};
