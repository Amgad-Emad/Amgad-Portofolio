/* =========================================================
   Amgad Portfolio — Vanilla JS
   ========================================================= */

const PHONE = "201202495945"; // International, no '+'
const WA_MSG_EN = "Hi Amgad, I came across your portfolio and would love to discuss a project.";
const WA_MSG_AR = "السلام عليكم أمجد، شفت معرض أعمالك وحابب أتكلم معاك في مشروع.";
const FRONT_ASSET_BASE = window.__FRONT_ASSET_BASE || "front";

function frontAsset(path) {
  return `${FRONT_ASSET_BASE}/${path}`;
}

/* --------- DATA --------- */
const WORK = [
  { t_en: "ExCraft", t_ar: "ExCraft", r_en: "Export · LMS · Consultation · 40+ Modules", r_ar: "تصدير · تعلم · استشارات · 40+ وحدة", y: "2024", tag_en: "Featured", tag_ar: "مميز", mark: "E", url: "https://excraft.co", img: "uploads/img/excraft.png",
    p_en: "Unified Export, Import, Consultation and Academy for Egypt's leading FMCG exporter — one Laravel codebase, 40+ admin modules, public website, CRM and LMS. Built for Egypt and East Africa.",
    p_ar: "توحيد التصدير والاستيراد والاستشارات والأكاديمية لأكبر مصدّر FMCG في مصر — قاعدة كود Laravel واحدة، أكثر من 40 وحدة إدارية، موقع عام، CRM ونظام تعلم. مبني لمصر وشرق أفريقيا." },
  { t_en: "XS Lawyer", t_ar: "XS Lawyer", r_en: "Legal Tech · AI · SaaS · RAG", r_ar: "قانون · ذكاء اصطناعي · SaaS · RAG", y: "2025", tag_en: "AI", tag_ar: "ذكاء", mark: "X", url: "https://xs-lawyer.com", img: "uploads/img/xslawyer.png",
    p_en: "AI-powered SaaS for Egyptian legal consultation — chatbot, document analysis, subscription billing and a full admin OS. RAG with embeddings and vector search over local legal corpora.",
    p_ar: "منصة SaaS مدعومة بالذكاء الاصطناعي للاستشارات القانونية المصرية — شات بوت، تحليل مستندات، فوترة اشتراكات، ونظام إدارة كامل. تقنية RAG بالـ Embeddings وبحث متجهي على المراجع القانونية المحلية." },
  { t_en: "Blndd", t_ar: "Blndd", r_en: "B2B LMS · TNA · Subscriptions", r_ar: "LMS للأعمال · تحليل الاحتياج · اشتراكات", y: "2025", tag_en: "LMS", tag_ar: "LMS", mark: "B", url: "https://blndd.net", img: "uploads/img/blndd.png",
    p_en: "Full-stack B2B SaaS LMS running the entire corporate-training lifecycle — Training Needs Analysis, online + in-class + blended courses, integrated CRM, subscription billing, and a 13-module multi-role admin OS.",
    p_ar: "نظام LMS احترافي لتدريب الشركات — من تحليل الاحتياج التدريبي إلى الشهادة، دورات أونلاين/حضوري/مدمجة، CRM متكامل، فوترة اشتراكات، ولوحة إدارة من 13 وحدة بأدوار متعددة." },
  { t_en: "HIRED HR", t_ar: "HIRED HR", r_en: "CRM · ATS · HRMS · Accounting", r_ar: "CRM · ATS · HRMS · محاسبة", y: "2025", tag_en: "Suite", tag_ar: "حزمة", mark: "H", url: "https://portal.hiredhr.net", img: "uploads/img/hiredhr.png",
    p_en: "Integrated multi-domain operations portal for a staffing & HR-tech company — CRM, ATS, HRMS, project management, performance and finance in one role-based admin. Replaces five separate SaaS tools.",
    p_ar: "بوابة عمليات متعددة المجالات لشركة توظيف وHR-Tech — CRM، ATS، HRMS، إدارة مشاريع، أداء، ومحاسبة في إدارة واحدة بصلاحيات. استبدلت خمس أدوات SaaS منفصلة." }
];

