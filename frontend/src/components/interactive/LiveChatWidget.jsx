import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot } from 'lucide-react';

export const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'concierge', text: 'Welcome to Maison Aurélia. I am Élodie, your private Geneva host. How may I assist your acquisition today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsgs = [...messages, { sender: 'user', text: input }];
    setMessages(newMsgs);
    const userText = input;
    setInput('');

    setTimeout(() => {
      let reply = "Our master horologists in Le Locle are available to answer specific movement questions. Would you like me to connect you for a private salon consultation?";
      if (userText.toLowerCase().includes('price') || userText.toLowerCase().includes('cost')) {
        reply = "All acquisitions include complimentary worldwide express insured delivery and bespoke plaque engraving.";
      } else if (userText.toLowerCase().includes('perfume') || userText.toLowerCase().includes('scent')) {
        reply = "Our extraits de parfum contain 28% concentration macerated for 90 days in Grasse, France.";
      }

      setMessages((prev) => [...prev, { sender: 'concierge', text: reply }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <div className="bg-ivory rounded-luxury w-80 sm:w-96 shadow-2xl border border-secondary p-5 flex flex-col justify-between h-[450px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-secondary pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs">
                MA
              </div>
              <div>
                <h4 className="font-serif-luxury text-sm font-semibold text-dark">Maison Concierge</h4>
                <span className="text-[10px] text-success font-bold flex items-center gap-1">
                  ● Online • Geneva Atelier
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 rounded-full text-dark hover:bg-secondary">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto py-3 space-y-3 text-xs">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-3 rounded-2xl max-w-[85%] ${
                  m.sender === 'user'
                    ? 'bg-accent text-white ml-auto rounded-tr-none'
                    : 'bg-primary border border-secondary text-dark rounded-tl-none'
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="flex gap-2 pt-2 border-t border-secondary">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Maison Concierge..."
              className="flex-1 bg-surface border border-secondary rounded-full py-2 px-3 text-xs text-dark focus:outline-none focus:border-highlight"
            />
            <button
              type="submit"
              className="p-2 bg-highlight hover:bg-accent text-dark hover:text-white rounded-full transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 bg-dark text-highlight hover:text-primary rounded-full shadow-luxury border border-highlight/40 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all hover:scale-105"
        >
          <MessageSquare className="w-4 h-4 text-highlight" /> Concierge Live
        </button>
      )}
    </div>
  );
};
