import { motion } from 'framer-motion';
import { Play, Quote } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="blog" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            Patient Stories
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-secondary font-light">
            Hear directly from those who have experienced our compassionate care.
          </p>
        </div>

        {/* Testimonial Box */}
        <div className="relative max-w-5xl mx-auto bg-slate-50/50 border border-slate-100 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left side: Video Thumbnail */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-md group cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              {!isPlaying ? (
                <>
                  <img
                    src="/images/video_thumbnail.jpg"
                    alt="Sarah Jenkins smiling in a park during sunset"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-700"
                  />
                  
                  {/* Visual overlay gradient */}
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center text-primary border border-primary-light"
                    >
                      <Play className="w-7 h-7 fill-primary stroke-none ml-1 transform translate-x-0.5" />
                    </motion.div>
                  </div>
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <span className="text-white text-xs font-semibold uppercase tracking-wider">
                      Sarah's Recovery Journey
                    </span>
                  </div>
                </>
              ) : (
                /* Interactive Video Player Mockup */
                <div className="w-full h-full bg-black flex flex-col items-center justify-center relative p-4 text-center">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setIsPlaying(false); }}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 text-xs transition-colors"
                  >
                    Close
                  </button>
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center space-y-4"
                  >
                    <HeartPulsePlayAnimation />
                    <h4 className="text-white font-bold text-lg">Patient Story Playing</h4>
                    <p className="text-slate-400 text-xs max-w-xs">
                      "I received the most amazing cardiology diagnostics and checkup plan from Meridian Health. Their care saved my life."
                    </p>
                  </motion.div>
                </div>
              )}
            </motion.div>

            {/* Right side: Quote details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6 flex flex-col space-y-6"
            >
              {/* Quote Mark Icon */}
              <div className="text-primary/20 flex justify-start">
                <Quote className="w-16 h-16 fill-current transform scale-y-[-1] scale-x-[-1]" />
              </div>
              
              {/* Testimonial text */}
              <blockquote className="text-lg sm:text-xl font-light italic leading-relaxed text-text-primary">
                "The team at Meridian didn't just treat my condition; they treated me as a whole person. Their warmth and dedication made all the difference in my recovery."
              </blockquote>
              
              {/* Author */}
              <div>
                <cite className="not-italic font-bold text-base text-text-primary block">
                  Sarah Jenkins
                </cite>
                <span className="text-sm font-medium text-text-secondary">
                  Cardiology Patient
                </span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}

// Micro animation representing playing media
function HeartPulsePlayAnimation() {
  return (
    <div className="flex items-center space-x-1.5 justify-center h-12">
      {[1, 2, 3, 4, 5].map((bar) => (
        <motion.div
          key={bar}
          animate={{
            height: bar % 2 === 0 ? [12, 36, 12] : [20, 48, 20],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: bar * 0.15,
            ease: 'easeInOut',
          }}
          className="w-1.5 bg-primary rounded-full"
        />
      ))}
    </div>
  );
}
