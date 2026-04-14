import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';
import Hyphen from './Hyphen';

export default function OperationalFrameworks() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="framework" className="py-6 md:py-8 bg-brand-surface">
      <div className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeader
          title={<>Designing Operational Frameworks for Cross<Hyphen />Border Compliance Across Jurisdictions</>}
          highlight="Our Framework"
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-5">
            <p className="text-[15px] leading-relaxed text-brand-grey">
              Cross-border compliance frameworks do not break because businesses don't try. It risks breaking because the system wasn't built for multiple regulators.
            </p>

            <p className="text-[15px] leading-relaxed text-brand-grey">
              It is implemented through the Alignment-First Compliance Model, translating regulatory complexity into structured, operational systems.
            </p>

            <p className="text-[15px] leading-relaxed text-brand-grey">
              We design frameworks that don't fall apart at borders and are structured to handle different rules, expectations, and enforcement styles, at once.
            </p>

            <p className="text-[15px] font-medium text-brand-dark">
              Here's how it comes together:
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Team collaboration"
              className="w-full h-[400px] object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
