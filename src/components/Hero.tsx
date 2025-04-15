
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-ecyber-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-ecyber-accent/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-10 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-ecyber-accent font-mono">Welcome to</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-ecyber-light block">Transforming Ideas into</span>
              <span className="text-gradient bg-gradient-to-r from-ecyber-accent to-blue-500 bg-clip-text text-transparent">Digital Reality</span>
            </h1>
            <p className="text-ecyber-secondary text-lg md:text-xl leading-relaxed max-w-xl">
              Expert web development, mobile apps, data analytics, and digital transformation services to accelerate your business growth.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="btn-primary flex items-center gap-2 group">
                Get Started
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="btn-outline">
                Our Work
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative bg-gradient-to-br from-blue-600/20 to-ecyber-accent/20 p-1 rounded-2xl">
              <div className="bg-ecyber-darker p-4 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Digital Transformation" 
                  className="w-full h-auto rounded-lg object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ecyber-accent/30 rounded-full filter blur-2xl"></div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600/30 rounded-full filter blur-2xl"></div>
          </div>
        </div>
        
        <div className="mt-20 md:mt-28 flex justify-center">
          <a href="#services" className="flex flex-col items-center text-ecyber-light/70 hover:text-ecyber-accent transition-colors">
            <span className="mb-2">Scroll to discover</span>
            <div className="w-6 h-10 border-2 border-ecyber-light/30 rounded-full flex justify-center items-start p-1">
              <div className="w-1.5 h-1.5 bg-ecyber-accent rounded-full animate-bounce"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
