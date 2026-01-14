import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface CinematicIntroProps {
  onComplete: () => void;
}

const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 3000),
      setTimeout(() => onComplete(), 4500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const letterVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  const titleLetters = "ZOYA".split('');
  const subtitleLetters = "COLLECTION".split('');

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background fabric-texture"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          {/* Silk thread decorative lines */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 0.3 : 0 }}
            transition={{ duration: 1.5 }}
          >
            <svg className="absolute w-full h-full" preserveAspectRatio="none">
              <motion.path
                d="M0,50% Q25%,30% 50%,50% T100%,50%"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: phase >= 1 ? 1 : 0, opacity: phase >= 1 ? 0.5 : 0 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </svg>
            
            {/* Floating golden particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-primary/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: phase >= 1 ? [0, 0.6, 0] : 0,
                  scale: phase >= 1 ? [0, 1, 0] : 0,
                  y: phase >= 1 ? [0, -50] : 0,
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            ))}
          </motion.div>

          <div className="text-center relative z-10">
            {/* Main Title */}
            <motion.div 
              className="flex justify-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 1 ? 1 : 0 }}
            >
              {titleLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate={phase >= 1 ? "visible" : "hidden"}
                  className="text-7xl md:text-9xl font-display font-semibold text-gradient-gold tracking-[0.3em]"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Decorative Line */}
            <motion.div
              className="w-32 h-[1px] mx-auto mb-6 bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: phase >= 2 ? 1 : 0, 
                opacity: phase >= 2 ? 1 : 0 
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />

            {/* Subtitle */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 2 ? 1 : 0 }}
            >
              {subtitleLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate={phase >= 2 ? "visible" : "hidden"}
                  className="text-xl md:text-2xl font-body font-light tracking-[0.5em] text-muted-foreground"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Bottom gradient fade */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicIntro;
