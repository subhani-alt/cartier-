import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturedCollections } from '../components/home/FeaturedCollections';
import { WatchShowcase } from '../components/home/WatchShowcase';
import { FragrancePyramidSection } from '../components/home/FragrancePyramidSection';
import { HeritageStory } from '../components/home/HeritageStory';
import { ExperienceGrid } from '../components/home/ExperienceGrid';
import { Testimonials } from '../components/home/Testimonials';
import { InstagramFeed } from '../components/home/InstagramFeed';

export const HomePage = ({
  products,
  onOpenAiConcierge,
  onOpenAppointment,
  onSelect360Product,
  onSelectQuickView
}) => {
  return (
    <div className="space-y-0">
      <HeroSection onOpenAiConcierge={onOpenAiConcierge} />
      <FeaturedCollections />
      <WatchShowcase
        products={products}
        onSelect360Product={onSelect360Product}
        onSelectQuickView={onSelectQuickView}
      />
      <FragrancePyramidSection />
      <HeritageStory />
      <ExperienceGrid onOpenAppointment={onOpenAppointment} />
      <Testimonials />
      <InstagramFeed />
    </div>
  );
};
