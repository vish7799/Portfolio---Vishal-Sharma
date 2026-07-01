import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const PROJECTS = [
  {
  title: 'Brew Haven – Coffee Shop Landing Page',
  description: 'A modern and responsive coffee shop landing page showcasing handcrafted beverages, menu highlights, gallery, testimonials, and contact information.',
  image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
  tech: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
  highlights: ['Responsive Design', 'Component-Based UI'],
  features: [
    // 'Modern hero section with engaging call-to-action',
    // 'Interactive coffee menu with featured beverages',
    'Responsive gallery showcasing café ambiance',
    'Customer testimonials section',
    'Smooth scrolling navigation',
    'Contact section with business information',
    'Reusable React components for maintainable code'
  ],
  github: 'https://github.com/vish7799/Brew-Haven-A-Coffee-Shop',
  live: 'https://brew-haven-a-coffee-shop.vercel.app/'
},
{
  title: 'Tic Tac Toe Game',
  description: 'An interactive and responsive Tic Tac Toe game built with React.js, featuring real-time winner detection, turn management, and game reset functionality.',
  image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=800&q=80',
  tech: ['React.js', 'JavaScript', 'CSS3', 'Vite'],
  highlights: ['Interactive Game', 'Responsive UI'],
  features: [
    'Two-player turn-based gameplay',
    'Automatic winner and draw detection',
    'Game reset functionality '
  ],
  github: 'https://github.com/vish7799/Tic-Tac-Toe-React',
  live: 'https://tic-tac-toe-react-pi-two.vercel.app/'
},
  {
    title: 'Task-to-do',
    description: 'Fully interactive task management app with persistent data storage.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['HTML', 'CSS', 'JavaScript'],
    highlights: ['JavaScript', 'Interactive'],
    features: [
      'Task creation, editing, deletion',
      'Completion tracking',
      'Local Storage integration',
      'Real-time updates',
      'Responsive design'
    ],
    github: 'https://github.com/vish7799/To-Do-List',
    live: 'https://task-to-do-three.vercel.app/'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading subtitle="A showcase of my recent full-stack and frontend development work.">
          Featured Projects
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-primary/20 rounded-2xl overflow-hidden border border-secondary hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.highlights.map(highlight => (
                    <span key={highlight} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-accent text-xs font-bold rounded-full shadow-sm">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-textMain mb-2">{project.title}</h3>
                <p className="text-textMuted mb-6 line-clamp-2">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-textMain mb-2 uppercase tracking-wider">Key Features</h4>
                  <ul className="list-disc list-inside text-sm text-textMuted space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                    {project.features.length > 3 && <li>And more...</li>}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-secondary">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-textMain hover:text-accent font-medium transition-colors"
                  >
                    <FaGithub size={18} /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-textMain hover:text-accent font-medium transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}