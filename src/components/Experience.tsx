import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Technical Intern",
      company: "Skyhigh Security",
      location: "Remote",
      period: "Jan 2025 - Present",
      description: [
        "Working on Quality Assurance Automation for Skyhigh Client Proxy (SCP), a component of SSE (Security Service Edge)",
        "Developed and maintained automated test cases to validate policy enforcement, traffic redirection logic, and secure web gateway behaviors",
        "Collaborated with cross-functional teams to troubleshoot traffic flow anomalies and validate policy compliance using simulation tools and proxy configurations"
      ],
      technologies: ["Selenium", "Python", "Security Testing", "Proxy Systems", "Automation"]
    },
    {
      title: "Project Intern",
      company: "Mysuru Consulting Group",
      location: "Remote",
      period: "Apr 2024 - Aug 2024",
      description: [
        "Developed an AI-powered mental health chatbot using NLP, Machine Learning, and LLMs",
        "Enhanced model performance with fine-tuning for accurate and personalized responses",
        "Designed a user-friendly interface with Streamlit for seamless and supportive user interactions"
      ],
      technologies: ["Python", "NLP", "Machine Learning", "LLMs", "Streamlit"]
    },
    {
      title: "Peer Tutor",
      company: "Vidyavardhaka College of Engineering",
      location: "Mysuru, Karnataka",
      period: "Oct 2023 – Mar 2024",
      description: [
        "Trained junior students in HTML, CSS, PHP, and MySQL within a dedicated lab environment",
        "Enhanced teaching and communication skills through hands-on guidance and interactive feedback",
        "Mentored students in web development fundamentals and database management"
      ],
      technologies: ["HTML", "CSS", "PHP", "MySQL", "Teaching", "Mentoring"]
    }
  ];

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
              Work <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              My professional journey in cybersecurity, AI development, and technical education
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-slate-900 z-10"></div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                          <div className="flex items-center space-x-2 text-purple-400 mb-2">
                            <Briefcase size={16} />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink size={16} />
                        </motion.button>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-6">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium border border-purple-600/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;