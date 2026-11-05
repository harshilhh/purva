import uaeAiAmlPrivacy from './uae-ai-aml-privacy-compliance';
import dummyPosts from './dummyPosts';

const WORDS_PER_MINUTE = 220;

/** All posts, sorted newest first. Add new posts here. */
const posts = [uaeAiAmlPrivacy, ...dummyPosts].toSorted((a, b) => b.publishedOn.localeCompare(a.publishedOn));

function collectText(value) {
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.map(collectText).join(' ');
  if (value && typeof value === 'object') return Object.values(value).map(collectText).join(' ');
  return '';
}

/**
 * @param {object} post
 * @returns {number} estimated reading time in minutes
 */
export function readingTime(post) {
  const words = collectText([post.keyTakeaways, post.sections]).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/**
 * @param {string} iso e.g. "2026-10-27"
 * @returns {string} e.g. "27 October 2026"
 */
export function formatDate(iso) {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function getAllPosts() {
  return posts;
}

/**
 * @param {string | undefined} slug
 * @returns {object | null}
 */
export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) ?? null;
}
