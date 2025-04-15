
import React from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-ecyber-dark text-ecyber-light">
      <Navbar />
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;
