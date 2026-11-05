import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getResearch } from '../lib/content';

export async function GET(context: APIContext) {
  const research = await getResearch();
  return rss({
    title: 'Fractal North · Research',
    description: 'Long-form quantitative research on markets, models, and method.',
    site: context.site ?? 'https://fractalnorth.com',
    items: research.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.data.abstract,
      link: `/research/${entry.id}/`,
      categories: entry.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
