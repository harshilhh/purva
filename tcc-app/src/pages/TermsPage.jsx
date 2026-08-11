import { useInView } from '../hooks/useInView';

const sections = [
  {
    num: '01',
    title: 'Professional Disclaimer',
    body: [
      'The analytical content, regulatory updates, articles, and insights published on this Site are meant solely for general informational and educational purposes. They do not constitute formal legal, financial, or regulatory compliance advice.',
      'Visiting this Site or sending an inquiry through our contact links does not establish a formal advisor-client or professional relationship. A professional partnership is only created once a dedicated, written engagement contract is mutually executed by you and Compliancenomics LLP. You should not act or refrain from acting based on any content on this Site without seeking specific professional advice tailored to your regulatory circumstances.',
    ],
  },
  {
    num: '02',
    title: 'Intellectual Property',
    body: [
      'Compliancenomics LLP owns all intellectual property rights for the text, layout designs, and original compliance materials published on this Site. All rights are explicitly reserved. You may read or print information for personal, non-commercial use only.',
    ],
  },
  {
    num: '03',
    title: 'Liability Disclaimer',
    body: [
      'We strive to ensure our insights are timely and precise. However, Compliancenomics LLP makes no warranties regarding the absolute completeness or real-time accuracy of the website materials. We shall not be held liable for any direct or indirect business disruptions or regulatory issues arising from your reliance on general website text.',
    ],
  },
  {
    num: '04',
    title: 'Governing Law and Jurisdiction',
    body: [
      'These Terms and Conditions are governed by the laws of India. Any legal actions or contractual disputes relating to this website fall under the exclusive jurisdiction of the competent courts in Ahmedabad, Gujarat, India.',
    ],
  },
  {
    num: '05',
    title: 'Contact Us',
    body: [
      'If you have any questions about these operational terms, please reach out via email:',
    ],
    contact: true,
  },
];

function Hero() {
  const [ref, isInView] = useInView();
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-brand-yellow-light"
    >
      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            135deg,
            transparent,
            transparent 40px,
            rgba(212,137,26,0.07) 40px,
            rgba(212,137,26,0.07) 41px
          )`,
        }}
      />
      {/* Grid motif */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,26,26,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,26,26,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 md:pt-36 pb-20 md:pb-24">
        <div
          className={`flex items-center gap-4 mb-8 transition-all duration-700 ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <div className="w-12 h-px bg-brand-yellow" />
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow-dark">
            Legal
          </span>
        </div>
        <h1
          className={`font-display text-[36px] sm:text-[46px] md:text-[54px] lg:text-[64px] font-semibold text-brand-dark leading-[1.08] tracking-[-0.02em] transition-all duration-700 ${
            isInView ? 'animate-fade-up-delay-1' : 'opacity-0'
          }`}
        >
          Terms and Conditions
        </h1>
        <p
          className={`mt-6 text-[16px] md:text-[17px] leading-[1.8] text-brand-grey max-w-2xl transition-all duration-700 ${
            isInView ? 'animate-fade-up-delay-2' : 'opacity-0'
          }`}
        >
          Welcome to Compliancenomics. This website is owned and operated by
          Compliancenomics LLP (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;), an advisory practice based in Ahmedabad, Gujarat,
          India. By browsing, accessing, or using this Site, you acknowledge
          and agree to comply with and be bound by these Terms and Conditions.
        </p>

        {/* Meta row */}
        <div
          className={`mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 transition-all duration-700 ${
            isInView ? 'animate-fade-up-delay-3' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-yellow-dark">
              Effective
            </span>
            <span className="text-[13px] font-medium text-brand-dark">
              August 12, 2026
            </span>
          </div>
          <div className="w-px h-4 bg-brand-border" />
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-yellow-dark">
              Last Updated
            </span>
            <span className="text-[13px] font-medium text-brand-dark">
              August 12, 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ item, index }) {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-[120px_1fr] gap-6 md:gap-14 py-10 md:py-14 border-t border-brand-border/60 first:border-t-0 transition-all duration-700 ${
        isInView ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex md:flex-col items-baseline md:items-start gap-3 md:gap-4">
        <span className="font-display text-[13px] font-bold tracking-[0.24em] text-brand-yellow">
          {item.num}
        </span>
        <div className="hidden md:block w-8 h-[2px] bg-brand-yellow" />
      </div>
      <div>
        <h2 className="font-display text-[22px] md:text-[28px] lg:text-[32px] font-semibold text-brand-dark leading-[1.2] tracking-tight">
          {item.title}
        </h2>
        <div className="mt-5 space-y-4 text-[15px] md:text-[16px] leading-[1.85] text-brand-grey">
          {item.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {item.contact && (
            <div className="mt-6 inline-block bg-brand-surface border border-brand-border rounded-sm px-6 py-5">
              <p className="font-display text-[15px] font-semibold text-brand-dark">
                Compliancenomics LLP
              </p>
              <a
                href="mailto:purva@compliancenomics.com"
                className="mt-2 inline-flex items-center gap-2 text-[14px] text-brand-dark hover:text-brand-yellow-dark transition-colors"
              >
                <svg
                  className="w-4 h-4 text-brand-yellow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                purva@compliancenomics.com
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <>
      <Hero />
      <section className="bg-white py-8 md:py-14">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {sections.map((item, i) => (
            <Section key={item.num} item={item} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
