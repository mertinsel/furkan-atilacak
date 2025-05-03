"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaAward, FaCertificate } from 'react-icons/fa';

const Certificates = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const certificates = [
    {
      id: 1,
      title: "Robotik Kodlama Uzmanlığı",
      issuer: "XYZ Teknoloji Akademisi",
      date: "Ağustos 2022",
      icon: <FaAward className="w-8 h-8 text-yellow-500" />
    },
    {
      id: 2,
      title: "Yapay Zeka ve Makine Öğrenimi",
      issuer: "Microsoft Learn",
      date: "Mart 2023",
      icon: <FaMedal className="w-8 h-8 text-blue-500" />
    },
    {
      id: 3,
      title: "Advanced Web Development",
      issuer: "Udemy",
      date: "Ekim 2022",
      icon: <FaCertificate className="w-8 h-8 text-green-500" />
    },
    {
      id: 4,
      title: "TensorFlow Developer Certification",
      issuer: "Google",
      date: "Şubat 2023",
      icon: <FaMedal className="w-8 h-8 text-red-500" />
    },
    {
      id: 5,
      title: "Eğitimde Teknoloji Kullanımı",
      issuer: "Eğitim Bakanlığı",
      date: "Aralık 2022",
      icon: <FaCertificate className="w-8 h-8 text-purple-500" />
    },
    {
      id: 6,
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "Temmuz 2022",
      icon: <FaAward className="w-8 h-8 text-indigo-500" />
    }
  ];

  return (
    <section id="sertifikalar" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium mb-4">
              Sertifikalar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Eğitim ve Sertifikalarım
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Alanımda uzmanlaşmamı sağlayan sertifika ve eğitimlerim.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certificates.map((certificate) => (
              <motion.div
                key={certificate.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    {certificate.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{certificate.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {certificate.issuer}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">
                      {certificate.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>Tüm sertifikaları görüntüle</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
