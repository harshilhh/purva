import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-brand-yellow-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 md:py-20 grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Compliancenomics"
                className="w-10 h-10 rounded-sm object-cover"
              />
              <span className="font-display text-xl font-semibold tracking-tight text-brand-dark">
                Compliancenomics
              </span>
            </Link>
            <p className="mt-5 text-[17px] leading-relaxed text-brand-grey max-w-md">
              Cross-border compliance frameworks designed for multi-jurisdiction operations, aligning Anti-Money Laundering obligations, Data Privacy laws, and AI Governance protocols across regulatory landscapes.
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href="mailto:info@compliancenomics.com"
                className="inline-flex items-center gap-3 text-[15px] text-brand-dark hover:text-brand-yellow-dark transition-colors"
              >
                <svg
                  className="w-4 h-4 text-brand-yellow shrink-0"
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
                info@compliancenomics.com
              </a>
              <a
                href="tel:+919773149576"
                className="inline-flex items-center gap-3 text-[15px] text-brand-dark hover:text-brand-yellow-dark transition-colors"
              >
                <svg
                  className="w-4 h-4 text-brand-yellow shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                +91 97731 49576
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-12 text-[17px]">
            <div>
              <p className="font-semibold text-brand-dark mb-4 text-[11px] tracking-[0.15em] uppercase">Navigate</p>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-brand-grey-light hover:text-brand-yellow-dark transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-brand-dark mb-4 text-[11px] tracking-[0.15em] uppercase">Jurisdictions</p>
              <ul className="space-y-3">
                {['EU & UK', 'Singapore', 'UAE', 'Australia'].map((item) => (
                  <li key={item}>
                    <span className="text-brand-grey-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-brand-dark/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-brand-grey-light">
            &copy; {new Date().getFullYear()} Compliancenomics. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-[12px] text-brand-grey-light hover:text-brand-dark transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[12px] text-brand-grey-light hover:text-brand-dark transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
