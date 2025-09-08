import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';

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
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleDownloadResume = () => {
   
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1fj19qekBJPV7Gk-ZDzEvm40BZiOuQmzX';
    link.download = 'Harsh_Sharma_Resume.pdf';
    link.click();
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-4xl sm:text-5xl font-bold shadow-2xl"
              >
                HS
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary-300 dark:border-primary-600"
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="mb-4"
          >
            <span className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-medium">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            <span className="gradient-text">Harsh Sharma</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-medium">
              Expert Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
              Specializing in React.js, Node.js & Modern UI/UX Design
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I build innovative web solutions with cutting-edge technologies. 
            Passionate about creating beautiful, functional, and user-friendly applications 
            that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: 'https://github.com/Harsh2004R', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/harsh-sharma-0545aa25b/', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://x.com/Harsh2004R', label: 'Twitter' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200 group"
                aria-label={label}
              >
                <Icon className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full mx-auto flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
