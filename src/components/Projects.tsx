
import { ExternalLink, Code } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-ecyber-darker rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-ecyber-accent/10 transition-all duration-300 border border-slate-800 h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-52 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ecyber-darker to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-ecyber-light group-hover:text-ecyber-accent transition-colors">{project.title}</h3>
        <p className="text-ecyber-secondary mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs bg-ecyber-accent/10 text-ecyber-accent px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-ecyber-accent hover:text-ecyber-accent/80 transition-colors flex items-center gap-1 text-sm"
          >
            <ExternalLink size={16} />
            Visit Project
          </a>
          <a 
            href="#" 
            className="text-ecyber-accent hover:text-ecyber-accent/80 transition-colors flex items-center gap-1 text-sm"
          >
            <Code size={16} />
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Mjengo Hardware Website",
      description: "A complete e-commerce solution for a hardware company, featuring product catalog, online ordering, and inventory management.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      url: "https://mjengo-yellow-hub.lovable.app/"
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Interactive data visualization dashboard for financial analysis, featuring real-time data updates and custom reporting.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["Vue.js", "D3.js", "Firebase", "Express"],
      url: "#"
    },
    {
      title: "Health Monitoring App",
      description: "Mobile application for health monitoring with features like appointment scheduling, medication reminders, and health tips.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["React Native", "Firebase", "GraphQL"],
      url: "#"
    },
    {
      title: "Retail Management System",
      description: "Comprehensive retail management system with inventory tracking, sales analytics, and customer relationship management.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      technologies: ["Angular", "Spring Boot", "MySQL", "Docker"],
      url: "#"
    }
  ];

  return (
    <section id="projects" className="section bg-[#0c1223]">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-ecyber-accent uppercase tracking-wider font-medium">Our Portfolio</span>
          <h2 className="section-title mx-auto">Exclusive Projects</h2>
          <p className="text-ecyber-secondary mt-4">
            Explore our most successful digital solutions that have helped businesses transform and grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="opacity-0 animate-fade-in" style={{ animationDelay: `${0.2 * index}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="btn-primary inline-flex">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
