import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Modal from './components/Modal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        {/* Sticky Navigation */}
        <Navbar onBookClick={() => setIsBookModalOpen(true)} />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage onBookClick={() => setIsBookModalOpen(true)} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage onBookClick={() => setIsBookModalOpen(true)} />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* Site Footer */}
        <Footer />

        {/* Scroll-to-top button with circular progress ring */}
        <ScrollToTop />

        {/* Appointment booking modal */}
        <Modal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} />
      </div>
    </BrowserRouter>
  );
}

export default App;