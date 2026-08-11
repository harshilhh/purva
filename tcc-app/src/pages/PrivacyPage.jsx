import { useInView } from '../hooks/useInView';

const sections = [
  {
    num: '01',
    title: 'Zero-Sharing Commitment',
    body: [
      'We do not sell, rent, trade, lease, or share your personal data with any third-party marketing companies, advertisers, or outside entities. Your data is kept strictly confidential and is used solely to manage your direct relationship with Compliancenomics LLP.',
    ],
  },
  {
    num: '02',
    title: 'Information We Collect',
    body: [
      'We only collect personal information that you voluntarily choose to provide to us:',
    ],
    list: [
      {
        label: 'Contact & Inquiry Details',
        text: 'Your name, email address, phone number, company name, and the specific details of your regulatory inquiry when using our forms.',
      },
      {
        label: 'Website Interaction Data',
        text: 'Basic technical logs (such as an IP address or browser type) processed by our servers purely to ensure stable website connectivity and security.',
      },
    ],
  },
  {
    num: '03',
    title: 'How We Use Your Information',
    body: [
      'Your data is processed strictly under legal and professional constraints to:',
    ],
    bullets: [
      'Respond directly to your corporate compliance or project inquiries.',
      'Fulfill our administrative commitments and service instructions.',
      'Maintain the security and functional integrity of our Site.',
    ],
  },
  {
    num: '04',
    title: 'Public Content Exception',
    body: [
      'Please note that if you choose to post comments, messages, or text on any publicly visible sections of this Site (such as a public blog comment section), that material becomes published content. It is public and is not considered private personal data under this policy.',
    ],
  },
  {
    num: '05',
    title: 'Security and Data Protection',
    body: [
      'We use appropriate technical controls, including secure SSL encryption protocols, to keep your personal information completely safe from unauthorized access, loss, or alteration.',
    ],
  },
  {
    num: '06',
    title: 'Contact Information',
    body: [
      'For any privacy requests or inquiries regarding your data, please contact:',
    ],
    contact: true,
  },
];

function Hero() {
  const [ref, isInView] = useInView();
  return (
    <section ref={ref} className="relative overflow-hidden bg-brand-yellow-light">
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
          Privacy Policy
        </h1>
        <p
          className={`mt-6 text-[16px] md:text-[17px] leading-[1.8] text-brand-grey max-w-2xl transition-all duration-700 ${
            isInView ? 'animate-fade-up-delay-2' : 'opacity-0'
          }`}
        >
          Compliancenomics LLP (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) operates the website https://compliancenomics.com
          (the &ldquo;Site&rdquo;). We are fully committed to protecting your
          privacy and managing your personal data with the highest standards
          of professional confidentiality and regulatory compliance.
        </p>
        <p
          className={`mt-4 text-[15px] md:text-[16px] leading-[1.8] text-brand-grey max-w-2xl transition-all duration-700 ${
            isInView ? 'animate-fade-up-delay-2' : 'opacity-0'
          }`}
        >
          This Privacy Policy sets out how we handle your information when you
          visit our Site or engage our advisory practice. Our framework strictly
          follows the principle of data minimization and complies with
          applicable data protection laws, including the Indian Digital Personal
          Data Protection Act (DPDPA), the EU GDPR, and the UK Data Protection
          Act.
        </p>

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

          {item.list && (
            <ul className="mt-2 space-y-3">
              {item.list.map((li, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-[10px] shrink-0 w-[6px] h-[6px] rounded-full bg-brand-yellow" />
                  <p>
                    <span className="font-semibold text-brand-dark italic">
                      {li.label}:
                    </span>{' '}
                    {li.text}
                  </p>
                </li>
              ))}
            </ul>
          )}

          {item.bullets && (
            <ul className="mt-2 space-y-2">
              {item.bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-[10px] shrink-0 w-[6px] h-[6px] rounded-full bg-brand-yellow" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {item.contact && (
            <div className="mt-6 inline-block bg-brand-surface border border-brand-border rounded-sm px-6 py-5">
              <p className="font-display text-[15px] font-semibold text-brand-dark">
                Compliancenomics LLP
              </p>
              <p className="mt-1 text-[13px] text-brand-grey">
                Ahmedabad, Gujarat, India
              </p>
              <a
                href="mailto:purva@compliancenomics.com"
                className="mt-3 inline-flex items-center gap-2 text-[14px] text-brand-dark hover:text-brand-yellow-dark transition-colors"
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

export default function PrivacyPage() {
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
