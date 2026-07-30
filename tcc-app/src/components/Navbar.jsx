import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Services 2', to: '/services-2' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-[100vw] overflow-hidden transition-all duration-300 ${
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
              className="w-9 h-9 rounded-sm object-cover"
            />
            <span className="font-display text-lg sm:text-xl md:text-[22px] font-semibold text-brand-dark tracking-tight">
              Compliancenomics
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const basePath = link.to.split('#')[0];
              const isActive =
                link.to === '/'
                  ? location.pathname === '/' && !location.hash
                  : basePath === '/'
                    ? location.pathname === '/' && location.hash === `#${link.to.split('#')[1]}`
                    : location.pathname === basePath;

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
            className="md:hidden p-2 -mr-2"
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
          mobileOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-5 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-[15px] font-medium text-brand-grey hover:text-brand-dark hover:bg-brand-surface px-4 py-3 rounded-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