const MORE = [
  { t_en: "Holistic Path", t_ar: "Holistic Path", r_en: "Global Software House · AI · Chatbots", r_ar: "شركة برمجيات عالمية · ذكاء اصطناعي · شات بوت", y: "2025", tag_en: "Agency", tag_ar: "وكالة", mark: "H", url: "#", img: "uploads/img/holisticpath.png",
    p_en: "Brand + platform build for a global multi-service software house — software development, UI/UX, web and mobile, e-commerce, ERP/CRM/LMS/ATS/HRMS, plus an AI services line covering chatbots and automation. Service showcase, case studies and a global lead-capture CRM.",
    p_ar: "بناء براند ومنصة لشركة برمجيات عالمية متعددة الخدمات — تطوير برمجيات، UI/UX، ويب وموبايل، إي-كومرس، ERP/CRM/LMS/ATS/HRMS، بالإضافة لخط خدمات ذكاء اصطناعي يشمل الشات بوتس والأتمتة. عرض خدمات، دراسات حالة، ونظام CRM لاستقبال العملاء حول العالم." },
  { t_en: "Brain Tech", t_ar: "Brain Tech", r_en: "Egypt Software House · Web · Mobile · ERP", r_ar: "شركة برمجيات مصرية · ويب · موبايل · ERP", y: "2025", tag_en: "Agency", tag_ar: "وكالة", mark: "B", url: "#", img: "uploads/img/braintech.png",
    p_en: "End-to-end agency platform for an Egyptian software house — software development, UI/UX, web, mobile, e-commerce, branding, media buying, SEO and full systems work (ERP, CRM, LMS, ATS, HRMS). Service catalogue, portfolio and an inquiries CRM for local clients.",
    p_ar: "منصة وكالة متكاملة لشركة برمجيات مصرية — تطوير برمجيات، UI/UX، ويب، موبايل، إي-كومرس، براندينج، ميديا باينج، SEO، وخدمات أنظمة كاملة (ERP، CRM، LMS، ATS، HRMS). كتالوج خدمات، Portfolio، ونظام CRM لاستقبال استفسارات العملاء داخل مصر." },
  { t_en: "Gala Global", t_ar: "Gala Global", r_en: "Branding Agency · CMS · CRM", r_ar: "وكالة براندينج · CMS · CRM", y: "2024", tag_en: "CMS", tag_ar: "CMS", mark: "G", url: "https://galaglobal.co", img: "uploads/img/galaglobal.png",
    p_en: "Brand platform for a full-service creative agency — case-study-led storytelling, custom CMS over every page element, and a CRM pipeline for sales follow-through.",
    p_ar: "منصة براند لوكالة إبداعية كاملة الخدمات — حكاية مبنية على دراسات الحالة، CMS مخصص لكل عنصر في الصفحة، وقمع CRM للمتابعة البيعية." },
  { t_en: "Biry Suits", t_ar: "Biry Suits", r_en: "Bespoke Tailoring · Website · Admin OS", r_ar: "تفصيل بدلات · موقع · لوحة إدارة", y: "2024", tag_en: "Brand", tag_ar: "براند", mark: "B", url: "https://www.birysuits.com/en", img: "uploads/img/birysuites.png",
    p_en: "Bespoke digital experience for an Egyptian tailoring house (est. 2012) — brand identity, product showcase site, and an admin OS to run orders and operations end-to-end.",
    p_ar: "تجربة رقمية مخصصة لدار تفصيل مصرية (تأسست 2012) — هوية بصرية، موقع عرض منتجات، ولوحة إدارة لتشغيل الطلبات والعمليات من البداية للنهاية." }
];

const STACK = [
  { g: "La", n: "Laravel", c_en: "Framework", c_ar: "إطار عمل", y: "3y" },
  { g: "Ph", n: "PHP", c_en: "Language", c_ar: "لغة", y: "3y" },
  { g: "My", n: "MySQL", c_en: "Database", c_ar: "قاعدة بيانات", y: "3y" },
  { g: "Ap", n: "REST APIs", c_en: "JWT · OAuth", c_ar: "JWT · OAuth", y: "3y" },
  { g: "Bl", n: "Blade", c_en: "Templating", c_ar: "قوالب", y: "3y" },
  { g: "Tw", n: "Tailwind · Bootstrap", c_en: "Styling", c_ar: "تنسيق", y: "3y" },
  { g: "Js", n: "JavaScript · AJAX", c_en: "Client", c_ar: "واجهة العميل", y: "3y" },
  { g: "Ai", n: "OpenAI · RAG", c_en: "AI integration", c_ar: "تكامل الذكاء", y: "1y" },
  { g: "Gh", n: "Git · GitHub", c_en: "Versioning", c_ar: "إدارة النسخ", y: "3y" },
  { g: "cP", n: "cPanel · Deploy", c_en: "DevOps", c_ar: "نشر", y: "3y" },
  { g: "Qj", n: "Queue Jobs", c_en: "Background work", c_ar: "مهام خلفية", y: "2y" },
  { g: "Xm", n: "XMind", c_en: "System design", c_ar: "تصميم أنظمة", y: "3y" }
];

