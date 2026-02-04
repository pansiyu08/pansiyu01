import React, { useState, useEffect } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { PortfolioItem, ProjectCategory } from '../types';

const CATEGORY_TEXT_COLORS: Record<string, string> = {
  [ProjectCategory.BRANDING]: 'text-indigo-500',
  [ProjectCategory.UIUX]: 'text-cyan-500',
  [ProjectCategory.GRAPHIC]: 'text-rose-500',
  [ProjectCategory.PACKAGING]: 'text-amber-500',
  [ProjectCategory.EXHIBITION]: 'text-emerald-500',
  [ProjectCategory.KEY_VISUAL]: 'text-violet-500',
};

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isChangingSlide, setIsChangingSlide] = useState(false);

  const visibleItems = PORTFOLIO_ITEMS.slice(0, visibleCount);

  useEffect(() => {
    if (selectedItem) {
      setCurrentSlideIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedItem]);

  const handleSeeMore = (e: React.MouseEvent) => {
    e.preventDefault();
    setVisibleCount(PORTFOLIO_ITEMS.length); 
  };

  const changeSlide = (index: number) => {
    if (isChangingSlide) return;
    setIsChangingSlide(true);
    setCurrentSlideIndex(index);
    setTimeout(() => setIsChangingSlide(false), 600);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem?.gallery) return;
    const nextIndex = (currentSlideIndex + 1) % selectedItem.gallery.length;
    changeSlide(nextIndex);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem?.gallery) return;
    const prevIndex = (currentSlideIndex - 1 + selectedItem.gallery.length) % selectedItem.gallery.length;
    changeSlide(prevIndex);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2400&auto=format&fit=crop';
    e.currentTarget.alt = 'Image not found';
  };

  const activeImage = selectedItem?.gallery && selectedItem.gallery.length > 0 
    ? selectedItem.gallery[currentSlideIndex] 
    : selectedItem?.image;

  return (
    <section id="work" className="py-24 bg-white scroll-mt-24 md:scroll-mt-32">
      <div className="container max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-16 border-b border-gray-100 pb-8 flex justify-between items-end">
          <div>
            <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2 block">Portfolio</span>
            <h2 className="text-4xl font-black uppercase tracking-tight">Works</h2>
          </div>
          <span className="text-sm font-medium text-gray-400 hidden md:block">Selected Projects ({PORTFOLIO_ITEMS.length})</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 transition-all duration-700">
          {visibleItems.map((item) => (
            <div 
              key={item.id} 
              className={`group cursor-pointer block animate-fade-in ${
                item.size === 'wide' ? 'md:col-span-2' : ''
              }`}
              onClick={() => setSelectedItem(item)}
            >
              <div className={`relative overflow-hidden bg-gray-50 rounded-sm mb-6 ${
                item.size === 'wide' ? 'aspect-[21/9]' : 'aspect-[4/3]'
              }`}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white font-bold text-xs uppercase tracking-[0.3em]">
                   Open Project
                </div>
              </div>

              <div className="flex justify-between items-start transition-all">
                <div className="max-w-[80%] space-y-2">
                  <h3 className="text-2xl font-bold group-hover:text-cyan-600 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <div className="flex gap-2 items-center">
                    <span className={`text-[10px] uppercase tracking-[0.15em] font-bold ${CATEGORY_TEXT_COLORS[item.category] || 'text-gray-500'}`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                   <span className="text-[10px] font-black text-gray-300 tracking-widest uppercase">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Restore See More Button */}
        {visibleCount < PORTFOLIO_ITEMS.length && (
          <div className="mt-24 flex justify-center">
              <button 
                onClick={handleSeeMore}
                className="group relative inline-flex items-center gap-4 px-12 py-5 bg-black text-white hover:bg-cyan-600 transition-all rounded-full overflow-hidden shadow-2xl"
              >
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black z-10">Expand Archive</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 group-hover:translate-y-1 transition-transform z-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
              </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[60] bg-white/20 backdrop-blur-3xl overflow-y-auto no-scrollbar animate-fade-in" 
          onClick={() => setSelectedItem(null)}
        >
          {/* Dynamic Background Bleed: 20% opacity, 100px blur */}
          <div 
            className="fixed inset-0 z-0 transition-all duration-1000 ease-in-out scale-110 pointer-events-none"
            style={{
              backgroundImage: `url(${activeImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(100px)',
              opacity: 0.20
            }}
          />

          <button 
            className="fixed top-8 right-8 text-2xl font-black hover:rotate-90 transition-transform z-[70] bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
          >
            &times;
          </button>
          
          <div className="relative z-10 min-h-screen px-4 py-12 md:py-20 flex items-start justify-center">
            <div className="max-w-6xl w-full relative" onClick={(e) => e.stopPropagation()}>
              
              <div className={`w-full relative group overflow-hidden bg-white/60 backdrop-blur-md rounded-2xl mb-12 shadow-[0_30px_100px_-15px_rgba(0,0,0,0.1)] border border-white/80 ${
                  selectedItem.size === 'wide' ? 'aspect-video' : 'aspect-[3/2]'
              }`}>
                  <div 
                    className="flex w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
                  >
                    {(selectedItem.gallery && selectedItem.gallery.length > 0 ? selectedItem.gallery : [selectedItem.image]).map((img, idx) => (
                      <div key={idx} className="w-full h-full flex-shrink-0 overflow-hidden">
                        <img src={img} alt={`${selectedItem.title} - ${idx}`} onError={handleImageError} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>

                  {selectedItem.gallery && selectedItem.gallery.length > 1 && (
                    <>
                      <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-black p-5 rounded-full backdrop-blur-lg transition-all opacity-0 group-hover:opacity-100 shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg></button>
                      <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-black p-5 rounded-full backdrop-blur-lg transition-all opacity-0 group-hover:opacity-100 shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></button>
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                        {selectedItem.gallery.map((_, i) => (
                          <button key={i} onClick={() => changeSlide(i)} className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlideIndex ? 'w-10 bg-white' : 'w-2 bg-white/40'}`} />
                        ))}
                      </div>
                    </>
                  )}
              </div>

              <div className="px-6 md:px-2 flex flex-col md:flex-row gap-12 md:gap-20 pb-24">
                <div className="md:w-5/12 space-y-8 animate-slide-up">
                   <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`text-[10px] uppercase tracking-[0.3em] font-black ${CATEGORY_TEXT_COLORS[selectedItem.category] || 'text-gray-400'}`}>
                          {selectedItem.category}
                        </span>
                      </div>
                      
                      <h3 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter leading-[1.05] uppercase">
                        {selectedItem.title}
                      </h3>
                      
                      <div className="space-y-6">
                        {/* Subtitle with better contrast on blur */}
                        <p className="text-xl text-white font-bold font-sans drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)] leading-relaxed">
                          {selectedItem.subtitle}
                        </p>
                        
                        <div className="pt-4 border-l-2 border-cyan-500 pl-6 space-y-1">
                           {/* Position Designer Above Name in White */}
                           <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white drop-shadow-sm block mb-1">
                             Designer
                           </span>
                           {/* Tightened Name Spacing in White for contrast */}
                           <span className="text-sm font-black tracking-widest uppercase text-white drop-shadow-sm block">
                             SI YU PAN
                           </span>
                        </div>
                      </div>
                   </div>
                </div>
                
                <div className="md:w-7/12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    <div className="text-gray-800 leading-relaxed text-lg whitespace-pre-line font-medium tracking-wide">
                      {selectedItem.description}
                    </div>
                    
                    <div className="mt-16 pt-10 border-t border-gray-100">
                      <a href={selectedItem.link || "#"} target="_blank" rel="noreferrer" className="group relative inline-flex items-center gap-8 bg-black text-white px-12 py-6 text-[10px] font-black tracking-[0.4em] uppercase hover:bg-cyan-500 transition-all rounded-full shadow-2xl">
                        <span className="relative z-10">Launch Full Case Study</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 relative z-10 group-hover:translate-x-2 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;