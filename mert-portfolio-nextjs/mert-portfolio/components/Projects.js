"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('tümü');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const projects = [
    {
      id: 1,
      title: "Robot Kontrol Sistemi",
      description: "Arduino ve Raspberry Pi tabanlı robotik sistemler için kontrol ve otomasyon yazılımı geliştirdim.",
      image: "/robot.jpg",
      tags: ["robotik", "arduino", "python"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "AI Görüntü İşleme",
      description: "Yapay zeka kullanarak görüntü işleme ve nesne tanıma uygulaması.",
      image: "/ai-vision.jpg",
      tags: ["yapay zeka", "python", "tensorflow"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Interaktif Web Platformu",
      description: "Modern web teknolojileri kullanarak geliştirilen interaktif öğrenme platformu.",
      image: "/web-platform.jpg",
      tags: ["web", "react", "node.js"],
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Robotik Eğitim Uygulaması",
      description: "Öğrencilere robotik kodlama öğretmek için geliştirdiğim eğitim uygulaması.",
      image: "/education-app.jpg",
      tags: ["robotik", "eğitim", "javascript"],
      github: "#",
      demo: "#"
    }
  ];

  const filters = ['tümü', 'robotik', 'yapay zeka', 'web', 'eğitim'];

  const filteredProjects = activeFilter === 'tümü' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projeler" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
              Projelerim
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Öne Çıkan Çalışmalarım
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Robotik kodlama, web geliştirme ve yapay zeka alanlarında geliştirdiğim projelerden bazıları.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center flex-wrap gap-3 mb-10">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-56 bg-gray-200 dark:bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Buraya gerçek resim eklenecek */}
                    <div className="text-6xl">
                      {project.tags.includes('robotik') && '🤖'}
                      {project.tags.includes('yapay zeka') && '🧠'}
                      {project.tags.includes('web') && '🌐'}
                      {project.tags.includes('eğitim') && '📚'}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={16} />
                      Kaynak Kod
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt size={14} />
                      Canlı Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
