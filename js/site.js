/**
 * Cirrus Roofing — Shared site behavior.
 * Loaded on every page after js/business-config.js.
 * Safe to run multiple times; every routine checks for the elements
 * it needs before touching them, so pages missing a given component
 * (e.g. no FAQ accordion) are unaffected.
 */
(function () {
  "use strict";
  var CFG = window.CIRRUS_CONFIG || {};

  /* ---------------------------------------------------------------- */
  /* ANALYTICS (no-op until real IDs are configured)                   */
  /* ---------------------------------------------------------------- */
  function analyticsReady() {
    return !!(CFG.analytics && CFG.analytics.ga4MeasurementId);
  }

  function loadAnalyticsScripts() {
    if (!analyticsReady() || window.__cirrusAnalyticsLoaded) return;
    window.__cirrusAnalyticsLoaded = true;
    var id = CFG.analytics.ga4MeasurementId;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", id);
  }

  /**
   * trackEvent(name, params)
   * Safe no-op until CIRRUS_CONFIG.analytics.ga4MeasurementId is set.
   * Recognized event names used across the site:
   * phone_click, emergency_call_click, estimate_cta_click,
   * estimate_form_start, estimate_form_submit, estimate_form_error,
   * email_click, project_view, thank_you_page_view
   */
  function trackEvent(name, params) {
    if (!analyticsReady()) return;
    loadAnalyticsScripts();
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params || {});
    }
  }
  window.cirrusTrackEvent = trackEvent;

  function wireAnalyticsClicks() {
    document.querySelectorAll("[data-event]").forEach(function (el) {
      el.addEventListener("click", function () {
        trackEvent(el.getAttribute("data-event"), {
          page_location: window.location.href,
        });
      });
    });
    document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
      if (el.hasAttribute("data-event")) return; // already handled above
      el.addEventListener("click", function () {
        trackEvent("phone_click", { page_location: window.location.href });
      });
    });
    document.querySelectorAll('a[href^="mailto:"]').forEach(function (el) {
      el.addEventListener("click", function () {
        trackEvent("email_click", { page_location: window.location.href });
      });
    });
  }

  /* ---------------------------------------------------------------- */
  /* NAV: hamburger / drawer / scroll shadow                           */
  /* ---------------------------------------------------------------- */
  function initNav() {
    var burger = document.getElementById("hamburger");
    var drawer = document.getElementById("drawer");
    var drawerClose = document.getElementById("drawerClose");
    if (burger && drawer) {
      burger.addEventListener("click", function () {
        drawer.classList.add("open");
        var firstLink = drawer.querySelector("a");
        if (firstLink) firstLink.focus();
      });
    }
    if (drawerClose && drawer) {
      drawerClose.addEventListener("click", function () {
        drawer.classList.remove("open");
        if (burger) burger.focus();
      });
    }
    if (drawer) {
      drawer.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () { drawer.classList.remove("open"); });
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && drawer.classList.contains("open")) {
          drawer.classList.remove("open");
          if (burger) burger.focus();
        }
      });
    }
    var nav = document.getElementById("mainNav");
    if (nav) {
      window.addEventListener("scroll", function () {
        nav.style.boxShadow = window.scrollY > 20 ? "0 2px 20px rgba(0,0,0,.3)" : "";
      }, { passive: true });
    }
  }

  /* ---------------------------------------------------------------- */
  /* ANNOUNCEMENT BAR TICKER (mobile)                                   */
  /* ---------------------------------------------------------------- */
  function initTicker() {
    var wrap = document.getElementById("tickerWrap");
    if (!wrap) return;
    var ticks = wrap.querySelectorAll(".tick");
    if (!ticks.length) return;
    var i = 0;
    setInterval(function () {
      ticks[i].classList.remove("active");
      i = (i + 1) % ticks.length;
      ticks[i].classList.add("active");
    }, 2600);
  }

  /* ---------------------------------------------------------------- */
  /* FLOATING CTA                                                       */
  /* ---------------------------------------------------------------- */
  function initFloatCta() {
    var floatCta = document.getElementById("floatCta");
    if (!floatCta) return;
    var dismissed = false, shown = false;
    window.addEventListener("scroll", function () {
      if (!dismissed && !shown && window.scrollY > 400) {
        shown = true;
        floatCta.classList.add("vis");
      }
    }, { passive: true });
    window.dismissFloat = function () {
      dismissed = true;
      floatCta.classList.remove("vis");
    };
  }

  /* ---------------------------------------------------------------- */
  /* FAQ ACCORDION (keyboard accessible)                                */
  /* ---------------------------------------------------------------- */
  function initFAQ() {
    document.querySelectorAll(".faq-q").forEach(function (q) {
      if (!q.hasAttribute("tabindex")) q.setAttribute("tabindex", "0");
      if (!q.hasAttribute("role")) q.setAttribute("role", "button");
      q.setAttribute("aria-expanded", "false");
      function toggle() {
        var item = q.closest(".faq-item");
        var isOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item").forEach(function (i) {
          i.classList.remove("open");
          var qq = i.querySelector(".faq-q");
          if (qq) qq.setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          item.classList.add("open");
          q.setAttribute("aria-expanded", "true");
        }
      }
      q.addEventListener("click", toggle);
      q.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  /* ---------------------------------------------------------------- */
  /* REVEAL ON SCROLL                                                   */
  /* ---------------------------------------------------------------- */
  function initReveal() {
    document.body.classList.add("js-loaded");
    var els = document.querySelectorAll(".reveal");
    if (!els.length || !("IntersectionObserver" in window)) return;
    var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { observer.observe(el); });
  }

  /* ---------------------------------------------------------------- */
  /* TRUST CLAIM RENDERING                                              */
  /* Elements marked data-trust="<field>" are hidden by default in CSS  */
  /* ([data-trust]{display:none}) and only revealed here once the      */
  /* matching config field is verified AND populated.                  */
  /* ---------------------------------------------------------------- */
  function initTrustBadges() {
    document.querySelectorAll("[data-trust]").forEach(function (el) {
      var field = el.getAttribute("data-trust");
      var show = false;
      var text = null;

      switch (field) {
        case "license":
          if (CFG.license && CFG.license.verified && CFG.license.cslbNumber) {
            show = true;
            text = "CSLB #" + CFG.license.cslbNumber;
          }
          break;
        case "insured":
          show = !!(CFG.insurance && CFG.insurance.verified);
          text = "Insured";
          break;
        case "bonded":
          show = !!(CFG.bonded && CFG.bonded.verified);
          text = "Bonded";
          break;
        case "experience":
          if (CFG.experience && CFG.experience.verified && CFG.experience.yearsStatement) {
            show = true;
            text = CFG.experience.yearsStatement;
          }
          break;
        case "emergency-available":
          show = !!(CFG.emergency && CFG.emergency.available);
          break;
        case "hours":
          if (CFG.hours && CFG.hours.verified && CFG.hours.weekday) {
            show = true;
            text = CFG.hours.weekday;
          }
          break;
        case "warranty":
          if (CFG.warranty && CFG.warranty.verified && CFG.warranty.statement) {
            show = true;
            text = CFG.warranty.statement;
          }
          break;
        case "certifications":
          show = !!(CFG.certifications && CFG.certifications.verified && CFG.certifications.list.length);
          if (show) text = CFG.certifications.list.join(", ");
          break;
        case "google-review-link":
          show = !!(CFG.reviews && CFG.reviews.googleUrl);
          if (show) el.setAttribute("href", CFG.reviews.googleUrl);
          break;
        case "yelp-review-link":
          show = !!(CFG.reviews && CFG.reviews.yelpUrl);
          if (show) el.setAttribute("href", CFG.reviews.yelpUrl);
          break;
        default:
          show = false;
      }

      if (show) {
        el.style.display = "";
        el.removeAttribute("hidden");
        if (text && el.hasAttribute("data-trust-text")) {
          el.textContent = text;
        }
      } else {
        el.style.display = "none";
        el.setAttribute("hidden", "");
      }
    });
  }

  /* ---------------------------------------------------------------- */
  /* ATTRIBUTION CAPTURE (UTM / gclid / referrer / landing page)        */
  /* ---------------------------------------------------------------- */
  function captureAttribution() {
    var params = new URLSearchParams(window.location.search);
    var keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];
    var stored;
    try {
      stored = JSON.parse(sessionStorage.getItem("cirrus_attribution") || "{}");
    } catch (e) {
      stored = {};
    }
    var hasNew = false;
    keys.forEach(function (k) {
      var v = params.get(k);
      if (v) {
        stored[k] = v;
        hasNew = true;
      }
    });
    if (!stored.landing_page) {
      stored.landing_page = window.location.href;
      hasNew = true;
    }
    if (!stored.referrer && document.referrer) {
      stored.referrer = document.referrer;
      hasNew = true;
    }
    if (hasNew) {
      try { sessionStorage.setItem("cirrus_attribution", JSON.stringify(stored)); } catch (e) {}
    }
    return stored;
  }

  function applyAttributionToForms() {
    var attribution = captureAttribution();
    document.querySelectorAll("form.js-estimate-form").forEach(function (form) {
      Object.keys(attribution).forEach(function (key) {
        var input = form.querySelector('input[name="' + key + '"]');
        if (input) input.value = attribution[key];
      });
      var pageTitleInput = form.querySelector('input[name="page_title"]');
      if (pageTitleInput) pageTitleInput.value = document.title;
      var pageUrlInput = form.querySelector('input[name="page_url"]');
      if (pageUrlInput) pageUrlInput.value = window.location.href;
    });
  }

  /* ---------------------------------------------------------------- */
  /* ESTIMATE FORM HANDLER                                              */
  /* Any <form class="js-estimate-form"> is wired automatically.       */
  /* Expected structure inside the form:                                */
  /*   .js-submit-btn (button), .js-btn-text (span), .js-btn-spin (svg) */
  /*   .js-form-error (error box), honeypot input name="botcheck"      */
  /* ---------------------------------------------------------------- */
  function attachEstimateForms() {
    document.querySelectorAll("form.js-estimate-form").forEach(function (form) {
      var started = false;
      var submitting = false;
      form.addEventListener("focusin", function () {
        if (!started) {
          started = true;
          trackEvent("estimate_form_start", { page_location: window.location.href });
        }
      });

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (submitting) return; // prevent double submission

        var honeypot = form.querySelector('input[name="botcheck"]');
        if (honeypot && honeypot.value) {
          // Silently drop likely-bot submissions without giving feedback
          // that would help a bot iterate.
          return;
        }

        var errorBox = form.querySelector(".js-form-error");
        var btn = form.querySelector(".js-submit-btn");
        var btnText = form.querySelector(".js-btn-text");
        var btnSpin = form.querySelector(".js-btn-spin");
        var originalText = btnText ? btnText.textContent : null;

        if (errorBox) { errorBox.style.display = "none"; errorBox.textContent = ""; }
        submitting = true;
        if (btn) btn.disabled = true;
        if (btnText) btnText.textContent = "Sending…";
        if (btnSpin) btnSpin.style.display = "inline";

        var formData = new FormData(form);
        var redirectUrl = form.getAttribute("data-redirect");
        var serviceField = form.querySelector('[name="service"]');
        var endpoint = (CFG.forms && CFG.forms.endpoint) || "https://api.web3forms.com/submit";

        fetch(endpoint, { method: "POST", body: formData })
          .then(function (res) { return res.json(); })
          .then(function (data) {
            submitting = false;
            if (data.success) {
              trackEvent("estimate_form_submit", { page_location: window.location.href });
              if (redirectUrl) {
                var url = new URL(redirectUrl, window.location.href);
                if (serviceField && serviceField.value) url.searchParams.set("service", serviceField.value);
                window.location.href = url.toString();
                return;
              }
              form.style.display = "none";
              var successBox = form.parentElement.querySelector(".js-form-success");
              if (successBox) {
                successBox.style.display = "block";
                successBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
              }
            } else {
              throw new Error(data.message || "Submission failed");
            }
          })
          .catch(function () {
            submitting = false;
            trackEvent("estimate_form_error", { page_location: window.location.href });
            if (btn) btn.disabled = false;
            if (btnText) btnText.textContent = originalText;
            if (btnSpin) btnSpin.style.display = "none";
            if (errorBox) {
              errorBox.textContent = "There was a problem sending your request. Please call us directly at " + ((CFG.business && CFG.business.phone) || "our office") + ".";
              errorBox.style.display = "block";
              errorBox.setAttribute("role", "alert");
              errorBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
          });
      });
    });
  }

  /* ---------------------------------------------------------------- */
  /* INIT                                                                */
  /* ---------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initTicker();
    initFloatCta();
    initFAQ();
    initReveal();
    initTrustBadges();
    applyAttributionToForms();
    attachEstimateForms();
    wireAnalyticsClicks();
  });
})();
