import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading subtitle="Feel free to reach out for collaborations or just a friendly hello.">
          Get In Touch
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-textMain mb-6">Let's talk about your project</h3>
            <p className="text-textMuted mb-8">
              I'm currently available to take on new projects. If you have an application you are interested in developing, or a problem that needs solving, I'd love to help.
            </p>

            <div className="space-y-6">
              <a href="mailto:vishal7799.arya@gmail.com" className="flex items-center gap-4 text-textMuted hover:text-accent transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium text-textMain">Email Me At</p>
                  <p className="text-sm">vishal7799.arya@gmail.com</p>
                </div>
              </a>
              <a href="tel:+919649102501" className="flex items-center gap-4 text-textMuted hover:text-accent transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-medium text-textMain">Call Me At</p>
                  <p className="text-sm">9649102501</p>
                </div>
              </a>
              <div className="flex items-center gap-4 text-textMuted group">
                <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-xl text-accent transition-all shadow-sm border border-transparent group-hover:border-accent/20">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-medium text-textMain">Location</p>
                  <p className="text-sm">Jaipur, Rajasthan</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-secondary">
              <p className="font-medium text-textMain mb-4">Connect on Socials</p>
              <div className="flex gap-4">
                <a href="https://github.com/vish7799" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-primary text-textMuted rounded-lg hover:bg-accent hover:text-white transition-all shadow-sm">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/vishal-sharma-132977294/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-primary text-textMuted rounded-lg hover:bg-accent hover:text-white transition-all shadow-sm">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary/50 p-8 rounded-2xl border border-secondary shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-textMain">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-secondary focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-textMain">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-secondary focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-textMain">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-secondary focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  placeholder="How can I help you?"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-textMain">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-secondary focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                  placeholder="Tell me more about your idea..."
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-accent text-white rounded-lg font-medium hover:bg-accentDark transition-all hover:shadow-lg hover:shadow-accent/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:shadow-none disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : isSubmitted ? (
                  <span>Message Sent!</span>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
