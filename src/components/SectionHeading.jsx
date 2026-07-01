import { motion } from 'framer-motion';

export default function SectionHeading({ children, subtitle }) {
  return (
    <div className="mb-12 text-center md:text-left">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-textMain mb-4 flex items-center gap-3 md:justify-start justify-center"
      >
        <span className="w-8 h-1 bg-accent hidden md:block rounded-full"></span>
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 max-w-2xl text-lg md:ml-11"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
