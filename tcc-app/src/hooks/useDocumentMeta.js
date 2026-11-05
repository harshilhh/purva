import { useEffect } from 'react';

const SITE_URL = 'https://www.compliancenomics.com';

/** Selector → attribute holding the value, for every tag this hook manages. */
const TAGS = {
  description: ['meta[name="description"]', 'content'],
  ogTitle: ['meta[property="og:title"]', 'content'],
  ogDescription: ['meta[property="og:description"]', 'content'],
  ogUrl: ['meta[property="og:url"]', 'content'],
  ogType: ['meta[property="og:type"]', 'content'],
  ogImage: ['meta[property="og:image"]', 'content'],
  twitterTitle: ['meta[property="twitter:title"]', 'content'],
  twitterDescription: ['meta[property="twitter:description"]', 'content'],
  twitterUrl: ['meta[property="twitter:url"]', 'content'],
  canonical: ['link[rel="canonical"]', 'href'],
};

function ensureElement(selector) {
  const existing = document.head.querySelector(selector);
  if (existing) return { el: existing, created: false };

  const isLink = selector.startsWith('link');
  const el = document.createElement(isLink ? 'link' : 'meta');
  const [, attr, value] = selector.match(/\[(\w+(?::\w+)?)="([^"]+)"\]/) ?? [];
  if (attr) el.setAttribute(attr, value);
  document.head.appendChild(el);
  return { el, created: true };
}

/**
 * Sets the document title and SEO/social meta tags for the current page,
 * restoring the previous values on unmount.
 *
 * @param {{ title: string, description: string, path: string, image?: string, type?: string }} meta
 */
export function useDocumentMeta({ title, description, path, image, type = 'article' }) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const values = {
      description,
      ogTitle: title,
      ogDescription: description,
      ogUrl: url,
      ogType: type,
      ogImage: image ? `${SITE_URL}${image}` : undefined,
      twitterTitle: title,
      twitterDescription: description,
      twitterUrl: url,
      canonical: url,
    };

    const previousTitle = document.title;
    document.title = title;

    const restores = Object.entries(values)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => {
        const [selector, attr] = TAGS[key];
        const { el, created } = ensureElement(selector);
        const previous = el.getAttribute(attr);
        el.setAttribute(attr, value);
        return () => (created ? el.remove() : el.setAttribute(attr, previous ?? ''));
      });

    return () => {
      document.title = previousTitle;
      restores.forEach((restore) => restore());
    };
  }, [title, description, path, image, type]);
}
