/** Wide comparison table on desktop; stacked capability cards on small screens. */
export default function CapabilityTable({ caption, columns, rows }) {
  const [, ...detailColumns] = columns;

  return (
    <figure className="my-10 lg:-mr-24 xl:-mr-40">
      <figcaption className="mb-4 flex items-start gap-3">
        <span className="mt-[9px] w-6 h-[1.5px] bg-brand-yellow shrink-0" aria-hidden="true" />
        <span className="font-display text-xl md:text-2xl font-semibold text-brand-dark leading-snug">{caption}</span>
      </figcaption>

      {/* Desktop table */}
      <div className="hidden md:block border border-brand-border bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-brand-dark text-white">
              {columns.map((col, i) => (
                <th
                  key={col}
                  scope="col"
                  className={`px-5 py-4 text-[10px] font-semibold tracking-[0.18em] uppercase align-bottom ${i === 0 ? 'w-[22%] text-brand-yellow' : ''}`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([capability, ...cells], r) => (
              <tr key={capability} className="border-t border-brand-border align-top hover:bg-brand-yellow-light/30 transition-colors duration-200">
                <th scope="row" className="px-5 py-5 font-display text-[17px] font-semibold text-brand-dark leading-snug">
                  <span className="block text-[11px] font-body font-semibold tracking-widest text-brand-yellow-dark mb-1 tabular-nums">
                    {String(r + 1).padStart(2, '0')}
                  </span>
                  {capability}
                </th>
                {cells.map((cell, c) => (
                  <td key={c} className="px-5 py-5 text-[14px] leading-relaxed text-brand-grey border-l border-brand-border">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <ol className="md:hidden space-y-4">
        {rows.map(([capability, ...cells], r) => (
          <li key={capability} className="border border-brand-border bg-white">
            <div className="px-5 py-4 bg-brand-dark">
              <span className="block text-[11px] font-semibold tracking-widest text-brand-yellow tabular-nums">
                {String(r + 1).padStart(2, '0')}
              </span>
              <h4 className="font-display text-lg font-semibold text-white leading-snug">{capability}</h4>
            </div>
            <dl className="divide-y divide-brand-border">
              {cells.map((cell, c) => (
                <div key={c} className="px-5 py-4">
                  <dt className="text-[10px] font-semibold tracking-[0.18em] uppercase text-brand-yellow-dark">{detailColumns[c]}</dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed text-brand-grey">{cell}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ol>
    </figure>
  );
}
