/** Pair the Markdown modules Vite actually loaded, rather than two independent content-store snapshots. */
export function pairContent(sources, translations, { sourceBase, translationBase, sourceLanguage, targetLanguage }) {
  const idOf = (path, base) => path.slice(base.length).replace(/\.mdx?$/, '');
  const translatedById = new Map(Object.entries(translations).map(([path, entry]) => [idOf(path, translationBase), entry]));
  return Object.entries(sources).map(([path, source]) => {
    const id = idOf(path, sourceBase);
    const translated = translatedById.get(id);
    return {
      id,
      data: source.frontmatter,
      body: source.rawContent(),
      Content: source.Content,
      hasTranslation: Boolean(translated),
      translation: {
        data: { ...source.frontmatter, ...translated?.frontmatter },
        body: (translated ?? source).rawContent(),
        Content: (translated ?? source).Content,
        language: translated ? targetLanguage : sourceLanguage,
      },
    };
  });
}
