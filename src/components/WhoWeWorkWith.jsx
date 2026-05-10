import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';
import Hyphen from './Hyphen';

const clients = [
  {
    label: 'RegTech',
    description: 'RegTech platforms building or enabling compliance infrastructure',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80',
  },
  {
    label: 'HealthTech',
    description: 'HealthTech companies navigating HIPAA, patient data laws, and cross-border data restrictions',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  },
  {
    label: 'SaaS',
    description: 'SaaS companies managing regulated or sensitive data flows',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    label: 'Expansion',
    description: 'Organisations expanding into new regulatory environments',
    image: 'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=800&q=80',
  },
  {
    label: 'Scrutiny',
    description: 'Firms undergoing cross-border regulatory scrutiny',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
  },
];

export default function WhoWeWorkWith() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-brand-surface">
      <div className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeader
          title={<>Who We Work With: <span className="text-brand-grey-light font-normal">Built for Regulated, Multi<Hyphen />Jurisdiction Businesses</span></>}
          highlight="Our Clients"
        />

        <p className="text-[15px] leading-relaxed text-brand-grey mb-10">
          We work with organisations operating at the intersection of data, regulation, and scale:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, i) => (
            <div
              key={i}
              className="group bg-white border border-brand-border rounded-sm overflow-hidden hover:border-brand-yellow/50 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={client.image}
                  alt={client.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-yellow">
                  {client.label}
                </span>
                <p className="mt-3 text-[14px] leading-relaxed text-brand-grey">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
