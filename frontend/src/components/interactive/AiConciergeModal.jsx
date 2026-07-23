import React, { useState } from 'react';
import { X, Sparkles, Mic, MicOff, ArrowRight, Bot, Compass } from 'lucide-react';
import { consultAiStylistAPI } from '../../services/api';

export const AiConciergeModal = ({ isOpen, onClose, onSelectProduct }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  if (!isOpen) return null;

  const handleConsult = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setLoading(true);
    const res = await consultAiStylistAPI(prompt);
    setResponse(res);
    setLoading(false);
  };

  const handleVoiceToggle = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Voice recognition API is simulating input.');
      setPrompt('I am looking for a rose gold tourbillon watch and a warm amber fragrance for a gala night.');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setPrompt(transcript);
    };

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-dark/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-ivory rounded-luxury max-w-2xl w-full p-6 sm:p-10 border border-secondary shadow-2xl relative">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-secondary/50 text-dark hover:bg-accent hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2 mb-6">
          <span className="text-accent text-[10px] font-bold uppercase tracking-[0.35em] flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-highlight animate-pulse" /> Maison AI Luxury Stylist & Concierge
          </span>
          <h3 className="font-serif-luxury text-3xl text-dark">Personalized Olfactory & Horlogerie Consultation</h3>
          <p className="text-xs text-text-muted">Describe your dress code, olfactory notes, or occasion for master styling advice.</p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleConsult} className="space-y-4">
          <div className="relative">
            <textarea
              rows={3}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., 'Looking for a skeleton watch to pair with an evening tuxedo and a smoky oud perfume...'"
              className="w-full bg-primary border border-secondary rounded-2xl p-4 text-sm text-dark placeholder:text-text-muted focus:outline-none focus:border-highlight"
            />
            
            <button
              type="button"
              onClick={handleVoiceToggle}
              className={`absolute right-3 bottom-3 p-2.5 rounded-full transition-all ${
                isListening ? 'bg-red-500 text-white animate-ping' : 'bg-secondary text-accent hover:bg-accent hover:text-white'
              }`}
              title="Voice Search Assistant"
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setPrompt("Rose gold skeleton tourbillon for galas")}
                className="text-[10px] bg-secondary/50 px-2.5 py-1 rounded-full text-accent font-medium hover:bg-secondary"
              >
                + Rose Gold Tourbillon
              </button>
              <button
                type="button"
                onClick={() => setPrompt("Oud and sandalwood perfume with long sillage")}
                className="text-[10px] bg-secondary/50 px-2.5 py-1 rounded-full text-accent font-medium hover:bg-secondary"
              >
                + Aged Oud Sillage
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-highlight hover:bg-accent text-dark hover:text-white text-xs uppercase tracking-widest font-semibold rounded-full shadow-luxury flex items-center gap-2"
            >
              {loading ? 'Consulting Master Stylist...' : 'Analyze & Match'} <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>

        {/* AI Recommendation Output */}
        {response && (
          <div className="mt-6 p-6 bg-primary rounded-2xl border border-secondary space-y-4 text-left animate-fadeIn">
            <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider">
              <Bot className="w-4 h-4 text-highlight" /> Master Concierge Verdict
            </div>

            <p className="font-serif-luxury text-lg text-dark italic leading-relaxed">
              "{response.advice}"
            </p>

            {response.recommendations && (
              <div className="grid grid-cols-2 gap-4 pt-2">
                {response.recommendations.map((p) => (
                  <div
                    key={p.slug}
                    onClick={() => { onClose(); onSelectProduct(p); }}
                    className="p-3 bg-ivory rounded-xl border border-secondary flex items-center gap-3 cursor-pointer hover:border-highlight transition-all"
                  >
                    <img src={p.images[0]} alt={p.name} className="w-12 h-12 object-cover rounded-lg" />
                    <div>
                      <h4 className="font-serif-luxury text-xs text-dark font-semibold line-clamp-1">{p.name}</h4>
                      <span className="text-[10px] text-accent font-bold">${p.price.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
