import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <main className="flex-grow">
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
    </main>
  );
}
