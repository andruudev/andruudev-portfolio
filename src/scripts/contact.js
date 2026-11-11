import { getLanguage } from "../i18n/language.js";
import { translations } from "../i18n/translations.js";

export function initContactForm(onPageCleanup) {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.noValidate = true;
  const button = form.querySelector('button[type="submit"]');
  const status = form.querySelector('[role="status"]');
  const fields = [...form.querySelectorAll('input, textarea')];
  const validate = (field) => {
    const missing = !field.value.trim();
    const key = missing ? 'field_required' : field.validity.typeMismatch ? 'email_invalid' : null;
    const error = form.querySelector(`#${field.id}-error`);
    field.setAttribute('aria-invalid', key ? 'true' : 'false');
    if (error) {
      error.hidden = !key;
      if (key) { error.dataset.t = key; error.textContent = translations[getLanguage()][key]; }
      else { delete error.dataset.t; error.textContent = ''; }
    }
    return !key;
  };
  for (const field of fields) {
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validate(field);
    });
  }
  const updateValidation = () => fields.forEach(field => {
    if (field.getAttribute('aria-invalid') === 'true') validate(field);
  });
  document.addEventListener('portfolio:language-change', updateValidation);
  onPageCleanup(() => document.removeEventListener('portfolio:language-change', updateValidation));
  const controller = new AbortController();
  onPageCleanup(() => controller.abort());
  const message = (key) => {
    const lang = getLanguage();
    if (status) { status.dataset.t = key; status.textContent = translations[lang][key]; }
  };
  form.onsubmit = async (event) => {
    event.preventDefault();
    if (!button || button.disabled) return;
    const invalid = fields.filter(field => !validate(field));
    if (invalid.length) {
      message('form_invalid');
      invalid[0].focus();
      return;
    }
    const id = form.dataset.formspreeId;
    if (!id || id === "YOUR_FORM_ID") { message("form_unavailable"); return; }
    button.disabled = true;
    form.setAttribute("aria-busy", "true");
    message("form_sending");
    try {
      const response = await fetch(`https://formspree.io/f/${id}`, {
        method: "POST", body: new FormData(form),
        headers: { Accept: "application/json" }, signal: controller.signal,
      });
      if (!response.ok) throw new Error("Submission failed");
      message("form_sent");
      form.reset();
    } catch (error) {
      if (error.name !== "AbortError") message("form_error");
    } finally {
      button.disabled = false;
      form.removeAttribute("aria-busy");
    }
  };
}

