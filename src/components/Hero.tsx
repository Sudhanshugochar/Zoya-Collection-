import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage2 from '@/assets/hero-2.jpg';
import heroImage3 from '@/assets/hero-3.jpg';
import heroImage4 from '@/assets/hero-4.jpg';
import heroImage5 from '@/assets/hero-5.jpg';
import heroImage6 from '@/assets/hero-6.jpg';

const slides = [
  {
    image: heroImage2,
    headline: 'Ivory & Gold Collection',
    subheadline: 'Exquisite embroidery meets traditional elegance',
  },
  {
    image: heroImage3,
    headline: 'Royal Purple Elegance',
    subheadline: 'Statement pieces for the modern woman',
  },
  {
    image: heroImage4,
    headline: 'Festive Grandeur',
    subheadline: 'Celebrate in stunning hand-crafted designs',
  },
  {
    image: heroImage5,
    headline: 'Pure White Radiance',
    subheadline: 'Timeless whites with delicate golden accents',
  },
  {
    image: heroImage6,
    headline: 'Luxe Abaya Collection',
    subheadline: 'Modest fashion redefined with premium fabrics',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          {/* Image with parallax effect */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: currentSlide === index ? 1.05 : 1 }}
            transition={{ duration: 6, ease: 'easeOut' }}
          >
            <img
              src={slide.image}
              alt="Fashion"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <motion.p
              className="text-sm md:text-base font-body tracking-[0.3em] text-primary mb-4 uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Zoya Collection
            </motion.p>
            
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {slides[currentSlide].headline}
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground font-body font-light mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {slides[currentSlide].subheadline}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#visit"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase transition-all hover:shadow-lg hover:shadow-primary/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Visit Store
              </motion.a>
              <motion.a
                href="#collections"
                className="inline-flex items-center justify-center px-8 py-4 border border-foreground/30 text-foreground font-body text-sm tracking-wider uppercase transition-all hover:border-primary hover:text-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Collection
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 right-6 md:right-12 transform translate-y-1/2 z-20 flex flex-col gap-4">
        <motion.button
          onClick={prevSlide}
          className="w-12 h-12 border border-foreground/20 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="w-12 h-12 border border-foreground/20 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-[2px] transition-all duration-500 ${
              currentSlide === index 
                ? 'w-12 bg-primary' 
                : 'w-6 bg-foreground/30 hover:bg-foreground/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-6 md:left-12 z-20 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-xs font-body tracking-widest text-muted-foreground uppercase rotate-90 origin-left translate-x-4">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
