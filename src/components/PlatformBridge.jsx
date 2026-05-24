import { useInView } from '../hooks/useInView';

export default function PlatformBridge() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-10 md:py-14 bg-white">
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isInView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
          {/* Left statement */}
          <div className="flex-1 flex items-center gap-5">
            <div className="w-10 h-10 rounded-full bg-brand-yellow-light flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <p className="font-display text-[18px] md:text-[22px] font-semibold text-brand-dark leading-[1.35] tracking-tight">
              <span className="text-brand-yellow italic font-normal">regulatorygap.com</span>{' '}
              maps the tensions.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] h-12 bg-brand-border/60 mx-10" />

          {/* Right statement */}
          <div className="flex-1 flex items-center gap-5">
            <div className="w-10 h-10 rounded-full bg-brand-yellow-light flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="font-display text-[18px] md:text-[22px] font-semibold text-brand-dark leading-[1.35] tracking-tight">
              <span className="text-brand-yellow italic font-normal">The Compliance Chamber</span>{' '}
              advises on the consequences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
