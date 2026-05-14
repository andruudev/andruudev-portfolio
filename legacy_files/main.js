import { HomeView } from './views/home.js';
import { AboutView } from './views/about.js';
import { ProjectView } from './views/project.js';
import { WritingView } from './views/writing.js';
import { BookshelfView } from './views/bookshelf.js';
import { NowView } from './views/now.js';
import { ColophonView } from './views/colophon.js';
import { SkillsView } from './views/skills.js';
import { ExperienceView } from './views/experience.js';
import { EducationView } from './views/education.js';
import { CertificationsView } from './views/certifications.js';
import { LeadershipView } from './views/leadership.js';
import { translations } from './translations.js';

const cmdBtn = document.getElementById('cmdBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalTime = document.getElementById('modalTime');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const langText = document.getElementById('langText');
const modalThemeToggle = document.getElementById('modalThemeToggle');
const modalLangToggle = document.getElementById('modalLangToggle');
const app = document.getElementById('app');

let currentLang = localStorage.getItem('lang') || 'en';
const BASE_PATH = window.location.hostname.includes('github.io') ? '/andruudev-portfolio' : '';

// --- Router ---
const routes = {
  '/': HomeView,
  '/about': AboutView,
  '/skills': SkillsView,
  '/experience': ExperienceView,
  '/education': EducationView,
  '/certifications': CertificationsView,
  '/leadership': LeadershipView,
  '/writing': WritingView,
  '/blog': WritingView,
  '/bookshelf': BookshelfView,
  '/now': NowView,
  '/colophon': ColophonView,
  '/project/sales-intelligence': () => ProjectView('sales-intelligence'),
  '/project/retail-analytics': () => ProjectView('retail-analytics'),
};

function navigateTo(path) {
  // Ensure path starts with BASE_PATH
  const fullPath = path.startsWith(BASE_PATH) ? path : BASE_PATH + path;
  window.history.pushState({}, fullPath, window.location.origin + fullPath);
  handleRoute();
  closeModal();
  window.scrollTo(0, 0);
}

gsap.registerPlugin(ScrollTrigger);

function handleRoute() {
  const path = window.location.pathname.replace(BASE_PATH, '') || '/';
  const view = routes[path] || routes['/'];
  
  // Start Page Wipe
  const cols = document.querySelectorAll('.transition-column');
  const tl = gsap.timeline();
  
  tl.to(cols, {
    scaleY: 1,
    duration: 0.6,
    stagger: 0.1,
    ease: "power4.inOut"
  })
  .add(() => {
    // Content Change
    ScrollTrigger.getAll().forEach(t => t.kill());
    app.innerHTML = view();
    applyTranslations();
    attachLinkListeners();
    initContactForm();
    initVisitorAnalytics();
    window.scrollTo(0, 0);
    
    if (path === '/') {
      // API calls removed per user request
    }
  })
  .to(cols, {
    scaleY: 0,
    transformOrigin: "bottom",
    duration: 0.6,
    stagger: 0.1,
    ease: "power4.inOut",
    delay: 0.1,
    onComplete: () => {
      // Re-init everything after wipe
      initScrollEffects();
      initMagneticLinks(); // Re-apply to new elements
      gsap.set(cols, { transformOrigin: "top" }); // Reset for next time
    }
  });
}

function initMagneticLinks() {
  const magneticElements = document.querySelectorAll('.avatar, .cmd-btn, .nav-link, .item');
  magneticElements.forEach(el => {
    // Remove old listeners to avoid duplicates if re-initing
    el.removeEventListener('mousemove', el._magMove);
    
    el._magMove = (e) => {
      const { clientX: x, clientY: y } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      const deltaX = x - (left + width / 2);
      const deltaY = y - (top + height / 2);
      
      gsap.to(el, { 
        x: deltaX * 0.3, 
        y: deltaY * 0.3, 
        rotateX: -deltaY * 0.1,
        rotateY: deltaX * 0.1,
        duration: 0.3 
      });
    };

    el.addEventListener('mousemove', el._magMove);
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, rotateX: 0, rotateY: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
    });
  });
}

