import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Trophy } from 'lucide-react';

const ACHIEVEMENTS = [
  'AIET-Hackathon 2023',
  'Shankara Global Hackathon',
  'Thar 2024 - RTU Kota'
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading subtitle="Competitions and events I've participated in.">
          Achievements & Hackathons
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {ACHIEVEMENTS.map((achievement, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-secondary hover:border-accent hover:shadow-md transition-all group"
            >
              <div className="p-3 bg-accent/10 rounded-full text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <Trophy size={20} />
              </div>
              <h3 className="font-semibold text-textMain">{achievement}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}