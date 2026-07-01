import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Code2, Server, Lightbulb, Users } from 'lucide-react';
import profileImg from '../assets/vishal.jpeg';

const STRENGTHS = [
  { icon: <Code2 size={24} />, title: 'Frontend Dev', desc: 'Crafting responsive, accessible UIs' },
  { icon: <Server size={24} />, title: 'Backend Dev', desc: 'Building secure, scalable systems' },
  { icon: <Lightbulb size={24} />, title: 'Problem Solver', desc: 'Quick learner with analytical mindset' },
  { icon: <Users size={24} />, title: 'Team Player', desc: 'Effective collaboration & communication' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading subtitle="Detail-oriented technical professional with hands-on experience in web development.">
          About Me
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative z-10 border-4 border-white shadow-xl bg-primary">
              <img 
                 src={profileImg}
                alt="Professional Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute top-6 -right-6 w-full h-full border-2 border-accent rounded-2xl z-0 hidden md:block"></div>
          </motion.div>

          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-textMain">Quick learner who solves problems effectively.</h3>
            <p className="text-textMuted mb-8 text-lg leading-relaxed">
              I am a passionate Web Developer and Full-Stack enthusiast based in Jaipur. With a strong foundation in both front-end and back-end technologies, I enjoy building complete web applications from the ground up. I am detail-oriented, adaptable, and always eager to learn new technologies to solve complex problems and provide clear technical solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {STRENGTHS.map((strength, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-primary/30 border border-secondary hover:border-accent/30 hover:shadow-md transition-all group">
                  <div className="text-accent mt-1 bg-white p-2 rounded-lg shadow-sm h-fit group-hover:scale-110 transition-transform">
                    {strength.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-textMain">{strength.title}</h4>
                    <p className="text-sm text-textMuted mt-1">{strength.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}