function initScrollEffects() {
  // Progress Bar
  gsap.to('#progress-bar', {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      scrub: 0.3
    }
  });

  // Reveal Animations for sections
  const animatedElements = app.querySelectorAll('.animate');
  animatedElements.forEach((el) => {
    const label = el.querySelector('.section-label');
    
    gsap.fromTo(el, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
          onEnter: () => {
            if (label) label.classList.add('visible');
          }
        },
        onComplete: () => {
          if (window.lucide) lucide.createIcons();
        }
      }
    );
  });

  // Parallax for Case Study Images
  const heroImg = app.querySelector('.case-study-hero img');
  if (heroImg) {
    gsap.to(heroImg, {
      y: 50,
      ease: "none",
      scrollTrigger: {
        trigger: heroImg,
        scrub: true
      }
    });
  }

  // Chart Animations
  const chartBars = app.querySelectorAll('.chart-bar');
  if (chartBars.length > 0) {
    gsap.to(chartBars, {
      scaleX: 1,
      duration: 1.5,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: '.chart-container',
        start: "top 80%"
      }
    });
  }
}

// API functions removed.

function timeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + "y ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + "mo ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + "d ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + "h ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + "m ago";
  return Math.floor(seconds) + "s ago";
}

function attachLinkListeners() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = (e) => {
      const path = link.getAttribute('href');
      if (path && (path.startsWith('/') || path.startsWith(BASE_PATH))) {
        e.preventDefault();
        navigateTo(path);
      }
    };
  });

  document.querySelectorAll('.nav-link-modal').forEach(item => {
    item.onclick = () => {
      const path = item.getAttribute('data-path');
      navigateTo(path);
    };
  });

  // Scramble effect on section labels
  document.querySelectorAll('.section-label').forEach(label => {
    label.onmouseenter = () => {
      const scrambler = new TextScramble(label);
      scrambler.setText(label.textContent);
    };
  });

  // Project Previews
  initProjectPreview();
}

// --- Text Scramble Effect ---
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// --- Project Preview ---
const projectData = {
  'partner-growth': '/projects/partner-growth.png',
  'client-page': '/projects/client-page.png',
  'finding-home': '/projects/finding-home.png',
  'type-wunderkammer': '/projects/type-wunderkammer.png'
};

function initProjectPreview() {
  const preview = document.getElementById('project-preview');
  
  // Target only items in "Work" and "Side Projects" sections
  const validLinks = Array.from(document.querySelectorAll('.item')).filter(link => {
    const section = link.closest('section');
    const label = section?.querySelector('.section-label')?.textContent.toLowerCase();
    return label === 'work' || label === 'side projects';
  });

  validLinks.forEach(link => {
    // Clean title for matching with projectData keys
    const titleEl = link.querySelector('.item-title');
    if (!titleEl) return;
    
    // Remove icons and special chars for key matching
    const rawTitle = titleEl.innerText || titleEl.textContent;
    const cleanTitle = rawTitle.toLowerCase().trim().replace(/ /g, '-').replace(/[^\w-]/g, '');
    
    const imgSrc = projectData[cleanTitle] || projectData['client-page'];

    link.addEventListener('mouseenter', () => {
      preview.innerHTML = `<img src="${imgSrc}" alt="Preview">`;
      gsap.to(preview, { opacity: 1, scale: 1, rotate: 0, duration: 0.4, ease: "power2.out" });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(preview, { opacity: 0, scale: 0.8, rotate: -5, duration: 0.4, ease: "power2.in" });
    });

    link.addEventListener('mousemove', (e) => {
      gsap.to(preview, {
        x: e.clientX + 20,
        y: e.clientY - 90,
        duration: 0.6,
        ease: "power3.out"
      });
    });
  });
}

