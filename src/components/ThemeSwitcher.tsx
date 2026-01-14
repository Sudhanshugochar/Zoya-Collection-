import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Palette } from 'lucide-react';
import { useTheme, ThemeType } from '@/contexts/ThemeContext';

const themes: { id: ThemeType; name: string; colors: string[] }[] = [
  { id: 'gold', name: 'Luxury Gold', colors: ['#0a0a0a', '#c9a962'] },
  { id: 'blush', name: 'Fashion Blush', colors: ['#0a0a0a', '#d4a5a5'] },
  { id: 'ivory', name: 'Minimal Ivory', colors: ['#f5f3ef', '#262626'] },
];

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 bg-card border border-border rounded-lg p-4 shadow-2xl min-w-[200px]"
          >
            <p className="text-xs font-body uppercase tracking-wider text-muted-foreground mb-3">
              Choose Theme
            </p>
            <div className="space-y-2">
              {themes.map((t) => (
                <motion.button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-2 rounded transition-colors ${
                    theme === t.id
                      ? 'bg-secondary'
                      : 'hover:bg-secondary/50'
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex gap-1">
                    {t.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-full border border-border"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-body text-foreground">{t.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Palette className="w-5 h-5 text-primary" />
      </motion.button>
    </div>
  );
};

export default ThemeSwitcher;
