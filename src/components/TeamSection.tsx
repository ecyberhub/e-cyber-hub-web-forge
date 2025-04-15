
import { 
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  initials: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <Card className="bg-ecyber-darker rounded-xl overflow-hidden group border border-slate-800 hover:border-ecyber-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-ecyber-accent/5">
      <CardContent className="p-8 flex flex-col items-center text-center">
        <Avatar className="w-24 h-24 mb-6 ring-2 ring-ecyber-accent/20 bg-gradient-to-br from-blue-500/20 to-ecyber-accent/20">
          <AvatarFallback className="text-ecyber-accent text-2xl font-bold bg-gradient-to-br from-blue-500/20 to-ecyber-accent/20">
            {member.initials}
          </AvatarFallback>
        </Avatar>
        
        <h3 className="text-xl font-semibold text-ecyber-light mb-1">{member.name}</h3>
        <p className="text-ecyber-accent mb-4">{member.role}</p>
        
        <p className="text-ecyber-secondary mb-6">{member.description}</p>
        
        <div className="flex gap-4">
          {member.socialLinks.facebook && (
            <a href={member.socialLinks.facebook} className="text-ecyber-secondary hover:text-ecyber-accent transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          )}
          {member.socialLinks.twitter && (
            <a href={member.socialLinks.twitter} className="text-ecyber-secondary hover:text-ecyber-accent transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          )}
          {member.socialLinks.linkedin && (
            <a href={member.socialLinks.linkedin} className="text-ecyber-secondary hover:text-ecyber-accent transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          )}
          {member.socialLinks.instagram && (
            <a href={member.socialLinks.instagram} className="text-ecyber-secondary hover:text-ecyber-accent transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Peter Mitunda",
      role: "CEO & Co-CEO, IT Expert",
      initials: "PM",
      description: "Tech enthusiast and visionary leader with extensive expertise in web development and IT infrastructure. Drives E-Cyber Hub's innovation strategy and client solutions.",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      name: "Alex Irungu",
      role: "Co-CEO, IT Expert",
      initials: "AI",
      description: "Technical specialist with deep knowledge in mobile app development and cloud solutions. Passionate about helping businesses achieve digital transformation.",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Ronny Mumani",
      role: "Outreach Specialist",
      initials: "RM",
      description: "Strategic communicator focused on building strong client relationships. Identifies new business opportunities and manages partnerships with key stakeholders.",
      socialLinks: {
        linkedin: "#",
        facebook: "#",
        instagram: "#"
      }
    },
    {
      name: "Faith Wairimu",
      role: "Social Media Manager",
      initials: "FW",
      description: "Creative digital marketer with a flair for engaging content creation. Manages E-Cyber Hub's online presence and drives engagement across all social platforms.",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    }
  ];

  return (
    <section id="team" className="section bg-ecyber-dark">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-ecyber-accent uppercase tracking-wider font-medium">Meet Our Team</span>
          <h2 className="section-title mx-auto">The Experts Behind E-Cyber Hub</h2>
          <p className="text-ecyber-secondary mt-4">
            Our talented team of professionals brings together diverse expertise to deliver exceptional digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="opacity-0 animate-fade-in" style={{ animationDelay: `${0.2 * index}s` }}>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-ecyber-light mb-6 max-w-2xl mx-auto">
            Our team combines technical expertise with creative thinking to deliver innovative solutions that meet your business needs.
          </p>
          <a href="#contact" className="btn-outline inline-flex">
            Work With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
