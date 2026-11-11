import { translations } from "../i18n/translations.js";

// ---- Shared desktop and mobile theme control ----
export function initTheme(onPageCleanup) {
  const sync = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    const label = document.getElementById("mobileThemeLabel");
    if (label) label.textContent = theme === "dark" ? "Dark" : "Light";
  };
  sync(localStorage.getItem("theme") === "dark" ? "dark" : "light");
  const toggle = (event) => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    const commit = () => { sync(next); localStorage.setItem("theme", next); };
    if (!window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      commit();
      return;
    }
    const x = event.clientX || window.innerWidth / 2;
    const y = event.clientY || window.innerHeight / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const overlay = document.createElement("div");
    Object.assign(overlay.style, {
      position: "fixed", inset: "0", zIndex: "999999", pointerEvents: "none",
      backgroundColor: next === "dark" ? "#0a0a0a" : "#fff",
      clipPath: `circle(0px at ${x}px ${y}px)`,
    });
    document.body.appendChild(overlay);
    gsap.to(overlay, {
      clipPath: `circle(${radius}px at ${x}px ${y}px)`, duration: 0.8,
      ease: "power3.inOut", onComplete: () => { commit(); overlay.remove(); },
    });
    onPageCleanup(() => overlay.remove());
  };
  for (const id of ["themeToggle", "mobileThemeBtn", "modalThemeToggle"]) {
    const button = document.getElementById(id);
    if (button) button.onclick = toggle;
  }
}

// ---- Shared desktop and mobile language control ----
function applyTranslations(lang) {
  const dictionary = translations[lang];
  document.documentElement.lang = lang;
  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", lang === "es" ? "es_ES" : "en_US");
  document.querySelectorAll("[data-t]").forEach((element) => {
    element.dispatchEvent(new Event("portfolio:translate"));
    const value = dictionary[element.dataset.t];
    if (!value) return;
    if (element.matches("input, textarea")) {
      element.placeholder = value;
      element.setAttribute("aria-label", value);
    } else {
      // Keep icons and other child elements when translating a link.
      let target = element.querySelector(":scope > [data-translation-text]");
      if (!target) {
        target = document.createElement("span");
        target.dataset.translationText = "";
        for (const child of [...element.childNodes]) {
          if (child.nodeType === Node.TEXT_NODE) child.remove();
        }
        element.prepend(target);
      }
      target.textContent = value;
    }
  });
  for (const id of ["langText", "mobileLangLabel"]) {
    const label = document.getElementById(id);
    if (label) label.textContent = lang.toUpperCase();
  }
}
export function initLangToggle() {
  let lang = localStorage.getItem("lang") === "es" ? "es" : "en";
  applyTranslations(lang);
  for (const id of ["langToggle", "mobileLangBtn", "modalLangToggle"]) {
    const button = document.getElementById(id);
    if (button) button.onclick = () => {
      lang = lang === "en" ? "es" : "en";
      localStorage.setItem("lang", lang);
      applyTranslations(lang);
    };
  }
}
