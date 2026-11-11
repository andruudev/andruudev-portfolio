import type { MarkdownInstance } from 'astro';
import type { CollectionEntry } from 'astro:content';
import { pairContent } from './pair-content.js';

type BlogData = CollectionEntry<'blog'>['data'];
type ProjectData = CollectionEntry<'projects'>['data'];
type EnglishArticleData = { title: string; description?: string };
type SpanishProjectData = { title: string };
interface LocalizedEntry<Source extends Record<string, unknown>, Target extends Record<string, unknown>> {
  id: string;
  data: Source;
  body: string;
  Content: MarkdownInstance<Source>['Content'];
  hasTranslation: boolean;
  translation: {
    data: Target;
    body: string;
    Content: MarkdownInstance<Target>['Content'];
    language: string;
  };
}
export type BlogPost = LocalizedEntry<BlogData, EnglishArticleData>;
export type Project = LocalizedEntry<ProjectData, SpanishProjectData>;

// Eager imports give each request one consistent view of sources, metadata and renderable translations.
// Vite also updates these glob imports when Markdown files are added or removed during development.
const blog = import.meta.glob<MarkdownInstance<BlogData>>('../content/blog/*.md', { eager: true });
const englishBlog = import.meta.glob<MarkdownInstance<EnglishArticleData>>('../content/blog-translations/*.md', { eager: true });
const projects = import.meta.glob<MarkdownInstance<ProjectData>>('../content/projects/*.md', { eager: true });
const spanishProjects = import.meta.glob<MarkdownInstance<SpanishProjectData>>('../content/project-translations/*.md', { eager: true });

export function getBlogPosts(): BlogPost[] {
  return pairContent(blog, englishBlog, {
    sourceBase: '../content/blog/', translationBase: '../content/blog-translations/', sourceLanguage: 'es', targetLanguage: 'en',
  });
}
export function getProjects(): Project[] {
  return pairContent(projects, spanishProjects, {
    sourceBase: '../content/projects/', translationBase: '../content/project-translations/', sourceLanguage: 'en', targetLanguage: 'es',
  }).map(project => ({
    ...project,
    data: {
      ...project.data,
      featured: project.data.featured ?? false,
      pubDate: project.data.pubDate ? new Date(project.data.pubDate) : undefined,
    },
  }));
}
