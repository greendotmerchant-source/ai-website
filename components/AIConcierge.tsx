import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, User, Bot, Sparkles, ChevronRight } from 'lucide-react';
import { getConciergeResponse } from '../services/gemini';

const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Good day. I am your Senior Majordomo. Allow me to facilitate an exquisite stay for you at Signature Villa. How may I be of service?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "Arrange Airport Transfer",
    "In-Villa Private Chef",
    "Benin City Heritage Tour",
    "Suite Availability"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (customMessage?: string) => {
    const msgToSend = customMessage || input;
    if (!msgToSend.trim()) return;
    
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: msgToSend }]);
    setIsTyping(true);

    const response = await getConciergeResponse(msgToSend);
    setMessages(prev => [...prev, { role: 'bot', text: response }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[60]">
      {isOpen ? (
        <div className="w-[340px] md:w-[420px] glass rounded-sm shadow-2xl flex flex-col overflow-hidden border border-gold/20 h-[600px] animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-charcoal border-b border-gold/20 p-6 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5">
                <Sparkles className="text-gold w-5 h-5" />
              </div>
              <div>
                <span className="text-gold font-serif font-bold uppercase tracking-[0.2em] text-xs block">Signature Concierge</span>
                <span className="text-[8px] text-beige/40 uppercase tracking-[0.3em]">Senior Majordomo Service</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gold/50 hover:text-gold transition-colors p-2">
              <X size={20} />
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6 bg-charcoal/40">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm leading-relaxed font-serif italic ${
                  msg.role === 'user' 
                    ? 'bg-gold/10 text-gold border border-gold/20 rounded-sm' 
                    : 'bg-white/5 text-beige/80 border border-white/5 rounded-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2 text-gold/40 italic text-[10px] uppercase tracking-widest px-2">
                  <div className="w-1 h-1 bg-gold rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-gold rounded-full animate-bounce delay-75"></div>
                  <div className="w-1 h-1 bg-gold rounded-full animate-bounce delay-150"></div>
                  <span>Majordomo is composing...</span>
                </div>
              </div>
            )}
          </div>

          {/* Bespoke Suggestions */}
          <div className="px-6 py-4 bg-charcoal/60 border-t border-white/5 overflow-x-auto">
            <div className="flex space-x-3 whitespace-nowrap pb-2 scrollbar-hide">
              {suggestions.map((s, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleSend(s)}
                  className="text-[9px] uppercase tracking-[0.2em] font-bold border border-gold/20 px-4 py-2 hover:bg-gold hover:text-charcoal transition-all rounded-sm text-gold"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 bg-charcoal border-t border-gold/20 flex space-x-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="How may I assist you..."
              className="flex-1 bg-white/5 border border-white/10 px-4 py-3 text-sm text-beige focus:outline-none focus:border-gold/40 transition-colors font-serif italic placeholder:text-beige/20"
            />
            <button 
              onClick={() => handleSend()}
              className="bg-gold text-charcoal p-3 hover:bg-beige transition-all shadow-lg"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center"
        >
          <div className="bg-gold text-charcoal p-5 rounded-sm shadow-2xl group-hover:scale-105 transition-all flex items-center space-x-4 border border-gold/50">
            <MessageSquare size={24} />
            <span className="font-bold uppercase tracking-[0.4em] text-[10px]">Concierge Majordomo</span>
          </div>
          {/* Decorative pulse ring */}
          <div className="absolute inset-0 border border-gold rounded-sm animate-ping opacity-20 pointer-events-none"></div>
        </button>
      )}
    </div>
  );
};

export default AIConcierge;