// --- Lenis Smooth Scroll ---
let lenis;
function initLenis() {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

// --- Custom Cursor ---
function initCursor() {
  const cursor = document.getElementById('cursor');
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.15;

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  gsap.ticker.add(() => {
    pos.x += (mouse.x - pos.x) * speed;
    pos.y += (mouse.y - pos.y) * speed;
    gsap.set(cursor, { x: pos.x, y: pos.y });
  });

  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, .nav-link, .modal-item')) {
      cursor.classList.add('hovering');
    }
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest('a, button, .nav-link, .modal-item')) {
      cursor.classList.remove('hovering');
    }
  });
}

// --- Theme Management (Circular Reveal) ---
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme(event) {
  const x = event?.clientX || window.innerWidth / 2;
  const y = event?.clientY || window.innerHeight / 2;
  const endRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
  
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  // Create a overlay for the transition
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.zIndex = '9998';
  overlay.style.pointerEvents = 'none';
  overlay.style.backgroundColor = newTheme === 'dark' ? '#0a0a0a' : '#ffffff';
  overlay.style.clipPath = `circle(0px at ${x}px ${y}px)`;
  document.body.appendChild(overlay);

  gsap.to(overlay, {
    clipPath: `circle(${endRadius}px at ${x}px ${y}px)`,
    duration: 0.8,
    ease: "power3.inOut",
    onComplete: () => {
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      document.body.removeChild(overlay);
    }
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleTheme(e);
    closeModal();
  });
}

// --- Language Management ---
function applyTranslations() {
  const t = translations[currentLang];
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });
  
  if (langText) langText.textContent = currentLang.toUpperCase();
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  localStorage.setItem('lang', currentLang);
  applyTranslations();
  handleRoute(); // Refresh current view
}

if (langToggle) {
  langToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleLanguage();
    closeModal();
  });
}

if (modalThemeToggle) {
  modalThemeToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleTheme(e);
    closeModal();
  });
}

if (modalLangToggle) {
  modalLangToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleLanguage();
    closeModal();
  });
}

// --- Modal Management ---
function updateTime() {
  const now = new Date();
  const options = { timeZone: 'America/Guayaquil', hour: '2-digit', minute: '2-digit', hour12: true };
  const timeString = now.toLocaleTimeString('en-GB', options).toLowerCase();
  if (modalTime) modalTime.textContent = `Ecuador, ${timeString}`;
}

function openModal() {
  updateTime();
  modalOverlay.classList.add('active');
  document.body.classList.add('modal-open');

  // Change icon to X
  const iconEl = document.getElementById('menu-icon');
  if (iconEl) {
    iconEl.setAttribute('data-lucide', 'x');
    if (window.lucide) lucide.createIcons();
  }
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.classList.remove('modal-open');

  // Change icon back to Menu
  const iconEl = document.getElementById('menu-icon');
  if (iconEl) {
    iconEl.setAttribute('data-lucide', 'chart-no-axes-gantt');
    if (window.lucide) lucide.createIcons();
  }
}

cmdBtn.addEventListener('click', openModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// --- Keyboard Shortcuts ---
window.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  
  // Command + K (Case insensitive)
  if ((e.metaKey || e.ctrlKey) && key === 'k') {
    e.preventDefault();
    modalOverlay.classList.contains('active') ? closeModal() : openModal();
  }

  if (e.key === 'Escape') {
    closeModal();
  }

  if (modalOverlay.classList.contains('active')) {
    if (e.key === 'Enter') {
      const visibleItems = Array.from(document.querySelectorAll('.modal-item')).filter(i => i.style.display !== 'none');
      if (visibleItems.length > 0) visibleItems[0].click();
    }
    
    if (key === 'h') navigateTo('/');
    if (key === 'a') navigateTo('/about');
    if (key === 'b') navigateTo('/bookshelf');
    if (key === 'n') navigateTo('/writing');
    if (key === 'o') navigateTo('/now');
    if (key === 'c') navigateTo('/colophon');
    if (key === 't') { toggleTheme(e); closeModal(); }
    if (key === 'l') { toggleLanguage(); closeModal(); }
  }
});

