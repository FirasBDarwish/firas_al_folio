import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    equalContribution: z.array(z.string()).default([]),
    venue: z.string().optional(),
    year: z.number(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    featuredOrder: z.number().optional(),
    links: z.object({
      arxiv: z.string().url().optional(),
      scholar: z.string().url().optional(),
      website: z.string().url().optional(),
      code: z.string().url().optional(),
      paper: z.string().url().optional(),
      poster: z.string().optional(),
    }).default({}),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),

    type: z.enum([
      'technical-note',
      'research-thought',
      'presentation',
      'paper',
      'class-note',
      'reading-group',
      'paper-review',
      'misc',
    ]).default('technical-note'),

    featured: z.boolean().default(false),

    file: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const engagement = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/engagement',
  }),

  schema: z.object({
    title: z.string(),
    source: z.string(),
    date: z.coerce.date(),

    type: z.enum([
      'profile',
      'news',
      'talk',
      'video',
      'interview',
      'podcast',
      'social',
      'other',
    ]),

    url: z.string().url(),
    description: z.string().optional(),
  }),
});

export const collections = { publications, writing, engagement };
