import React from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-40 bg-black text-white scroll-mt-48 md:scroll-mt-64 overflow-hidden">
      {/* Subtle background atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-zinc-900/40 to-black pointer-events-none opacity-50"></div>

      <div className="container relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Info Grid - Top part of section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto mb-48">
           <div className="text-left md:text-center group animate-fade-in">
             <h4 className="text-zinc-500 text-[10px] font-bold mb-6 uppercase tracking-[0.4em]">Connect</h4>
             <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl md:text-2xl font-medium hover:text-cyan-400 transition-colors duration-300 block tracking-tight">{CONTACT_INFO.email}</a>
           </div>
           
           <div className="text-left md:text-center flex flex-col items-start md:items-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
             <h4 className="text-zinc-500 text-[10px] font-bold mb-6 uppercase tracking-[0.4em]">Social Media</h4>
             <div className="flex gap-10">
                <a href={`https://${CONTACT_INFO.behance}`} target="_blank" rel="noreferrer" className="text-xl md:text-2xl font-medium hover:text-fuchsia-400 transition-colors duration-300 tracking-tight">Behance</a>
                <a href={`https://${CONTACT_INFO.instagram}`} target="_blank" rel="noreferrer" className="text-xl md:text-2xl font-medium hover:text-yellow-400 transition-colors duration-300 tracking-tight">Instagram</a>
             </div>
           </div>
           
           <div className="text-left md:text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
             <h4 className="text-zinc-500 text-[10px] font-bold mb-6 uppercase tracking-[0.4em]">Location</h4>
             <p className="text-xl md:text-2xl font-medium tracking-tight">{CONTACT_INFO.location}</p>
           </div>
        </div>

        {/* CTA Heading - Bottom part of section */}
        <div className="flex justify-center w-full animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter group cursor-pointer inline-block max-w-full text-center">
            <a href={`mailto:${CONTACT_INFO.email}`} className="relative block overflow-hidden pb-6 pt-4 px-2">
              <span className="relative z-10 transition-transform duration-700 group-hover:-translate-y-[150%] block leading-none">Let's work together</span>
              <span className="absolute inset-0 z-10 transition-transform duration-700 translate-y-[150%] group-hover:translate-y-0 flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 leading-none">Let's work together</span>
            </a>
          </h2>
        </div>

        {/* Final Copyright Footer - Specified 2026 */}
        <div className="mt-40 text-white/40 text-[9px] font-black uppercase tracking-[0.5em] text-center border-t border-white/10 pt-16">
          &copy; 2026 Pan Si Yu &mdash; Minimalist Resonance &mdash; Built with Intent
        </div>
      </div>
    </section>
  );
};

export default Contact;