import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gem, TrendingUp, Ruler, Award } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'Premium Fabrics',
    description: 'Sourced from the finest mills around the world, our fabrics define luxury.',
  },
  {
    icon: TrendingUp,
    title: 'Latest Trends',
    description: 'Stay ahead with collections that blend timeless elegance with modern style.',
  },
  {
    icon: Ruler,
    title: 'Perfect Fit',
    description: 'Expert tailoring and personalized alterations ensure the perfect silhouette.',
  },
  {
    icon: Award,
    title: 'Trusted Boutique',
    description: 'Years of excellence in serving discerning fashion enthusiasts.',
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
          <p className="text-sm font-body tracking-[0.3em] text-primary uppercase mb-4">
            The Zoya Difference
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">
            Why Choose Us
          </h2>
          <div className="w-24 h-[1px] bg-primary mx-auto" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative p-8 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 mb-6 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500"
                whileHover={{ rotate: 5 }}
              >
                <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-2 right-2 w-[1px] h-6 bg-primary/50" />
                <div className="absolute bottom-2 right-2 w-6 h-[1px] bg-primary/50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
