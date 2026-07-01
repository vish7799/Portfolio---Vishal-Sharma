import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { GraduationCap } from 'lucide-react';

const EDUCATION = [
  {
    degree: 'Bachelor of Technology in Information Technology',
    institution: 'Arya College of Engineering, Jaipur',
    score: 'CGPA: 7.50',
    period: '2022 - 2026'
  },
  {
    degree: 'Senior Secondary Education (RBSE)',
    institution: 'Radha Bal Bharti Sec. School, Vijaypura, Jaipur',
    score: 'Percentage: 84%',
    period: '2021 - 2022'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading subtitle="My academic background and qualifications.">
          Education
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {EDUCATION.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-primary/30 p-8 rounded-2xl border border-secondary hover:border-accent/30 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-textMain mb-2">{edu.degree}</h3>
              <h4 className="text-textMuted font-medium mb-4">{edu.institution}</h4>
              <div className="flex items-center gap-4 text-sm font-medium">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">{edu.score}</span>
                <span className="text-textMuted">{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}