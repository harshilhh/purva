import { useEffect, useState } from 'react';

/**
 * Tracks which heading id is currently being read (scroll-spy).
 *
 * @param {string[]} ids element ids in document order
 * @returns {string | null}
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(null);
  const key = ids.join('|');

  useEffect(() => {
    const elements = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (elements.length === 0) return undefined;

    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
          else visible.delete(entry.target.id);
        });
        const topmost = elements.find((el) => visible.has(el.id));
        if (topmost) setActiveId(topmost.id);
      },
      { rootMargin: '-96px 0px -60% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return activeId;
}
