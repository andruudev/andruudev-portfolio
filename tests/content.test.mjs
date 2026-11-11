import test from 'node:test';
import assert from 'node:assert/strict';
import { pairContent } from '../src/data/pair-content.js';

const options = { sourceBase: '/blog/', translationBase: '/english/', sourceLanguage: 'es', targetLanguage: 'en' };
const article = (title, body) => ({ frontmatter: { title }, Content: () => body, rawContent: () => body });

test('an English article is paired by file ID, independently of collection-store state', () => {
  const [post] = pairContent({ '/blog/aws.md': article('AWS en español', 'es') }, { '/english/aws.md': article('AWS in English', 'en') }, options);
  assert.equal(post.id, 'aws');
  assert.equal(post.translation.data.title, 'AWS in English');
  assert.equal(post.translation.Content(), 'en');
  assert.equal(post.translation.language, 'en');
});
test('a missing translation never takes the listing or original article down', () => {
  const [post] = pairContent({ '/blog/aws.md': article('AWS en español', 'original') }, {}, options);
  assert.equal(post.hasTranslation, false);
  assert.equal(post.translation.Content(), 'original');
  assert.equal(post.translation.language, 'es');
});
test('adding and removing a translation updates the pair without a stale lookup', () => {
  const sources = { '/blog/aws.md': article('AWS', 'es') };
  const translated = { '/english/aws.md': article('AWS', 'en') };
  assert.equal(pairContent(sources, {}, options)[0].hasTranslation, false);
  assert.equal(pairContent(sources, translated, options)[0].hasTranslation, true);
  assert.equal(pairContent(sources, {}, options)[0].hasTranslation, false);
});
test('translations of removed articles cannot create phantom posts', () => {
  assert.deepEqual(pairContent({}, { '/english/deleted.md': article('Deleted', 'old') }, options), []);
});
