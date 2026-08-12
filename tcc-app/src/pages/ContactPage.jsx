import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import CTABanner from '../components/CTABanner';

const GOOGLE_SHEETS_URL =
  import.meta.env.VITE_GOOGLE_SHEETS_URL ||
  'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(form) {
  const errors = {};
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!form.subject.trim() || form.subject.trim().length < 3) {
    errors.subject = 'Please add a short subject (at least 3 characters).';
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = 'Please share a bit more (at least 10 characters).';
  }
  return errors;
}

export default function ContactPage() {
  const [ref, isInView] = useInView();
  const [mapRef, mapInView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const foundErrors = validate(form);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return;

    if (GOOGLE_SHEETS_URL.includes('YOUR_SCRIPT_ID')) {
      setSubmitError('The contact form is not configured yet. Please set VITE_GOOGLE_SHEETS_URL.');
      return;
    }

    setLoading(true);
    setSubmitError('');
    try {
      // no-cors mode: response is opaque, so we assume success if fetch does not throw.
      // The Apps Script writes the row on its side regardless.
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      });
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitError('Something went wrong sending your message. Please try again or email us directly.');
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
                    <a href="mailto:info@compliancenomics.com" className="text-[15px] text-brand-dark hover:text-brand-yellow transition-colors">
                      info@compliancenomics.com
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
                    <a href="tel:+919773149576" className="text-[15px] text-brand-dark hover:text-brand-yellow transition-colors">
                      +91 97731 49576
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

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-brand-yellow-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-grey-light mb-1">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/company/compliancenomics-llp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] text-brand-dark hover:text-brand-yellow transition-colors"
                    >
                      Compliancenomics LLP
                    </a>
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
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="cf-name" className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-grey-light mb-2">
                        Name
                      </label>
                      <input
                        id="cf-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'cf-name-err' : undefined}
                        className={`w-full px-4 py-3 text-[15px] text-brand-dark bg-brand-surface border rounded-sm outline-none transition-colors ${
                          errors.name ? 'border-red-400 focus:border-red-500' : 'border-brand-border focus:border-brand-yellow'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p id="cf-name-err" className="mt-1.5 text-[12px] text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="cf-email" className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-grey-light mb-2">
                        Email
                      </label>
                      <input
                        id="cf-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'cf-email-err' : undefined}
                        className={`w-full px-4 py-3 text-[15px] text-brand-dark bg-brand-surface border rounded-sm outline-none transition-colors ${
                          errors.email ? 'border-red-400 focus:border-red-500' : 'border-brand-border focus:border-brand-yellow'
                        }`}
                        placeholder="you@company.com"
                      />
                      {errors.email && (
                        <p id="cf-email-err" className="mt-1.5 text-[12px] text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cf-subject" className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-grey-light mb-2">
                      Subject
                    </label>
                    <input
                      id="cf-subject"
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'cf-subject-err' : undefined}
                      className={`w-full px-4 py-3 text-[15px] text-brand-dark bg-brand-surface border rounded-sm outline-none transition-colors ${
                        errors.subject ? 'border-red-400 focus:border-red-500' : 'border-brand-border focus:border-brand-yellow'
                      }`}
                      placeholder="Subject"
                    />
                    {errors.subject && (
                      <p id="cf-subject-err" className="mt-1.5 text-[12px] text-red-600">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cf-message" className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-grey-light mb-2">
                      Message
                    </label>
                    <textarea
                      id="cf-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'cf-message-err' : undefined}
                      className={`w-full px-4 py-3 text-[15px] text-brand-dark bg-brand-surface border rounded-sm outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-400 focus:border-red-500' : 'border-brand-border focus:border-brand-yellow'
                      }`}
                      placeholder="How can we help?"
                    />
                    {errors.message && (
                      <p id="cf-message-err" className="mt-1.5 text-[12px] text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <div className="p-3 border border-red-300 bg-red-50 rounded-sm text-[13px] text-red-700">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 bg-brand-yellow text-brand-dark text-[13px] font-semibold tracking-wide uppercase rounded-sm hover:bg-brand-yellow-dark transition-colors duration-200 disabled:opacity-60"
                  >
                    {loading ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section ref={mapRef} className="bg-brand-surface">
        <div className={`w-full transition-all duration-700 ${mapInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74862387544!2d72.43965583281249!3d23.020474900000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="420"
            className="block w-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
