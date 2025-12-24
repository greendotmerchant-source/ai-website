
import React from 'react';
import { APARTMENTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="apartments" className="py-32 bg-charcoal section-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-24">
          <div className="md:col-span-8">
            <h4 className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6 radiant-glow">Our Portfolio</h4>
            <h2 className="text-5xl md:text-8xl font-serif text-beige font-bold leading-none tracking-tighter drop-shadow-2xl">Signature Stay</h2>
          </div>
          <div className="md:col-span-4 md:text-right border-l md:border-l-0 md:border-r border-gold/40 pr-8">
            <p className="text-beige/50 font-bold italic leading-relaxed text-sm drop-shadow">Curated residences tailored for the modern elite traveling through Benin City.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {APARTMENTS.map((apt) => (
            <div key={apt.id} className="group bg-neutral-900/40 border border-white/10 hover:border-gold/40 transition-all duration-700 relative flex flex-col overflow-hidden rounded-sm shadow-xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              {/* Apartment Image */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={apt.image} 
                  alt={apt.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 brightness-75 group-hover:brightness-110" 
                />
                <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-transparent transition-colors"></div>
              </div>

              <div className="p-10 flex flex-col flex-grow bg-neutral-900/20">
                 <div className="flex justify-between items-start mb-6">
                   <div className="flex flex-col">
                      <span className="text-gold text-2xl font-serif italic font-bold gold-text-gradient drop-shadow-sm">{apt.price}</span>
                      <span className="text-[9px] uppercase tracking-[0.4em] text-gold/60 font-bold -mt-1 radiant-glow">Per Night</span>
                   </div>
                   <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">REF: {apt.id.toUpperCase()}</span>
                 </div>
                 <h3 className="text-2xl font-serif text-beige font-bold mb-6 group-hover:text-gold transition-colors drop-shadow">{apt.name}</h3>
                 <p className="text-beige/60 text-sm font-light leading-relaxed mb-8 border-l-2 border-gold/20 pl-4 flex-grow group-hover:text-beige transition-colors">{apt.description}</p>
                 
                 <ul className="space-y-4 mb-12">
                   {apt.features.map((feature, i) => (
                     <li key={i} className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] text-beige/70 font-bold">
                       <div className="w-1.5 h-1.5 bg-gold rounded-full radiant-glow"></div>
                       <span>{feature}</span>
                     </li>
                   ))}
                 </ul>

                 <a 
                   href="#contact" 
                   className="flex items-center justify-between w-full border-t border-white/10 pt-8 group-hover:text-gold transition-colors font-bold uppercase tracking-[0.4em] text-[10px]"
                 >
                   <span className="drop-shadow">Check Availability</span>
                   <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform text-gold" />
                 </a>
              </div>
              
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-transparent group-hover:border-gold/40 transition-all duration-700"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <p className="text-gold/40 text-[10px] uppercase tracking-[0.5em] italic font-bold radiant-glow">Private appointment bookings only. Security vetting may apply.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
