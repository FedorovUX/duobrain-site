import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Alexey Fedorov'),
    tags: z.array(z.string()).default([]),
    // If this post was also published on Medium/LinkedIn,
    // point canonical to the source you want Google to rank.
    canonical: z.string().url().optional(),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };
