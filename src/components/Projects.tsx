import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ALSATE – Automated Log Monitoring System",
      description: "Deployed an AI-powered automated log monitoring system that analyzes Linux syslogs in real-time, identifies threats using a fine-tuned LLM, and provides contextual explanations with recommended remediations for system anomalies.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "LLM", "Linux", "Security Analysis", "Real-time Processing"],
      github: "https://github.com/Chinmaya-BN/ALSATE",
      live: "https://github.com/Chinmaya-BN/ALSATE",
      featured: true,
      stats: { stars: 45, views: 1200 }
    },
    {
      title: "Vaidhya - Mental Healthcare Platform",
      description: "Designed Vaidhya, a mental healthcare platform that enables secure and seamless interactions between patients and doctors. Focuses on mental health conditions such as depression, anxiety, and PTSD, utilizing advanced technology for improved care.",
      image: "/images/vaidhya.png",
      technologies: ["Python", "NLP", "Machine Learning", "Healthcare", "Security"],
      github: "https://github.com/Chinmaya-BN/Vaidhya",
      live: "https://github.com/Chinmaya-BN/Vaidhya",
      featured: true,
      stats: { stars: 32, views: 890 }
    },
    {
      title: "Medix - AI Medical Imaging",
      description: "Created Medix, an advanced platform integrating AI with medical imaging to support the diagnosis of brain tumors and lung-related abnormalities. Aims to improve diagnostic accuracy and facilitate early treatment.",
      image: "/images/medix.png",
      technologies: ["Python", "Computer Vision", "Deep Learning", "Medical AI", "Image Processing"],
      github: "https://github.com/Chinmaya-BN/Medix",
      live: "https://github.com/Chinmaya-BN/Medix",
      featured: true,
      stats: { stars: 67, views: 1500 }
    },
    {
      title: "Personal Portfolio Website",
      description: "Developed a personal portfolio website using HTML, CSS, and JavaScript to showcase my skills and projects. Implemented a responsive design for a professional and accessible user experience.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Portfolio"],
      github: "#",
      live: "#",
      featured: false,
      stats: { stars: 23, views: 650 }
    },
    {
      title: "AI Mental Health Chatbot",
      description: "Developed an AI-powered mental health chatbot using NLP, Machine Learning, and LLMs during internship at Mysuru Consulting Group. Enhanced model performance with fine-tuning for accurate responses.",
      image: "/images/mental-health-chatbot-main-banner.jpg",
      technologies: ["Python", "NLP", "LLMs", "Streamlit", "Mental Health"],
      github: "https://github.com/Chinmaya-BN/Empathia",
      live: "https://github.com/Chinmaya-BN/Empathia",
      featured: false,
      stats: { stars: 38, views: 980 }
    },
    {
      title: "REGEN-H IoT System",
      description: "Patent published IoT system for healthcare applications. Innovative solution that demonstrates technical expertise and research capabilities in the Internet of Things domain.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["IoT", "Patent", "Innovation", "Research"],
      github: "#",
      live: "#",
      featured: false,
      stats: { stars: 15, views: 420 }
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
              Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A showcase of my work in AI, cybersecurity, healthcare technology, and innovative solutions
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
   
              

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Stats */}


                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs font-medium border border-purple-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>


                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:border-purple-500/50 transition-all duration-300"
            >
              View All Projects on GitHub
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;