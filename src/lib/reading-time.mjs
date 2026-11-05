import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

/**
 * Remark plugin that injects reading time into each page's frontmatter
 * as `minutesRead` (e.g. "6 min read"), available via the rendered
 * `remarkPluginFrontmatter`.
 */
export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    data.astro.frontmatter.minutesRead = readingTime.text;
    data.astro.frontmatter.words = readingTime.words;
  };
}
