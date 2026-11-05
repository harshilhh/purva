import { useState } from 'react';

/** Interactive readiness checklist: readers tick off controls they already have in place. */
export default function ComplianceChecklist({ items }) {
  const [checked, setChecked] = useState(() => new Set());
  const done = checked.size;
  const total = items.length;

  const toggle = (index) =>
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <div className="my-8 border border-brand-border bg-white">
      <div className="flex flex-wrap items-center gap-4 justify-between px-5 sm:px-8 py-5 border-b border-brand-border bg-brand-surface-warm">
        <p className="text-[13px] text-brand-grey">Tick the controls already in place in your organisation.</p>
        <div className="flex items-center gap-3" aria-live="polite">
          <div className="w-28 h-1.5 bg-brand-border rounded-full overflow-hidden" aria-hidden="true">
            <div className="h-full bg-brand-yellow transition-[width] duration-300 ease-out" style={{ width: `${(done / total) * 100}%` }} />
          </div>
          <span className="text-[13px] font-semibold text-brand-dark tabular-nums">
            {done} / {total} in place
          </span>
        </div>
      </div>

      <ul className="divide-y divide-brand-border">
        {items.map((item, i) => {
          const isChecked = checked.has(i);
          const inputId = `checklist-${i}`;
          return (
            <li key={item.title}>
              <label
                htmlFor={inputId}
                className={`flex gap-4 px-5 sm:px-8 py-5 cursor-pointer transition-colors duration-200 ${
                  isChecked ? 'bg-brand-yellow-light/50' : 'hover:bg-brand-surface'
                }`}
              >
                <input id={inputId} type="checkbox" checked={isChecked} onChange={() => toggle(i)} className="peer sr-only" />
                <span
                  className={`shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center border-2 rounded-sm transition-colors duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-brand-dark peer-focus-visible:ring-offset-2 ${
                    isChecked ? 'bg-brand-yellow border-brand-yellow' : 'border-brand-grey-light/50 bg-white'
                  }`}
                  aria-hidden="true"
                >
                  <svg className={`w-3.5 h-3.5 text-brand-dark transition-opacity ${isChecked ? 'opacity-100' : 'opacity-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="flex-1">
                  <span className="flex items-baseline gap-3">
                    <span className="font-display text-[12px] font-semibold text-brand-yellow-dark tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[16px] font-semibold text-brand-dark">{item.title}</span>
                  </span>
                  <span className="mt-1 block text-[15px] leading-relaxed text-brand-grey">{item.body}</span>
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
