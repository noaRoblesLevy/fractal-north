import { getCollection, type CollectionEntry } from 'astro:content';
import getReadingTime from 'reading-time';

/** Reading time from an entry's raw body (for list views). */
export function readingTime(body = ''): string {
  return getReadingTime(body).text;
}

// Drafts show in dev (so you can preview rendering) and are hidden in builds.
const showDrafts = import.meta.env.DEV;

export async function getResearch(): Promise<CollectionEntry<'research'>[]> {
  const entries = await getCollection('research', ({ data }) => showDrafts || !data.draft);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getProjects(): Promise<CollectionEntry<'projects'>[]> {
  const entries = await getCollection('projects', ({ data }) => showDrafts || !data.draft);
  return entries.sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    return b.data.date.getTime() - a.data.date.getTime();
  });
}

export async function getNotes(): Promise<CollectionEntry<'notes'>[]> {
  const entries = await getCollection('notes', ({ data }) => showDrafts || !data.draft);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
