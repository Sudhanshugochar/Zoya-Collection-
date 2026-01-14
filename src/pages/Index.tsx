import { useState } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import CinematicIntro from '@/components/CinematicIntro';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SignatureCollections from '@/components/SignatureCollections';
import AboutSection from '@/components/AboutSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import VideoShowcase from '@/components/VideoShowcase';
import Testimonials from '@/components/Testimonials';
import VisitStore from '@/components/VisitStore';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {showIntro && <CinematicIntro onComplete={() => setShowIntro(false)} />}
        
        <Navigation />
        <Hero />
        <SignatureCollections />
        <AboutSection />
        <WhyChooseUs />
        <VideoShowcase />
        <Testimonials />
        <VisitStore />
        <Newsletter />
        <Footer />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default Index;
