import React, { useState, useRef } from 'react';
import { RotateCw, X, Sparkles, ZoomIn, ShieldCheck } from 'lucide-react';

export const Interactive360Viewer = ({ product, onClose }) => {
  const [frameIndex, setFrameIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);

  if (!product || !product.model360Frames || product.model360Frames.length === 0) return null;

  const frames = product.model360Frames;

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startXRef.current = e.clientX || e.touches?.[0]?.clientX || 0;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches?.[0]?.clientX || 0;
    const diff = currentX - startXRef.current;
    
    if (Math.abs(diff) > 15) {
      if (diff > 0) {
        setFrameIndex((prev) => (prev + 1) % frames.length);
      } else {
        setFrameIndex((prev) => (prev - 1 + frames.length) % frames.length);
      }
      startXRef.current = currentX;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-dark/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="bg-ivory rounded-luxury max-w-4xl w-full p-6 sm:p-10 border border-secondary relative shadow-2xl flex flex-col items-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-secondary/50 text-dark hover:bg-accent hover:text-white transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="text-center space-y-1 mb-6">
          <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-1">
            <RotateCw className="w-3.5 h-3.5 animate-spin-slow" /> Interactive 360° Rotator
          </span>
          <h3 className="font-serif-luxury text-3xl text-dark font-medium">{product.name}</h3>
          <p className="text-xs text-text-muted">Drag left or right to inspect hand-engraved horological craftsmanship.</p>
        </div>

        {/* 360 Canvas Stage */}
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
          className="relative w-full aspect-[4/3] max-h-[420px] bg-surface rounded-luxury-sm overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing border border-secondary/50 select-none"
        >
          <img
            src={frames[frameIndex]}
            alt={`${product.name} 360 frame ${frameIndex}`}
            className="w-full h-full object-contain pointer-events-none transition-transform duration-100"
          />

          <div className="absolute bottom-4 inset-x-4 flex justify-between items-center text-xs text-text-muted bg-primary/80 backdrop-blur-md px-4 py-2 rounded-full border border-secondary">
            <span>Rotation Frame: {frameIndex + 1} / {frames.length}</span>
            <span className="flex items-center gap-1 text-accent font-semibold">
              <ZoomIn className="w-3.5 h-3.5" /> High-Resolution Inspection
            </span>
          </div>
        </div>

        {/* Specs Pill Bar */}
        <div className="mt-6 flex flex-wrap gap-4 text-xs text-text-muted justify-center">
          <span className="bg-primary px-3 py-1.5 rounded-full border border-secondary">
            Movement: {product.watchSpecs?.movement || 'Swiss Calibre'}
          </span>
          <span className="bg-primary px-3 py-1.5 rounded-full border border-secondary">
            Case: {product.watchSpecs?.caseMaterial || 'Rose Gold & Platinum'}
          </span>
          <span className="bg-primary px-3 py-1.5 rounded-full border border-secondary">
            Glass: Double Sapphire Anti-Reflective
          </span>
        </div>

      </div>
    </div>
  );
};
