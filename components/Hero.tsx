import React from 'react';
import { MAIN_PROPERTY_IMAGE } from '../constants';

const Hero: React.FC = () => {
  // Using a high-quality cinematic luxury architecture video
  const VIDEO_URL = "https://cdn.pixabay.com/video/2023/10/24/186355-877719602_large.mp4";

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={MAIN_PROPERTY_IMAGE}
          className="w-full h-full object-cover scale-105"
        >
          <source src={VIDEO_URL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Multilayered Overlays for Cinematic Depth & Legibility */}
        <div className="absolute inset-0 bg-charcoal/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="inline-block border-l-2 border-gold pl-6 mb-12 animate-fade-in">
           <h4 className="text-gold font-sans uppercase tracking-[0.6em] text-[10px] md:text-xs font-bold">
            The Ultimate GRA Exclusivity
          </h4>
        </div>
        
        <h1 className="text-7xl md:text-[10rem] font-serif text-beige font-bold leading-[0.85] mb-12 tracking-tighter drop-shadow-2xl">
          Luxury <br />
          <span className="italic text-gold opacity-90">Living.</span>
        </h1>
        
        <div className="max-w-2xl border-t border-gold/20 pt-12">
          <p className="text-xl md:text-2xl text-beige/90 mb-16 font-light leading-relaxed font-serif italic">
            Refined short-stay residences for those who demand <br className="hidden md:block" /> absolute privacy and architectural elegance in Benin City.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <a 
              href="#contact" 
              className="bg-gold text-charcoal px-16 py-7 rounded-sm font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-beige transition-all w-full md:w-auto text-center shadow-2xl"
            >
              Request Access
            </a>
            <a 
              href="#apartments" 
              className="border border-white/20 text-beige px-16 py-7 rounded-sm font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-white/10 glass transition-all w-full md:w-auto text-center"
            >
              The Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute top-0 right-24 w-[1px] h-48 bg-gold/30 hidden md:block"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 flex items-center space-x-4 opacity-60">
        <div className="w-16 h-[1px] bg-gold animate-pulse"></div>
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Begin Exploration</span>
      </div>
    </section>
  );
};

export default Hero;