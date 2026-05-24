export default function SectionHeader({ title, highlight, children }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-6 h-[1.5px] bg-brand-yellow" />
        {highlight && (
          <span className="font-display text-xl md:text-2xl font-semibold text-brand-yellow tracking-tight">
            {highlight}
          </span>
        )}
      </div>
      <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-semibold text-brand-dark leading-[1.1] tracking-tight">
        {title}
      </h2>
      {children}
    </div>
  );
}
