import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  onNavigate: (page: 'home' | 'about') => void;
  currentPage: 'home' | 'about';
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string, href: string) => {
    e.preventDefault();
    
    if (name === 'About') {
      onNavigate('about');
    } else {
      if (currentPage !== 'home') {
        onNavigate('home');
        // Wait for Home page to mount before scrolling
        setTimeout(() => {
           const element = document.querySelector(href);
           if (element) {
             element.scrollIntoView({ behavior: 'smooth', block: 'start' });
           }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  const isDarkText = isScrolled || currentPage === 'about';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' 
          : 'bg-transparent py-8'
      } ${isDarkText ? 'text-brand-black' : 'text-white'}`}
    >
      <div className="container max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, 'Home', '#')} 
          className="text-xl font-black tracking-[0.2em] uppercase z-50 relative flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 animate-pulse"></span>
          SI YU PAN
        </a>

        <nav className="hidden md:flex space-x-12">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.name, link.href)}
              className={`text-sm uppercase tracking-widest transition-all relative group py-2 ${
                isDarkText ? 'hover:text-black' : 'hover:text-white'
              } ${currentPage === 'about' && link.name === 'About' ? 'font-bold' : 'font-medium'}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-300 group-hover:w-full`}></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;