
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import TeamSection from '@/components/TeamSection';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import About from '@/components/About';

const Index = () => {
  return (
    <div className="min-h-screen bg-ecyber-dark text-ecyber-light">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <TeamSection />
      <Testimonials />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
