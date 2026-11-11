import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    lang: z.enum(["en", "es"]).default("en"),
    tag: z.string().optional(),
    description: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    titleEs: z.string(),
    descriptionEs: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    outcomes: z.array(z.object({ value: z.string(), label: z.string(), labelEs: z.string() })),
    tech: z.string(),
    description: z.string().optional(),
    image: z.string(),
    pubDate: z.coerce.date().optional(),
  }),
});

const projectTranslations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/project-translations' }),
  schema: z.object({ title: z.string() }),
});
const blogTranslations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-translations' }),
  schema: z.object({ title: z.string(), description: z.string() }),
});
export const collections = { blog, blogTranslations, projects, projectTranslations };
