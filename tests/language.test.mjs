import test from 'node:test';
import assert from 'node:assert/strict';
let sequence = 0;
async function languageWith(storage) {
  globalThis.localStorage = storage;
  return import(`../src/i18n/language.js?case=${++sequence}`);
}
const storageWith = (values = {}) => {
  const entries = new Map(Object.entries(values));
  return { getItem: key => entries.get(key) ?? null, setItem: (key, value) => entries.set(key, value) };
};

test('a first visit starts in English, ignoring the old language key', async () => {
  const language = await languageWith(storageWith({ lang: 'es' }));
  assert.equal(language.getLanguage(), 'en');
});
test('an explicitly saved Spanish preference is restored', async () => {
  const language = await languageWith(storageWith({ 'portfolio.language': 'es' }));
  assert.equal(language.getLanguage(), 'es');
});
test('invalid stored values fall back to English', async () => {
  const language = await languageWith(storageWith({ 'portfolio.language': 'fr' }));
  assert.equal(language.getLanguage(), 'en');
});
test('choosing a language persists it for the next visit', async () => {
  const storage = storageWith();
  const language = await languageWith(storage);
  language.setLanguage('es');
  assert.equal((await languageWith(storage)).getLanguage(), 'es');
});
test('switching works when reading and writing storage are blocked', async () => {
  const language = await languageWith({ getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); } });
  assert.equal(language.getLanguage(), 'en');
  language.setLanguage('es');
  assert.equal(language.getLanguage(), 'es');
});
test('a failed storage write cannot override the current choice with an old preference', async () => {
  const language = await languageWith({ getItem: () => 'es', setItem() { throw new Error('quota'); } });
  assert.equal(language.getLanguage(), 'es');
  language.setLanguage('en');
  assert.equal(language.getLanguage(), 'en');
});
test('localized dates keep their calendar day and differ by language', async () => {
  const { formatDate } = await languageWith(storageWith());
  assert.equal(formatDate('2026-11-11', 'en'), 'Nov 11, 2026');
  assert.match(formatDate('2026-11-11', 'es'), /^11 nov/);
  assert.equal(formatDate('invalid', 'es'), 'invalid');
});
