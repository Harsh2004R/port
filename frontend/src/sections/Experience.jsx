import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  MapPin,
  Building,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    // {
    //   id: 1,
    //   title: 'Senior Full Stack Developer',
    //   company: 'TechCorp Solutions',
    //   location: 'San Francisco, CA',
    //   type: 'Full-time',
    //   duration: '2022 - Present',
    //   description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices for code quality and performance.',
    //   achievements: [
    //     'Led a team of 5 developers in building a microservices architecture',
    //     'Improved application performance by 40% through optimization techniques',
    //     'Implemented CI/CD pipelines reducing deployment time by 60%',
    //     'Mentored 3 junior developers, helping them advance their careers'
    //   ],
    //   technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'],
    //   current: true
    // },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Masai School (Internship)",
      location: "bengaluru, (Remote) INDIA",
      type: "Full-time",
      duration: "2023 - 2024",
      description:
        "Contributed to the Masai community by supporting student engagement and growth. Actively participated in the recruitment process by interviewing B.Tech students, evaluating their skills, and guiding them through the selection process. Gained hands-on experience in community management, communication, and talent evaluation.",
      achievements: [
        "Implemented responsive design patterns acros masai products.",
        "Interviewed 20+ B.Tech students during the recruitment process",
        "Supported 200+ learners in the Masai community by fostering engagement and collaboration.",
        "Ensured fair evaluation and feedback.",
        "Enhanced community participation by 25% through active involvement in student activities and discussions.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "Java Script",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "React-Redux",
        "UI Libraries",
      ],
      current: false,
    },
    // {
    //   id: 3,
    //   title: "Frontend Developer",
    //   company: "StartupXYZ",
    //   location: "Austin, TX",
    //   type: "Full-time",
    //   duration: "2019 - 2020",
    //   description:
    //     "Focused on creating intuitive user interfaces and improving user experience. Worked closely with designers to implement pixel-perfect designs.",
    //   achievements: [
    //     "Increased user engagement by 35% through UI/UX improvements",
    //     "Built reusable component library used across 10+ projects",
    //     "Optimized bundle size resulting in 25% faster load times",
    //     "Collaborated with design team to establish design system",
    //   ],
    //   technologies: [
    //     "React",
    //     "TypeScript",
    //     "Styled Components",
    //     "Webpack",
    //     "Jest",
    //   ],
    //   current: false,
    // },
    // {
    //   id: 4,
    //   title: 'Junior Web Developer',
    //   company: 'WebCraft Studios',
    //   location: 'Remote',
    //   type: 'Full-time',
    //   duration: '2018 - 2019',
    //   description: 'Started my professional journey building websites and web applications. Learned industry best practices and modern development workflows.',
    //   achievements: [
    //     'Completed 20+ client projects within deadlines',
    //     'Learned modern JavaScript frameworks and tools',
    //     'Contributed to team code reviews and documentation',
    //     'Maintained 100% uptime for all deployed applications'
    //   ],
    //   technologies: ['JavaScript', 'HTML5', 'CSS3', 'jQuery', 'PHP', 'MySQL'],
    //   current: false
    // }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science (PCM) ",
      institution: "Kumaun University, Nainital",
      location: "Uttarakhand, India",
      duration: "2021 - 2025",
      description:
        "Built a strong foundation in logical reasoning, analytical thinking, and problem-solving, which I applied to software engineering, algorithms, and web technologies.",
      achievements: [
        "Graduated with good marks",
       
      ],
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "Certified by Masai School",
      issuer: "Masai School",
      date: "2023",
      credential: "fp08_013",
    },
    // {
    //   id: 2,
    //   name: "Google Cloud Professional Developer",
    //   issuer: "Google Cloud",
    //   date: "2022",
    //   credential: "GCP-PD-002",
    // },
    {
      id: 3,
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2024",
      credential: "META-REACT-2147B",
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
      id="experience"
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
            My <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Professional experience, education, and continuous learning in the
            world of technology
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Experience
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-800 z-10 ${
                      exp.current ? "animate-pulse" : ""
                    }`}
                  ></div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                            {exp.title}
                          </h4>
                          <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium mb-2">
                            <Building className="h-4 w-4 mr-2" />
                            {exp.company}
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-2">
                            <MapPin className="h-4 w-4 mr-2" />
                            {exp.location}
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                            <Calendar className="h-4 w-4 mr-2" />
                            {exp.duration}
                          </div>
                        </div>
                        {exp.current && (
                          <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                          <Award className="h-4 w-4 mr-2 text-primary-600" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                            >
                              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Education */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-left">
              Education
            </h3>
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                whileHover={{ y: -2 }}
                className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 mb-4"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h4>
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium mb-2">
                  <Building className="h-4 w-4 mr-2" />
                  {edu.institution}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  {edu.location}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {edu.duration}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {edu.description}
                </p>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <Award className="h-4 w-4 mr-2 text-primary-600" />
                    Achievements
                  </h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                      >
                        <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-left">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  whileHover={{ y: -2 }}
                  className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium mb-2">
                    <Award className="h-4 w-4 mr-2" />
                    {cert.issuer}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    Issued: {cert.date}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Credential ID: {cert.credential}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
