/**
 * Brothers Nails & Lashes — La Quinta, CA
 * Shared Interactive Application Script (Navigation, Booking Engine, Gallery Filter & Lightbox, Modals)
 */

const SALON_INFO = {
  name: "BROTHERS Nails & Lashes",
  address: "78982 CA-111, Suite 1B, La Quinta, CA 92253",
  phoneDisplay: "(760) 300-0112",
  phoneRaw: "7603000112",
  instagramHandle: "@brothersnailslashes",
  instagramUrl: "https://www.instagram.com/brothersnailslashes",
  mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=78982+CA-111+Suite+1B+La+Quinta+CA+92253",
  hours: {
    monFri: "9:00 AM – 7:00 PM",
    sat: "9:00 AM – 6:00 PM",
    sun: "10:00 AM – 5:00 PM"
  }
};

const SERVICES_CATALOG = [
  {
    id: "mani-pedi",
    category: "Manicure & Pedicure",
    items: [
      { id: "manicure", name: "Manicure", price: 36.05, priceDisplay: "$36.05", duration: "35 mins" },
      { id: "gel-manicure", name: "Gel Manicure", price: 46.35, priceDisplay: "$46.35", duration: "45 mins" },
      { id: "gel-manicure-rubber", name: "Gel Manicure With Rubber Base", price: 56.65, priceDisplay: "$56.65", duration: "55 mins" },
      { id: "essential-pedicure", name: "Essential Pedicure", price: 43.26, priceDisplay: "$43.26", duration: "40 mins" },
      { id: "signature-pedicure", name: "Signature Pedicure", price: 58.71, priceDisplay: "$58.71", duration: "50 mins" },
      { id: "serenity-pedicure", name: "Serenity Pedicure", price: 69.01, priceDisplay: "$69.01", duration: "60 mins" },
      { id: "blue-moon-pedicure", name: "Blue Moon Pedicure", price: 91.67, priceDisplay: "$91.67", duration: "75 mins" }
    ]
  },
  {
    id: "full-set",
    category: "Nails Services • Full Set",
    items: [
      { id: "fs-acrylic-gel", name: "Acrylic With Gel Polish (Full Set)", price: 61.80, priceDisplay: "$61.80+", duration: "60 mins" },
      { id: "fs-acrylic-overlay", name: "Acrylic Overlay", price: 56.65, priceDisplay: "$56.65", duration: "55 mins" },
      { id: "fs-acrylic-ombre", name: "Acrylic Ombre", price: 72.10, priceDisplay: "$72.10+", duration: "65 mins" },
      { id: "fs-airbrush-ombre", name: "Acrylic Airbrush Ombre", price: 82.40, priceDisplay: "$82.40+", duration: "70 mins" },
      { id: "fs-pink-white", name: "Pink & White (Full Set)", price: 66.95, priceDisplay: "$66.95+", duration: "65 mins" },
      { id: "fs-dipping", name: "Dipping Powder", price: 56.65, priceDisplay: "$56.65", duration: "50 mins" },
      { id: "fs-gel-builder", name: "Gel Builder (Full Set)", price: 56.65, priceDisplay: "$56.65", duration: "60 mins" },
      { id: "fs-gel-extension", name: "Gel Extension (Full Set)", price: 61.80, priceDisplay: "$61.80+", duration: "65 mins" }
    ]
  },
  {
    id: "fill-in",
    category: "Nails Services • Fill In",
    items: [
      { id: "fi-acrylic-gel", name: "Acrylic With Gel Polish (Fill In)", price: 51.50, priceDisplay: "$51.50+", duration: "50 mins" },
      { id: "fi-pink-white", name: "Pink & White (Fill In)", price: 51.50, priceDisplay: "$51.50+", duration: "55 mins" },
      { id: "fi-gel-builder", name: "Gel Builder (Fill In)", price: 51.50, priceDisplay: "$51.50", duration: "50 mins" },
      { id: "fi-gel-extension", name: "Gel Extension (Fill In)", price: 56.65, priceDisplay: "$56.65", duration: "55 mins" }
    ]
  },
  {
    id: "brow-lash",
    category: "Brow & Lash",
    items: [
      { id: "classic-full", name: "Classic Lash Full Set", price: 118.45, priceDisplay: "$118.45", duration: "90 mins" },
      { id: "classic-refill-1w", name: "Classic Lash Refill (1 Week)", price: 46.35, priceDisplay: "$46.35", duration: "45 mins" },
      { id: "classic-refill-2w", name: "Classic Lash Refill (2–3 Weeks)", price: 66.95, priceDisplay: "$66.95", duration: "60 mins" },
      { id: "hybrid-full", name: "Hybrid Lash Full Set", price: 139.05, priceDisplay: "$139.05", duration: "105 mins" },
      { id: "hybrid-refill-1w", name: "Hybrid Lash Refill (1 Week)", price: 46.35, priceDisplay: "$46.35", duration: "45 mins" },
      { id: "hybrid-refill-2w", name: "Hybrid Lash Refill (2–3 Weeks)", price: 77.25, priceDisplay: "$77.25", duration: "65 mins" },
      { id: "volume-full", name: "Volume Lash Full Set", price: 159.65, priceDisplay: "$159.65", duration: "120 mins" },
      { id: "volume-refill-1w", name: "Volume Lash Refill (1 Week)", price: 51.50, priceDisplay: "$51.50", duration: "50 mins" },
      { id: "volume-refill-2w", name: "Volume Lash Refill (2–3 Weeks)", price: 92.70, priceDisplay: "$92.70", duration: "75 mins" },
      { id: "lash-lift", name: "Lash Lift", price: 66.95, priceDisplay: "$66.95", duration: "45 mins" },
      { id: "lash-lift-tint", name: "Lash Lift & Tint", price: 87.55, priceDisplay: "$87.55", duration: "55 mins" },
      { id: "brow-lamination", name: "Brow Shape & Lamination", price: 72.10, priceDisplay: "$72.10", duration: "45 mins" },
      { id: "brow-tint", name: "Brow Shape & Tint", price: 61.80, priceDisplay: "$61.80", duration: "35 mins" },
      { id: "brow-lam-tint", name: "Brow Shape, Lamination & Tint", price: 101.97, priceDisplay: "$101.97", duration: "60 mins" }
    ]
  },
  {
    id: "waxing",
    category: "Waxing",
    items: [
      { id: "wax-eyebrows", name: "Eyebrows Wax", price: 15.45, priceDisplay: "$15.45", duration: "15 mins" },
      { id: "wax-lip-chin", name: "Lip or Chin Wax", price: 8.24, priceDisplay: "$8.24", duration: "10 mins" },
      { id: "wax-sideburns", name: "Sideburns Wax", price: 12.36, priceDisplay: "$12.36", duration: "15 mins" },
      { id: "wax-full-face", name: "Full Face Wax", price: 46.35, priceDisplay: "$46.35", duration: "30 mins" },
      { id: "wax-underarms", name: "Underarms Wax", price: 20.60, priceDisplay: "$20.60", duration: "20 mins" },
      { id: "wax-half-legs", name: "Half Legs Wax", price: 61.80, priceDisplay: "$61.80", duration: "35 mins" },
      { id: "wax-full-legs", name: "Full Legs Wax", price: 82.40, priceDisplay: "$82.40", duration: "50 mins" },
      { id: "wax-half-arms", name: "Half Arms Wax", price: 46.35, priceDisplay: "$46.35", duration: "25 mins" },
      { id: "wax-full-arms", name: "Full Arms Wax", price: 61.80, priceDisplay: "$61.80", duration: "35 mins" }
    ]
  },
  {
    id: "kids",
    category: "Kid's Services (Under 12)",
    items: [
      { id: "kids-pedi", name: "Kid's Pedicure", price: 25.75, priceDisplay: "$25.75", duration: "25 mins" },
      { id: "kids-gel-pedi", name: "Kid's Gel Pedicure", price: 30.90, priceDisplay: "$30.90", duration: "35 mins" },
      { id: "kids-polish-reg", name: "Kid's Polish Change (Regular)", price: 10.30, priceDisplay: "$10.30", duration: "15 mins" },
      { id: "kids-polish-gel", name: "Kid's Polish Change (Gel)", price: 15.45, priceDisplay: "$15.45", duration: "20 mins" }
    ]
  },
  {
    id: "additional",
    category: "Additional Services",
    items: [
      { id: "add-nail-repair", name: "Nail Repair", price: 5.15, priceDisplay: "$5.15+", duration: "10 mins" },
      { id: "add-length", name: "Extra Length", price: 5.15, priceDisplay: "$5.15+", duration: "5 mins" },
      { id: "add-nail-design", name: "Custom Nail Design", price: 5.15, priceDisplay: "$5.15+", duration: "15 mins" },
      { id: "add-chrome", name: "Chrome Finish", price: 15.45, priceDisplay: "$15.45+", duration: "15 mins" },
      { id: "add-cat-eye", name: "Cat Eye Effect", price: 15.45, priceDisplay: "$15.45+", duration: "15 mins" },
      { id: "add-gel-polish", name: "Gel Polish Add-on", price: 10.30, priceDisplay: "$10.30", duration: "15 mins" },
      { id: "add-polish-change-reg", name: "Polish Change (Regular)", price: 20.60, priceDisplay: "$20.60", duration: "20 mins" },
      { id: "add-polish-change-gel", name: "Polish Change (Gel)", price: 30.90, priceDisplay: "$30.90", duration: "25 mins" },
      { id: "add-removal-only", name: "Nails Removal Only", price: 20.60, priceDisplay: "$20.60", duration: "20 mins" },
      { id: "add-removal-service", name: "Nails Removal With Service", price: 10.30, priceDisplay: "$10.30", duration: "15 mins" },
      { id: "add-french", name: "French Tip", price: 10.30, priceDisplay: "$10.30", duration: "15 mins" },
      { id: "add-deep-french", name: "Deep French Tip", price: 15.45, priceDisplay: "$15.45+", duration: "20 mins" },
      { id: "add-cuticle-trim", name: "Cuticle Trim", price: 10.30, priceDisplay: "$10.30", duration: "15 mins" },
      { id: "add-acrylic-toe", name: "Acrylic Toe", price: 8.24, priceDisplay: "$8.24+", duration: "15 mins" },
      { id: "add-callus-removal", name: "Callus Removal Only", price: 20.60, priceDisplay: "$20.60", duration: "20 mins" }
    ]
  }
];

