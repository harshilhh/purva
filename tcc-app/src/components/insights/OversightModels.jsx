const MODELS = [
  {
    abbr: 'HITL',
    name: 'Human-in-the-loop',
    body: 'The AI recommends, and a human decision maker retains complete authority to approve or reject the outcome.',
    aml: 'SAR/STR decisions, TFS freezing, customer exits',
    level: 3,
  },
  {
    abbr: 'HOTL',
    name: 'Human-on-the-loop',
    body: 'The AI works autonomously on routine tasks, while a human monitors outcomes and can intervene wherever required.',
    aml: 'Refreshing low-risk customer data',
    level: 2,
  },
  {
    abbr: 'HOOTL',
    name: 'Human-out-of-the-loop',
    body: 'The AI operates without human involvement. It should be used only for low-risk and non-material processes.',
    aml: 'Rarely appropriate for any AML process',
    level: 1,
  },
];

function ControlMeter({ level }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`Human control: ${level} of 3`}>
      {[1, 2, 3].map((n) => (
        <span key={n} className={`h-1.5 w-6 rounded-full ${n <= level ? 'bg-brand-yellow' : 'bg-brand-border'}`} />
      ))}
    </div>
  );
}

/** The three CBUAE human-oversight models, mapped to AML decisions. */
export default function OversightModels() {
  return (
    <div className="my-10">
      <div className="hidden sm:flex items-center justify-between mb-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-grey-light">
        <span>More human control</span>
        <span className="flex-1 mx-4 h-px bg-gradient-to-r from-brand-yellow via-brand-border to-brand-border" aria-hidden="true" />
        <span>Less human control</span>
      </div>
      <ol className="grid sm:grid-cols-3 gap-4">
        {MODELS.map((m) => (
          <li
            key={m.abbr}
            className={`relative flex flex-col p-6 border bg-white transition-shadow duration-300 hover:shadow-lg ${
              m.level === 3 ? 'border-brand-yellow shadow-[0_0_0_1px_var(--color-brand-yellow)]' : 'border-brand-border'
            }`}
          >
            {m.level === 3 && (
              <span className="absolute -top-3 left-6 bg-brand-yellow text-brand-dark text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1">
                Key AML decisions
              </span>
            )}
            <div className="flex items-center justify-between mt-1">
              <span className="font-display text-[34px] font-bold text-brand-dark leading-none tracking-tight">{m.abbr}</span>
              <ControlMeter level={m.level} />
            </div>
            <h4 className="mt-3 text-[13px] font-semibold tracking-wide uppercase text-brand-yellow-dark">{m.name}</h4>
            <p className="mt-3 text-[14px] leading-relaxed text-brand-grey flex-1">{m.body}</p>
            <div className="mt-5 pt-4 border-t border-brand-border">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-brand-grey-light">In AML</p>
              <p className="mt-1 text-[14px] font-medium text-brand-dark leading-snug">{m.aml}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