// --- Cybersecurity Preloader ---
function initPreloader() {
  const preloader = document.getElementById('system-preloader');
  const bar = preloader.querySelector('.preloader-bar');
  const status = preloader.querySelector('.preloader-status');
  
  const tl = gsap.timeline();
  
  tl.to(bar, { width: '20%', duration: 0.4, ease: "power2.inOut" })
    .add(() => status.textContent = 'BOOTING_CORE_SYSTEM...')
    .to(bar, { width: '40%', duration: 0.5, ease: "power2.inOut", delay: 0.2 })
    .add(() => status.textContent = 'LOADING_UI_RESOURCES...')
    .to(bar, { width: '65%', duration: 0.4, ease: "power2.inOut" })
    .add(() => status.textContent = 'CONNECTING_TO_GRID...')
    .to(bar, { width: '85%', duration: 0.6, ease: "power2.inOut", delay: 0.1 })
    .add(() => status.textContent = 'DECRYPTING_BIO_METRICS...')
    .to(bar, { width: '100%', duration: 0.3, ease: "power1.out" })
    .add(() => status.textContent = 'ACCESS_GRANTED')
    .to(preloader, { 
      opacity: 0, 
      duration: 0.8, 
      ease: "power4.inOut", 
      onComplete: () => {
        preloader.style.display = 'none';
        gsap.fromTo(['.header', '.footer', '#menu-wrap', '#theme-wrap', '#lang-wrap'], 
          { opacity: 0, y: -20 }, 
          { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.2 }
        );
      }
    });
}

// --- Noise Effect ---
function initNoise() {
  const canvas = document.getElementById('noiseCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let w, h;
  const resize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
  
  window.addEventListener('resize', resize);
  resize();
  
  const noise = () => {
    const idata = ctx.createImageData(w, h);
    const buffer32 = new Uint32Array(idata.data.buffer);
    const len = buffer32.length;
    
    for (let i = 0; i < len; i++) {
      if (Math.random() < 0.5) buffer32[i] = 0xff000000;
    }
    
    ctx.putImageData(idata, 0, 0);
  };
  
  let frame = 0;
  const loop = () => {
    frame++;
    if (frame % 2 === 0) noise();
    requestAnimationFrame(loop);
  };
  
  loop();
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btnSpan = form.querySelector('.submit-btn span');
    const originalText = btnSpan.textContent;
    btnSpan.textContent = 'Sending...';

    try {
      // If the action URL is the default placeholder, just simulate success
      if (form.action.includes('YOUR_FORM_ID')) {
        await new Promise(r => setTimeout(r, 800));
        btnSpan.textContent = 'Sent Successfully';
      } else {
        // Send real data to Formspree or custom endpoint
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
          btnSpan.textContent = 'Sent Successfully';
        } else {
          btnSpan.textContent = 'Error Sending';
        }
      }
    } catch (error) {
      btnSpan.textContent = 'Error Sending';
    }

    setTimeout(() => {
      form.reset();
      btnSpan.textContent = originalText;
    }, 3000);
  });
}

// --- Real-time Visitor Analytics ---
let sessionStartTime = Date.now();
let globalMouseX = 0;
let globalMouseY = 0;

window.addEventListener('mousemove', (e) => {
  globalMouseX = e.clientX;
  globalMouseY = e.clientY;
});

let dashboardInterval = null;

