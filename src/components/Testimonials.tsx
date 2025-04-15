
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
  language: 'english' | 'kiswahili';
  service: string;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-ecyber-darker p-6 rounded-xl border border-slate-800 relative h-full flex flex-col">
      <Quote className="absolute top-4 right-4 text-ecyber-accent/20" size={40} />
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>
      <ScrollArea className="flex-grow mb-6">
        <p className="text-ecyber-light relative z-10">"{testimonial.comment}"</p>
      </ScrollArea>
      <div className="flex items-center mt-auto">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-ecyber-accent flex items-center justify-center text-ecyber-darker font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div className="ml-3">
          <h4 className="text-ecyber-light font-medium">{testimonial.name}</h4>
          <p className="text-ecyber-secondary text-sm">{testimonial.role}</p>
        </div>
        <div className="ml-auto flex flex-col items-end">
          <span className="text-xs px-2 py-1 rounded bg-ecyber-accent/10 text-ecyber-accent">
            {testimonial.language === 'english' ? 'English' : 'Kiswahili'}
          </span>
          <span className="text-xs text-ecyber-secondary mt-1">{testimonial.service}</span>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'english' | 'kiswahili'>('all');
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;

  const testimonials: Testimonial[] = [
    {
      name: "John Kamau",
      role: "Business Owner, Nairobi",
      comment: "E-Cyber Hub transformed our online presence with a website that perfectly fits our brand. We saw a 30% increase in customer engagement after launch. Their web development team was professional and responsive throughout the project.",
      rating: 5,
      language: "english",
      service: "Web Development"
    },
    {
      name: "Wanjiku Mwangi",
      role: "Marketing Director, Kiambu",
      comment: "E-Cyber Hub walitupeleka mbele kwa huduma zao za digital transformation. Walifanya kampuni yetu kuwa ya kisasa zaidi na kupata wateja wengi kwenye mitandao ya kijamii. Tumefurahi sana na maendeleo yetu.",
      rating: 5,
      language: "kiswahili",
      service: "Digital Transformation"
    },
    {
      name: "David Omondi",
      role: "Startup Founder, Kisumu",
      comment: "Working with the E-Cyber Hub team on our mobile app was fantastic. They delivered on time and within budget, with all the features we needed. The app has been downloaded over 5,000 times in just three months since launch.",
      rating: 4,
      language: "english",
      service: "Mobile App Development"
    },
    {
      name: "Fatuma Hassan",
      role: "E-commerce Manager, Mombasa",
      comment: "Huduma za data analytics zilituwezesha kuelewa wateja wetu vizuri zaidi. Tuliweza kuona mienendo ya ununuzi na kuboresha mikakati yetu ya mauzo. Mapato yetu yameongezeka kwa asilimia 25 tangu tuanze kutumia suluhisho lao.",
      rating: 5,
      language: "kiswahili",
      service: "Data Analytics"
    },
    {
      name: "Michael Wanjau",
      role: "IT Professional, Nakuru",
      comment: "The career coaching services provided by E-Cyber Hub helped me land my dream job in tech. Their guidance on portfolio development and interview preparation was invaluable. I'm now earning 40% more than in my previous position.",
      rating: 5,
      language: "english",
      service: "Career Coaching"
    },
    {
      name: "Amina Yusuf",
      role: "Restaurant Owner, Lamu",
      comment: "Tovuti yetu mpya iliyoundwa na E-Cyber Hub imefanya biashara yetu kuonekana zaidi. Watalii wengi sasa wanatupata kupitia mtandao na tunapokea maombi mengi ya kuhifadhi meza. Tunashukuru kwa kazi nzuri.",
      rating: 4,
      language: "kiswahili",
      service: "Web Development"
    }
  ];

  const filteredTestimonials = testimonials.filter(
    (testimonial) => activeFilter === 'all' || testimonial.language === activeFilter
  );

  const totalPages = Math.ceil(filteredTestimonials.length / testimonialsPerPage);
  const displayedTestimonials = filteredTestimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="reviews" className="section bg-[#0c1223] relative">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-ecyber-accent/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-ecyber-accent uppercase tracking-wider font-medium">Client Feedback</span>
          <h2 className="section-title mx-auto">What Our Clients Say</h2>
          <p className="text-ecyber-secondary mt-4">
            We take pride in delivering exceptional digital solutions that meet our clients' needs and exceed their expectations.
          </p>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={() => { setActiveFilter('all'); setCurrentPage(0); }}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === 'all' 
                ? 'bg-ecyber-accent text-ecyber-darker' 
                : 'bg-ecyber-darker text-ecyber-light'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => { setActiveFilter('english'); setCurrentPage(0); }}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === 'english' 
                ? 'bg-ecyber-accent text-ecyber-darker' 
                : 'bg-ecyber-darker text-ecyber-light'
              }`}
            >
              English
            </button>
            <button 
              onClick={() => { setActiveFilter('kiswahili'); setCurrentPage(0); }}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === 'kiswahili' 
                ? 'bg-ecyber-accent text-ecyber-darker' 
                : 'bg-ecyber-darker text-ecyber-light'
              }`}
            >
              Kiswahili
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.name}-${index}`} className="opacity-0 animate-fade-in h-full" style={{ animationDelay: `${0.2 * index}s` }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-4">
            <button 
              onClick={prevPage}
              disabled={totalPages <= 1}
              className="w-10 h-10 rounded-full bg-ecyber-darker border border-slate-700 flex items-center justify-center text-ecyber-light hover:border-ecyber-accent transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="text-ecyber-light">
              Page {currentPage + 1} of {totalPages}
            </div>
            <button 
              onClick={nextPage}
              disabled={totalPages <= 1}
              className="w-10 h-10 rounded-full bg-ecyber-darker border border-slate-700 flex items-center justify-center text-ecyber-light hover:border-ecyber-accent transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