// State for Booking Modal
let selectedServiceIds = new Set(["gel-manicure"]);
let activeBookingCategory = "mani-pedi";
let selectedTimeSlot = "10:30 AM";

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initHeroScrollAnimation();
  initServicesHorizontalScroll();
  initMasterpiecesEquator();
  initWelcomeScrollReveal();
  injectBookingModal();
  initBookingTriggers();
  initGalleryFeatures();
  initPolicyModals();
  initNewsletterForm();
});

function initNewsletterForm() {
  const form = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("newsletterEmail");
  const feedback = document.getElementById("newsletterFeedback");
  if (!form || !emailInput || !feedback) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!emailInput.value.trim()) return;
    feedback.classList.remove("hidden");
    emailInput.value = "";
  });
}

function initServicesHorizontalScroll() {
  const section = document.getElementById("services");
  const track = document.getElementById("servicesHorizontalTrack");
  if (!section || !track) return;

  const cards = Array.from(track.querySelectorAll(".service-slide-card"));
  const dots = Array.from(document.querySelectorAll("[data-service-dot]"));
  const prevBtn = document.getElementById("servicesPrevBtn");
  const nextBtn = document.getElementById("servicesNextBtn");

  let targetProgress = 0;
  let smoothProgress = 0;
  let currentActiveIdx = 0;

  function updateTargetFromScroll() {
    const rect = section.getBoundingClientRect();
    const stickyHeight = window.innerHeight;
    const maxScroll = Math.max(1, section.offsetHeight - stickyHeight);
    const scrolled = -rect.top;
    targetProgress = Math.max(0, Math.min(1, scrolled / maxScroll));
  }

  function scrollToCardIndex(idx) {
    const clamped = Math.max(0, Math.min(cards.length - 1, idx));
    const frac = cards.length > 1 ? clamped / (cards.length - 1) : 0;
    const maxScroll = Math.max(1, section.offsetHeight - window.innerHeight);
    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    window.scrollTo({
      top: sectionTop + frac * maxScroll,
      behavior: "smooth"
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      scrollToCardIndex(currentActiveIdx - 1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      scrollToCardIndex(currentActiveIdx + 1);
    });
  }
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-service-dot") || "0", 10);
      scrollToCardIndex(idx);
    });
  });

  // Clicking a side card brings it cleanly into the center spotlight instead of leaving page
  cards.forEach((card, idx) => {
    card.addEventListener("click", (e) => {
      if (idx !== currentActiveIdx) {
        e.preventDefault();
        scrollToCardIndex(idx);
      }
    });
  });

  function renderTrack() {
    smoothProgress += (targetProgress - smoothProgress) * 0.14;
    if (Math.abs(targetProgress - smoothProgress) < 0.0004) {
      smoothProgress = targetProgress;
    }

    const total = cards.length;
    const cursor = total > 1 ? smoothProgress * (total - 1) : 0;
    const activeIdx = Math.round(cursor);
    currentActiveIdx = activeIdx;

    const cardW = cards[0] ? cards[0].offsetWidth : 310;
    const stepX = cardW * 1.10;

    cards.forEach((card, i) => {
      // Signed circular offset in [-total/2, +total/2] for seamless 3-card spotlight wrap
      let d = (i - cursor) % total;
      if (d > total / 2) d -= total;
      if (d < -total / 2) d += total;

      const absD = Math.abs(d);
      const linearFocus = Math.max(0, 1 - Math.min(1, absD / 0.88));
      const focus = linearFocus * linearFocus * (3 - 2 * linearFocus);

      const x = d * stepX;
      const y = 18 - 26 * focus;         // Active spotlight lifts (-8px); flanking cards sink (+18px)
      const scale = 0.78 + 0.30 * focus; // Active scales up (1.08); flanking cards shrink (0.78)
      const isOffStage = absD > 2.15;

      card.style.transform = `translate3d(calc(-50% + ${x.toFixed(1)}px), calc(-50% + ${y.toFixed(1)}px), 0) scale(${scale.toFixed(4)})`;
      card.style.opacity = "1";
      card.style.filter = "";
      card.style.zIndex = String(Math.round(30 - absD * 10));
      card.style.pointerEvents = isOffStage ? "none" : "auto";
      card.style.visibility = isOffStage ? "hidden" : "visible";

      if (i === activeIdx) {
        card.classList.add("is-active");
      } else {
        card.classList.remove("is-active");
      }
    });

    if (prevBtn) {
      prevBtn.classList.toggle("opacity-50", activeIdx <= 0);
    }
    if (nextBtn) {
      nextBtn.classList.toggle("opacity-50", activeIdx >= total - 1);
    }

    dots.forEach((dot, i) => {
      if (i === activeIdx) {
        dot.classList.add("bg-[#c59b38]", "w-12");
        dot.classList.remove("bg-primary/15", "w-10");
      } else {
        dot.classList.remove("bg-[#c59b38]", "w-12");
        dot.classList.add("bg-primary/15", "w-10");
      }
    });

    requestAnimationFrame(renderTrack);
  }

  updateTargetFromScroll();
  smoothProgress = targetProgress;
  window.addEventListener("scroll", updateTargetFromScroll, { passive: true });
  window.addEventListener("resize", updateTargetFromScroll);
  requestAnimationFrame(renderTrack);
}

function initMasterpiecesEquator() {
  const section = document.getElementById("gallery");
  const pillViewport = document.getElementById("galleryPillViewport");
  const deckStage = document.getElementById("galleryDeckStage");
  if (!section || !pillViewport || !deckStage) return;

  const pills = Array.from(pillViewport.querySelectorAll("[data-equator-pill]"));
  const cards = Array.from(deckStage.querySelectorAll("[data-equator-card]"));
  const prevBtn = document.getElementById("galleryEquatorPrev");
  const nextBtn = document.getElementById("galleryEquatorNext");
  const counterEl = document.getElementById("galleryEquatorCounter");
  const total = cards.length;
  if (total === 0) return;

  let targetProgress = 0;
  let smoothProgress = 0;
  let currentActiveIdx = 0;
  let dragPullPx = 0;
  let isDragging = false;
  let dragStartX = 0;

  function updateTargetFromScroll() {
    const rect = section.getBoundingClientRect();
    const maxScroll = Math.max(1, section.offsetHeight - window.innerHeight);
    const scrolled = -rect.top;
    targetProgress = Math.max(0, Math.min(1, scrolled / maxScroll));
  }

  function scrollToMasterpiece(idx) {
    const clamped = Math.max(0, Math.min(total - 1, idx));
    const frac = total > 1 ? clamped / (total - 1) : 0;
    const maxScroll = Math.max(1, section.offsetHeight - window.innerHeight);
    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    window.scrollTo({
      top: sectionTop + frac * maxScroll,
      behavior: "smooth"
    });
  }

  pills.forEach((pill, i) => {
    pill.addEventListener("click", () => scrollToMasterpiece(i));
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => scrollToMasterpiece(currentActiveIdx - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => scrollToMasterpiece(currentActiveIdx + 1));
  }

  // Allow horizontal flick or drag directly on the card deck
  deckStage.addEventListener("pointerdown", (e) => {
    isDragging = true;
    dragStartX = e.clientX;
    deckStage.setPointerCapture(e.pointerId);
  });

  deckStage.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX;
    dragPullPx = Math.max(-90, Math.min(90, dx * 0.45));
  });

  function finishDeckDrag(e) {
    if (!isDragging) return;
    isDragging = false;
    const dx = e.clientX - dragStartX;
    if (dx < -35) {
      scrollToMasterpiece(currentActiveIdx + 1);
    } else if (dx > 35) {
      scrollToMasterpiece(currentActiveIdx - 1);
    }
    if (deckStage.hasPointerCapture(e.pointerId)) {
      deckStage.releasePointerCapture(e.pointerId);
    }
  }

  deckStage.addEventListener("pointerup", finishDeckDrag);
  deckStage.addEventListener("pointercancel", finishDeckDrag);

  function positionPills(cursor, activeIdx) {
    const isDesktop = window.innerWidth >= 1024;
    const step = isDesktop ? 62 : 176;

    pills.forEach((pill, i) => {
      const offset = i - cursor;
      const dist = Math.abs(offset);
      const isFocused = i === activeIdx;
      const scale = isFocused ? 1.05 : Math.max(0.88, 0.96 - dist * 0.02);

      const tx = isDesktop ? 0 : offset * step;
      const ty = isDesktop ? offset * step : 0;

      pill.style.transform = `translate3d(calc(-50% + ${tx.toFixed(1)}px), calc(-50% + ${ty.toFixed(1)}px), 0) scale(${scale.toFixed(3)})`;
      pill.style.zIndex = isFocused ? "20" : "10";
      pill.style.visibility = dist > 4.2 ? "hidden" : "visible";
      pill.classList.toggle("is-active", isFocused);
    });
  }

  function positionDeck(cursor) {
    const cardW = cards[0] ? cards[0].offsetWidth : 340;
    const peekStepX = Math.max(15, cardW * 0.068);
    const peekStepY = Math.max(5, cardW * 0.018);
    const exitSlideX = Math.max(165, cardW * 0.65);

    cards.forEach((card, i) => {
      let d = (i - cursor) % total;
      if (d < -1.15) d += total;
      if (d >= total - 1.15) d -= total;

      let x = 0;
      let y = 0;
      let rot = 0;
      let scale = 1;
      let opacity = 1;
      let zIndex = 10;

      if (d < 0 && d >= -1.05) {
        // Exiting top card slides left crisply before fading out so photos stay sharp
        const t = -d;
        x = -t * exitSlideX + (t < 0.25 ? dragPullPx * (1 - t * 4) : 0);
        y = -t * 14;
        rot = -t * 7;
        scale = 1 - t * 0.08;
        opacity = t < 0.42 ? 1 : Math.max(0, 1 - (t - 0.42) / 0.50);
        zIndex = 40;
      } else if (d >= 0 && d <= 2.45) {
        // Front hero card (d = 0) + 2 behind peek cards stacked diagonally
        const k = d;
        x = k * peekStepX + (k < 0.5 ? dragPullPx * (1 - k * 2) : 0);
        y = -k * peekStepY;
        rot = k * 2.5;
        scale = Math.max(0.74, 1 - k * 0.085);
        if (k <= 1) {
          opacity = 1 - k * 0.10;
        } else if (k <= 2.05) {
          opacity = 0.90 - (k - 1) * 0.18;
        } else {
          opacity = Math.max(0, 0.71 * (1 - (k - 2.05) / 0.4));
        }
        zIndex = Math.round(32 - k * 10);
      } else {
        opacity = 0;
        zIndex = 0;
      }

      card.style.transform = `translate3d(calc(-50% + ${x.toFixed(1)}px), calc(-50% + ${y.toFixed(1)}px), 0) rotate(${rot.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
      card.style.opacity = opacity.toFixed(3);
      card.style.zIndex = String(zIndex);
      card.style.visibility = opacity < 0.02 ? "hidden" : "visible";
      card.style.pointerEvents = zIndex >= 30 ? "auto" : "none";
    });
  }

  function renderEquator() {
    smoothProgress += (targetProgress - smoothProgress) * 0.18;
    if (Math.abs(targetProgress - smoothProgress) < 0.0004) {
      smoothProgress = targetProgress;
    }

    if (!isDragging && Math.abs(dragPullPx) > 0.2) {
      dragPullPx *= 0.8;
    } else if (!isDragging) {
      dragPullPx = 0;
    }

    const cursor = total > 1 ? smoothProgress * (total - 1) : 0;
    const activeIdx = Math.round(cursor);
    currentActiveIdx = activeIdx;

    positionPills(cursor, activeIdx);
    positionDeck(cursor);

    if (counterEl) {
      counterEl.textContent = `${String(activeIdx + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
    }
    if (prevBtn) {
      prevBtn.classList.toggle("opacity-45", activeIdx <= 0);
    }
    if (nextBtn) {
      nextBtn.classList.toggle("opacity-45", activeIdx >= total - 1);
    }

    requestAnimationFrame(renderEquator);
  }

  updateTargetFromScroll();
  smoothProgress = targetProgress;
  window.addEventListener("scroll", updateTargetFromScroll, { passive: true });
  window.addEventListener("resize", updateTargetFromScroll);
  requestAnimationFrame(renderEquator);
}

/**
 * Scroll-scrubbed depth-of-field rise for the "#contact" We Look Forward To Welcoming You banner
 * and Contact Info header/grid directly below it (inspired by smooth focus-pull scroll reveals).
 */
function initWelcomeScrollReveal() {
  const banner = document.getElementById("welcomeBanner");
  if (!banner) return;

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const bannerBg = document.getElementById("welcomeBannerBg");
  const accentLine = document.getElementById("welcomeAccentLine");
  const words = Array.from(banner.querySelectorAll("[data-welcome-word]"));
  const infoHeader = document.getElementById("contactInfoHeader");
  const infoGrid = document.getElementById("contactInfoGrid");

  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const easeOutCubic = (v) => 1 - Math.pow(1 - v, 3);

  function applyDepthFocusRise(el, t, maxTranslateY, minScale, maxBlur) {
    if (!el) return;
    if (t >= 0.998) {
      el.style.transform = "none";
      el.style.filter = "none";
      el.style.opacity = "1";
      return;
    }
    const inv = 1 - t;
    const ty = inv * maxTranslateY;
    const scale = minScale + t * (1 - minScale);
    const blur = inv * maxBlur;
    const opacity = Math.min(1, Math.pow(t, 0.72));
    el.style.transform = `translate3d(0, ${ty.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
    el.style.filter = blur > 0.12 ? `blur(${blur.toFixed(2)}px)` : "none";
    el.style.opacity = opacity.toFixed(3);
  }

  let targetTextP = 0;
  let smoothTextP = 0;
  let targetBgP = 0;
  let smoothBgP = 0;
  let targetInfoP = 0;
  let smoothInfoP = 0;
  let rafId = null;

  function computeTargets() {
    const vh = window.innerHeight || 800;
    const docHeight = document.documentElement.scrollHeight;
    const atBottom = (window.scrollY + vh) >= (docHeight - 10);

    const rect = banner.getBoundingClientRect();
    const bannerCenter = rect.top + rect.height * 0.5;
    const startCenter = vh * 1.04;
    const endCenter = vh * 0.54;
    targetTextP = atBottom ? 1 : clamp01((startCenter - bannerCenter) / Math.max(1, startCenter - endCenter));

    const bgStartTop = vh;
    const bgEndTop = -rect.height;
    targetBgP = clamp01((bgStartTop - rect.top) / Math.max(1, bgStartTop - bgEndTop));

    if (infoHeader) {
      const hRect = infoHeader.getBoundingClientRect();
      const infoStart = vh * 0.99;
      const infoEnd = vh * 0.72;
      targetInfoP = atBottom ? 1 : clamp01((infoStart - hRect.top) / Math.max(1, infoStart - infoEnd));
    }
  }

  function applyVisuals() {
    // 1. Subtle opposing parallax & focus-settle on the salon banner backdrop
    if (bannerBg) {
      const bgScale = 1.14 - smoothBgP * 0.04;
      const bgY = -14 + smoothBgP * 26;
      bannerBg.style.transform = `translate3d(0, ${bgY.toFixed(2)}px, 0) scale(${bgScale.toFixed(4)})`;
    }

    // 2. Gold horizontal accent bar rises & expands horizontally into glow
    if (accentLine) {
      const tLine = easeOutCubic(clamp01(smoothTextP / 0.65));
      if (tLine >= 0.998) {
        accentLine.style.transform = "none";
        accentLine.style.filter = "none";
        accentLine.style.opacity = "1";
      } else {
        const inv = 1 - tLine;
        const ty = inv * 44;
        const sx = 0.18 + tLine * 0.82;
        const blur = inv * 7;
        accentLine.style.transform = `translate3d(0, ${ty.toFixed(2)}px, 0) scaleX(${sx.toFixed(4)})`;
        accentLine.style.filter = blur > 0.12 ? `blur(${blur.toFixed(2)}px)` : "none";
        accentLine.style.opacity = Math.min(1, Math.pow(tLine, 0.75)).toFixed(3);
      }
    }

    // 3. Words cascade smoothly upward from soft depth blur into crisp focus
    const wordWindow = 0.75;
    const maxOffset = 0.25;
    const count = words.length;
    words.forEach((word, idx) => {
      const delay = count > 1 ? (idx / (count - 1)) * maxOffset : 0;
      const localP = clamp01((smoothTextP - delay) / wordWindow);
      const t = easeOutCubic(localP);
      const travelY = 74 + idx * 4;
      applyDepthFocusRise(word, t, travelY, 0.90, 13);
    });

    // 4. Cohesive soft follow-up rise on Contact Info heading & grid below
    if (infoHeader) {
      const tHeader = easeOutCubic(clamp01(smoothInfoP / 0.78));
      applyDepthFocusRise(infoHeader, tHeader, 36, 0.96, 6);
    }
    if (infoGrid) {
      const tGrid = easeOutCubic(clamp01((smoothInfoP - 0.14) / 0.86));
      applyDepthFocusRise(infoGrid, tGrid, 46, 0.97, 6);
    }
  }

  function step() {
    rafId = null;
    const lerp = 0.14;
    smoothTextP += (targetTextP - smoothTextP) * lerp;
    smoothBgP += (targetBgP - smoothBgP) * lerp;
    smoothInfoP += (targetInfoP - smoothInfoP) * lerp;

    const settledText = Math.abs(targetTextP - smoothTextP) < 0.0006;
    const settledBg = Math.abs(targetBgP - smoothBgP) < 0.0006;
    const settledInfo = Math.abs(targetInfoP - smoothInfoP) < 0.0006;

    if (settledText) smoothTextP = targetTextP;
    if (settledBg) smoothBgP = targetBgP;
    if (settledInfo) smoothInfoP = targetInfoP;

    applyVisuals();

    if (!settledText || !settledBg || !settledInfo) {
      rafId = requestAnimationFrame(step);
    }
  }

  function scheduleUpdate() {
    computeTargets();
    if (!rafId) {
      rafId = requestAnimationFrame(step);
    }
  }

  // Sync initial state cleanly with zero flash (handles page reload mid-scroll & #contact links)
  computeTargets();
  smoothTextP = targetTextP;
  smoothBgP = targetBgP;
  smoothInfoP = targetInfoP;
  applyVisuals();

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
}

function initHeroScrollAnimation() {
  const heroSection = document.getElementById("home");
  const canvas = document.getElementById("heroScrollCanvas");
  if (!heroSection || !canvas) return;

  const ctx = canvas.getContext("2d");
  const handCanvas = document.getElementById("heroHandOverlayCanvas");
  const handCtx = handCanvas ? handCanvas.getContext("2d") : null;
  const offCanvas = document.createElement("canvas");
  const offCtx = offCanvas.getContext("2d", { willReadFrequently: true });
  const stage1 = document.getElementById("heroStage1");
  const stage2 = document.getElementById("heroStage2");
  const stage3 = document.getElementById("heroStage3");
  const overlayGradient = document.getElementById("heroOverlayGradient");
  const progressEl = document.getElementById("heroScrollProgress");

  const TOTAL_FRAMES = 150;
  const frameCache = {
    horizontal: new Array(TOTAL_FRAMES),
    vertical: new Array(TOTAL_FRAMES)
  };
  const loadedSets = {
    horizontal: false,
    vertical: false
  };

  let currentMode = window.innerWidth < 768 ? "vertical" : "horizontal";
  let targetProgress = 0;
  let smoothProgress = 0;
  let lastRenderedIndex = -1;

  function getFramePath(mode, index1Based) {
    const padded = String(index1Based).padStart(4, "0");
    return `assets/frames/${mode}/frame_${padded}.webp`;
  }

  function preloadSet(mode) {
    if (loadedSets[mode]) return;
    loadedSets[mode] = true;

    // Load frame 1 immediately for instant first paint
    const firstImg = new Image();
    firstImg.decoding = "async";
    firstImg.src = getFramePath(mode, 1);
    firstImg.onload = () => {
      frameCache[mode][0] = firstImg;
      if (mode === currentMode) {
        drawFrame(0, true);
      }
    };

    // Load remaining frames in priority order (keyframes first, then fill-ins)
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = getFramePath(mode, i);
      const idx = i - 1;
      img.onload = () => {
        frameCache[mode][idx] = img;
      };
    }
  }

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    if (handCanvas) {
      handCanvas.width = canvas.width;
      handCanvas.height = canvas.height;
    }

    const newMode = window.innerWidth < 768 ? "vertical" : "horizontal";
    if (newMode !== currentMode) {
      currentMode = newMode;
      preloadSet(currentMode);
    }
    lastRenderedIndex = -1;
    drawFrame(Math.round(smoothProgress * (TOTAL_FRAMES - 1)), true);
  }

  function findNearestLoadedFrame(mode, targetIdx) {
    const arr = frameCache[mode];
    if (arr[targetIdx]) return arr[targetIdx];
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      if (targetIdx - offset >= 0 && arr[targetIdx - offset]) return arr[targetIdx - offset];
      if (targetIdx + offset < TOTAL_FRAMES && arr[targetIdx + offset]) return arr[targetIdx + offset];
    }
    return null;
  }

  function drawFrame(frameIdx, force = false) {
    const clampedIdx = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIdx));
    if (!force && clampedIdx === lastRenderedIndex) return;

    const img = findNearestLoadedFrame(currentMode, clampedIdx);
    if (!img) return;

    lastRenderedIndex = clampedIdx;
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;
    if (!cw || !ch || !iw || !ih) return;

    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) * 0.5;
    const dy = (ch - dh) * 0.5;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);

    // Draw foreground hand over the right end of the title with identical pixel color space (no gradient mismatch)
    if (handCtx && handCanvas) {
      handCtx.clearRect(0, 0, cw, ch);
      if (currentMode === "horizontal" && smoothProgress < 0.42) {
        const rx = Math.round(cw * 0.44);
        const ry = Math.round(ch * 0.14);
        const rw = Math.round(cw * 0.30);
        const rh = Math.round(ch * 0.48);
        if (rw > 0 && rh > 0) {
          offCanvas.width = rw;
          offCanvas.height = rh;
          offCtx.clearRect(0, 0, rw, rh);
          offCtx.drawImage(canvas, rx, ry, rw, rh, 0, 0, rw, rh);
          const imgData = offCtx.getImageData(0, 0, rw, rh);
          const d = imgData.data;
          for (let i = 0; i < d.length; i += 4) {
            const diff = d[i] - d[i + 1]; // R - G
            if (diff <= 6) {
              d[i + 3] = 0;
            } else if (diff < 22) {
              d[i + 3] = Math.round(((diff - 6) / 16) * 255);
            }
          }
          offCtx.putImageData(imgData, 0, 0);
          handCtx.drawImage(offCanvas, rx, ry);
        }
      }
    }
  }

  const mainNavbarBand = document.getElementById("mainNavbarBand");

  function updateScrollTarget() {
    const rect = heroSection.getBoundingClientRect();
    const stickyHeight = canvas.parentElement.offsetHeight || window.innerHeight;
    const maxScroll = Math.max(1, heroSection.offsetHeight - stickyHeight);
    const scrolled = -rect.top;
    targetProgress = Math.max(0, Math.min(1, scrolled / maxScroll));

    if (mainNavbarBand) {
      if (rect.bottom <= 80) {
        mainNavbarBand.classList.remove("bg-transparent");
        mainNavbarBand.classList.add("bg-primary-container/95", "backdrop-blur-md", "shadow-[0_8px_30px_rgba(0,18,15,0.28)]");
      } else {
        mainNavbarBand.classList.add("bg-transparent");
        mainNavbarBand.classList.remove("bg-primary-container/95", "backdrop-blur-md", "shadow-[0_8px_30px_rgba(0,18,15,0.28)]");
      }
    }
  }

  function updateStageOverlays(p) {
    if (progressEl) {
      progressEl.style.width = `${(p * 100).toFixed(1)}%`;
    }

    // Stage 1: Visible from 0.00 -> 0.26, fades out by 0.40
    if (stage1) {
      let op1 = 1;
      let ty1 = 0;
      if (p > 0.24) {
        const t = Math.min(1, (p - 0.24) / 0.16);
        op1 = 1 - t;
        ty1 = -36 * t;
      }
      stage1.style.opacity = op1.toFixed(3);
      stage1.style.transform = `translate3d(0, ${ty1.toFixed(1)}px, 0)`;
      stage1.style.pointerEvents = op1 > 0.2 ? "auto" : "none";
      stage1.style.visibility = op1 > 0.02 ? "visible" : "hidden";
    }

    if (overlayGradient) {
      const gradOp = p < 0.25 ? 1 : Math.max(0.25, 1 - (p - 0.25) * 1.4);
      overlayGradient.style.opacity = gradOp.toFixed(3);
    }

    // Stage 2: Fades in 0.40 -> 0.48, holds until 0.64, fades out by 0.72
    if (stage2) {
      let op2 = 0;
      let ty2 = 24;
      if (p >= 0.40 && p <= 0.72) {
        if (p < 0.48) {
          const t = (p - 0.40) / 0.08;
          op2 = t;
          ty2 = (1 - t) * 24;
        } else if (p <= 0.64) {
          op2 = 1;
          ty2 = 0;
        } else {
          const t = (p - 0.64) / 0.08;
          op2 = 1 - t;
          ty2 = -20 * t;
        }
      }
      stage2.style.opacity = op2.toFixed(3);
      stage2.style.transform = `translate3d(0, ${ty2.toFixed(1)}px, 0)`;
      stage2.style.pointerEvents = op2 > 0.3 ? "auto" : "none";
      stage2.style.visibility = op2 > 0.02 ? "visible" : "hidden";
    }

    // Soft feathered white mist at the bottom of Hero as Signature Services rises up
    const bottomFeather = document.getElementById("heroBottomFeather");
    const scrollIndicator = document.getElementById("heroScrollIndicator");
    if (bottomFeather) {
      const featherOp = p <= 0.62 ? 0.15 : Math.min(1, 0.15 + ((p - 0.62) / 0.32) * 0.85);
      bottomFeather.style.opacity = featherOp.toFixed(3);
    }
    if (scrollIndicator) {
      scrollIndicator.style.opacity = p > 0.82 ? Math.max(0, 1 - (p - 0.82) / 0.15).toFixed(3) : "1";
    }
  }

  function tick() {
    smoothProgress += (targetProgress - smoothProgress) * 0.16;
    if (Math.abs(targetProgress - smoothProgress) < 0.0005) {
      smoothProgress = targetProgress;
    }

    const frameIndex = Math.round(smoothProgress * (TOTAL_FRAMES - 1));
    drawFrame(frameIndex);
    updateStageOverlays(smoothProgress);

    requestAnimationFrame(tick);
  }

  preloadSet(currentMode);
  resizeCanvas();
  updateScrollTarget();
  smoothProgress = targetProgress;
  updateStageOverlays(smoothProgress);

  window.addEventListener("scroll", updateScrollTarget, { passive: true });
  window.addEventListener("resize", () => {
    resizeCanvas();
    updateScrollTarget();
  });

  requestAnimationFrame(tick);
}

function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // Interactive active state for Navbar Pill Tabs on click
  const pillTabs = document.querySelectorAll(".nav-pill-tab");
  if (pillTabs.length > 0) {
    pillTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        pillTabs.forEach((t) => {
          t.classList.remove("bg-primary", "text-[#f5c84c]", "shadow-md");
          t.classList.add("text-[#ffe088]", "hover:bg-primary/40");
        });
        tab.classList.remove("text-[#ffe088]", "hover:bg-primary/40");
        tab.classList.add("bg-primary", "text-[#f5c84c]", "shadow-md");
      });
    });
  }
}

function injectBookingModal() {
  if (document.getElementById("bookingModal")) return;

  const todayStr = new Date().toISOString().split("T")[0];

  const modalHtml = `
  <div id="bookingModal" class="fixed inset-0 z-[100] hidden items-center justify-center p-4 sm:p-6 modal-backdrop transition-opacity duration-300">
    <div class="bg-surface text-on-surface w-full max-w-4xl rounded-2xl shadow-2xl border border-secondary-fixed/40 overflow-hidden flex flex-col max-h-[90vh] animate-fadeIn">
      <!-- Modal Top Header -->
      <div class="bg-primary-container text-surface px-6 py-5 flex items-center justify-between border-b border-secondary-fixed/25 shrink-0">
        <div class="flex items-center gap-3">
          <img src="assets/images/brand/logo-transparent.png" alt="Brothers Nails & Lashes" class="h-10 w-10 object-contain rounded-full bg-primary p-1 border border-secondary-fixed/30" />
          <div>
            <span class="font-label-sm text-secondary-fixed uppercase tracking-widest block text-[10px]">La Quinta Sanctuary Concierge</span>
            <h3 class="font-headline-md text-xl md:text-2xl text-white font-medium">Reserve Your Appointment</h3>
          </div>
        </div>
        <button id="closeBookingModal" aria-label="Close Booking Modal" class="w-9 h-9 rounded-full bg-surface/10 hover:bg-surface/20 text-secondary-fixed flex items-center justify-center transition-colors">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <!-- Modal Body -->
      <div id="bookingFormView" class="overflow-y-auto custom-scrollbar p-6 md:p-8 space-y-8 flex-1">
        <!-- Step 1: Select Services -->
        <div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-outline-variant/30 mb-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-secondary">Step 1</span>
              <h4 class="font-headline-md text-lg text-primary font-medium">Select Your Treatments</h4>
            </div>
            <span id="selectedCountBadge" class="text-xs font-semibold px-3 py-1 rounded-full bg-primary-container text-secondary-fixed self-start sm:self-auto">1 Service Selected</span>
          </div>

          <!-- Category Tabs -->
          <div id="bookingCategoryTabs" class="flex items-center gap-2 overflow-x-auto pb-2 mb-4"></div>

          <!-- Services Checklist Grid -->
          <div id="bookingServicesList" class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto custom-scrollbar pr-1"></div>
        </div>

        <!-- Step 2: Date, Time & Artisan -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2 border-t border-outline-variant/30">
          <div class="md:col-span-5 space-y-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-secondary">Step 2</span>
              <h4 class="font-headline-md text-lg text-primary font-medium">Preferred Date & Artisan</h4>
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">Appointment Date</label>
              <input type="date" id="bookingDate" min="${todayStr}" value="${todayStr}" class="w-full rounded-lg bg-surface-container-lowest border border-outline-variant/50 focus:border-secondary focus:ring-1 focus:ring-secondary px-3.5 py-2.5 text-sm text-primary font-medium" />
              <p id="salonHoursHint" class="text-[11px] text-secondary mt-1 font-medium">Hours: Mon–Fri 9am–7pm • Sat 9am–6pm • Sun 10am–5pm</p>
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">Artisan Preference</label>
              <select id="bookingSpecialist" class="w-full rounded-lg bg-surface-container-lowest border border-outline-variant/50 focus:border-secondary focus:ring-1 focus:ring-secondary px-3.5 py-2.5 text-sm text-primary font-medium">
                <option value="First Available Master Artisan">First Available Master Artisan</option>
                <option value="Senior Nail Sculptor">Senior Nail Sculptor (Acrylic / Builder Gel)</option>
                <option value="Master Lash & Brow Artist">Master Lash & Brow Artist</option>
                <option value="Spa Pedicure Specialist">Spa Pedicure Specialist</option>
              </select>
            </div>
          </div>

          <div class="md:col-span-7 space-y-3">
            <div class="flex items-center justify-between">
              <label class="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Available Time Slots</label>
              <span class="text-xs text-on-surface-variant">La Quinta Local Time (PST)</span>
            </div>
            <div id="bookingTimeSlots" class="grid grid-cols-3 sm:grid-cols-4 gap-2"></div>
          </div>
        </div>

        <!-- Step 3: Guest Information -->
        <div class="pt-4 border-t border-outline-variant/30 space-y-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-secondary">Step 3</span>
            <h4 class="font-headline-md text-lg text-primary font-medium">Guest Details</h4>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1">Full Name *</label>
              <input type="text" id="bookingName" placeholder="e.g. Sophia Laurent" required class="w-full rounded-lg bg-surface-container-lowest border border-outline-variant/50 focus:border-secondary focus:ring-1 focus:ring-secondary px-3.5 py-2.5 text-sm text-primary" />
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1">Phone Number *</label>
              <input type="tel" id="bookingPhone" placeholder="(760) 000-0000" required class="w-full rounded-lg bg-surface-container-lowest border border-outline-variant/50 focus:border-secondary focus:ring-1 focus:ring-secondary px-3.5 py-2.5 text-sm text-primary" />
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1">Guests Count</label>
              <select id="bookingGuests" class="w-full rounded-lg bg-surface-container-lowest border border-outline-variant/50 focus:border-secondary focus:ring-1 focus:ring-secondary px-3.5 py-2.5 text-sm text-primary">
                <option value="1 Guest (Individual)">1 Guest (Individual)</option>
                <option value="2 Guests (Duo Session)">2 Guests (Duo Session)</option>
                <option value="3+ Guests (Group / Bridal)">3+ Guests (Group / Bridal)</option>
              </select>
            </div>
          </div>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1">Special Requests / Nail Art Notes</label>
            <input type="text" id="bookingNotes" placeholder="Let us know if you need soak-off removal, specific lash curl, or beverage preference..." class="w-full rounded-lg bg-surface-container-lowest border border-outline-variant/50 focus:border-secondary focus:ring-1 focus:ring-secondary px-3.5 py-2 text-sm text-primary" />
          </div>
          <p id="bookingErrorMsg" class="text-xs text-error font-semibold hidden"></p>
        </div>
      </div>

      <!-- Confirmation View (Hidden until submit) -->
      <div id="bookingSuccessView" class="hidden p-8 md:p-12 text-center space-y-6 overflow-y-auto custom-scrollbar flex-1">
        <div class="w-16 h-16 rounded-full bg-primary-container text-secondary-fixed mx-auto flex items-center justify-center shadow-lg border border-secondary-fixed/40">
          <span class="material-symbols-outlined text-3xl">verified</span>
        </div>
        <div class="space-y-2 max-w-lg mx-auto">
          <span class="font-label-sm text-secondary uppercase tracking-widest font-semibold">Reservation Request Received</span>
          <h4 class="font-headline-lg text-2xl md:text-3xl text-primary">We Look Forward to Welcoming You</h4>
          <p class="text-sm text-on-surface-variant">Your appointment request at <strong>Brothers Nails & Lashes</strong> has been prepared. Our concierge at <strong>(760) 300-0112</strong> will confirm your slot shortly.</p>
        </div>
        <div id="bookingSummaryBox" class="bg-surface-container-low p-6 rounded-xl border border-secondary-fixed/40 max-w-lg mx-auto text-left space-y-2 text-sm"></div>
        <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a id="smsConfirmBtn" href="sms:7603000112" class="gold-shimmer text-primary font-semibold px-6 py-3 rounded-full shadow hover:shadow-md transition-all inline-flex items-center gap-2 text-sm">
            <span class="material-symbols-outlined text-base">sms</span>
            <span>Send Instant SMS to Concierge</span>
          </a>
          <a href="tel:7603000112" class="px-6 py-3 rounded-full bg-primary-container text-secondary-fixed font-semibold text-sm inline-flex items-center gap-2 hover:bg-primary transition-all">
            <span class="material-symbols-outlined text-base">call</span>
            <span>Call (760) 300-0112</span>
          </a>
          <button id="resetBookingBtn" class="px-5 py-3 rounded-full border border-outline-variant/50 text-on-surface-variant hover:text-primary text-sm font-medium">
            Done
          </button>
        </div>
      </div>

      <!-- Modal Footer Bar -->
      <div id="bookingFooterBar" class="bg-surface-container-low px-6 py-4 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
        <div class="flex items-center gap-4 text-center sm:text-left">
          <div>
            <span class="text-xs text-on-surface-variant block">Estimated Total</span>
            <span id="bookingTotalAmount" class="font-headline-md text-xl text-primary font-bold">$46.35+</span>
          </div>
          <div class="h-8 w-px bg-outline-variant/40 hidden sm:block"></div>
          <div class="text-xs text-on-surface-variant hidden sm:block">
            <div class="font-semibold text-primary">78982 CA-111, Suite 1B, La Quinta</div>
            <div>Complimentary Spa Refreshments Included</div>
          </div>
        </div>
        <div class="flex items-center gap-3 w-full sm:w-auto justify-end">
          <a href="tel:7603000112" class="px-4 py-2.5 rounded-full border border-primary/20 text-primary hover:bg-surface-container text-xs font-semibold flex items-center gap-1.5 shrink-0">
            <span class="material-symbols-outlined text-sm text-secondary">call</span>
            <span>(760) 300-0112</span>
          </a>
          <button id="submitBookingBtn" class="gold-shimmer text-primary font-bold px-7 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2 w-full sm:w-auto">
            <span>Confirm Reservation</span>
            <span class="material-symbols-outlined text-base">event_available</span>
          </button>
        </div>
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML("beforeend", modalHtml);

  // Event listeners for modal
  const modal = document.getElementById("bookingModal");
  const closeBtn = document.getElementById("closeBookingModal");
  const resetBtn = document.getElementById("resetBookingBtn");
  const dateInput = document.getElementById("bookingDate");
  const submitBtn = document.getElementById("submitBookingBtn");

  closeBtn.addEventListener("click", closeBookingModal);
  resetBtn.addEventListener("click", closeBookingModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeBookingModal();
  });

  dateInput.addEventListener("change", () => {
    renderTimeSlots();
  });

  submitBtn.addEventListener("click", handleBookingSubmit);

  renderCategoryTabs();
  renderServicesList();
  renderTimeSlots();
  updateBookingSummary();
}

function renderCategoryTabs() {
  const container = document.getElementById("bookingCategoryTabs");
  if (!container) return;

  container.innerHTML = SERVICES_CATALOG.map((cat) => {
    const isActive = cat.id === activeBookingCategory;
    return `
      <button type="button" data-cat="${cat.id}" class="px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
        isActive
          ? "bg-primary-container text-secondary-fixed shadow-sm border border-secondary-fixed/40"
          : "bg-surface-container-lowest text-on-surface-variant hover:text-primary border border-outline-variant/30"
      }">
        ${cat.category}
      </button>
    `;
  }).join("");

  container.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeBookingCategory = btn.getAttribute("data-cat");
      renderCategoryTabs();
      renderServicesList();
    });
  });
}

