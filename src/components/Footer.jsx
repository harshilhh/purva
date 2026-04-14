import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-brand-yellow-light">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 md:py-20 grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-yellow rounded-sm flex items-center justify-center">
                <span className="font-display text-white text-lg font-bold leading-none">C</span>
              </div>
              <span className="font-display text-xl font-semibold tracking-tight text-brand-dark">
                The Compliance Chamber
              </span>
            </Link>
            <p className="mt-5 text-[14px] leading-relaxed text-brand-grey max-w-md">
              Cross-border compliance frameworks designed for multi-jurisdiction operations. Aligning AML and Data Protection across regulatory landscapes.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 text-[13px]">
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
            &copy; {new Date().getFullYear()} The Compliance Chamber. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[12px] text-brand-grey-light hover:text-brand-dark transition-colors">Privacy Policy</a>
            <a href="#" className="text-[12px] text-brand-grey-light hover:text-brand-dark transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
