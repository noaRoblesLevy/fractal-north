// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import { remarkReadingTime } from './src/lib/reading-time.mjs';

// Update this to your production domain once connected on Vercel.
export const SITE = 'https://fractalnorth.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/og/'),
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkGfm, remarkReadingTime],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      // Dual themes so code follows the light/dark toggle via CSS variables.
      themes: {
        light: 'github-light',
        dark: 'night-owl',
      },
      wrap: true,
    },
  },
});