function renderServicesList() {
  const container = document.getElementById("bookingServicesList");
  if (!container) return;

  const currentCategory = SERVICES_CATALOG.find((c) => c.id === activeBookingCategory) || SERVICES_CATALOG[0];

  container.innerHTML = currentCategory.items
    .map((item) => {
      const isSelected = selectedServiceIds.has(item.id);
      return `
        <div data-service-id="${item.id}" class="cursor-pointer p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
          isSelected
            ? "bg-primary-container/5 border-secondary shadow-xs"
            : "bg-surface-container-lowest border-outline-variant/30 hover:border-secondary-fixed"
        }">
          <div class="flex items-center gap-3">
            <span class="w-5 h-5 rounded flex items-center justify-center border ${
              isSelected
                ? "bg-primary-container border-primary-container text-secondary-fixed"
                : "border-outline-variant bg-white text-transparent"
            }">
              <span class="material-symbols-outlined text-sm">check</span>
            </span>
            <div>
              <div class="text-sm font-semibold text-primary">${item.name}</div>
              <div class="text-[11px] text-on-surface-variant">${item.duration}</div>
            </div>
          </div>
          <span class="text-sm font-bold text-secondary shrink-0">${item.priceDisplay}</span>
        </div>
      `;
    })
    .join("");

  container.querySelectorAll("[data-service-id]").forEach((row) => {
    row.addEventListener("click", () => {
      const id = row.getAttribute("data-service-id");
      if (selectedServiceIds.has(id)) {
        if (selectedServiceIds.size > 1) {
          selectedServiceIds.delete(id);
        }
      } else {
        selectedServiceIds.add(id);
      }
      renderServicesList();
      updateBookingSummary();
    });
  });
}

