import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services/governance-advisory' },
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

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 max-w-xl">
              <a
                href="mailto:info@compliancenomics.com"
                className="flex items-center gap-3 text-[15px] text-brand-dark hover:text-brand-yellow-dark min-w-0 transition-colors"
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
                className="flex items-center gap-3 text-[15px] text-brand-dark hover:text-brand-yellow-dark min-w-0 transition-colors"
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
              <a
                href="https://www.linkedin.com/company/compliancenomics-llp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[15px] text-brand-dark hover:text-brand-yellow-dark min-w-0 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-brand-yellow shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/compliancenomics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[15px] text-brand-dark hover:text-brand-yellow-dark min-w-0 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-brand-yellow shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
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
