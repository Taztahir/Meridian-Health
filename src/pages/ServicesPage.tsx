import { motion } from 'framer-motion';
import { HeartPulse, Activity, Scan, Check } from 'lucide-react';

interface ServicesPageProps {
  onBookClick?: () => void;
}

export default function ServicesPage({ onBookClick }: ServicesPageProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="min-h-screen pt-28 pb-20 bg-white">
      {/* Hero Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight"
        >
          Specialized Medical Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl text-text-secondary font-light leading-relaxed max-w-3xl mx-auto"
        >
          At Meridian Health, we offer comprehensive, state-of-the-art medical care across a wide range of specialties, ensuring you receive the precise treatment you need.
        </motion.p>
      </section>

      {/* Services List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-0"
      >
        {/* Section 1: Cardiology */}
        <section className="py-16 md:py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={sectionVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Text Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-50 text-teal-600 border border-teal-100/80 shadow-sm">
                    <HeartPulse className="w-6 h-6 stroke-[2.25]" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
                    Cardiology
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed">
                  Our world-class cardiology department utilizes the latest diagnostic and therapeutic technologies to manage and treat cardiovascular conditions with unparalleled precision and care.
                </p>

                <ul className="space-y-3.5 pt-2">
                  {[
                    'Comprehensive cardiac risk assessments and screenings',
                    'Advanced electrophysiology and arrhythmia management',
                    'Minimally invasive interventional cardiology procedures',
                    'Echocardiography and stress testing',
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-text-primary">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-50 border border-teal-200 text-teal-600 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <button
                    onClick={onBookClick}
                    className="px-7 py-3.5 rounded-2xl bg-[#0d6e68] hover:bg-[#0b5b56] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
                  >
                    Schedule a Consultation
                  </button>
                </div>
              </div>

              {/* Image Frame */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 group">
                  <img
                    src="/images/cardiology.jpg"
                    alt="Cardiology department diagnostic equipment and medical team"
                    className="w-full h-[360px] sm:h-[440px] object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Pediatrics (Light gray container background) */}
        <section className="py-16 md:py-24 bg-slate-100/70 border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={sectionVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Image Frame (Left on Desktop) */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 group">
                  <img
                    src="/images/pediatrics.jpg"
                    alt="Compassionate pediatrician interacting with a child"
                    className="w-full h-[360px] sm:h-[440px] object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl pointer-events-none" />
                </div>
              </div>

              {/* Text Content (Right on Desktop) */}
              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-50 text-teal-600 border border-teal-100/80 shadow-sm">
                    <Activity className="w-6 h-6 stroke-[2.25]" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
                    Pediatrics
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed">
                  Providing compassionate, expert care for infants, children, and adolescents. Our pediatric specialists are dedicated to supporting your child's physical, mental, and social development.
                </p>

                <ul className="space-y-3.5 pt-2">
                  {[
                    'Routine wellness exams and immunizations',
                    'Management of chronic childhood illnesses',
                    'Developmental screenings and behavioral health support',
                    'Acute illness and injury care',
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-text-primary">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-50 border border-teal-200 text-teal-600 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <button
                    onClick={onBookClick}
                    className="px-7 py-3.5 rounded-2xl bg-[#0d6e68] hover:bg-[#0b5b56] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
                  >
                    Schedule a Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Diagnostics & Imaging */}
        <section className="py-16 md:py-24 bg-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={sectionVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Text Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-50 text-teal-600 border border-teal-100/80 shadow-sm">
                    <Scan className="w-6 h-6 stroke-[2.25]" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
                    Diagnostics & Imaging
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed">
                  Accurate diagnosis is the foundation of effective treatment. Our imaging center features the most advanced technology available for precise, early detection of medical conditions.
                </p>

                <ul className="space-y-3.5 pt-2">
                  {[
                    'High-resolution MRI and CT scanning',
                    'Digital X-rays and ultrasound imaging',
                    'Comprehensive laboratory testing services',
                    'Nuclear medicine and PET scans',
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-text-primary">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-50 border border-teal-200 text-teal-600 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <button
                    onClick={onBookClick}
                    className="px-7 py-3.5 rounded-2xl bg-[#0d6e68] hover:bg-[#0b5b56] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
                  >
                    Schedule a Consultation
                  </button>
                </div>
              </div>

              {/* Image Frame */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 group">
                  <img
                    src="/images/diagnostics.jpg"
                    alt="Diagnostics and MRI scanner suite with technician"
                    className="w-full h-[360px] sm:h-[440px] object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </main>
  );
}
