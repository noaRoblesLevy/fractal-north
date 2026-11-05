import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

// Build-time Open Graph cards, one per page. Rendered with CanvasKit via
// astro-og-canvas; served from /og/<route>.png.

const research = await getCollection('research');
const projects = await getCollection('projects');
const notes = await getCollection('notes');

type Card = { title: string; description: string; eyebrow: string };

const pages: Record<string, Card> = {
  site: {
    title: 'Fractal North',
    description: 'Quantitative research: articles, projects, and notes.',
    eyebrow: 'QUANTITATIVE RESEARCH',
  },
  research: {
    title: 'Research',
    description: 'Long-form articles on markets, models, and method.',
    eyebrow: 'FRACTAL NORTH',
  },
  projects: {
    title: 'Projects',
    description: 'Systems I build: order books, simulators, tooling.',
    eyebrow: 'FRACTAL NORTH',
  },
  notes: {
    title: 'Notes',
    description: 'Short-form entries: puzzles, paper notes, study notes.',
    eyebrow: 'FRACTAL NORTH',
  },
  about: {
    title: 'About',
    description: 'What Fractal North is and what it researches.',
    eyebrow: 'FRACTAL NORTH',
  },
};

for (const entry of research) {
  pages[`research/${entry.id}`] = {
    title: entry.data.title,
    description: entry.data.abstract,
    eyebrow: 'RESEARCH · FRACTAL NORTH',
  };
}
for (const entry of projects) {
  pages[`projects/${entry.id}`] = {
    title: entry.data.title,
    description: entry.data.description,
    eyebrow: 'PROJECT · FRACTAL NORTH',
  };
}
for (const entry of notes) {
  pages[`notes/${entry.id}`] = {
    title: entry.data.title,
    description: entry.data.kind.toUpperCase() + ' note',
    eyebrow: 'NOTE · FRACTAL NORTH',
  };
}

// Brand fonts as TTF (CanvasKit needs ttf/otf). Fetched at build.
const fonts = [
  'https://api.fontsource.org/v1/fonts/ibm-plex-sans/latin-400-normal.ttf',
  'https://api.fontsource.org/v1/fonts/ibm-plex-sans/latin-600-normal.ttf',
  'https://api.fontsource.org/v1/fonts/cormorant-garamond/latin-600-normal.ttf',
];

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page: Card) => ({
    title: page.title,
    description: page.description,
    logo: {
      path: './public/og-star.png',
      size: [96],
    },
    bgGradient: [
      [10, 24, 62],
      [10, 21, 48],
    ],
    border: { color: [31, 79, 224], width: 16, side: 'inline-start' },
    padding: 70,
    font: {
      title: {
        color: [233, 240, 255],
        size: 68,
        weight: 'SemiBold',
        // The fontsource TTF registers under this family name in CanvasKit.
        families: ['Cormorant Garamond Light', 'Cormorant Garamond'],
        lineHeight: 1.05,
      },
      description: {
        color: [157, 178, 222],
        size: 30,
        weight: 'Normal',
        families: ['IBM Plex Sans'],
        lineHeight: 1.4,
      },
    },
    fonts,
  }),
});
