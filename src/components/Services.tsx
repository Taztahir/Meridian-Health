import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, HeartPulse, ShieldAlert, Activity, ArrowRightIcon } from 'lucide-react';

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 1,
      title: 'Cardiology',
      description: 'Advanced heart care, diagnostics, and treatment plans for cardiovascular health, engineered for life.',
      image: '/images/cardiology.jpg',
      icon: HeartPulse,
      color: 'bg-rose-500',
      iconBg: 'bg-rose-50 text-rose-500',
    },
    {
      id: 2,
      title: 'Pediatrics',
      description: 'Compassionate and specialized care for infants, children, and adolescents, keeping families healthy.',
      image: '/images/pediatrics.jpg',
      icon: Activity,
      color: 'bg-teal-500',
      iconBg: 'bg-teal-50 text-teal-500',
    },
    {
      id: 3,
      title: 'Emergency Care',
      description: '24/7 rapid response and urgent medical attention for critical situations and immediate care.',
      image: '/images/emergency.jpg',
      icon: ShieldAlert,
      color: 'bg-red-500',
      iconBg: 'bg-red-50 text-red-500',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 16 },
    },
  };

  return (
    <section id="services" className="py-24 bg-slate-50/50 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Our Medical Services
            </h2>
            <p className="mt-4 text-base sm:text-lg text-text-secondary font-light leading-relaxed">
              Comprehensive healthcare solutions tailored to your individual needs, delivered with precision and empathy.
            </p>
          </div>
          
          {/* Slider Controls */}
          <div className="flex items-center space-x-3 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-text-primary hover:border-slate-300 transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-primary hover:bg-primary-hover text-white transition-all duration-200 active:scale-95 shadow-md hover:shadow-primary/20 cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Services Horizontal Container */}
        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex overflow-x-auto gap-8 pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="flex-shrink-0 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 snap-start"
              >
                {/* Image & Floating Icon */}
                <div className="relative h-56 overflow-hidden group/img">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform scale-100 group-hover/img:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Action Badge Icon */}
                  <div className={`absolute bottom-4 left-4 p-3 rounded-2xl ${service.iconBg} shadow-md`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-light line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className="pt-4 flex">
                    <a
                      href={`#services-${service.title.toLowerCase().replace(' ', '-')}`}
                      className="inline-flex items-center space-x-2 text-primary font-bold text-sm hover:text-primary-hover group/link transition-colors duration-200"
                    >
                      <span>Learn More</span>
                      <ArrowRightIcon className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
