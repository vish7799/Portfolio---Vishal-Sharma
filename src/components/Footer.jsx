import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-textMain text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-gray-800 pb-8">
          <div className="md:col-span-2 space-y-4">
            <a href="#home" className="text-2xl font-bold tracking-tighter text-white hover:text-accent transition-colors inline-block font-serif">
              Vishal Sharma<span className="text-accent">.</span>
            </a>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              Exploring new Technologies to build better, faster, and more reliable web applications.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/vish7799" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-400 rounded-lg hover:bg-accent hover:text-white transition-all">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/vishal-sharma-132977294/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-400 rounded-lg hover:bg-accent hover:text-white transition-all">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>&copy; {currentYear} Vishal Sharma. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built by Vishal Sharma</p>
        </div>
      </div>
    </footer>
  );
}