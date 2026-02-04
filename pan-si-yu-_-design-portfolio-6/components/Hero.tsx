import React, { useState } from 'react';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=3540&auto=format&fit=crop', // Ultra Bright 3D
  'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=3540&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=3540&auto=format&fit=crop'
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev === HERO_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? HERO_IMAGES.length - 1 : prev - 1));
  };

  return (
    <section className="w-full">
      {/* 1. Full Screen Image Slider Section */}
      <div className="relative w-full h-screen overflow-hidden group">
        {/* Background Images with Transition */}
        {HERO_IMAGES.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          >
             <div className="absolute inset-0 bg-black/10"></div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors opacity-0 group-hover:opacity-100 duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors opacity-0 group-hover:opacity-100 duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Main Title - Adjusted size for a more refined look */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 text-center animate-fade-in select-none">
          <div className="relative inline-block w-full max-w-7xl">
            <h1 className="text-4xl md:text-6xl lg:text-[7rem] xl:text-[8rem] font-black text-white tracking-tighter uppercase leading-[0.85] drop-shadow-2xl">
              Design as a <br />
              Graceful Answer
            </h1>
            {/* Animated Line */}
            <div className="mt-8 md:mt-12 h-1.5 w-0 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 mx-auto animate-[expandLine_1.5s_ease-out_forwards_1s]"></div>
          </div>
        </div>
      </div>

      {/* 2. Text Section Below Photo */}
      <div id="intro" className="relative bg-white py-32 px-6 scroll-mt-48 md:scroll-mt-56 overflow-hidden">
        {/* Colorful background block */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-48 bg-gradient-to-r from-cyan-400/10 via-fuchsia-500/10 to-yellow-400/10 -rotate-2 blur-2xl pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto text-center space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          
          {/* English Subtitle */}
          <h2 className="text-lg md:text-xl font-medium text-gray-500 leading-relaxed font-sans max-w-2xl mx-auto">
            I believe that true design transcends mere aesthetics;<br className="hidden md:block" />
            it is the graceful resolution of complex challenges.
          </h2>
          
          {/* Chinese Text */}
          <div className="space-y-4 pt-4 border-t border-gray-100 inline-block w-full max-w-lg">
             <p className="text-base md:text-lg text-gray-500 tracking-wider font-sans font-medium">
               專注於品牌與視覺體驗
             </p>
             <p className="text-sm md:text-base text-gray-400 tracking-wider font-sans">
               好的設計不僅是視覺的呈現，更是解決問題的優雅方案
             </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes expandLine {
          from { width: 0; }
          to { width: 40%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;