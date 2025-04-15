
import { Code, Smartphone, BarChart4, Globe, GraduationCap } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="bg-ecyber-darker p-6 rounded-xl border border-slate-800 hover:border-ecyber-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-ecyber-accent/5 group">
    <div className="w-14 h-14 bg-gradient-to-br from-ecyber-accent/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-ecyber-accent/30 group-hover:to-blue-600/30 transition-all duration-300">
      <Icon className="w-7 h-7 text-ecyber-accent" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-ecyber-light">{title}</h3>
    <p className="text-ecyber-secondary">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack development with responsive design, custom CMS solutions, and performance optimization for businesses of all sizes."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications built with the latest technologies for iOS and Android platforms."
    },
    {
      icon: BarChart4,
      title: "Data Analytics",
      description: "Transform your raw data into actionable insights with our advanced analytics solutions that drive intelligent business decisions."
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Strategic services to help businesses adopt digital technologies and practices for improved efficiency and growth."
    },
    {
      icon: GraduationCap,
      title: "Career Coaching",
      description: "Personalized guidance for tech professionals to advance their careers through mentorship, skill development, and industry insights."
    }
  ];
  
  return (
    <section id="services" className="section bg-ecyber-dark relative">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-ecyber-accent uppercase tracking-wider font-medium">What We Offer</span>
          <h2 className="section-title mx-auto">Our Services</h2>
          <p className="text-ecyber-secondary mt-4">
            We provide comprehensive digital solutions to help businesses thrive in the modern technological landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="opacity-0 animate-fade-in" style={{ animationDelay: `${0.2 * index}s` }}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-ecyber-light mb-6 max-w-2xl mx-auto">
            Our tailor-made services are designed to meet your specific business needs and help you stay ahead in today's competitive digital landscape.
          </p>
          <a href="#contact" className="btn-outline inline-flex">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