const TIMELINE = [
  { y_en: "2024 — now", y_ar: "2024 — الآن", t_en: "Full-Stack Engineer", t_ar: "مهندس Full-Stack",
    co_en: "Hossam-X-Studios · Sheraton, Cairo · Full-time", co_ar: "Hossam-X-Studios · شيراتون، القاهرة · دوام كامل",
    d_en: "Shipping production-level systems: ExCraft, XS Lawyer (AI), Blndd LMS, HIRED HR, Holistic Path, Brain Tech, Gala Global and Biry Suits. Own backend architecture, database design, API development, system integration, secure auth and payment integrations.",
    d_ar: "أشحن أنظمة إنتاجية: ExCraft، XS Lawyer (ذكاء اصطناعي)، Blndd LMS، HIRED HR، Holistic Path، Brain Tech، Gala Global، وBiry Suits. أمتلك معمارية الخلفية، تصميم قواعد البيانات، تطوير الـ APIs، تكامل الأنظمة، المصادقة الآمنة، ودمج بوابات الدفع.",
    now: true },
  { y_en: "2025 — 2026", y_ar: "2025 — 2026", t_en: "Software Engineer · Backend / Laravel", t_ar: "مهندس برمجيات · Backend / Laravel",
    co_en: "Hired HR · Maadi, Cairo · Part-time", co_ar: "Hired HR · المعادي، القاهرة · دوام جزئي",
    d_en: "Built LMS features for a corporate-training product: course management, progress tracking, certificate generation, and subscription plans. Integrated CDN video delivery and optimized backend performance.",
    d_ar: "بنيت مزايا LMS لمنتج تدريب مؤسسي: إدارة الدورات، تتبع التقدم، إصدار الشهادات، وخطط الاشتراك. دمجت توصيل الفيديو عبر CDN وحسّنت أداء الخلفية." },
  { y_en: "2021 — 2025", y_ar: "2021 — 2025", t_en: "B.Sc. Computer Science", t_ar: "بكالوريوس علوم حاسب",
    co_en: "Arab Open University (AOU), Egypt · GPA 3.44", co_ar: "الجامعة العربية المفتوحة (AOU)، مصر · المعدل 3.44",
    d_en: "Four years in computer science fundamentals — OOP, data structures, algorithms, database design — alongside professional work shipping real platforms.",
    d_ar: "أربع سنوات في أساسيات علوم الحاسب — البرمجة الكائنية، هياكل البيانات، الخوارزميات، تصميم قواعد البيانات — جنباً إلى جنب مع العمل المهني وشحن منصات حقيقية." }
];

const TESTIMONIALS = [
  { q_en: "We had a big idea but it felt like four different businesses pulling in different directions. Amgad listened, understood what we actually do, and built us one platform that runs everything. Our team finally works in one place instead of jumping between sheets and tools. He just gets it.",
    q_ar: "كان عندنا فكرة كبيرة بس كانت حاسة إنها أربع شركات شغّالة في اتجاهات مختلفة. أمجد سمعنا، فهم شغلنا فعلاً، وبنالنا منصة واحدة بتدير كل حاجة. الفريق بقى شغّال في مكان واحد بدل ما كان لازم يقفز بين شيتات وأدوات كتير. هو فاهم اللي بنعمله.",
    n_en: "Owner of ExCraft", n_ar: "صاحب ExCraft",
    r_en: "Client", r_ar: "عميل",
    a: "EX" },
  { q_en: "I needed something my clients could actually use — not a complicated tool only IT people understand. Amgad built it that way. People sign up, ask a question, get an answer. The admin side shows me exactly what's happening with the business, in plain numbers. Worth every minute.",
    q_ar: "كنت محتاج حاجة عملاءي يقدروا يستخدموها فعلاً — مش أداة معقدة بس ناس الـIT بتفهمها. أمجد بناهالي بالطريقة دي. الناس بتسجّل، تسأل سؤال، وتاخد إجابة. ولوحة الإدارة بتورّيني بالظبط إيه اللي بيحصل في الشغل بأرقام واضحة. مستحق كل دقيقة.",
    n_en: "Owner of XS Lawyer", n_ar: "صاحب XS Lawyer",
    r_en: "Client", r_ar: "عميل",
    a: "XS" },
  { q_en: "Before, my managers were drowning in spreadsheets and emails just to keep the company running. Amgad replaced all of that with one simple portal. Everyone logs in, sees what they need, and gets work done. No training videos, no chaos. It's the calmest the team has felt in years.",
    q_ar: "قبل كده، المديرين عندي كانوا غرقانين في إكسل وإيميلات عشان الشركة تمشي. أمجد عوّض كل ده ببوابة واحدة بسيطة. كل واحد بيدخل، بيشوف اللي محتاجه، وبيخلص شغله. مفيش فيديوهات تدريب، مفيش لخبطة. ده أهدى وضع وصل له الفريق من سنين.",
    n_en: "Owner of HIRED HR", n_ar: "صاحب HIRED HR",
    r_en: "Client", r_ar: "عميل",
    a: "HR" }
];

