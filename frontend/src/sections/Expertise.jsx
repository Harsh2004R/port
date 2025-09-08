import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Palette,
  Database,
  Smartphone,
  Cloud,
  GitBranch,
  Zap,
  Shield,
  Globe,
  Layers,
} from "lucide-react";

const Expertise = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: "Frontend Development",
      icon: Code,
      technologies: ["React.js", "HTML", "CSS", "JavaScript", "TypeScript"],
      color: "from-blue-500 to-blue-600",
    },
    {
      category: "UI/UX Design",
      icon: Palette,
      technologies: ["Chakra UI", "Magic UI", "Tailwind CSS", "Canva", "Figma"],
      color: "from-purple-500 to-purple-600",
    },
    {
      category: "Backend Development",
      icon: Database,
      technologies: [
        "Node.js",
        "Express.js",
        "Web Sockets",
        "Payment Gateway",
        "NoSQL",
        "SMTP",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      technologies: [
        "Digital Ocean",
        "Docker",
        "Vercel",
        "Netlify",
        "Cloudinary",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      category: "Tools & Version Control",
      icon: GitBranch,
      technologies: ["Git", "GitHub", "VS Code", "Vite"],
      color: "from-red-500 to-red-600",
    },
    {
      category: "Operating systems",
      icon: Smartphone,
      technologies: ["Linux (ubuntu)", "Windows", "MacOS"],
      color: "from-pink-500 to-pink-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="expertise"
      className="section-padding bg-gray-50 dark:bg-dark-800"
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            My <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            A comprehensive skill set spanning frontend, backend, and modern
            development practices
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full">
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4`}
                >
                  <skill.icon className="h-6 w-6 text-white" />
                </div>

                {/* Category Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {skill.category}
                </h3>

                {/* Technologies */}
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: 0.1 * index + 0.05 * techIndex }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Additional Skills & Certifications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Performance Optimization",
                  desc: "Code splitting, lazy loading, caching strategies",
                },
                {
                  icon: Shield,
                  title: "Security Best Practices",
                  desc: "OWASP guidelines, authentication, data protection",
                },
                {
                  icon: Globe,
                  title: "SEO & Analytics",
                  desc: "Search optimization, Google Analytics, Core Web Vitals",
                },
                {
                  icon: Layers,
                  title: "Architecture Design",
                  desc: "Scalable systems, microservices, design patterns",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="text-center p-4"
                >
                  <div className="inline-flex p-3 rounded-lg bg-primary-100 dark:bg-primary-900/20 mb-3">
                    <item.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
