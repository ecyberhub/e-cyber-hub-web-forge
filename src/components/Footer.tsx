
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate newsletter subscription
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
        variant: "default",
      });
      setLoading(false);
      setEmail('');
    }, 1000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ecyber-darker pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div>
              <a href="#home" className="flex items-center">
                <span className="text-2xl font-bold text-ecyber-light">
                  E<span className="text-ecyber-accent">-</span>Cyber Hub
                </span>
              </a>
              <p className="mt-4 text-ecyber-secondary">
                Innovating Today for a Better Tomorrow. We provide comprehensive digital solutions to help businesses thrive.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-ecyber-dark flex items-center justify-center text-ecyber-light hover:text-ecyber-accent transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ecyber-dark flex items-center justify-center text-ecyber-light hover:text-ecyber-accent transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ecyber-dark flex items-center justify-center text-ecyber-light hover:text-ecyber-accent transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ecyber-dark flex items-center justify-center text-ecyber-light hover:text-ecyber-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-ecyber-light mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-ecyber-secondary hover:text-ecyber-accent transition-colors gradient-border">Home</a>
              </li>
              <li>
                <a href="#about" className="text-ecyber-secondary hover:text-ecyber-accent transition-colors gradient-border">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-ecyber-secondary hover:text-ecyber-accent transition-colors gradient-border">Services</a>
              </li>
              <li>
                <a href="#projects" className="text-ecyber-secondary hover:text-ecyber-accent transition-colors gradient-border">Projects</a>
              </li>
              <li>
                <a href="#team" className="text-ecyber-secondary hover:text-ecyber-accent transition-colors gradient-border">Team</a>
              </li>
              <li>
                <a href="#reviews" className="text-ecyber-secondary hover:text-ecyber-accent transition-colors gradient-border">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-ecyber-secondary hover:text-ecyber-accent transition-colors gradient-border">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-ecyber-light mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-ecyber-secondary hover:text-ecyber-accent transition-colors gradient-border">Web Development</a>
              </li>
              <li>
                <a href="#services" className="text-ecyber-secondary hover:text-ecyber-accent transition-colors gradient-border">Mobile App Development</a>
              </li>
              <li>
                <a href="#services" className="text-ecyber-secondary hover:text-ecyber-accent transition-colors gradient-border">Data Analytics</a>
              </li>
              <li>
                <a href="#services" className="text-ecyber-secondary hover:text-ecyber-accent transition-colors gradient-border">Digital Transformation</a>
              </li>
              <li>
                <a href="#services" className="text-ecyber-secondary hover:text-ecyber-accent transition-colors gradient-border">Career Coaching</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-ecyber-light mb-6">Newsletter</h3>
            <p className="text-ecyber-secondary mb-4">
              Subscribe to our newsletter to receive updates on new projects, services, and offers.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow px-4 py-3 bg-ecyber-dark border border-slate-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-ecyber-accent/50 text-ecyber-light"
                />
                <button
                  type="submit"
                  className="bg-ecyber-accent text-ecyber-darker px-4 py-3 rounded-r-lg flex items-center justify-center hover:bg-ecyber-accent/90 transition-colors"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="animate-spin w-5 h-5 border-2 border-ecyber-darker border-t-transparent rounded-full" />
                  ) : (
                    <ArrowRight size={20} />
                  )}
                </button>
              </div>
            </form>
            <p className="text-ecyber-secondary text-sm mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from E-Cyber Hub.
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-ecyber-secondary text-center md:text-left">
              &copy; {currentYear} E-Cyber Hub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-ecyber-secondary hover:text-ecyber-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-ecyber-secondary hover:text-ecyber-accent transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-ecyber-secondary hover:text-ecyber-accent transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
