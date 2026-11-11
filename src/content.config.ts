import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    lang: z.enum(["en", "es"]).default("en"),
    tag: z.string().optional(),
    description: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    tech: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    pubDate: z.date().optional(),
  }),
});

export const collections = { blog, projects };
