import { useState } from 'react';

function TocList({ items, activeId, onNavigate }) {
  return (
    <ol className="space-y-0.5">
      {items.map((item, i) => {
        const childActive = item.children?.some((c) => c.id === activeId);
        const isActive = item.id === activeId || childActive;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              aria-current={item.id === activeId ? 'location' : undefined}
              className={`group flex gap-3 py-2 pl-3 border-l-2 text-[13px] leading-snug transition-colors duration-200 ${
                isActive
                  ? 'border-brand-yellow text-brand-dark font-semibold'
                  : 'border-transparent text-brand-grey hover:text-brand-dark hover:border-brand-border'
              }`}
            >
              <span className={`shrink-0 font-display text-[12px] font-semibold tabular-nums ${isActive ? 'text-brand-yellow-dark' : 'text-brand-grey-light'}`}>
                {item.number ?? String(i).padStart(2, '0')}
              </span>
              <span>{item.label}</span>
            </a>
            {item.children?.length > 0 && (
              <ol className="ml-[27px] mb-1">
                {item.children.map((child) => (
                  <li key={child.id}>
                    <a
                      href={`#${child.id}`}
                      onClick={onNavigate}
                      aria-current={child.id === activeId ? 'location' : undefined}
                      className={`block py-1.5 pl-3 text-[12px] leading-snug border-l transition-colors duration-200 ${
                        child.id === activeId
                          ? 'border-brand-yellow text-brand-dark font-medium'
                          : 'border-brand-border text-brand-grey-light hover:text-brand-dark'
                      }`}
                    >
                      {child.label}
                    </a>
                  </li>
                ))}
              </ol>
            )}
          </li>
        );
      })}
    </ol>
  );
}

/** Sticky sidebar on desktop, collapsible panel on mobile. */
export default function TableOfContents({ items, activeId }) {
  const [open, setOpen] = useState(false);
  const activeLabel =
    items.flatMap((i) => [i, ...(i.children ?? [])]).find((i) => i.id === activeId)?.label ?? 'Jump to a section';

  return (
    <>
      {/* Mobile / tablet */}
      <div className="lg:hidden sticky top-[67px] md:top-[75px] z-30 -mx-6 px-6 bg-white/95 backdrop-blur-sm border-b border-brand-border">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="toc-mobile"
          className="w-full min-h-[52px] flex items-center gap-3 text-left"
        >
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-yellow-dark shrink-0">Contents</span>
          <span className="flex-1 text-[13px] font-medium text-brand-dark truncate">{activeLabel}</span>
          <svg
            className={`w-4 h-4 shrink-0 text-brand-grey transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          id="toc-mobile"
          className={`overflow-y-auto transition-[max-height] duration-300 ease-out ${open ? 'max-h-[60vh] pb-4' : 'max-h-0'}`}
        >
          <TocList items={items} activeId={activeId} onNavigate={() => setOpen(false)} />
        </div>
      </div>

      {/* Desktop */}
      <nav aria-label="Table of contents" className="hidden lg:block sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 subnav-scroll">
        <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-brand-yellow-dark mb-4">Table of Contents</p>
        <TocList items={items} activeId={activeId} />
      </nav>
    </>
  );
}
