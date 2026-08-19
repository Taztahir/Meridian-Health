import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

interface HomePageProps {
  onBookClick: () => void;
}

export default function HomePage({ onBookClick }: HomePageProps) {
  return (
    <main className="flex-grow">
      <Hero onBookClick={onBookClick} />
      <Stats />
      <Services />
      <Testimonials />
    </main>
  );
}
