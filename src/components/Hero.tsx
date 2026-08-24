import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/Hero.jpg';

export default function Hero() {
  // Variants for Framer Motion stagger animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-white via-primary-light/10 to-white">
      {/* Decorative background blobs */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-light/20 blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left"
          >
            {/* Pill Badge */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-light text-primary font-bold text-xs uppercase tracking-wider ">
                Patient-First Care
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.15]"
            >
              Compassionate Care
              for a <span className="text-primary relative inline-block">
                Healthier Tomorrow.
                <span className="absolute bottom-2 left-0 right-0 h-1 bg-accent/30 -z-10" />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Leading the way in medical excellence with a warm, human touch. We're here to listen, support, and guide you on your wellness journey.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="w-full px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-bold shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.a
                href="#about"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-text-primary border border-slate-200 font-bold shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Meet Our Doctors</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Image and Floating Badge */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.25 }}
              className="relative w-full max-w-[480px]"
            >
              {/* Main Image with custom border radius matching the organic curve */}
              <div className="relative overflow-hidden rounded-[80px_30px_80px_30px] border-[12px] border-white/50 shadow-2xl shadow-primary/10 aspect-[4/5] lg:aspect-auto">
                <img
                  src={heroImage}
                  alt="Compassionate healthcare doctor holding senior patient's hand"
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />

                {/* Visual glow backdrop behind the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
              </div>


            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
