import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';
import BulletList from './BulletList';

export default function SelectedExperience() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="experience" className="py-10 md:py-14 bg-white">
      <div className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeader
          title={<>Selected Experience: <span className="text-brand-grey-light font-normal">Where Compliance Gets Operational</span></>}
          highlight="Track Record"
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-[15px] leading-relaxed text-brand-grey">
              We have supported organisations in:
            </p>

            <BulletList
              items={[
                'Designing cross-border compliance frameworks across EU, UK, and APAC regulatory environments',
                'Aligning AML monitoring requirements with data protection obligations',
                'Structuring cross-border data processing for regulated operations',
                'Preparing for multi-jurisdiction regulatory reviews',
              ]}
            />
          </div>
          <div>
            <img
              src="/corporate-law.png"
              alt="Corporate law"
              className="w-full h-[320px] object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