function initVisitorAnalytics() {
  const metricsEl = document.getElementById('live-metrics');
  const logsEl = document.getElementById('system-logs');
  
  if (dashboardInterval) clearInterval(dashboardInterval);
  
  const logMessages = [
    'CONNECTING_TO_DATA_WAREHOUSE...',
    'SYNCING_POWER_BI_DATASETS...',
    'QUERY_EXECUTION_SUCCESS [SQL]',
    'EXTRACTING_ETL_PIPELINE_LOGS...',
    'UPDATING_DASHBOARD_METRICS...',
    'ANALYZING_TRAFFIC_PATTERNS...',
    'DATABASE_SYNC_SUCCESS [WORK_COLL]',
    'REFRESHING_OLAP_CUBES...',
    'ESTABLISHING_SECURE_API_CONNECTION',
    'SYSTEM_IDLE_NODE_OPTIMIZED'
  ];

  const addLog = () => {
    if (!logsEl) return;
    const msg = logMessages[Math.floor(Math.random() * logMessages.length)];
    const time = new Date().toLocaleTimeString('en-GB', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const line = document.createElement('div');
    line.className = 'log-line';
    line.textContent = `[${time}] > ${msg}`;
    logsEl.appendChild(line);
    
    // Keep last 12 logs
    if (logsEl.children.length > 12) {
      logsEl.removeChild(logsEl.firstChild);
    }
  };

  dashboardInterval = setInterval(addLog, 1500);

  const updateMetrics = () => {
    if (metricsEl) {
      const secondsActive = Math.floor((Date.now() - sessionStartTime) / 1000);
      const m = Math.floor(secondsActive / 60).toString().padStart(2, '0');
      const s = (secondsActive % 60).toString().padStart(2, '0');
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      
      const throughput = (Math.random() * 50 + 10).toFixed(1);
      const latency = Math.floor(Math.random() * 20 + 5);
      
      metricsEl.textContent = `T: ${m}:${s} | THRUPT: ${throughput}MB/S | LAT: ${latency}MS`;
    }
    requestAnimationFrame(updateMetrics);
  };
  
  updateMetrics();
}

// --- Magnetic Buttons ---
function initMagneticButton() {
  const magnets = [
    { wrapId: 'menu-wrap', btnId: 'cmdBtn', innerSelector: '#menu-icon' },
    { wrapId: 'theme-wrap', btnId: 'themeToggle', innerSelector: '.theme-toggle-inner' },
    { wrapId: 'lang-wrap', btnId: 'langToggle', innerSelector: '#langText' }
  ];

  magnets.forEach(({ wrapId, btnId, innerSelector }) => {
    const wrap = document.getElementById(wrapId);
    const btn = document.getElementById(btnId);
    if (!wrap || !btn) return;

    wrap.addEventListener('mousemove', (e) => {
      const rect = wrap.getBoundingClientRect();
      // Calculate distance from center of the wrapper
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Smoothly pull the button towards the mouse
      gsap.to(btn, {
        x: x * 0.5,
        y: y * 0.5,
        duration: 0.3,
        ease: "power2.out"
      });
      
      // Also pull the inner content slightly more for a parallax effect
      const inner = btn.querySelector(innerSelector);
      if (inner) {
        gsap.to(inner, {
          x: x * 0.25,
          y: y * 0.25,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });

    wrap.addEventListener('mouseleave', () => {
      // Snap back elastically
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.9,
        ease: "elastic.out(1, 0.3)"
      });
      
      const inner = btn.querySelector(innerSelector);
      if (inner) {
        gsap.to(inner, {
          x: 0,
          y: 0,
          duration: 0.9,
          ease: "elastic.out(1, 0.3)"
        });
      }
    });
    
    // Pass clicks from wrapper to button since button has pointer-events: none
    wrap.addEventListener('click', (e) => {
      if (btnId === 'cmdBtn') {
        if (modalOverlay.classList.contains('active')) {
          closeModal();
        } else {
          openModal();
        }
      } else if (btnId === 'themeToggle') {
        toggleTheme(e);
      } else if (btnId === 'langToggle') {
        toggleLanguage();
      }
    });
  });
}

// --- Init ---
function init() {
  if (window.lucide) lucide.createIcons();
  initTheme();
  applyTranslations();
  initNoise();
  initLenis();
  initCursor();
  handleRoute();
  initPreloader();
  initVisitorAnalytics();
  initMagneticButton();
  
  updateTime();
  setInterval(updateTime, 60000);
}

window.addEventListener('popstate', handleRoute);
document.addEventListener('DOMContentLoaded', init);

console.log('Portfolio initialized with High-End Effects.');
