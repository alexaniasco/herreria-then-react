import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });

    // Show/hide back to top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <WhatsAppButton />
      {showBackToTop && <BackToTop />}
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Map />
      <Footer />
    </>
  );
}

export default App;
