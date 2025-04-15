
import React from 'react';
import Navbar from '@/components/Navbar';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-ecyber-dark text-ecyber-light">
      <Navbar />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default TeamPage;
