import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 container mx-auto flex flex-col justify-center min-h-[90vh]">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
            Available for new opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-textMain mb-6 leading-tight tracking-tight">
            Hi, I'm <span className="text-accent">Vishal Sharma</span><br/>
            Web Developer.
          </h1>
          <p className="text-xl md:text-2xl text-textMuted mb-10 max-w-2xl leading-relaxed">
            Full Stack Developer building scalable, responsive, and user-centric web applications with modern web technologies.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a 
            href="#projects" 
            className="px-8 py-4 bg-accent text-white rounded-lg font-medium flex items-center gap-2 hover:bg-accentDark transition-all hover:-translate-y-1 shadow-lg shadow-accent/25"
          >
            View My Work <ArrowRight size={18} />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white text-textMain border border-secondary rounded-lg font-medium hover:border-accent hover:text-accent transition-all flex items-center gap-2 shadow-sm"
          >
            Get In Touch
          </a>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="tel:+919649102501" className="flex items-center gap-3 text-textMuted hover:text-accent transition-colors group">
            <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform border border-secondary group-hover:border-accent/30">
              <Phone size={20} className="text-accent" />
            </div>
            <span className="font-medium">9649102501</span>
          </a>
          <a href="mailto:vishal7799.arya@gmail.com" className="flex items-center gap-3 text-textMuted hover:text-accent transition-colors group">
            <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform border border-secondary group-hover:border-accent/30">
              <Mail size={20} className="text-accent" />
            </div>
            <span className="font-medium truncate max-w-[200px]">vishal7799.arya@gmail.com</span>
          </a>
          <div className="flex items-center gap-3 text-textMuted">
            <div className="p-3 bg-white rounded-full shadow-sm border border-secondary">
              <MapPin size={20} className="text-accent" />
            </div>
            <span className="font-medium">Jaipur, Rajasthan</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}