import { motion, AnimatePresence } from 'framer-motion';
import { ShieldPlus, MapPin, Phone, Mail, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { useState } from 'react';

const DEPARTMENTS = [
  'Cardiology',
  'Pediatrics',
  'Diagnostics & Imaging',
  'General Inquiry',
];

const MAP_QUERY = encodeURIComponent('100 Health Way, Suite 400, Metropolis, NY 10001');

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = () => {
    if (!formData.name.trim()) return 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return 'Please enter a valid email address.';
    }
    if (!formData.department) return 'Please select a department.';
    if (!formData.message.trim()) return 'Please tell us how we can help.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setStatus('error');
      setErrorMessage(validationError);
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Simulated API call delay (1.5 seconds)
    setTimeout(() => {
      // Simulate success
      setStatus('success');
    }, 1500);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', department: '', message: '' });
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <main className="min-h-screen pt-28 pb-20 bg-slate-50">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          Contact Meridian
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl"
        >
          We're here to assist you with world-class healthcare. Reach out for
          appointments, inquiries, or emergency support.
        </motion.p>
      </section>

      {/* Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Request Form / Confirmation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm p-6 sm:p-8"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="py-8 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Appointment Requested!
                  </h3>
                  <p className="text-slate-600 max-w-md text-sm leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. 
                    We have received your message regarding <span className="font-semibold text-slate-800">{formData.department}</span>. 
                    A confirmation email has been sent to <span className="font-semibold text-slate-800">{formData.email}</span>.
                  </p>
                  
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm transition-all duration-200 active:scale-95"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Submit Another Request
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-6">
                    Request an Appointment
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-semibold text-slate-900 mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={handleChange('name')}
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-slate-900 mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={handleChange('email')}
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="department"
                      className="block text-sm font-semibold text-slate-900 mb-1.5"
                    >
                      Department
                    </label>
                    <div className="relative">
                      <select
                        id="department"
                        value={formData.department}
                        onChange={handleChange('department')}
                        className="w-full appearance-none rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-colors cursor-pointer"
                      >
                        <option value="" disabled>
                          Select a specialized department...
                        </option>
                        {DEPARTMENTS.map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 8l5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-900 mb-1.5"
                    >
                      How can we help you?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Briefly describe your symptoms or reason for visit..."
                      value={formData.message}
                      onChange={handleChange('message')}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-colors resize-none"
                    />
                  </div>

                  {status === 'error' && errorMessage && (
                    <p className="text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#0d6e68] hover:bg-[#0b5b56] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Emergency Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl bg-[#0b2436] p-6 sm:p-7 shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-teal-500/90 text-white shrink-0">
                  <ShieldPlus className="w-5 h-5 stroke-[2.25]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg">
                    24/7 Emergency Line
                  </h3>
                  <p className="mt-1.5 text-slate-300 text-sm font-light leading-relaxed">
                    For immediate, life-threatening medical assistance,
                    please call our dedicated emergency team or dial 911.
                  </p>
                  <a
                    href="tel:+18005550199"
                    className="mt-3 inline-block text-teal-400 font-extrabold text-lg sm:text-xl hover:text-teal-300 transition-colors"
                  >
                    (800) 555-0199
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Headquarters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="rounded-3xl bg-white border border-slate-200/80 shadow-sm p-6 sm:p-7"
            >
              <h3 className="text-lg font-extrabold text-slate-900 mb-5">
                Headquarters
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      Meridian Medical Center
                    </p>
                    <p className="text-slate-600 text-sm font-light leading-snug">
                      100 Health Way, Suite 400
                      <br />
                      Metropolis, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      General Inquiries
                    </p>
                    <a
                      href="tel:+15551234567"
                      className="text-slate-600 text-sm font-light hover:text-teal-600 transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      Email Us
                    </p>
                    <a
                      href="mailto:contact@meridianhealth.com"
                      className="text-slate-600 text-sm font-light hover:text-teal-600 transition-colors break-all"
                    >
                      contact@meridianhealth.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Live Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 h-[220px] sm:h-[260px]"
            >
              <iframe
                title="Meridian Medical Center location"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}