import { getLanguage, setLanguage, formatDate } from "../i18n/language.js";
import { translations } from "../i18n/translations.js";

// ---- Shared desktop and mobile theme control ----
export function initTheme(onPageCleanup) {
  const sync = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    syncThemeLabels();
  };
  let initialTheme = "light";
  try { initialTheme = localStorage.getItem("theme") === "dark" ? "dark" : "light"; } catch {}
  sync(initialTheme);
  const toggle = (event) => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    const commit = () => { sync(next); try { localStorage.setItem("theme", next); } catch {} };
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

// ---- Language and theme labels share one source of truth ----
function syncThemeLabels() {
  const language = getLanguage();
  const dictionary = translations[language];
  const dark = document.documentElement.dataset.theme === 'dark';
  const label = document.getElementById('mobileThemeLabel');
  if (label) label.textContent = dark ? dictionary.theme_dark : dictionary.theme_light;
  for (const id of ['themeToggle', 'mobileThemeBtn', 'modalThemeToggle']) {
    const button = document.getElementById(id);
    if (!button) continue;
    const action = dark ? dictionary.use_light_theme : dictionary.use_dark_theme;
    button.setAttribute('aria-label', action);
    button.title = action;
  }
}

function applyTranslations(language, announce = false) {
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'es' ? 'es_EC' : 'en_US');
  document.querySelectorAll('[data-t]').forEach((element) => {
    element.dispatchEvent(new Event('portfolio:translate'));
    const value = dictionary[element.dataset.t];
    if (!value) return;
    if (element.matches('input, textarea')) {
      element.placeholder = value;
      element.setAttribute('aria-label', value);
    } else {
      let target = element.querySelector(':scope > [data-translation-text]');
      if (!target) {
        target = document.createElement('span');
        target.dataset.translationText = '';
        for (const child of [...element.childNodes]) {
          if (child.nodeType === Node.TEXT_NODE) child.remove();
        }
        element.prepend(target);
      }
      target.textContent = value;
    }
  });
  document.querySelectorAll('[data-en][data-es]').forEach((element) => {
    element.dispatchEvent(new Event('portfolio:translate'));
    element.textContent = element.dataset[language];
  });
  document.querySelectorAll('[data-language-content]').forEach((element) => {
    element.hidden = element.dataset.languageContent !== language;
  });
  document.querySelectorAll('[data-localized-date]').forEach((element) => {
    element.textContent = formatDate(element.dataset.localizedDate, language);
  });
  for (const [selector, prefix, attribute] of [
    ['[data-content-en][data-content-es]', 'content', 'content'],
    ['[data-alt-en][data-alt-es]', 'alt', 'alt'],
    ['[data-src-en][data-src-es]', 'src', 'src'],
    ['[data-href-en][data-href-es]', 'href', 'href'],
  ]) {
    document.querySelectorAll(selector).forEach((element) => {
      const value = element.dataset[prefix + (language === 'es' ? 'Es' : 'En')];
      if (element.getAttribute(attribute) !== value) element.setAttribute(attribute, value);
    });
  }
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value) element.setAttribute('aria-label', value);
  });
  const targetLanguage = language === 'en' ? 'es' : 'en';
  for (const id of ['langText', 'mobileLangLabel']) {
    const label = document.getElementById(id);
    if (label) { label.textContent = targetLanguage === 'es' ? 'Español' : 'English'; label.lang = targetLanguage; }
  }
  for (const id of ['langToggle', 'mobileLangBtn', 'modalLangToggle']) {
    const button = document.getElementById(id);
    if (!button) continue;
    button.setAttribute('aria-label', dictionary.switch_language);
    button.title = dictionary.language_preference;
    button.dataset.currentLanguage = language;
  }
  syncThemeLabels();
  const status = document.getElementById('language-status');
  if (announce && status) status.textContent = dictionary.language_changed;
  document.dispatchEvent(new CustomEvent('portfolio:language-change', { detail: { language } }));
  window.ScrollTrigger?.refresh();
}

// Apply to the new DOM before Astro paints a navigation, then rebind controls on page-load.
document.addEventListener('astro:after-swap', () => applyTranslations(getLanguage()));
export function initLangToggle() {
  applyTranslations(getLanguage());
  for (const id of ['langToggle', 'mobileLangBtn', 'modalLangToggle']) {
    const button = document.getElementById(id);
    if (button) button.onclick = () => {
      const language = setLanguage(getLanguage() === 'en' ? 'es' : 'en');
      applyTranslations(language, true);
    };
  }
}