const MARQUEE_ITEMS = {
  en: ["Full-Stack Engineer", "Laravel · PHP · MySQL", "Cairo / Remote", "Building since 2022", "AI-Powered Systems", "Available Q3 2026"],
  ar: ["مهندس Full-Stack", "Laravel · PHP · MySQL", "القاهرة / عن بُعد", "أبني منذ 2022", "أنظمة مدعومة بالذكاء", "متاح الربع الثالث 2026"]
};

/* --------- RENDER --------- */
function el(html) { const d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstElementChild; }

function renderWork(target, items) {
  const root = document.getElementById(target);
  root.innerHTML = items.map(x => {
    const hasUrl = x.url && x.url !== "#";
    const visual = x.img
      ? `<img class="thumb-img" src="${frontAsset(x.img)}" alt="${x.t_en}" loading="lazy" />`
      : `<div class="thumb-mark">${x.mark}</div>`;
    return `
    <a class="work-card tilt" href="${x.url || '#'}" ${hasUrl ? 'target="_blank" rel="noopener"' : ''} data-cursor-label="${hasUrl ? 'Visit live site' : 'View case'}">
      <div class="thumb">
        <div class="thumb-bg"></div>
        ${visual}
        <div class="thumb-tag" data-en="${x.tag_en}" data-ar="${x.tag_ar}">${x.tag_en}</div>
        <div class="thumb-year">${x.y}</div>
      </div>
      <div class="meta">
        <h3 data-en="${x.t_en}" data-ar="${x.t_ar}">${x.t_en}</h3>
        <span class="role" data-en="${x.r_en}" data-ar="${x.r_ar}">${x.r_en}</span>
      </div>
      <p data-en="${x.p_en}" data-ar="${x.p_ar}">${x.p_en}</p>
    </a>
  `;
  }).join("");
}

function renderStack() {
  document.getElementById("stackGrid").innerHTML = STACK.map(c => `
    <div class="stack-cell">
      <div class="yrs">${c.y}</div>
      <div class="glyph">${c.g}</div>
      <div>
        <div class="name">${c.n}</div>
        <div class="cat" data-en="${c.c_en}" data-ar="${c.c_ar}">${c.c_en}</div>
      </div>
    </div>
  `).join("");
}

function renderTimeline() {
  document.getElementById("timeline").innerHTML = TIMELINE.map(r => `
    <div class="tl-row">
      <div class="yr">
        <span data-en="${r.y_en}" data-ar="${r.y_ar}">${r.y_en}</span>
        ${r.now ? `<span class="now" data-en="Now" data-ar="حالياً">Now</span>` : ""}
      </div>
      <div class="ttl">
        <span data-en="${r.t_en}" data-ar="${r.t_ar}">${r.t_en}</span>
        <span class="co" data-en="${r.co_en}" data-ar="${r.co_ar}">${r.co_en}</span>
      </div>
      <div class="desc" data-en="${r.d_en}" data-ar="${r.d_ar}">${r.d_en}</div>
      <div class="arrow">→</div>
    </div>
  `).join("");
}

function renderTestimonials() {
  document.getElementById("testimonials").innerHTML = TESTIMONIALS.map(t => `
    <div class="test">
      <div class="quote-mark">“</div>
      <p class="body" data-en="${t.q_en}" data-ar="${t.q_ar}">${t.q_en}</p>
      <div class="who">
        <div class="avatar">${t.a}</div>
        <div class="info">
          <span class="nm" data-en="${t.n_en}" data-ar="${t.n_ar}">${t.n_en}</span>
          <span class="ro" data-en="${t.r_en}" data-ar="${t.r_ar}">${t.r_en}</span>
        </div>
      </div>
    </div>
  `).join("");
}

