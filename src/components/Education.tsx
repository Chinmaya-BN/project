import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science and Engineering",
      institution: "Vidyavardhaka College of Engineering",
      location: "Affiliated to Visvesvaraya Technological University",
      period: "2021 - 2025",
      grade: "9.3 CGPA",
      description: "Specialized in computer science fundamentals, software engineering, cybersecurity, and AI/ML. Active participant in research projects and technical competitions.",
      achievements: [
        "Achieved 9.3 CGPA with consistent academic excellence",
        "Core member of National Service Scheme (NSS)",
        "Multiple hackathon wins and research publications",
        "Patent published for IoT healthcare system"
      ]
    },
    {
      degree: "Pre-University Education",
      institution: "Vijayavittala Composite PU College",
      location: "Karnataka, India",
      period: "2019 - 2021",
      grade: "88.3%",
      description: "Focused on Physics, Chemistry, Mathematics, and Computer Science. Built strong foundation in analytical thinking and problem-solving.",
      achievements: [
        "Secured 88.3% in Pre University Education Board, Karnataka",
        "Excelled in Mathematics and Computer Science",
        "Active participant in science exhibitions"
      ]
    },
    {
      degree: "Class 10",
      institution: "Maharshi Public School",
      location: "Karnataka, India",
      period: "2018 - 2019",
      grade: "85.8%",
      description: "Completed secondary education with strong performance across all subjects, developing foundational knowledge and study habits.",
      achievements: [
        "Achieved 85.8% in CBSE Board Examinations",
        "Consistent academic performance",
        "Participated in various co-curricular activities"
      ]
    }
  ];

  const certifications = [
    {
      title: "Technical Support Fundamentals",
      issuer: "Google (Coursera)",
      date: "2024",
      icon: "🎓"
    },
    {
      title: "Fundamentals of Project Management",
      issuer: "Google (Coursera)",
      date: "2024",
      icon: "📊"
    },
    {
      title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
      issuer: "Oracle",
      date: "2024",
      icon: "☁️"
    },
    {
      title: "Embedded AI System using STM Microcontroller",
      issuer: "DigiToad Technologies",
      date: "2024",
      icon: "🔧"
    },
    {
      title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      icon: "🔒"
    },
    {
      title: "Space Science and Technology Awareness Training",
      issuer: "ISRO",
      date: "2024",
      icon: "🚀"
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
              Education & <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              My academic journey and professional certifications in technology and cybersecurity
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Education Timeline */}
            <div className="lg:col-span-2">
              <motion.div variants={itemVariants} className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Academic Background</h3>
                </div>
              </motion.div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                        <div className="flex items-center space-x-2 text-purple-400 mb-1">
                          <BookOpen size={16} />
                          <span className="font-semibold">{edu.institution}</span>
                        </div>
                        <p className="text-gray-400 text-sm">{edu.location}</p>
                      </div>
                      <div className="mt-2 md:mt-0 md:text-right">
                        <div className="flex items-center space-x-1 text-gray-400 text-sm mb-1">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="text-green-400 font-semibold">{edu.grade}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-white font-semibold mb-2 flex items-center">
                        <Award size={16} className="mr-2 text-yellow-400" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="lg:col-span-1">
              <motion.div variants={itemVariants} className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-600 to-blue-600">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Certifications</h3>
                </div>
              </motion.div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 hover:border-green-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{cert.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm mb-1">{cert.title}</h4>
                        <p className="text-gray-400 text-xs mb-1">{cert.issuer}</p>
                        <p className="text-green-400 text-xs font-medium">{cert.date}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Learning Stats */}
              <motion.div
                variants={itemVariants}
                className="mt-8 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
              >
                <h4 className="text-white font-bold mb-4">Learning Stats</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Certifications</span>
                    <span className="text-purple-400 font-bold">6+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Publications</span>
                    <span className="text-green-400 font-bold">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Patents</span>
                    <span className="text-blue-400 font-bold">1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Awards</span>
                    <span className="text-yellow-400 font-bold">5+</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;