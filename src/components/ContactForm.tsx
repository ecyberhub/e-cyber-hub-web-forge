
import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    reason: 'General Inquiry',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting E-Cyber Hub. We'll get back to you soon.",
        variant: "default",
      });
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        reason: 'General Inquiry',
        message: '',
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        "0700748246",
        "+254 112043557"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "ecyberhub2@gmail.com"
      ]
    },
    {
      icon: MapPin,
      title: "Social Media",
      details: [
        "TikTok: @ecyberhub",
        "Facebook, Instagram, LinkedIn, Twitter"
      ]
    }
  ];

  return (
    <section id="contact" className="section bg-ecyber-dark">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-ecyber-accent uppercase tracking-wider font-medium">Get In Touch</span>
          <h2 className="section-title mx-auto">Contact Us</h2>
          <p className="text-ecyber-secondary mt-4">
            Have questions or ready to start your project? Reach out to us and our team will get back to you shortly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <div 
                key={item.title}
                className="bg-ecyber-darker p-6 rounded-xl border border-slate-800 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-ecyber-accent/20 to-blue-600/20 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-ecyber-accent" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-ecyber-light mb-2">{item.title}</h3>
                    <div className="space-y-1">
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-ecyber-secondary">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-2 bg-ecyber-darker p-8 rounded-xl border border-slate-800 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold text-ecyber-light mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-ecyber-light mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-ecyber-dark border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecyber-accent/50 text-ecyber-light"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-ecyber-light mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-ecyber-dark border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecyber-accent/50 text-ecyber-light"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="subject" className="block text-ecyber-light mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-ecyber-dark border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecyber-accent/50 text-ecyber-light"
                    placeholder="Subject of your message"
                  />
                </div>
                <div>
                  <label htmlFor="reason" className="block text-ecyber-light mb-2">
                    Reason for Contact
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-ecyber-dark border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecyber-accent/50 text-ecyber-light"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Request">Project Request</option>
                    <option value="Support">Support</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Career Coaching">Career Coaching</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-ecyber-light mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-ecyber-dark border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-ecyber-accent/50 text-ecyber-light resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
