import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="bg-slate-800/80 backdrop-blur-md rounded-full p-2 border border-slate-700">
        <div className="space-y-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              title={item.label}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;