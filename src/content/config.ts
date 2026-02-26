import { defineCollection, z } from "astro:content";

// blogコレクションの定義
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    images: z.array(z.string()).optional(),
  }),
});

// pageコレクションの定義
const pageCollection = defineCollection({
  type: "content", 
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  page: pageCollection,
};