function renderMarquee(lang) {
  const items = MARQUEE_ITEMS[lang];
  const set = items.map(t => `<span>${t}</span><span class="star"></span>`).join("");
  document.getElementById("marqueeTrack").innerHTML = set + set;
}

/* --------- LANG --------- */
function setLang(lang) {
  const html = document.documentElement;
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.querySelectorAll("[data-en]").forEach(node => {
    const v = node.getAttribute(`data-${lang}`);
    if (v != null) node.textContent = v;
  });
  // toggle on swatch on lang button
  const enBtn = document.querySelector(".lang-toggle .lang-en");
  const arBtn = document.querySelector(".lang-toggle .lang-ar");
  enBtn.classList.toggle("on", lang === "en");
  arBtn.classList.toggle("on", lang === "ar");
  renderMarquee(lang);
  updateWhatsApp(lang);
  saveTweaks({ lang });
}

/* --------- WHATSAPP --------- */
function updateWhatsApp(lang) {
  const msg = lang === "ar" ? WA_MSG_AR : WA_MSG_EN;
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
  document.querySelectorAll(".wa-link, #waMain, #waFloat").forEach(a => {
    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });
}

/* --------- CURSOR --------- */
function initCursor() {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  const label = document.getElementById("cursorLabel");
  if (!dot || !ring) return;
  const s = { x: 0, y: 0, rx: 0, ry: 0 };
  document.addEventListener("mousemove", (e) => {
    s.x = e.clientX; s.y = e.clientY;
    dot.style.transform = `translate3d(${s.x - 3}px, ${s.y - 3}px, 0)`;
  });
  function loop() {
    s.rx += (s.x - s.rx) * 0.18;
    s.ry += (s.y - s.ry) * 0.18;
    ring.style.transform = `translate3d(${s.rx - 18}px, ${s.ry - 18}px, 0)`;
    label.style.transform = `translate3d(${s.rx + 24}px, ${s.ry + 24}px, 0)`;
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  document.addEventListener("mouseover", (e) => {
    const t = e.target;
    if (!t || !t.closest) return;
    const hov = t.closest("a, button, [data-cursor-label], .work-card, .test, .tl-row, .stack-cell, .featured, .swatch");
    ring.classList.toggle("hover", !!hov);
    const lbl = t.closest("[data-cursor-label]");
    if (lbl) { label.textContent = lbl.getAttribute("data-cursor-label"); label.classList.add("show"); }
    else { label.classList.remove("show"); }
  });
}

/* --------- REVEAL OBSERVER --------- */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll("[data-reveal], .reveal, .reveal-x, .stagger").forEach(el => {
    el.classList.add("reveal");
    io.observe(el);
  });
}

/* --------- COUNTERS --------- */
function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.getAttribute("data-count"), 10);
        const duration = 1400;
        const start = performance.now();
        function tick(now) {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.floor(target * eased);
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target;
        }
        requestAnimationFrame(tick);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll(".counter").forEach(el => io.observe(el));
}

/* --------- MAGNETIC --------- */
function initMagnetic() {
  document.querySelectorAll(".magnetic").forEach(el => {
    const strength = 0.35;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  });
}

/* --------- TILT --------- */
function initTilt() {
  if (document.body.dataset.motion === "reduced") return;
  document.querySelectorAll(".tilt").forEach(el => {
    let raf = null;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const cx = (e.clientX - r.left) / r.width - 0.5;
      const cy = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateX(${-cy * 4}deg) rotateY(${cx * 4}deg)`;
      });
    });
    el.addEventListener("mouseleave", () => {
      cancelAnimationFrame(raf);
      el.style.transform = "";
    });
  });
}

/* --------- NAV SCROLL --------- */
function initNavScroll() {
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll);
  onScroll();
}

/* --------- LOCAL TIME --------- */
function initClock() {
  const el = document.getElementById("localTime");
  const tick = () => {
    el.textContent = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Africa/Cairo" });
  };
  tick(); setInterval(tick, 30000);
}

/* --------- TWEAKS --------- */
const TWEAK_STORAGE_KEY = "amgad_tweaks_v2";
function loadStoredTweaks() {
  try {
    const raw = sessionStorage.getItem(TWEAK_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) { return {}; }
}
const T = Object.assign(
  { theme: "cream", accent: "#C25A33", motion: "rich", lang: "en" },
  window.__TWEAK_DEFAULTS || {},
  loadStoredTweaks()
);

function applyTweaks() {
  document.documentElement.setAttribute("data-theme", T.theme);
  document.documentElement.style.setProperty("--accent", T.accent);
  document.body.dataset.motion = T.motion;
}

function saveTweaks(patch) {
  Object.assign(T, patch);
  applyTweaks();
  try { sessionStorage.setItem(TWEAK_STORAGE_KEY, JSON.stringify(T)); } catch (e) {}
  try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*"); } catch (e) {}
}

function initTweaks() {
  applyTweaks();

  const panel = document.getElementById("tweaks");
  const trigger = document.getElementById("tweakTrigger");
  const close = document.getElementById("tweaksX");

  const openPanel = () => panel.classList.add("open");
  const closePanel = () => {
    panel.classList.remove("open");
    try { window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*"); } catch (e) {}
  };
  trigger.addEventListener("click", openPanel);
  close.addEventListener("click", closePanel);

  // Theme segmented
  const themeSeg = document.querySelector('[data-tweak="theme"]');
  const motionSeg = document.querySelector('[data-tweak="motion"]');
  setupSeg(themeSeg, T.theme, (v) => { saveTweaks({ theme: v }); positionThumb(themeSeg, v); });
  setupSeg(motionSeg, T.motion, (v) => {
    saveTweaks({ motion: v });
    positionThumb(motionSeg, v);
    if (v === "rich") initTilt();
  });
  // initial positioning after layout
  requestAnimationFrame(() => {
    positionThumb(themeSeg, T.theme);
    positionThumb(motionSeg, T.motion);
  });

  // Swatches
  document.querySelectorAll("#swatches .swatch").forEach(btn => {
    btn.classList.toggle("on", btn.dataset.val === T.accent);
    btn.addEventListener("click", () => {
      document.querySelectorAll("#swatches .swatch").forEach(b => b.classList.remove("on"));
      btn.classList.add("on");
      saveTweaks({ accent: btn.dataset.val });
    });
  });

  // Host protocol
  window.addEventListener("message", (e) => {
    if (e.data?.type === "__activate_edit_mode") openPanel();
    else if (e.data?.type === "__deactivate_edit_mode") panel.classList.remove("open");
  });
  try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (e) {}
}

function setupSeg(seg, value, onChange) {
  seg.querySelectorAll("button").forEach(btn => {
    btn.classList.toggle("on", btn.dataset.val === value);
    btn.addEventListener("click", () => {
      seg.querySelectorAll("button").forEach(b => b.classList.remove("on"));
      btn.classList.add("on");
      onChange(btn.dataset.val);
    });
  });
}

function positionThumb(seg, value) {
  const thumb = seg.querySelector(".thumb");
  if (!thumb) return;
  const btns = [...seg.querySelectorAll("button")];
  const i = Math.max(0, btns.findIndex(b => b.dataset.val === value));
  const n = btns.length;
  const w = (seg.clientWidth - 4) / n;
  thumb.style.width = w + "px";
  thumb.style.transform = `translateX(${i * w}px)`;
  if (document.documentElement.dir === "rtl") {
    thumb.style.transform = `translateX(${-(i * w)}px)`;
  }
}

/* --------- HIDE LOADER --------- */
function hideLoader() {
  setTimeout(() => document.getElementById("loader").classList.add("hidden"), 900);
}

/* --------- BOOT --------- */
document.addEventListener("DOMContentLoaded", () => {
  renderWork("workGrid", WORK);
  renderWork("moreProjects", MORE);
  renderStack();
  renderTimeline();
  renderTestimonials();
  setLang(T.lang);
  initCursor();
  initReveal();
  initCounters();
  initMagnetic();
  initTilt();
  initNavScroll();
  initClock();
  initTweaks();
  hideLoader();

  // Lang toggle button
  document.getElementById("langToggle").addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("lang");
    setLang(cur === "ar" ? "en" : "ar");
    // re-position thumbs after dir change
    requestAnimationFrame(() => {
      document.querySelectorAll('[data-tweak]').forEach(seg => {
        const onBtn = seg.querySelector("button.on");
        if (onBtn) positionThumb(seg, onBtn.dataset.val);
      });
    });
  });

  // Reposition seg thumb on resize
  window.addEventListener("resize", () => {
    document.querySelectorAll('[data-tweak]').forEach(seg => {
      const onBtn = seg.querySelector("button.on");
      if (onBtn) positionThumb(seg, onBtn.dataset.val);
    });
  });
});
