import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const SKILL_CATEGORIES = [
  // {
  //   title: 'Languages',
  //   skills: ['C', 'C++']
  // },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS' , 'NextJS', 'TailwindCSS']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs','MongoDB']
  },
  // {
  //   title: 'Databases',
  //   skills: ['MongoDB', 'MySQL']
  // },
  {
    title: 'Tools & Version Control',
    skills: ['Git', 'GitHub', 'VS Code']
  },
  {
    title: 'Soft Skills',
    skills: ['Communication', 'Collaboration', 'Presentation', 'Documentation']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading subtitle="Technologies and tools I work with to bring ideas to life.">
          My Skills
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-secondary hover:shadow-md transition-shadow group"
            >
              <h3 className="text-xl font-bold text-textMain mb-4 flex items-center gap-2 group-hover:text-accent transition-colors">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-primary text-textMuted rounded-lg text-sm font-medium hover:bg-accent hover:text-white transition-colors cursor-default hover:scale-105 transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}