import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
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

  const stats = [
    { number: "9.3", label: "CGPA" },
    { number: "5+", label: "Major Projects" },
    { number: "6+", label: "Certifications" },
    { number: "3+", label: "Publications" }
  ];

  const interests = [
    { icon: Coffee, label: "Volunteering", color: "text-amber-400" },
    { icon: Lightbulb, label: "Problem Solver", color: "text-yellow-400" },
    { icon: Heart, label: "Community Service", color: "text-red-400" },
    { icon: User, label: "Team Leadership", color: "text-blue-400" }
  ];

  return (
    <div className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-1"
                >
                  <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center">
                    <img
                      src="/images/photo2.jpg"
                      alt="Chinmaya B N"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700"
                  >
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">
                Passionate Engineer & Security Enthusiast
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed" style={{ textAlign: "justify" }}>
                <p>
                  Hello! I'm Chinmaya B N, a Computer Science Engineering graduate from Vidyavardhaka College of Engineering 
                  with a strong CGPA of 9.3. I specialize in automated testing, proxy systems, and log-based security analysis.
                </p>
                
                <p>
                  Currently working as a Technical Intern at Skyhigh Security, I focus on Quality Assurance Automation 
                  for Skyhigh Client Proxy (SCP). My experience spans across developing AI-powered solutions, 
                  automated testing frameworks, and security analysis systems.
                </p>
                
                <p>
                  As a core member of the National Service Scheme (NSS) and an active participant in the Fellowship Program 
                  at GRAAM, I believe in giving back to the community while continuously learning and growing in the tech field.
                </p>
              </div>

              {/* Interests */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">What Drives Me</h4>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700"
                    >
                      <interest.icon className={`${interest.color}`} size={20} />
                      <span className="text-gray-300 text-sm">{interest.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-8"
              >
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Let's Connect
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;