function renderTimeSlots() {
  const container = document.getElementById("bookingTimeSlots");
  const dateInput = document.getElementById("bookingDate");
  const hint = document.getElementById("salonHoursHint");
  if (!container || !dateInput) return;

  const dateVal = dateInput.value ? new Date(dateInput.value + "T12:00:00") : new Date();
  const day = dateVal.getDay(); // 0 = Sun, 6 = Sat

  let slots = [];
  if (day === 0) {
    // Sunday: 10 am - 5 pm
    slots = ["10:00 AM", "10:45 AM", "11:30 AM", "12:15 PM", "1:00 PM", "1:45 PM", "2:30 PM", "3:15 PM", "4:00 PM"];
    if (hint) hint.textContent = "Sunday Hours: 10:00 AM – 5:00 PM";
  } else if (day === 6) {
    // Saturday: 9 am - 6 pm
    slots = ["9:00 AM", "9:45 AM", "10:30 AM", "11:15 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "4:45 PM"];
    if (hint) hint.textContent = "Saturday Hours: 9:00 AM – 6:00 PM";
  } else {
    // Mon - Fri: 9 am - 7 pm
    slots = ["9:00 AM", "10:00 AM", "10:30 AM", "11:30 AM", "12:30 PM", "1:30 PM", "2:30 PM", "3:30 PM", "4:30 PM", "5:30 PM", "6:00 PM"];
    if (hint) hint.textContent = "Mon–Fri Hours: 9:00 AM – 7:00 PM";
  }

  if (!slots.includes(selectedTimeSlot)) {
    selectedTimeSlot = slots[1] || slots[0];
  }

  container.innerHTML = slots
    .map((slot) => {
      const active = slot === selectedTimeSlot;
      return `
        <button type="button" data-slot="${slot}" class="py-2 px-2.5 rounded-lg text-xs font-semibold border transition-all ${
          active
            ? "bg-primary-container text-secondary-fixed border-secondary-fixed shadow-xs"
            : "bg-surface-container-lowest text-primary border-outline-variant/30 hover:border-secondary"
        }">
          ${slot}
        </button>
      `;
    })
    .join("");

  container.querySelectorAll("[data-slot]").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedTimeSlot = btn.getAttribute("data-slot");
      renderTimeSlots();
    });
  });
}

