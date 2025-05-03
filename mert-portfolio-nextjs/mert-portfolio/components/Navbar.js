"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.div 
          variants={itemVariants}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Mert İnsel
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          variants={navVariants} 
          className="hidden md:flex items-center space-x-8"
        >
          {['Anasayfa', 'Hakkımda', 'Projeler', 'Sertifikalar', 'İletişim'].map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <Link 
                href={`#${item.toLowerCase()}`}
                className="font-medium hover:text-blue-600 transition-colors"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background dark:bg-[#0a0a0a] border-t dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-3">
            <ul className="space-y-4 py-4">
              {['Anasayfa', 'Hakkımda', 'Projeler', 'Sertifikalar', 'İletişim'].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
