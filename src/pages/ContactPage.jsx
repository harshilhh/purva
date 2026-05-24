import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import CTABanner from '../components/CTABanner';

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

export default function ContactPage() {
  const [ref, isInView] = useInView();
  const [mapRef, mapInView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          timestamp: new Date().toISOString(),
        }),
      });
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitted(true);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-yellow-light pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1.5px] bg-brand-yellow" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-yellow">
              Contact
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-semibold text-brand-dark leading-[1.1] tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg text-brand-grey max-w-xl leading-relaxed">
            Reach out to discuss how we can help structure your cross-border compliance requirements.
          </p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section ref={ref} className="py-14 md:py-20 bg-white">
        <div className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Left - Contact Info */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-brand-dark tracking-tight mb-8">
                Contact Details
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-brand-yellow-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-grey-light mb-1">Email</p>
                    <a href="mailto:contact@thecompliancechamber.com" className="text-[15px] text-brand-dark hover:text-brand-yellow transition-colors">
                      contact@thecompliancechamber.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-brand-yellow-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-grey-light mb-1">Phone</p>
                    <a href="tel:+910000000000" className="text-[15px] text-brand-dark hover:text-brand-yellow transition-colors">
                      +91 00 0000 0000
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-brand-yellow-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-grey-light mb-1">Location</p>
                    <p className="text-[15px] text-brand-dark leading-relaxed">
                      Ahmedabad, Gujarat, India
                    </p>
                  </div>
                </div>

                {/* Jurisdictions */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-brand-yellow-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 10.5c0 1.757-.505 3.398-1.379 4.778M3.379 15.278A8.959 8.959 0 013 10.5c0-1.757.505-3.398 1.379-4.778" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-grey-light mb-1">Jurisdictions</p>
                    <p className="text-[15px] text-brand-dark leading-relaxed">
                      EU & UK, Singapore, UAE, Australia, India, Hong Kong
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-brand-dark tracking-tight mb-8">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12 px-6 bg-brand-surface border border-brand-border rounded-sm">
                  <div className="w-12 h-12 rounded-full bg-brand-yellow-light flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-brand-dark mb-2">Thank You</h3>
                  <p className="text-[15px] text-brand-grey">We have received your message and will get back to you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[13px] font-medium text-brand-yellow hover:text-brand-yellow-dark transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-grey-light mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-[15px] text-brand-dark bg-brand-surface border border-brand-border rounded-sm outline-none focus:border-brand-yellow transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-grey-light mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-[15px] text-brand-dark bg-brand-surface border border-brand-border rounded-sm outline-none focus:border-brand-yellow transition-colors"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-grey-light mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-[15px] text-brand-dark bg-brand-surface border border-brand-border rounded-sm outline-none focus:border-brand-yellow transition-colors"
                      placeholder="Subject"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-grey-light mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 text-[15px] text-brand-dark bg-brand-surface border border-brand-border rounded-sm outline-none focus:border-brand-yellow transition-colors resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 bg-brand-yellow text-white text-[13px] font-semibold tracking-wide uppercase rounded-sm hover:bg-brand-yellow-dark transition-colors duration-200 disabled:opacity-60"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section ref={mapRef} className="bg-brand-surface">
        <div className={`max-w-6xl mx-auto px-6 lg:px-8 py-10 md:py-14 transition-all duration-700 ${mapInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="rounded-sm overflow-hidden border border-brand-border">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74862387544!2d72.43965583281249!3d23.020474900000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Build Compliance That Holds Across Borders"
        subheading="Cross-border compliance requires more than policies. It requires structured systems designed for multiple regulators and evolving requirements."
        buttonText="Explore Our Approach"
        index={2}
        variant="dark"
      />
    </>
  );
}
