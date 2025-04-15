
import React from 'react';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-ecyber-dark text-ecyber-light">
      <Navbar />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
