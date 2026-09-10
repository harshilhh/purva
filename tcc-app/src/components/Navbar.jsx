import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const services = [
    { label: 'Governance Advisory', to: '/services/governance-advisory' },
    { label: 'AML Compliance Advisory', to: '/services/aml-compliance-advisory' },
  ];

  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', dropdown: services },
    { label: 'Contact', to: '/contact' },
  ];

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-[100vw] transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_#E8E6E1]'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[64px] md:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <img
              src="/logo.png"
              alt="Compliancenomics"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-sm object-cover"
            />
            <span className="font-display text-[16px] sm:text-xl md:text-[22px] font-semibold text-brand-dark tracking-tight">
              Compliancenomics
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.label}
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      className={`flex items-center gap-1.5 text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:bg-brand-yellow after:transition-all after:duration-300 hover:after:w-full hover:text-brand-dark ${
                        isServicesActive
                          ? 'text-brand-dark after:w-full'
                          : 'text-brand-grey-light after:w-0'
                      }`}
                    >
                      {link.label}
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-200 ${
                        servicesOpen
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-1'
                      }`}
                    >
                      <div className="min-w-[280px] bg-white border border-brand-border shadow-lg py-2">
                        {link.dropdown.map((item) => {
                          const active = location.pathname === item.to;
                          return (
                            <Link
                              key={item.to}
                              to={item.to}
                              className={`block px-5 py-3 text-[13px] font-medium tracking-wide transition-colors ${
                                active
                                  ? 'bg-brand-yellow-light text-brand-dark'
                                  : 'text-brand-grey hover:bg-brand-yellow-light/40 hover:text-brand-dark'
                              }`}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive =
                link.to === '/'
                  ? location.pathname === '/' && !location.hash
                  : location.pathname === link.to;

              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:bg-brand-yellow after:transition-all after:duration-300 hover:after:w-full hover:text-brand-dark ${
                    isActive
                      ? 'text-brand-dark after:w-full'
                      : 'text-brand-grey-light after:w-0'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-3 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-[6px]">
              <span className={`block h-[2px] bg-brand-dark rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
              <span className={`block h-[2px] bg-brand-dark rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[2px] bg-brand-dark rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-brand-border ${
          mobileOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-5 flex flex-col gap-1">
          {links.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between text-[15px] font-medium text-brand-grey hover:text-brand-dark hover:bg-brand-surface px-4 py-3 rounded-sm transition-colors"
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${mobileServicesOpen ? 'max-h-60' : 'max-h-0'}`}
                  >
                    <div className="pl-4 flex flex-col">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="text-[14px] font-medium text-brand-grey hover:text-brand-dark hover:bg-brand-surface px-4 py-2.5 rounded-sm transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.label}
                to={link.to}
                className="text-[15px] font-medium text-brand-grey hover:text-brand-dark hover:bg-brand-surface px-4 py-3 rounded-sm transition-colors"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
