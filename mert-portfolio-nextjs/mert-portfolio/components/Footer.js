"use client";

import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Mert İnsel
          </div>
          
          <div className="flex space-x-6 mb-6">
            {['Anasayfa', 'Hakkımda', 'Projeler', 'Sertifikalar', 'İletişim'].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase()}`} 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-500 flex items-center">
            <span>&copy; {currentYear} Mert İnsel. Tüm hakları saklıdır.</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <span className="mr-1">Teknoloji ve tutkuyla hazırlandı</span>
              <FaHeart className="text-red-500" size={12} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
