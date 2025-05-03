"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaBrain, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skills = [
    { name: "Robotik Kodlama", icon: <FaRobot className="text-blue-500" size={24} />, level: 90 },
    { name: "Web Geliştirme", icon: <FaCode className="text-purple-500" size={24} />, level: 85 },
    { name: "Yapay Zeka", icon: <FaBrain className="text-green-500" size={24} />, level: 80 },
    { name: "Eğitim & Öğretim", icon: <FaGraduationCap className="text-orange-500" size={24} />, level: 75 }
  ];

  return (
    <section id="hakkımda" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
              Hakkımda
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tutkularım ve Yeteneklerim
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              22 yaşından beri teknoloji dünyasında aktif olarak çalışıyorum ve sürekli kendimi geliştirmeye odaklanıyorum.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Hikayem</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Teknoloji tutkum küçük yaşlarda başladı. 22 yaşımdan beri robotik kodlama alanında çeşitli projeler geliştirdim ve bu alandaki bilgimi sürekli derinleştiriyorum. Web geliştirme ve yapay zeka, çalışmalarımı yönlendiren başlıca alanlar arasında yer alıyor.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                İnovatif ve kullanıcı dostu çözümler üretmeyi seviyorum. Her projede, en son teknolojileri kullanarak hem fonksiyonel hem de estetik açıdan tatmin edici sonuçlar elde etmeyi amaçlıyorum.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Eğitim & Deneyim</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 mt-1">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                  </span>
                  <div>
                    <h4 className="font-medium">Bilgisayar Mühendisliği Lisans</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Üniversite Adı, 2018-2022</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 mt-1">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                  </span>
                  <div>
                    <h4 className="font-medium">Robotik Kodlama Eğitmeni</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Şirket Adı, 2022-Günümüz</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 mt-1">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                  </span>
                  <div>
                    <h4 className="font-medium">Web Geliştirme Uzmanı</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Freelance, 2020-Günümüz</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-bold mb-4">Yeteneklerim</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full rounded-full`}
                      style={{
                        background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                        width: `${skill.level}%`
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
