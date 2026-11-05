import { useId, useState } from 'react';

function FAQItem({ index, item, isOpen, onToggle }) {
  const baseId = useId();
  const panelId = `${baseId}-panel`;
  const buttonId = `${baseId}-button`;
  return (
    <div className="border-b border-brand-border last:border-b-0">
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        >
          <span className="flex items-baseline gap-4">
            <span className="shrink-0 font-display text-[12px] font-semibold text-brand-yellow-dark tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-[17px] font-semibold text-brand-dark group-hover:text-brand-yellow-dark transition-colors duration-200">
              {item.q}
            </span>
          </span>
          <span
            className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${
              isOpen ? 'bg-brand-yellow border-brand-yellow' : 'border-gray-300 group-hover:border-brand-yellow'
            }`}
            aria-hidden="true"
          >
            <svg className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-dark' : 'text-brand-grey-light'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="pb-6 pl-9 pr-4 md:pr-12"
      >
        <p className="text-[16px] leading-[1.75] text-brand-grey">{item.a}</p>
        {item.points?.length > 0 && (
          <ul className="mt-3 space-y-2">
            {item.points.map((p) => (
              <li key={p} className="flex gap-3 text-[16px] leading-[1.7] text-brand-grey">
                <span className="mt-[11px] w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function ArticleFAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="mt-6 border-t border-brand-border">
      {items.map((item, i) => (
        <FAQItem
          key={item.q}
          index={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex((prev) => (prev === i ? -1 : i))}
        />
      ))}
    </div>
  );
}
