import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1"
            >
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <Code size={48} className="text-white" />
              </div>
            </motion.div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Chinmaya B N
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <Sparkles className="text-yellow-400" size={20} />
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              Computer Science Engineering Graduate
            </h2>
            <Sparkles className="text-yellow-400" size={20} />
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-2 mb-8"
          >
            <MapPin className="text-purple-400" size={16} />
            <span className="text-gray-400">Mysuru, India</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
Computer Science graduate with hands-on experience in QA automation, secure proxy systems, and AI-driven log analysis. Passionate about building resilient, scalable tech solutions that bridge security and innovation in modern infrastructures.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-6"
          >
            {[
              { icon: Github, href: "https://github.com/Chinmaya-BN/", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/chinmaya-bn/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:bn_chinmaya@outlook.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-purple-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;