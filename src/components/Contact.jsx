import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// Step 1: Sign up free at https://emailjs.com
// Step 2: Add Email Service (Gmail) → copy Service ID below
// Step 3: Create Email Template   → copy Template ID below
//         Template variables to use: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// Step 4: Account → API Keys      → copy Public Key below
const EMAILJS_SERVICE_ID = 'service_g77fayo';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_ioemcf9';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'J_OzV1t0l5DcL3g3r';   // e.g. 'AbCdEfGhIjKlMnOp'
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setSubmitStatus('success');
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
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
          {/* ── Left: Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-textMain mb-6">Let's talk about your project</h3>
            <p className="text-textMuted mb-8">
              I'm currently available to take on new projects. If you have an application you are
              interested in developing, or a problem that needs solving, I'd love to help.
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

          {/* ── Right: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary/50 p-8 rounded-2xl border border-secondary shadow-sm"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-textMain">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    value={formData.from_name}
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
                    name="from_email"
                    required
                    value={formData.from_email}
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

              {/* ── Status Toast ── */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-3 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3"
                  >
                    <CheckCircle size={18} className="shrink-0" />
                    <span>Message sent! I'll get back to you soon.</span>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3"
                  >
                    <AlertCircle size={18} className="shrink-0" />
                    <span>Something went wrong. Please email me directly at vishal7799.arya@gmail.com</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-accent text-white rounded-lg font-medium hover:bg-accentDark transition-all hover:shadow-lg hover:shadow-accent/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle size={18} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
