"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const techStackAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1
      }
    }
  };

  const techItemAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    }
  };

  const techIcons = [
    { name: "Robotik", icon: "🤖" },
    { name: "Web", icon: "🌐" },
    { name: "Yapay Zeka", icon: "🧠" },
    { name: "Kodlama", icon: "💻" },
  ];

  return (
    <section id="anasayfa" className="min-h-screen flex items-center pt-16 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left side content */}
          <motion.div 
            className="flex-1"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4"
            >
              Robotik & Web Geliştirici
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Merhaba, ben Mert İnsel
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-2xl"
            >
              22 yaşından beri robotik kodlama ile ilgileniyorum. Web ve yapay zeka alanlarında 
              tutkulu bir geliştiriciyim. Yenilikçi projeler oluşturarak teknolojinin sınırlarını 
              zorlamayı seviyorum.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex gap-4 flex-wrap"
            >
              <a 
                href="#projeler" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors flex items-center gap-2"
              >
                Projelerimi Görüntüle
                <span className="transform inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a 
                href="#iletişim" 
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-600 rounded-full font-medium transition-colors"
              >
                İletişime Geç
              </a>
            </motion.div>
            
            <motion.div 
              variants={techStackAnimation}
              initial="hidden"
              animate="visible"
              className="mt-10"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">İlgi Alanlarım:</p>
              <div className="flex flex-wrap gap-3">
                {techIcons.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={techItemAnimation}
                    className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800/50 px-3 py-2 rounded-lg"
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side image/animation */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full flex items-center justify-center overflow-hidden">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative w-64 h-64 md:w-80 md:h-80"
              >
                {/* Buraya profil fotoğrafınızı ekleyebilirsiniz */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute top-0 left-1/4 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white"
                  animate={{
                    y: ['-10%', '10%', '-10%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🤖
                </motion.div>
                
                <motion.div
                  className="absolute bottom-5 right-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white"
                  animate={{
                    y: ['10%', '-10%', '10%'],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🧠
                </motion.div>
                
                <motion.div
                  className="absolute top-1/3 -right-4 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white"
                  animate={{
                    x: ['-10%', '10%', '-10%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  💻
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
