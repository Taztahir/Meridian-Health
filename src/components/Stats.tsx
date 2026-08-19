import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Stethoscope, MapPin } from 'lucide-react';

// ── Count-up hook ────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, startOnMount = false) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(startOnMount);
  const frameRef = useRef<number | null>(null);

  const start = () => setHasStarted(true);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [hasStarted, target, duration]);

  return { count, start };
}

// ── Single animated stat card ─────────────────────────────────────────────────
interface StatCardProps {
  target: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  bgColor: string;
  iconColor: string;
  borderColor: string;
  duration?: number;
}

function StatCard({
  target,
  suffix,
  label,
  icon: IconComponent,
  bgColor,
  iconColor,
  borderColor,
  duration = 1800,
}: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { count, start } = useCountUp(target, duration);

  // Trigger count-up once the card enters the viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [start]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: 'spring' as const, stiffness: 100, damping: 18 },
        },
      }}
      whileHover={{ y: -6 }}
      className={`flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl border ${borderColor} ${bgColor} shadow-sm transition-shadow duration-300 hover:shadow-md`}
    >
      {/* Icon */}
      <div className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-sm mb-4 ${iconColor}`}>
        <IconComponent className="w-6 h-6 stroke-[2]" />
      </div>

      {/* Animated number */}
      <span className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight tabular-nums">
        {count.toLocaleString()}{suffix}
      </span>

      {/* Label */}
      <span className="text-xs sm:text-sm font-semibold text-text-secondary mt-1.5 text-center">
        {label}
      </span>
    </motion.div>
  );
}

// ── Stats section ─────────────────────────────────────────────────────────────
export default function Stats() {
  const stats: Omit<StatCardProps, 'duration'>[] = [
    {
      target: 25,
      suffix: '+',
      label: 'Years of Service',
      icon: Calendar,
      bgColor: 'bg-teal-50/50',
      iconColor: 'text-primary',
      borderColor: 'border-teal-100/50',
    },
    {
      target: 50,
      suffix: 'k+',
      label: 'Patients Trusted',
      icon: Users,
      bgColor: 'bg-emerald-50/50',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-100/50',
    },
    {
      target: 120,
      suffix: '+',
      label: 'Specialist Doctors',
      icon: Stethoscope,
      bgColor: 'bg-blue-50/50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-100/50',
    },
    {
      target: 15,
      suffix: '',
      label: 'Locations',
      icon: MapPin,
      bgColor: 'bg-indigo-50/50',
      iconColor: 'text-indigo-600',
      borderColor: 'border-indigo-100/50',
    },
  ];

  return (
    <section className="py-12 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} duration={1600} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
