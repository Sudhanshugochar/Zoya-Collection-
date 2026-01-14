import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const textReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' as const },
    }),
  };

  return (
    <section id="about" className="py-24 md:py-40 relative overflow-hidden" ref={ref}>
      {/* Background texture */}
      <div className="absolute inset-0 fabric-texture opacity-50" />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-px h-40 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1, delay: 0.7 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Label */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-body tracking-[0.3em] text-primary uppercase mb-4">
              Our Story
            </p>
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold mb-6"
              variants={textReveal}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0}
            >
              About Zoya Collection
            </motion.h2>
            <motion.div
              className="w-24 h-[1px] bg-primary mx-auto"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </motion.div>

          {/* Story Content */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left Column - Philosophy */}
            <motion.div
              variants={textReveal}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1}
            >
              <h3 className="text-2xl md:text-3xl font-display mb-6 text-gradient-gold">
                Our Fashion Philosophy
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                At Zoya Collection, we believe that fashion is more than just clothing—it is 
                an expression of individuality, a celebration of craftsmanship, and a journey 
                of self-discovery. Every piece in our boutique is carefully curated to inspire 
                confidence and elegance.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Founded with a passion for exceptional quality and timeless design, we have 
                become a trusted destination for those who appreciate the finer details of 
                luxury fashion.
              </p>
            </motion.div>

            {/* Right Column - Values */}
            <motion.div
              variants={textReveal}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={2}
            >
              <h3 className="text-2xl md:text-3xl font-display mb-6 text-gradient-gold">
                Quality & Craftsmanship
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                We partner with master artisans and renowned designers who share our 
                commitment to excellence. Each garment tells a story of meticulous 
                attention to detail, premium fabrics, and impeccable finishing.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Our customers return to Zoya Collection not just for our collections, 
                but for the personalized experience—expert styling advice, perfect fits, 
                and the confidence that comes from wearing truly exceptional fashion.
              </p>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            className="mt-20 text-center"
            variants={textReveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={3}
          >
            <blockquote className="text-2xl md:text-4xl font-display italic text-foreground/80 max-w-3xl mx-auto">
              "Fashion is the armor to survive the reality of everyday life."
            </blockquote>
            <motion.div
              className="mt-6 flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
            >
              <div className="w-12 h-[1px] bg-primary/50" />
              <span className="text-sm font-body tracking-wider text-muted-foreground">
                The Zoya Collection Promise
              </span>
              <div className="w-12 h-[1px] bg-primary/50" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
