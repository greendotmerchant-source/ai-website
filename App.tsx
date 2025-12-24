
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import AIConcierge from './components/AIConcierge';
import CampaignCreatives from './components/CampaignCreatives';
import { AMENITIES, REVIEWS, MAIN_PROPERTY_IMAGE, INTERIOR_IMAGE_1, INTERIOR_IMAGE_2, INTERIOR_IMAGE_3, INTERIOR_IMAGE_4, INTERIOR_IMAGE_5, INTERIOR_IMAGE_6, INTERIOR_IMAGE_7, INTERIOR_IMAGE_8, EVENT_IMAGE, GALLERY_IMAGES, LOGO_IMAGE } from './constants';
import { Phone, MapPin, Star, ArrowUpRight, CheckCircle2, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    contact: '',
    type: '2-Bedroom Executive',
    checkIn: '',
    checkOut: '',
    guests: '1',
    requests: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.contact.trim()) newErrors.contact = 'Contact details are required';
    if (!formState.checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!formState.checkOut) newErrors.checkOut = 'Check-out date is required';
    if (formState.checkIn && formState.checkOut && new Date(formState.checkIn) >= new Date(formState.checkOut)) {
      newErrors.checkOut = 'Must be after check-in';
    }
    if (parseInt(formState.guests) < 1) newErrors.guests = 'Min 1 guest';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const n = { ...prev };
        delete n[name];
        return n;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const nextImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % GALLERY_IMAGES.length);
    }
  }, [selectedIndex]);

  const prevImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedIndex]);

  return (
    <div className="font-sans text-beige bg-charcoal">
      <Navbar />
      <Hero />

      {/* About Section Grid (Already a mini-masonry of sorts) */}
      <section id="about" className="py-48 bg-charcoal relative section-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="grid grid-cols-6 grid-rows-10 gap-3 md:gap-4 aspect-[4/5] w-full">
                <div className="col-span-3 row-span-4 rounded-sm overflow-hidden border border-white/10 group shadow-2xl relative cursor-pointer" onClick={() => setSelectedIndex(1)}>
                   <img src={INTERIOR_IMAGE_1} alt="Interior" className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100 brightness-110 group-hover:brightness-140 group-hover:saturate-150" />
                   <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="col-span-3 row-span-2 rounded-sm overflow-hidden border border-white/10 group shadow-2xl relative cursor-pointer" onClick={() => setSelectedIndex(9)}>
                   <img src={EVENT_IMAGE} alt="Event" className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100 brightness-110 group-hover:brightness-140 group-hover:saturate-150" />
                   <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="col-span-3 row-span-2 rounded-sm overflow-hidden border border-white/10 group shadow-2xl relative cursor-pointer" onClick={() => setSelectedIndex(7)}>
                   <img src={INTERIOR_IMAGE_7} alt="Interior" className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100 brightness-110 group-hover:brightness-140 group-hover:saturate-150" />
                </div>
                <div className="col-span-2 row-span-3 rounded-sm overflow-hidden border border-white/10 group shadow-2xl relative cursor-pointer" onClick={() => setSelectedIndex(3)}>
                   <img src={INTERIOR_IMAGE_3} alt="Interior" className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100 brightness-110 group-hover:brightness-140 group-hover:saturate-150" />
                </div>
                <div className="col-span-2 row-span-3 rounded-sm overflow-hidden border border-white/10 group shadow-2xl relative cursor-pointer" onClick={() => setSelectedIndex(8)}>
                   <img src={INTERIOR_IMAGE_8} alt="Interior" className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100 brightness-110 group-hover:brightness-140 group-hover:saturate-150" />
                </div>
                <div className="col-span-2 row-span-3 rounded-sm overflow-hidden border border-white/10 group shadow-2xl relative cursor-pointer" onClick={() => setSelectedIndex(2)}>
                   <img src={INTERIOR_IMAGE_2} alt="Interior" className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100 brightness-110 group-hover:brightness-140 group-hover:saturate-150" />
                </div>
                <div className="col-span-6 row-span-3 rounded-sm overflow-hidden border border-white/10 group shadow-2xl relative cursor-pointer" onClick={() => setSelectedIndex(0)}>
                   <img src={MAIN_PROPERTY_IMAGE} alt="Exterior" className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100 brightness-110 group-hover:brightness-140 group-hover:saturate-150" />
                </div>
             </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h4 className="text-gold uppercase tracking-[0.6em] text-[10px] md:text-xs mb-10 font-bold radiant-glow">The Signature Ethos</h4>
            <h2 className="text-5xl md:text-7xl font-serif text-beige font-bold mb-12 leading-[0.9] tracking-tighter drop-shadow-lg">
              Where Elegance Meets <span className="italic text-gold gold-text-gradient">Absolute Privacy</span>
            </h2>
            <p className="text-beige/80 text-xl mb-16 leading-relaxed font-serif italic font-light drop-shadow">
              "We believe a stay should be more than just accommodation; it should be a statement of lifestyle. Every detail of our residence is a dialogue between comfort and sophistication."
            </p>
            <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-16">
              <div>
                <span className="text-gold text-5xl font-serif block mb-2 radiant-glow">24/7</span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-beige/50 font-bold">Concierge Service</span>
              </div>
              <div>
                <span className="text-gold text-5xl font-serif block mb-2 radiant-glow">100%</span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-beige/50 font-bold">Discretion Policy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Pricing />

      {/* Main Interactive Gallery Masonry Section */}
      <section id="gallery" className="py-40 bg-neutral-950 section-border">
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <h4 className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold mb-6 radiant-glow">The Collection</h4>
          <h2 className="text-6xl md:text-8xl font-serif text-beige font-bold tracking-tighter leading-none mb-12 drop-shadow-2xl">
            Visual <br/> <span className="italic gold-text-gradient">Narrative</span>
          </h2>
          <div className="w-32 h-[1px] bg-gold/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 masonry-grid space-y-8">
          {GALLERY_IMAGES.map((img, i) => (
            <div 
              key={i} 
              className="break-inside-avoid mb-8 overflow-hidden group cursor-pointer border border-white/5 relative bg-neutral-900 shadow-2xl transition-all duration-700 hover:border-gold/40 hover:shadow-[0_0_50px_rgba(212,175,55,0.15)]"
              onClick={() => setSelectedIndex(i)}
              aria-label={`View Image ${i + 1}`}
            >
              <img 
                src={img} 
                alt={`Signature Villa Perspective ${i + 1}`} 
                className="w-full h-auto object-cover transition-all duration-[2000ms] group-hover:scale-110 group-hover:rotate-1 brightness-110 saturate-105 group-hover:brightness-125"
              />
              
              {/* Luxury Hover Overlay */}
              <div className="absolute inset-0 bg-charcoal/20 opacity-100 group-hover:opacity-0 transition-opacity duration-700"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[2px]">
                <div className="w-16 h-16 rounded-full glass border border-gold/40 flex items-center justify-center text-gold shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 size={24} />
                </div>
                <span className="mt-4 text-[10px] uppercase tracking-[0.4em] text-gold font-bold drop-shadow-md">View Masterpiece</span>
              </div>

              {/* Decorative Frame Elements */}
              <div className="absolute top-4 right-4 text-gold/20 text-[10px] font-bold group-hover:text-gold/60 transition-colors">
                #00{i + 1}
              </div>
              <div className="absolute bottom-4 left-4 border-l border-gold/0 group-hover:border-gold/40 pl-3 transition-all duration-1000 h-0 group-hover:h-8 overflow-hidden">
                 <span className="text-[7px] uppercase tracking-[0.2em] text-beige/40 block">Perspective</span>
                 <span className="text-[9px] uppercase tracking-[0.4em] text-gold font-bold">Signature</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cinematic Fullscreen Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/98 backdrop-blur-3xl p-4 md:p-12 animate-in fade-in duration-500"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar Navigation */}
          <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-[110] bg-gradient-to-b from-charcoal/80 to-transparent">
            <div className="flex flex-col">
              <span className="text-gold uppercase tracking-[1em] text-[10px] font-bold block mb-1 radiant-glow">Signature Gallery</span>
              <span className="text-beige/40 text-[8px] uppercase tracking-[0.5em] font-bold">Frame {selectedIndex + 1} / {GALLERY_IMAGES.length}</span>
            </div>
            <button 
              className="text-gold/70 hover:text-white transition-all p-4 hover:bg-gold/10 rounded-full"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
              aria-label="Close Gallery"
            >
              <X size={40} strokeWidth={1} />
            </button>
          </div>
          
          {/* Side Controls */}
          <button 
            className="absolute left-8 top-1/2 -translate-y-1/2 text-gold/20 hover:text-gold transition-all p-6 hover:bg-gold/5 rounded-full z-[110] hidden lg:block"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous Perspective"
          >
            <ChevronLeft size={80} strokeWidth={1} />
          </button>
          
          <button 
            className="absolute right-8 top-1/2 -translate-y-1/2 text-gold/20 hover:text-gold transition-all p-6 hover:bg-gold/5 rounded-full z-[110] hidden lg:block"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next Perspective"
          >
            <ChevronRight size={80} strokeWidth={1} />
          </button>
          
          {/* Main Content Area */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full max-w-7xl max-h-[85vh] flex items-center justify-center animate-zoom-in">
              <img 
                key={selectedIndex}
                src={GALLERY_IMAGES[selectedIndex]} 
                alt="Signature Perspective Full" 
                className="max-w-full max-h-full object-contain shadow-[0_0_100px_rgba(212,175,55,0.2)] border border-white/5 animate-ken-burns"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Subtle caption or description */}
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-charcoal/90 to-transparent pointer-events-none">
                 <div className="animate-in slide-in-from-bottom-4 duration-700 delay-300">
                    <p className="text-beige/70 font-serif italic text-xl md:text-3xl max-w-2xl drop-shadow-xl leading-relaxed">
                       "Captured within these walls is a commitment to the extraordinary. Every angle tells a story of refined heritage and modern grace."
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                       <div className="w-12 h-[1px] bg-gold"></div>
                       <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold">Amagba GRA Residence</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Area Overlay */}
          <div className="lg:hidden absolute bottom-12 w-full flex justify-center space-x-12 z-[110]">
             <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="p-4 bg-charcoal/40 border border-gold/20 rounded-full text-gold">
               <ChevronLeft size={32} />
             </button>
             <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="p-4 bg-charcoal/40 border border-gold/20 rounded-full text-gold">
               <ChevronRight size={32} />
             </button>
          </div>
        </div>
      )}

      <CampaignCreatives />

      <section id="amenities" className="py-40 bg-charcoal section-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <h2 className="text-6xl font-serif text-beige font-bold mb-8 italic tracking-tighter drop-shadow-xl">Refined Service</h2>
            <div className="w-16 h-[1px] bg-gold mx-auto opacity-50 radiant-glow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {AMENITIES.map((item, i) => (
              <div key={i} className="flex flex-col items-start group">
                <div className="mb-8 p-4 border border-white/10 group-hover:border-gold/50 transition-all bg-gold/5 group-hover:bg-gold/10 group-hover:scale-110 duration-500">{item.icon}</div>
                <h3 className="text-gold font-bold uppercase tracking-[0.4em] text-[11px] mb-6 border-b border-white/10 pb-4 w-full radiant-glow">{item.title}</h3>
                <p className="text-beige/60 text-sm font-light leading-relaxed group-hover:text-beige transition-colors">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-neutral-950 section-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-center space-x-2 mb-16 opacity-50 radiant-glow">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="text-gold fill-gold w-4 h-4" />)}
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-beige font-bold text-center italic mb-32 leading-tight tracking-tighter drop-shadow-2xl">"The quiet luxury of <br />absolute <span className="text-gold gold-text-gradient">discretion.</span>"</h2>
          <div className="grid md:grid-cols-3 gap-16">
            {REVIEWS.map(review => (
              <div key={review.id} className="text-left border-l border-gold/20 pl-10 py-4 hover:border-gold transition-colors duration-700">
                <p className="text-beige/70 text-sm italic mb-10 font-light leading-relaxed drop-shadow">"{review.text}"</p>
                <div className="flex items-center space-x-6">
                  <span className="text-gold font-serif italic text-sm font-bold radiant-glow">{review.author}</span>
                  <span className="text-beige/40 text-[9px] uppercase tracking-[0.3em] font-bold">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-48 bg-charcoal section-border relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-32">
            <div>
              <h4 className="text-gold uppercase tracking-[0.6em] text-[10px] mb-10 font-bold radiant-glow">Inquiries</h4>
              <h2 className="text-7xl md:text-8xl font-serif text-beige font-bold mb-16 leading-[0.85] tracking-tighter drop-shadow-2xl">Stay <br /><span className="gold-text-gradient">Exquisite.</span></h2>
              <div className="space-y-12 mb-20">
                <div className="flex items-start space-x-8">
                  <MapPin className="text-gold w-5 h-5 mt-1 radiant-glow" />
                  <div>
                    <h5 className="text-beige font-bold uppercase tracking-[0.4em] text-[9px] mb-4 opacity-50">Our Location</h5>
                    <p className="text-beige/90 text-sm font-light leading-relaxed font-serif italic text-lg drop-shadow">Prince Noghayin Street, <br />Amagba GRA, Benin City.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-8">
                  <Phone className="text-gold w-5 h-5 mt-1 radiant-glow" />
                  <div>
                    <h5 className="text-beige font-bold uppercase tracking-[0.4em] text-[9px] mb-4 opacity-50">Secure Line</h5>
                    <p className="text-beige font-bold tracking-[0.4em] uppercase text-lg gold-text-gradient">+234 808 871 3277</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="https://wa.me/2348088713277" className="bg-gold text-charcoal px-12 py-6 rounded-sm font-bold uppercase tracking-[0.4em] text-[11px] hover:scale-105 transition-all text-center shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:bg-beige">WhatsApp Inquiry</a>
                <a href="tel:+2348088713277" className="border border-white/20 text-beige px-12 py-6 rounded-sm font-bold uppercase tracking-[0.4em] text-[11px] hover:bg-white/10 hover:border-gold transition-all text-center backdrop-blur-sm">Request Callback</a>
              </div>
            </div>
            
            <div className="bg-neutral-900/60 p-16 rounded-sm border border-gold/20 relative shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
               {!isSubmitted ? (
                 <>
                  <h3 className="text-4xl font-serif text-beige font-bold mb-16 tracking-tight drop-shadow">Booking Application</h3>
                  <form className="space-y-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      <div className="group">
                        <label className="block text-[10px] uppercase tracking-[0.5em] text-beige/40 mb-4 group-focus-within:text-gold transition-colors font-bold">Your Name</label>
                        <input name="name" value={formState.name} onChange={handleInputChange} type="text" className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-white/20'} px-0 py-4 text-beige focus:outline-none focus:border-gold transition-colors font-serif italic text-xl`} placeholder="Full Name" />
                        {errors.name && <span className="text-[8px] text-red-500 uppercase tracking-widest mt-2 block font-bold">{errors.name}</span>}
                      </div>
                      <div className="group">
                        <label className="block text-[10px] uppercase tracking-[0.5em] text-beige/40 mb-4 group-focus-within:text-gold transition-colors font-bold">Contact Method</label>
                        <input name="contact" value={formState.contact} onChange={handleInputChange} type="text" className={`w-full bg-transparent border-b ${errors.contact ? 'border-red-500' : 'border-white/20'} px-0 py-4 text-beige focus:outline-none focus:border-gold transition-colors font-serif italic text-xl`} placeholder="Phone or Email" />
                        {errors.contact && <span className="text-[8px] text-red-500 uppercase tracking-widest mt-2 block font-bold">{errors.contact}</span>}
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-[10px] uppercase tracking-[0.5em] text-beige/40 mb-4 group-focus-within:text-gold transition-colors font-bold">Residence Type</label>
                      <select name="type" value={formState.type} onChange={handleInputChange} className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-beige focus:outline-none focus:border-gold transition-colors font-serif italic text-xl cursor-pointer appearance-none">
                        <option value="2-Bedroom Executive">2-Bedroom Executive</option>
                        <option value="3-Bedroom Premium">3-Bedroom Premium</option>
                        <option value="Event Exclusive">Event Exclusive</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                      <div className="group">
                        <label className="block text-[10px] uppercase tracking-[0.5em] text-beige/40 mb-4 group-focus-within:text-gold transition-colors font-bold">Check-In</label>
                        <input name="checkIn" value={formState.checkIn} onChange={handleInputChange} type="date" className={`w-full bg-transparent border-b ${errors.checkIn ? 'border-red-500' : 'border-white/20'} px-0 py-4 text-beige focus:outline-none focus:border-gold transition-colors font-serif italic text-lg uppercase`} />
                        {errors.checkIn && <span className="text-[8px] text-red-500 uppercase tracking-widest mt-2 block font-bold">{errors.checkIn}</span>}
                      </div>
                      <div className="group">
                        <label className="block text-[10px] uppercase tracking-[0.5em] text-beige/40 mb-4 group-focus-within:text-gold transition-colors font-bold">Check-Out</label>
                        <input name="checkOut" value={formState.checkOut} onChange={handleInputChange} type="date" className={`w-full bg-transparent border-b ${errors.checkOut ? 'border-red-500' : 'border-white/20'} px-0 py-4 text-beige focus:outline-none focus:border-gold transition-colors font-serif italic text-lg uppercase`} />
                        {errors.checkOut && <span className="text-[8px] text-red-500 uppercase tracking-widest mt-2 block font-bold">{errors.checkOut}</span>}
                      </div>
                      <div className="group">
                        <label className="block text-[10px] uppercase tracking-[0.5em] text-beige/40 mb-4 group-focus-within:text-gold transition-colors font-bold">Guests</label>
                        <input name="guests" value={formState.guests} onChange={handleInputChange} type="number" min="1" className={`w-full bg-transparent border-b ${errors.guests ? 'border-red-500' : 'border-white/20'} px-0 py-4 text-beige focus:outline-none focus:border-gold transition-colors font-serif italic text-xl`} />
                        {errors.guests && <span className="text-[8px] text-red-500 uppercase tracking-widest mt-2 block font-bold">{errors.guests}</span>}
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-[10px] uppercase tracking-[0.5em] text-beige/40 mb-4 group-focus-within:text-gold transition-colors font-bold">Special Requests</label>
                      <textarea name="requests" value={formState.requests} onChange={handleInputChange} rows={2} className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-beige focus:outline-none focus:border-gold transition-colors font-serif italic text-xl resize-none" placeholder="Dietary needs, security details, or arrival preferences..." />
                    </div>
                    <button type="submit" className="w-full bg-gold text-charcoal py-7 font-bold uppercase tracking-[0.5em] text-[11px] mt-12 hover:bg-beige transition-all shadow-[0_15px_40px_rgba(212,175,55,0.4)] group flex items-center justify-center space-x-4">
                      <span>Apply for Stay</span>
                      <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                 </>
               ) : (
                 <div className="flex flex-col items-center justify-center py-32 text-center animate-in fade-in zoom-in duration-700">
                    <div className="w-24 h-24 rounded-full border-2 border-gold flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(212,175,55,0.4)] radiant-glow">
                      <CheckCircle2 className="text-gold w-12 h-12" />
                    </div>
                    <h3 className="text-4xl font-serif text-beige font-bold mb-6 tracking-tight drop-shadow">Application Received</h3>
                    <p className="text-beige/80 font-serif italic text-xl leading-relaxed max-sm mx-auto drop-shadow">
                      Thank you, {formState.name.split(' ')[0]}. Your request has been escalated to our senior concierge. Expect a discreet contact within the hour.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="mt-16 text-gold uppercase tracking-[0.4em] text-[10px] font-bold border-b border-gold/40 pb-2 hover:border-gold transition-all radiant-glow">Submit Another Inquiry</button>
                 </div>
               )}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-charcoal py-32 section-border">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="mb-24 flex flex-col items-center">
            <div className="mb-8 flex flex-col items-center">
               <img src={LOGO_IMAGE} alt="Logo" className="w-20 h-20 rounded-full border border-gold mb-8 p-1 shadow-[0_0_40px_rgba(212,175,55,0.2)] radiant-glow" />
               <span className="text-4xl md:text-5xl font-serif text-gold font-bold block uppercase tracking-tighter gold-text-gradient radiant-glow">Signature</span>
               <span className="text-[10px] font-sans text-beige/50 tracking-[0.8em] uppercase -mt-2 font-bold">Villa Apartments</span>
            </div>
            <p className="text-beige/40 italic text-sm mt-8 font-serif max-w-xl mx-auto drop-shadow">"True luxury is not seen, it is felt through the absence of the unnecessary."</p>
          </div>
          <div className="flex justify-center space-x-16 mb-24">
            <a href="#" className="text-beige/40 hover:text-gold transition-colors uppercase tracking-[0.4em] text-[10px] font-bold">Instagram</a>
            <a href="#" className="text-beige/40 hover:text-gold transition-colors uppercase tracking-[0.4em] text-[10px] font-bold">Mail</a>
            <a href="#" className="text-beige/40 hover:text-gold transition-colors uppercase tracking-[0.4em] text-[10px] font-bold">Legal</a>
          </div>
          <div className="pt-16 border-t border-white/10 w-full text-beige/20 text-[9px] uppercase tracking-[0.6em] font-bold">
            &copy; {new Date().getFullYear()} Signature Villa Apartments. Amagba GRA, Benin City.
          </div>
        </div>
      </footer>

      <AIConcierge />

      <div className="md:hidden fixed bottom-0 w-full p-6 glass z-50">
        <a href="#contact" className="block w-full bg-gold text-charcoal py-6 rounded-sm font-bold uppercase tracking-[0.5em] text-[11px] text-center shadow-[0_15px_40px_rgba(212,175,55,0.4)]">Request Reservation</a>
      </div>
    </div>
  );
};

export default App;
