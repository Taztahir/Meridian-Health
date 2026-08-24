import {
  ShieldCheck,
  Heart,
  Eye,
  ArrowRight,
  Shield,
  CheckCircle2,
  Award
} from 'lucide-react';

interface Specialist {
  name: string;
  specialty: string;
  credentials: string;
  image: string;
  profileLink: string;
}

const specialists: Specialist[] = [
  {
    name: "Dr. Sarah Jenkins",
    specialty: "CARDIOLOGY",
    credentials: "MD, FACC",
    image: "/images/aboutmeetfi.png",
    profileLink: "#",
  },
  {
    name: "Dr. Marcus Chen",
    specialty: "NEUROLOGY",
    credentials: "MD, PhD",
    image: "/images/aboutmeetfj.png",
    profileLink: "#",
  },
  {
    name: "Dr. Elena Rodriguez",
    specialty: "PEDIATRICS",
    credentials: "MD, FAAP",
    image: "/images/aboutmeetfk.png",
    profileLink: "#",
  },
  {
    name: "Dr. James Wilson",
    specialty: "ORTHOPEDICS",
    credentials: "DO, FAAOS",
    image: "/images/aboutmeetfl.png",
    profileLink: "#",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-20 text-text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-light text-primary font-medium text-xs sm:text-sm border border-primary/10">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Established Excellence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.15]">
              About Our Healthcare Group
            </h1>

            <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed max-w-xl">
              At <mark className="bg-yellow-300 text-text-primary px-1 font-normal rounded-sm">Meridian Health</mark>, we combine cutting-edge medical technology with compassionate care. Our commitment to clinical excellence ensures the highest standard of treatment for every patient.
            </p>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
            <img
              src="/images/about-herimg.png"
              alt="Meridian Health Hospital Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="bg-slate-100/80 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 rounded-3xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">Our Guiding Principles</h2>
            <p className="text-text-secondary text-sm sm:text-base font-light">
              The foundation of our clinical practice is built upon a steadfast commitment to patient well-being and medical advancement.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
            <div className="w-full md:w-[65%] bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-lg bg-primary-light text-primary flex items-center justify-center">
                <Heart className="w-5 h-5 fill-primary text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">Our Mission</h3>
              <p className="text-text-secondary text-sm font-light leading-relaxed">
                To deliver exceptional, patient-centered healthcare through specialized medical expertise, advanced technology, and a compassionate approach that prioritizes comprehensive well-being and clinical precision.
              </p>
            </div>

            <div className="w-full md:w-[35%] bg-[#005f56] text-white p-8 rounded-2xl shadow-sm space-y-4 relative overflow-hidden flex flex-col justify-between">
              <div className="w-10 h-10 rounded-lg bg-white/10 text-emerald-200 flex items-center justify-center backdrop-blur-sm">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-emerald-100/90 text-sm font-light leading-relaxed">
                  To be the recognized leader in progressive healthcare, setting regional standards for medical innovation, quality outcomes, and transformative patient experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">Meet Our Specialists</h2>
              <p className="text-text-secondary text-sm sm:text-base font-light max-w-2xl mt-2">
                Our clinical team comprises highly credentialed experts dedicated to providing specialized care across a spectrum of medical disciplines.
              </p>
            </div>

            <a
              href="#physicians"
              className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:underline transition-all whitespace-nowrap"
            >
              <span>View All Physicians</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialists.map((doctor, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow">
                <div className="h-64 overflow-hidden bg-slate-100">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                      {doctor.specialty}
                    </span>
                    <h3 className="text-lg font-bold text-text-primary">{doctor.name}</h3>
                    <p className="text-xs text-text-secondary font-light">{doctor.credentials}</p>
                  </div>
                  <a
                    href={doctor.profileLink}
                    className="text-xs font-semibold text-text-secondary hover:text-primary transition-colors pt-3 border-t border-slate-100 inline-block"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 pt-12">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-text-secondary mb-8">
            RECOGNIZED FOR CLINICAL EXCELLENCE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-text-primary font-semibold text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Joint Commission Accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span>Excellence Award 2024</span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}