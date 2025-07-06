import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  // Google Drive direct download link
  const resumeLink =
    'https://drive.google.com/uc?export=download&id=18A2QcjirKzp--LLi2qtBXkclJLZ_sH8E';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Chinmaya B N
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Desktop Resume Download */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
          >
            <Download size={16} />
            <span>Resume</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 p-4"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-300 hover:text-white py-2 transition-colors duration-200"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              whileHover={{ scale: 1.02 }}
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg mt-4 w-full justify-center"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </motion.a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
