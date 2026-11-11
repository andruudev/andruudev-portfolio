import { translations } from "../i18n/translations.js";

export function initContactForm(onPageCleanup) {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const button = form.querySelector('button[type="submit"]');
  const status = form.querySelector('[role="status"]');
  const controller = new AbortController();
  onPageCleanup(() => controller.abort());
  const message = (key) => {
    const lang = localStorage.getItem("lang") === "es" ? "es" : "en";
    if (status) status.textContent = translations[lang][key];
  };
  form.onsubmit = async (event) => {
    event.preventDefault();
    if (!button || button.disabled) return;
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