function getAllServicesFlat() {
  const list = [];
  SERVICES_CATALOG.forEach((cat) => {
    cat.items.forEach((item) => list.push({ ...item, categoryName: cat.category, catId: cat.id }));
  });
  return list;
}

function updateBookingSummary() {
  const allItems = getAllServicesFlat();
  const chosen = allItems.filter((item) => selectedServiceIds.has(item.id));
  const total = chosen.reduce((sum, item) => sum + item.price, 0);

  const countBadge = document.getElementById("selectedCountBadge");
  const totalEl = document.getElementById("bookingTotalAmount");

  if (countBadge) {
    countBadge.textContent = `${chosen.length} ${chosen.length === 1 ? "Service" : "Services"} Selected`;
  }
  if (totalEl) {
    totalEl.textContent = `$${total.toFixed(2)}+`;
  }
}

function handleBookingSubmit() {
  const nameEl = document.getElementById("bookingName");
  const phoneEl = document.getElementById("bookingPhone");
  const dateEl = document.getElementById("bookingDate");
  const specialistEl = document.getElementById("bookingSpecialist");
  const guestsEl = document.getElementById("bookingGuests");
  const notesEl = document.getElementById("bookingNotes");
  const errorEl = document.getElementById("bookingErrorMsg");

  const name = nameEl.value.trim();
  const phone = phoneEl.value.trim();

  if (!name || !phone) {
    errorEl.textContent = "Please enter your full name and phone number so our concierge can confirm your reservation.";
    errorEl.classList.remove("hidden");
    nameEl.focus();
    return;
  }

  errorEl.classList.add("hidden");

  const allItems = getAllServicesFlat();
  const chosen = allItems.filter((item) => selectedServiceIds.has(item.id));
  const total = chosen.reduce((sum, item) => sum + item.price, 0);
  const serviceNames = chosen.map((c) => `${c.name} (${c.priceDisplay})`).join(", ");

  const summaryBox = document.getElementById("bookingSummaryBox");
  summaryBox.innerHTML = `
    <div class="flex justify-between border-b border-outline-variant/25 pb-2">
      <span class="text-on-surface-variant">Guest:</span>
      <span class="font-semibold text-primary">${name} • ${phone}</span>
    </div>
    <div class="flex justify-between border-b border-outline-variant/25 pb-2">
      <span class="text-on-surface-variant">Date & Time:</span>
      <span class="font-semibold text-primary">${dateEl.value} at ${selectedTimeSlot}</span>
    </div>
    <div class="flex justify-between border-b border-outline-variant/25 pb-2">
      <span class="text-on-surface-variant">Artisan / Party:</span>
      <span class="font-semibold text-primary">${specialistEl.value} (${guestsEl.value})</span>
    </div>
    <div class="border-b border-outline-variant/25 pb-2">
      <span class="text-on-surface-variant block mb-1">Selected Treatments:</span>
      <span class="font-semibold text-primary">${serviceNames}</span>
    </div>
    ${
      notesEl.value.trim()
        ? `<div class="border-b border-outline-variant/25 pb-2"><span class="text-on-surface-variant">Notes:</span> <span class="text-primary">${notesEl.value.trim()}</span></div>`
        : ""
    }
    <div class="flex justify-between pt-1">
      <span class="font-semibold text-primary">Estimated Total:</span>
      <span class="font-bold text-secondary text-base">$${total.toFixed(2)}+</span>
    </div>
  `;

  const smsBody = encodeURIComponent(
    `Hi Brothers Nails & Lashes! I'd like to book an appointment:\n- Name: ${name}\n- Phone: ${phone}\n- Date: ${dateEl.value} at ${selectedTimeSlot}\n- Services: ${chosen.map((c) => c.name).join(", ")}\n- Party: ${guestsEl.value}${notesEl.value.trim() ? `\n- Notes: ${notesEl.value.trim()}` : ""}`
  );
  const smsBtn = document.getElementById("smsConfirmBtn");
  if (smsBtn) {
    smsBtn.setAttribute("href", `sms:7603000112?body=${smsBody}`);
  }

  document.getElementById("bookingFormView").classList.add("hidden");
  document.getElementById("bookingFooterBar").classList.add("hidden");
  document.getElementById("bookingSuccessView").classList.remove("hidden");
}

