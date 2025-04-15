
import { CheckCircle, BarChart, Rocket } from 'lucide-react';

const About = () => {
  const keyValues = [
    {
      icon: CheckCircle,
      title: "Quality First",
      description: "We are committed to delivering high-quality digital solutions that meet and exceed our clients' expectations."
    },
    {
      icon: BarChart,
      title: "Data-Driven",
      description: "Our approach is founded on data analysis and insights to ensure measurable results and continuous improvement."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "We constantly explore new technologies and approaches to provide cutting-edge solutions for our clients."
    }
  ];

  return (
    <section id="about" className="section bg-[#0c1223] relative">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-ecyber-accent/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-ecyber-accent uppercase tracking-wider font-medium">About Us</span>
            <h2 className="section-title">Empowering Businesses Through Digital Transformation</h2>
            
            <p className="text-ecyber-secondary mt-6 leading-relaxed">
              E-Cyber Hub is a leading digital solutions provider specializing in web development, mobile applications, data analytics, digital transformation, and career coaching services. We combine technical expertise with creative thinking to deliver innovative solutions that drive growth for our clients.
            </p>
            
            <p className="text-ecyber-secondary mt-4 leading-relaxed">
              Founded with a vision to empower businesses through technology, we have grown into a trusted partner for organizations seeking to enhance their digital presence and capabilities. Our team of experts is dedicated to providing tailored solutions that address the unique challenges and opportunities faced by our diverse clientele.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {keyValues.map((value, index) => (
                <div key={value.title} className="bg-ecyber-darker p-5 rounded-lg border border-slate-800">
                  <value.icon className="text-ecyber-accent mb-3" size={24} />
                  <h3 className="text-ecyber-light font-medium mb-2">{value.title}</h3>
                  <p className="text-ecyber-secondary text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/20 rounded-full filter blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ecyber-accent/20 rounded-full filter blur-2xl"></div>
              
              <div className="bg-gradient-to-br from-blue-600/20 to-ecyber-accent/20 p-1 rounded-2xl relative">
                <div className="bg-ecyber-darker p-6 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                    alt="E-Cyber Hub Team" 
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  
                  <div className="bg-ecyber-darker/70 backdrop-blur-sm mt-6 p-6 rounded-lg border border-slate-700">
                    <h3 className="text-xl font-semibold text-ecyber-light mb-3">Our Mission</h3>
                    <p className="text-ecyber-secondary">
                      To empower businesses and individuals by providing innovative digital solutions that drive growth, efficiency, and success in an increasingly digital world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
