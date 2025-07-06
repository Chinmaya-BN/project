import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        "Python",
        "C++", 
        "C",
        "JavaScript",
        "HTML",
        "CSS"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        "Selenium",
        "Git",
        "Jenkins",
        "Docker",
        "Linux",
        "Streamlit"
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        "NLP",
        "Machine Learning",
        "LLMs",
        "Deep Learning",
        "Computer Vision",
        "Data Analysis"
      ]
    },
    {
      title: "Security & Testing",
      icon: Globe,
      color: "from-orange-500 to-red-500",
      skills: [
        "Automated Testing",
        "Security Analysis",
        "Proxy Systems",
        "Log Analysis",
        "Quality Assurance",
        "Penetration Testing"
      ]
    },
    {
      title: "Web Development",
      icon: Smartphone,
      color: "from-indigo-500 to-purple-500",
      skills: [
        "Frontend Development",
        "PHP",
        "MySQL",
        "Responsive Design",
        "UI/UX Design",
        "Database Design"
      ]
    },
    {
      title: "Soft Skills",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      skills: [
        "Collaboration",
        "Time Management",
        "Problem-Solving",
        "Leadership",
        "Communication",
        "Teaching"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
              Skills & <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Technologies and tools I use to build secure and innovative solutions
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/50 hover:border-purple-500/50 transition-all duration-200"
                    >
                      <span className="text-gray-300 text-sm font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Technology evolves rapidly, and I believe in continuous learning. I regularly explore new frameworks, 
                participate in hackathons, and contribute to research projects to stay at the forefront of innovation 
                in cybersecurity and AI.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                {["Cybersecurity", "AI/ML", "Cloud Computing", "DevOps"].map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-600/30"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;