window.openBookingModal = function (preselectKeyword) {
  const modal = document.getElementById("bookingModal");
  if (!modal) return;

  // Reset views
  document.getElementById("bookingFormView").classList.remove("hidden");
  document.getElementById("bookingFooterBar").classList.remove("hidden");
  document.getElementById("bookingSuccessView").classList.add("hidden");

  if (preselectKeyword && typeof preselectKeyword === "string") {
    const kw = preselectKeyword.toLowerCase();
    const allItems = getAllServicesFlat();
    const match = allItems.find(
      (item) => item.id.toLowerCase() === kw || item.name.toLowerCase().includes(kw)
    );
    if (match) {
      selectedServiceIds.clear();
      selectedServiceIds.add(match.id);
      activeBookingCategory = match.catId;
    }
  }

  renderCategoryTabs();
  renderServicesList();
  updateBookingSummary();

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
};

function closeBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}

const GOCHECKIN_BOOKING_URL = "https://book.gocheckin.net/v3/nails/brothers-nails-and-lashes-20136/choose-service";

function initBookingTriggers() {
  document.querySelectorAll('[data-booking], a[href="#booking"], a[href="#book"], a[href="#booking-cta"], a[href="#reservation-portal"]').forEach((el) => {
    if (el.tagName === "A") {
      el.setAttribute("href", GOCHECKIN_BOOKING_URL);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    } else {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(GOCHECKIN_BOOKING_URL, "_blank", "noopener,noreferrer");
      });
    }
  });
}

