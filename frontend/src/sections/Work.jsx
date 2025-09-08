import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Eye, Filter } from "lucide-react";

const Work = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "DJI global Platform",
      description:
        "A fully functional clone of the DJI official website with complete email authentication, payment processing, and identical UI. Experience the same user interface and functionality as the original | MERN|",
      image:
        "https://res.cloudinary.com/djbe55v48/image/upload/v1757338864/Portfolio/dji_dcqkj6.png",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Razorpay",
        "Chakra UI",
        "Cloudinary",
        "Render",
      ],
      liveUrl: "https://dji-global.netlify.app/",
      githubUrl: "https://github.com/Harsh2004R/drone_site",
      category: "fullstack",
      featured: true,
    },
    {
      id: 2,
      title: "Dare To Visit",
      description:
        "A horror app including horror images, videos, podcasts, and more. It offers own social media platform for sharing contents, offers virtual horror tours, shocking experiences like predicting your death etc.",
      image:
        "https://res.cloudinary.com/djbe55v48/image/upload/v1757338864/Portfolio/DTV_qasgtn.png",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "SMTP",
        "Node-Mailer",
        "Zustand store",
      ],
      liveUrl: "https://dare-to-visit.netlify.app",
      githubUrl: "https://github.com/Harsh2004R/DTV",
      category: "fullstack",
      featured: true,
    },
    {
      id: 3,
      title: "Blog CMS",
      description:
        "A modern student / candidate needy portfolio website with all features required in a job ready portfolio. Including automatic mailing system and behind the seen section. ",
      image:
        "https://res.cloudinary.com/djbe55v48/image/upload/v1757338865/Portfolio/port2k24_tozuax.png",
      technologies: [
        "Magin UI",
        "Tailwind css",
        "React.js",
        "Netlify",
        "Framer motion",
      ],
      liveUrl: "https://cwd-portfolio2k24.netlify.app/",
      githubUrl: "https://github.com/Harsh2004R/portfolio_2k24",
      category: "frontend",
      featured: false,
    },
    {
      id: 4,
      title: "Cors Web Duo",
      description:
        "An industry ready professional portfolio allows user to explore company insides and cantact to join coding club, offer service or consume services.",
      image:
        "https://res.cloudinary.com/djbe55v48/image/upload/v1757338860/Portfolio/CWD_ksewjj.png",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
      liveUrl: "https://cors-web-duo.netlify.app/",
      githubUrl: "https://github.com/Harsh2004R/CorsWebDuo-",
      category: "fullstack",
      featured: true,
    },
    {
      id: 5,
      title: "Carters E-comerce",
      description:
        "A Collaborative Construct week project Masai School Batch(JS201). This is a clone of carters.com Members of Project group are Ayush kr Shanu,Manideep Peddaboini,Harsh Sharma,Sambhaji Dhore,Mohd Sharique",
      image:
        "https://res.cloudinary.com/djbe55v48/image/upload/v1757339119/Portfolio/carters_srkfpe.png",
      technologies: ["HTML", "CSS", "Java Script", "JSON Server", "Railway"],
      liveUrl: "https://adorable-raindrop-e0f0b2.netlify.app",
      githubUrl: "https://github.com/Ayush-kr-shanu/carters.com",
      category: "frontend",
      featured: false,
    },
    {
      id: 6,
      title: "Github repo viewer",
      description:
        "A simple and user friendly mini project where user can view others github profile on this platform.",
      image:
        "https://res.cloudinary.com/djbe55v48/image/upload/v1757339512/Portfolio/github-repo-viewer_engx49.png",
      technologies: ["Vite"],
      liveUrl:
        "https://git-hub-repository-viewer-7yvulw3f2-harsh2004r.vercel.app/",
      githubUrl: "https://github.com/Harsh2004R/gitHub_repository_viewer",
      category: "frontend",
      featured: false,
    },
    {
      id: 7,
      title: "Generic Pagination",
      description:
        "React application that demonstrates pagination functionality using the @ajna/pagination library and includes sorting and filtering features. The app also uses the Chakra UI library for the user interface.",
      image:
        "https://res.cloudinary.com/djbe55v48/image/upload/v1757339511/Portfolio/pagination_ijwts6.png",
      technologies: ["React.js", "Chakra UI", "Ajna-npm", "Netlify"],
      liveUrl: "https://pagination-j19gkomcg-harsh2004r.vercel.app/",
      githubUrl: "https://github.com/Harsh2004R/sorting_filtering_pagination",
      category: "frontend",
      featured: false,
    },
    {
      id: 8,
      title: "API Gateway",
      description:
        "A microservices API gateway with authentication, rate limiting, and request routing capabilities.",
      image:
        "https://res.cloudinary.com/djbe55v48/image/upload/v1757342985/Portfolio/api_hhmhmb.jpg",
      technologies: ["Node.js", "Express", "Multer", "Cloudinary"],
      liveUrl: "https://drone-site-be2k24.onrender.com/",
      githubUrl: "https://github.com/Harsh2004R/drone_site_BE2k24",
      category: "backend",
      featured: false,
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
    <section id="work" className="section-padding">
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
            Recent <span className="gradient-text">Work</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
          >
            A showcase of my recent projects and contributions to the
            development community
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.key
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700"
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -5 }}
                className="group bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white rounded-full hover:bg-primary-100 transition-colors duration-200"
                          aria-label="View live project"
                        >
                          <ExternalLink className="h-5 w-5 text-gray-700" />
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white rounded-full hover:bg-primary-100 transition-colors duration-200"
                          aria-label="View source code"
                        >
                          <Github className="h-5 w-5 text-gray-700" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <Eye className="h-4 w-4" />
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 text-gray-700 dark:text-gray-300 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <motion.a
            href="https://github.com/harsh2004r"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github className="h-5 w-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
