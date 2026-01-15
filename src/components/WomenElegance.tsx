import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import women1 from '@/assets/women-1.jpg';
import women2 from '@/assets/women-2.jpg';
import women3 from '@/assets/women-3.jpg';
import women4 from '@/assets/women-4.jpg';
import women5 from '@/assets/women-5.jpg';
import women6 from '@/assets/women-6.jpg';
import women7 from '@/assets/women-7.jpg';

const womenDresses = [
  { image: women1, title: 'Azure Elegance Suit' },
  { image: women2, title: 'Crimson Royale' },
  { image: women3, title: 'Sage Garden Collection' },
  { image: women4, title: 'Noir Classic Abayas' },
  { image: women5, title: 'Pastel Dreams' },
  { image: women6, title: 'Embroidered Heritage' },
  { image: women7, title: 'Zari Masterpiece' },
];

const WomenElegance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % womenDresses.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % womenDresses.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + womenDresses.length) % womenDresses.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-sm font-body tracking-[0.3em] text-primary uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Exclusive For Her
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Eternal Elegance
          </motion.h2>
          <motion.div
            className="w-24 h-[1px] bg-primary mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>

        {/* Slider */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Main Slider Container */}
          <div className="relative overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {womenDresses.map((dress, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <div className="aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9] relative overflow-hidden">
                    <img
                      src={dress.image}
                      alt={dress.title}
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    
                    {/* Content */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
                      initial={{ opacity: 0, y: 30 }}
                      animate={currentIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h3 className="text-2xl md:text-4xl font-display font-semibold mb-2 text-white">
                        {dress.title}
                      </h3>
                      <p className="text-primary text-sm md:text-base font-body tracking-wider uppercase">
                        Available In Store
                      </p>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-all duration-300 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-all duration-300 z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {womenDresses.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 bg-primary'
                    : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WomenElegance;
