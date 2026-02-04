import React from 'react';

const About: React.FC = () => {
  return (
    <section className="min-h-screen pt-40 pb-24 bg-white animate-fade-in flex items-start">
      {/* Increased max-width to max-w-6xl to allow long non-breaking text */}
      <div className="container max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Main Content Area - Top Aligned */}
        {/* Reduced gap from md:gap-24 to md:gap-16 to bring columns closer */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 justify-center items-start">
          
          {/* Left Column */}
          <div className="flex-shrink-0 flex flex-col">
             {/* Title - Moved Above Image, Increased size to text-base (+2pt approx) */}
             <h2 className="text-base font-bold text-black tracking-[0.2em] mb-8 uppercase">
               About The Studio
             </h2>

             {/* Profile/Logo Image - Increased size by 1.5x (w-40 -> w-60) */}
             <div className="w-40 h-40 md:w-60 md:h-60 bg-gray-100 mb-8 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60" 
                  alt="Pan Si Yu" 
                  className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity" 
                />
             </div>
             
             {/* Subtitle */}
             <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight max-w-sm">
                Blending logic and aesthetics to create brands that matter.
             </h3>
          </div>

          {/* Right Column - Bio Content */}
          {/* md:pt-14 aligns the text top with the image top (compensating for Title height + margin) */}
          <div className="flex-1 flex flex-col justify-start md:pt-14">
             <div className="space-y-12 text-gray-700 font-normal leading-relaxed text-base md:text-lg">
                
                {/* Chinese Block - Force Complete Sentences, No Line Breaks on Desktop */}
                <div className="flex flex-col gap-4">
                    <p className="block md:whitespace-nowrap">你好，我是 PAN ，專注於品牌與視覺設計。</p>
                    <p className="block md:whitespace-nowrap">追求強烈且精準的設計風格，擅長利用多與少來強化訊息的傳遞。</p>
                    <p className="block md:whitespace-nowrap">我的目標很單純：用邏輯與美學，幫品牌建立清晰且有質感的視覺意象。</p>
                </div>

                {/* English Block - Force Complete Sentences, No Line Breaks on Desktop */}
                <div className="flex flex-col gap-4">
                    <p className="block md:whitespace-nowrap">Hello, I’m PAN, focused on branding and visual design.</p>
                    <p className="block md:whitespace-nowrap">I strive for a bold, precise style, using the balance of 'more and less' to sharpen message delivery.</p>
                    <p className="block md:whitespace-nowrap">My goal is simple: combining logic and aesthetics to build clear, high-quality visual identities for brands.</p>
                </div>
                
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;