function initGalleryFeatures() {
  const filterButtons = document.querySelectorAll("[data-gallery-filter]");
  const galleryItems = document.querySelectorAll("[data-gallery-category]");

  if (filterButtons.length > 0 && galleryItems.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filterVal = btn.getAttribute("data-gallery-filter");

        // Update button styles
        filterButtons.forEach((b) => {
          b.className =
            "px-6 py-2 rounded-full font-label-sm text-label-sm font-medium tracking-wider text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all duration-200";
        });
        btn.className =
          "px-6 py-2 rounded-full font-label-sm text-label-sm font-semibold tracking-wider bg-primary-container text-secondary-fixed border border-secondary-fixed/50 shadow-sm transition-all duration-200";

        // Filter items
        galleryItems.forEach((item) => {
          const cats = item.getAttribute("data-gallery-category") || "";
          if (filterVal === "all" || cats.includes(filterVal)) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        });
      });
    });
  }

  // Lightbox for Gallery cards
  const zoomCards = document.querySelectorAll("[data-lightbox-src]");
  if (zoomCards.length > 0) {
    const lbHtml = `
      <div id="galleryLightbox" class="fixed inset-0 z-[110] hidden items-center justify-center p-4 modal-backdrop">
        <div class="relative max-w-3xl w-full bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl border border-secondary-fixed/40">
          <button id="closeLightboxBtn" class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-primary-container/90 text-secondary-fixed flex items-center justify-center hover:bg-primary">
            <span class="material-symbols-outlined">close</span>
          </button>
          <img id="lightboxImg" src="" alt="Gallery Zoom" class="w-full max-h-[75vh] object-cover" />
          <div class="p-5 bg-surface flex items-center justify-between">
            <div>
              <span id="lightboxSub" class="font-label-sm text-secondary uppercase tracking-widest block"></span>
              <h4 id="lightboxTitle" class="font-headline-md text-primary text-xl"></h4>
            </div>
            <button id="lightboxBookBtn" class="gold-shimmer text-primary font-semibold px-6 py-2.5 rounded-full text-xs shadow">
              Book This Style
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", lbHtml);

    const lb = document.getElementById("galleryLightbox");
    const lbImg = document.getElementById("lightboxImg");
    const lbTitle = document.getElementById("lightboxTitle");
    const lbSub = document.getElementById("lightboxSub");
    const lbClose = document.getElementById("closeLightboxBtn");
    const lbBook = document.getElementById("lightboxBookBtn");

    zoomCards.forEach((card) => {
      card.addEventListener("click", () => {
        lbImg.src = card.getAttribute("data-lightbox-src");
        lbTitle.textContent = card.getAttribute("data-lightbox-title") || "Signature Creation";
        lbSub.textContent = card.getAttribute("data-lightbox-sub") || "Brothers Nails & Lashes";
        lb.classList.remove("hidden");
        lb.classList.add("flex");
      });
    });

    lbClose.addEventListener("click", () => {
      lb.classList.add("hidden");
      lb.classList.remove("flex");
    });
    lb.addEventListener("click", (e) => {
      if (e.target === lb) {
        lb.classList.add("hidden");
        lb.classList.remove("flex");
      }
    });
    lbBook.addEventListener("click", () => {
      lb.classList.add("hidden");
      lb.classList.remove("flex");
      window.openBookingModal(lbTitle.textContent);
    });
  }
}

function initPolicyModals() {
  const policyLinks = document.querySelectorAll('a[href="#faq"], a[href="#privacy"], a[href="#terms"], a[href="#accessibility"], a[href="#policy"]');
  if (policyLinks.length === 0) return;

  const infoModalHtml = `
    <div id="infoModal" class="fixed inset-0 z-[105] hidden items-center justify-center p-4 modal-backdrop">
      <div class="bg-surface text-on-surface max-w-2xl w-full rounded-2xl shadow-2xl border border-secondary-fixed/40 overflow-hidden">
        <div class="bg-primary-container text-surface px-6 py-4 flex items-center justify-between">
          <h3 id="infoModalTitle" class="font-headline-md text-xl text-secondary-fixed">Salon Policies & FAQ</h3>
          <button id="closeInfoModal" class="w-8 h-8 rounded-full bg-surface/10 text-secondary-fixed flex items-center justify-center">
            <span class="material-symbols-outlined text-lg">close</span>
          </button>
        </div>
        <div id="infoModalBody" class="p-6 md:p-8 space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar text-sm leading-relaxed text-on-surface-variant">
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", infoModalHtml);

  const modal = document.getElementById("infoModal");
  const titleEl = document.getElementById("infoModalTitle");
  const bodyEl = document.getElementById("infoModalBody");
  const closeBtn = document.getElementById("closeInfoModal");

  policyLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      if (href === "#faq") {
        titleEl.textContent = "Frequently Asked Questions";
        bodyEl.innerHTML = `
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-primary text-base">Do you accept walk-ins?</h4>
              <p>Yes! While we recommend booking an appointment online or calling <strong>(760) 300-0112</strong> to secure your preferred time and master technician, we gladly welcome walk-ins based on availability.</p>
            </div>
            <div>
              <h4 class="font-semibold text-primary text-base">What are your sterilization standards?</h4>
              <p>We use 100% hospital-grade autoclave steam sterilization for all metal implements (individually pouched for each guest) and strictly single-use disposable files, buffers, and pedicure basin liners.</p>
            </div>
            <div>
              <h4 class="font-semibold text-primary text-base">Where are you located in La Quinta?</h4>
              <p>We are located at <strong>78982 CA-111, Suite 1B, La Quinta, CA 92253</strong> with complimentary guest parking right out front.</p>
            </div>
            <div>
              <h4 class="font-semibold text-primary text-base">How long do Lash Extensions take?</h4>
              <p>A full set takes between 90 to 120 minutes depending on Classic, Hybrid, or Volume mapping. Refills are recommended every 1 to 3 weeks.</p>
            </div>
          </div>
        `;
      } else {
        titleEl.textContent = "Sanctuary Policies & Guest Care";
        bodyEl.innerHTML = `
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-primary text-base">Appointment & Cancellation Policy</h4>
              <p>We kindly request at least 24 hours' notice for rescheduling or cancellations. A 15-minute grace period is provided for all reserved appointments.</p>
            </div>
            <div>
              <h4 class="font-semibold text-primary text-base">Service Guarantee</h4>
              <p>Your satisfaction is our highest priority. If you experience any lifting or chipping with Gel or Enhancement services within 5 days of your visit, please call us at <strong>(760) 300-0112</strong> for a complimentary touch-up.</p>
            </div>
            <div>
              <h4 class="font-semibold text-primary text-base">Privacy & Accessibility</h4>
              <p>Our La Quinta sanctuary is step-free and wheelchair accessible. Client contact information is used strictly for appointment confirmation and concierge care.</p>
            </div>
          </div>
        `;
      }
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });
}
