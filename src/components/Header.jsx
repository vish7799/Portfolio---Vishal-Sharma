import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
  { name: 'Résumé', href: 'https://drive.google.com/file/d/1sQs64T0BZozEwnmOPHRWW0jaCyPw5DVK/view?usp=drive_link', external: true }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section;
        }
      }
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-textMain hover:text-accent transition-colors font-serif">
          Vishal Sharma<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map(link => {
              const isSectionLink = typeof link.href === 'string' && link.href.startsWith('#');
              const isActive = isSectionLink && activeSection === link.href.substring(1);

              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                    className={`text-sm font-medium transition-colors hover:text-accent ${isActive ? 'text-accent border-b-2 border-accent pb-1' : 'text-textMuted'}`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-4 border-l border-gray-300 pl-6">
            <a href="https://github.com/vish7799" target="_blank" rel="noreferrer" className="text-textMuted hover:text-accent transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vishal-sharma-132977294/" target="_blank" rel="noreferrer" className="text-textMuted hover:text-accent transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-textMain"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-primary shadow-lg border-t border-secondary py-4 px-6 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(link => {
              const isSectionLink = typeof link.href === 'string' && link.href.startsWith('#');
              const isActive = isSectionLink && activeSection === link.href.substring(1);

              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                    className={`block text-lg font-medium transition-colors ${isActive ? 'text-accent' : 'text-textMuted'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-textMuted hover:text-accent transition-colors p-2 bg-white rounded-full shadow-sm">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-textMuted hover:text-accent transition-colors p-2 bg-white rounded-full shadow-sm">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}