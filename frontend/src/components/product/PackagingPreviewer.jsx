import React, { useState } from 'react';
import { Gift, Check, Sparkles, X } from 'lucide-react';

export const PackagingPreviewer = ({ isOpen, onClose, onSavePackaging, defaultEngraving = "" }) => {
  const [ribbonColor, setRibbonColor] = useState('Champagne Gold');
  const [engravingText, setEngravingText] = useState(defaultEngraving);
  const [boxType, setBoxType] = useState('Royal Ivory Velvet Vault');

  if (!isOpen) return null;

  const ribbonColors = [
    { name: 'Champagne Gold', class: 'bg-[#B89C7D]' },
    { name: 'Chestnut Amber', class: 'bg-[#7A5C45]' },
    { name: 'Deep Espresso', class: 'bg-[#2D2A28]' },
    { name: 'Sage Velvet', class: 'bg-[#507A5B]' }
  ];

  const handleSave = () => {
    onSavePackaging({
      boxType,
      ribbonColor,
      engravingText
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-dark/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-ivory rounded-luxury max-w-2xl w-full p-6 sm:p-10 border border-secondary shadow-2xl relative">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-secondary/50 text-dark hover:bg-accent hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2 mb-8">
          <span className="text-accent text-xs font-display-luxury uppercase tracking-[0.3em] flex items-center justify-center gap-1">
            <Gift className="w-4 h-4" /> Bespoke Packaging Atelier
          </span>
          <h3 className="font-serif-luxury text-3xl text-dark">Custom Gift Engraving & Box</h3>
          <p className="text-xs text-text-muted">Personalise your acquisition box ribbon and solid brass plaque engraving.</p>
        </div>

        {/* Visual Box Preview Stage */}
        <div className="bg-primary p-8 rounded-luxury border border-secondary text-center space-y-4 mb-8 relative overflow-hidden">
          <div className="w-24 h-24 mx-auto bg-dark rounded-luxury-sm flex flex-col items-center justify-center p-4 shadow-luxury relative border border-highlight/40">
            {/* Ribbon Line */}
            <div className={`absolute inset-y-0 w-3 ${ribbonColors.find(r => r.name === ribbonColor)?.class}`} />
            <div className={`absolute inset-x-0 h-3 ${ribbonColors.find(r => r.name === ribbonColor)?.class}`} />
            
            <div className="z-10 bg-highlight/90 text-dark font-serif-luxury text-[9px] px-2 py-1 rounded shadow-sm border border-white/40 max-w-full truncate font-bold">
              {engravingText || 'MAISON AURÉLIA'}
            </div>
          </div>

          <div className="space-y-1">
            <span className="font-serif-luxury text-lg text-dark font-medium">{boxType}</span>
            <p className="text-xs text-accent">Ribbon: {ribbonColor} • Engraving: "{engravingText || 'Standard Logo'}"</p>
          </div>
        </div>

        {/* Form Controls */}
        <div className="space-y-6">
          
          {/* Engraving Input */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-dark uppercase tracking-wider block">
              Plaque Engraving Text (Max 24 Characters)
            </label>
            <input
              type="text"
              maxLength={24}
              value={engravingText}
              onChange={(e) => setEngravingText(e.target.value)}
              placeholder="e.g., Aurelius - MXXVI"
              className="w-full bg-surface border border-secondary rounded-xl py-3 px-4 text-sm text-dark placeholder-text-muted focus:outline-none focus:border-highlight"
            />
          </div>

          {/* Ribbon Color Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-dark uppercase tracking-wider block">
              Silk Ribbon Color
            </label>
            <div className="flex flex-wrap gap-3">
              {ribbonColors.map((r) => (
                <button
                  key={r.name}
                  type="button"
                  onClick={() => setRibbonColor(r.name)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium border transition-all ${
                    ribbonColor === r.name ? 'border-accent bg-secondary/50 text-dark font-bold' : 'border-secondary text-text-muted'
                  }`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full ${r.class}`} />
                  {r.name}
                </button>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <button
              onClick={handleSave}
              className="w-full py-4 bg-highlight hover:bg-accent text-dark hover:text-white font-medium text-xs uppercase tracking-[0.2em] rounded-full transition-all shadow-luxury flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" /> Save Bespoke Configuration
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
