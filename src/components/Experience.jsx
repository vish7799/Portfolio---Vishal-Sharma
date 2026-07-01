import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Briefcase } from 'lucide-react';

const EXPERIENCES = [
  
  {
    role: 'Web Developer Intern',
    company: 'ALFIDO TECH',
    period: 'Jun 2025 - Jul 2025',
    description: [
      'Developed responsive web pages using HTML, CSS, JavaScript, and React.js.',
      'Collaborated with the development team using Git and GitHub for version control and project management.',
      'Adapted to frontend, backend, and testing tasks based on project requirements, enhancing problem-solving skills.'
    ]
  },
  {
    role: 'Frontend Developer Intern',
    company: 'AD INFOWORLD',
    period: 'Jul 2024 - Aug 2024',
    description: [
      'Designed and developed responsive web pages using HTML, CSS, JavaScript, and React.js.',
      'Built reusable React components to create interactive and user-friendly interfaces.',
      'Optimized web pages for responsiveness across desktop, tablet, and mobile devices.'
    ]
  },
  {
    role: 'SEO & Web Developer Trainee',
    company: 'SingleTap',
    period: 'Feb 2024 - May 2024',
    description: [
      'Built responsive web pages using HTML, CSS, and Bootstrap with a focus on user experience.',
      'Learned API integration, form validation, and SEO fundamentals for modern web applications.',
      'Collaborated with mentors to understand web development workflows and best coding practices.'
    ]
  },
  {
    role: 'Web Developer Trainee',
    company: 'Amigos IT Solutions',
    period: 'Aug 2023 - Sep 2023',
    description: [
      'Developed responsive web pages using HTML, CSS, and Bootstrap following modern UI principles.',
      'Gained hands-on experience in frontend development, debugging, and website optimization.',
      'Learned responsive design techniques and improved website accessibility across devices.'
    ]
  }

];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading subtitle="My professional journey and roles in the industry.">
          Work Experience
        </SectionHeading>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-accent/30 pl-8 ml-4 md:ml-0 space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                <span className="absolute -left-[43px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-primary border-2 border-accent text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Briefcase size={14} />
                </span>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-secondary group-hover:shadow-md transition-all group-hover:border-accent/30">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-textMain">{exp.role}</h3>
                      <h4 className="text-accent font-medium">{exp.company}</h4>
                    </div>
                    <span className="inline-block py-1 px-3 bg-secondary/50 text-textMuted rounded-full text-sm font-medium whitespace-nowrap w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-textMuted space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}