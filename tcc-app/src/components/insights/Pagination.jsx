import { Link } from 'react-router-dom';
import { ArrowIcon } from './primitives';

/**
 * Page numbers to render, with null for an ellipsis gap.
 * @returns {(number | null)[]}
 */
function pageRange(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).toSorted((a, b) => a - b);
  return sorted.flatMap((p, i) => (i > 0 && p - sorted[i - 1] > 1 ? [null, p] : [p]));
}

const hrefFor = (page) => (page === 1 ? '/insights' : `/insights?page=${page}`);

function StepLink({ page, disabled, direction }) {
  const isPrev = direction === 'prev';
  const label = isPrev ? 'Previous' : 'Next';
  const base =
    'inline-flex items-center gap-2 min-h-[44px] px-4 text-[12px] font-semibold tracking-[0.15em] uppercase border transition-colors duration-200';
  if (disabled) {
    return (
      <span className={`${base} border-brand-border text-brand-grey-light/50 cursor-not-allowed`} aria-disabled="true">
        {isPrev && <ArrowIcon className="w-4 h-4 rotate-180" />}
        <span className="hidden sm:inline">{label}</span>
        {!isPrev && <ArrowIcon className="w-4 h-4" />}
      </span>
    );
  }
  return (
    <Link
      to={hrefFor(page)}
      aria-label={`${label} page`}
      className={`${base} border-brand-border text-brand-dark hover:border-brand-yellow hover:bg-brand-yellow-light`}
    >
      {isPrev && <ArrowIcon className="w-4 h-4 rotate-180" />}
      <span className="hidden sm:inline">{label}</span>
      {!isPrev && <ArrowIcon className="w-4 h-4" />}
    </Link>
  );
}

export default function Pagination({ current, total }) {
  if (total <= 1) return null;
  return (
    <nav aria-label="Insights pages" className="mt-14 flex items-center justify-between gap-4">
      <StepLink page={current - 1} disabled={current === 1} direction="prev" />

      <ol className="flex items-center gap-1.5">
        {pageRange(current, total).map((page, i) =>
          page === null ? (
            <li key={`gap-${i}`} className="w-8 text-center text-brand-grey-light" aria-hidden="true">
              &hellip;
            </li>
          ) : (
            <li key={page}>
              <Link
                to={hrefFor(page)}
                aria-label={`Page ${page}`}
                aria-current={page === current ? 'page' : undefined}
                className={`flex items-center justify-center w-11 h-11 font-display text-[17px] font-semibold tabular-nums border transition-colors duration-200 ${
                  page === current
                    ? 'bg-brand-dark border-brand-dark text-brand-yellow'
                    : 'border-transparent text-brand-grey hover:border-brand-yellow hover:text-brand-dark'
                }`}
              >
                {String(page).padStart(2, '0')}
              </Link>
            </li>
          )
        )}
      </ol>

      <StepLink page={current + 1} disabled={current === total} direction="next" />
    </nav>
  );
}
