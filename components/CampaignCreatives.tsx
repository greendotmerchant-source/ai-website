
import React from 'react';
import { Instagram, ExternalLink, Bookmark, Heart, MessageCircle, Send } from 'lucide-react';
import { INTERIOR_IMAGE_1, INTERIOR_IMAGE_3, EVENT_IMAGE } from '../constants';

const CampaignCreatives: React.FC = () => {
  const ads = [
    {
      id: 1,
      target: "Business Travelers",
      title: "Success in Solitude",
      image: INTERIOR_IMAGE_1,
      caption: "Beyond the boardroom, there is the Signature suite. Where 24/7 industrial-grade power meets the silence of absolute discretion. Your next breakthrough doesn't happen in a hotel lobby. It happens here. \n\n#SignatureStay #BeninCityBusiness #ExecutiveLiving #GRAExclusivity",
      cta: "Book the Executive Suite"
    },
    {
      id: 2,
      target: "Couples & Escapes",
      title: "The Ultimate Escape",
      image: INTERIOR_IMAGE_3,
      caption: "Some secrets are meant to be kept in gold. Experience the 'sexy luxury' of Signature Villa—where architectural elegance meets the intimacy of a private residence. Uninterrupted, unrivaled, unforgettable. \n\n#LuxuryTravel #SignatureVilla #CoupleGoals #PrivateRetreat #BeninCity",
      cta: "Plan Your Escape"
    },
    {
      id: 3,
      target: "Events & Socials",
      title: "Signature After Dark",
      image: EVENT_IMAGE,
      caption: "Hosting the elite requires a backdrop of equal stature. From corporate mixers to the city's most exclusive soirées, define your event with the Signature seal of excellence. \n\n#ExclusiveEvents #SignatureVibes #LuxuryLifestyle #BeninCityNightlife",
      cta: "Secure the Venue"
    }
  ];

  return (
    <section className="py-32 bg-charcoal section-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <h4 className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold mb-6 flex items-center gap-3 radiant-glow">
              <Instagram size={14} /> Social Narrative
            </h4>
            <h2 className="text-5xl md:text-7xl font-serif text-beige font-bold tracking-tighter leading-none drop-shadow-2xl">Campaign <br/><span className="italic text-gold gold-text-gradient">Creatives</span></h2>
          </div>
          <div className="max-w-md">
            <p className="text-beige/50 text-sm font-bold italic border-l-2 border-gold/30 pl-6 drop-shadow">
              Our digital presence is a direct reflection of our physical atmosphere: Bold, discreet, and unapologetically luxurious.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {ads.map((ad) => (
            <div key={ad.id} className="flex flex-col bg-neutral-900/60 rounded-sm border border-white/10 overflow-hidden shadow-2xl group hover:border-gold/30 transition-all duration-700">
              {/* Header */}
              <div className="p-5 flex items-center justify-between border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-gold/50 p-0.5 radiant-glow">
                    <div className="w-full h-full rounded-full bg-gold/20 flex items-center justify-center text-[10px] font-bold text-gold">SV</div>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-beige block tracking-widest uppercase">Signature_Villa</span>
                    <span className="text-[9px] text-beige/50 block -mt-1 tracking-tight font-bold">{ad.target}</span>
                  </div>
                </div>
                <ExternalLink size={16} className="text-beige/40" />
              </div>

              {/* Image Container */}
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={ad.image} 
                  alt={ad.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 brightness-90 group-hover:brightness-110"
                />
                <div className="absolute top-4 right-4 glass px-4 py-1.5 rounded-full border border-gold/40 shadow-xl">
                  <span className="text-[9px] uppercase tracking-widest text-gold font-bold radiant-glow">Sponsored</span>
                </div>
              </div>

              {/* Interaction Bar */}
              <div className="p-5 flex justify-between items-center bg-white/5">
                <div className="flex gap-5">
                  <Heart size={22} className="text-beige/50 hover:text-red-500 transition-colors cursor-pointer" />
                  <MessageCircle size={22} className="text-beige/50 hover:text-gold transition-colors cursor-pointer" />
                  <Send size={22} className="text-beige/50 hover:text-gold transition-colors cursor-pointer" />
                </div>
                <Bookmark size={22} className="text-beige/50 hover:text-gold transition-colors cursor-pointer" />
              </div>

              {/* Content */}
              <div className="p-8 pt-0 bg-neutral-900/40">
                <div className="py-4">
                   <p className="text-[12px] text-beige/90 leading-relaxed font-serif whitespace-pre-line mb-8 border-l-2 border-gold/10 pl-4">
                    <span className="font-bold text-gold mr-2 uppercase tracking-tighter gold-text-gradient">Signature_Villa</span>
                    {ad.caption}
                  </p>
                </div>
                
                <a 
                  href="#contact" 
                  className="block w-full text-center py-5 bg-gold text-charcoal text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-beige transition-all shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
                >
                  {ad.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignCreatives;
