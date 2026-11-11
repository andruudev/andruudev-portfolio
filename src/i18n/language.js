export const LANGUAGE_KEY = 'portfolio.language';
let currentLanguage = 'en';
let initialized = false;

export function getLanguage() {
  if (!initialized) {
    initialized = true;
    try {
      currentLanguage = globalThis.localStorage?.getItem(LANGUAGE_KEY) === 'es' ? 'es' : 'en';
    } catch { /* English is the default when storage is unavailable. */ }
  }
  return currentLanguage;
}

export function setLanguage(language) {
  currentLanguage = language === 'es' ? 'es' : 'en';
  initialized = true;
  try { globalThis.localStorage?.setItem(LANGUAGE_KEY, currentLanguage); } catch { /* The current visit still remembers the choice. */ }
  return currentLanguage;
}

export function formatDate(value, language = 'en') {
  const date = new Date(`${value}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(language === 'es' ? 'es-EC' : 'en-US', {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC',
  }).format(date);
}

const categories = {
  'Infrastructure as Code': 'Infraestructura como Código',
  'Platform Engineering': 'Ingeniería de plataformas',
  'Site Reliability': 'Confiabilidad de sistemas',
  'Serverless Architecture': 'Arquitectura serverless',
  'Cloud': 'Cloud', 'AI': 'IA', 'IaC': 'IaC', 'Kubernetes': 'Kubernetes',
  'SRE': 'SRE', 'DevSecOps': 'DevSecOps', 'GitOps': 'GitOps',
};
export function categoryCopy(category = '') {
  return { en: category, es: categories[category] ?? category };
}
