import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  const handleNavigate = (page: 'home' | 'about') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="relative min-h-screen font-sans">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Portfolio />
            <Contact />
          </>
        ) : (
          <>
            <About />
            <Contact />
          </>
        )}
      </main>
      
      {/* AI Assistant - Value Add for High-End Service */}
      <AIChat />
    </div>
  );
}

export default App;