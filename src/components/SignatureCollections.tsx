import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import collectionWomen from '@/assets/collection-women.jpg';
import collectionMen from '@/assets/collection-men.jpg';
import collectionFestive from '@/assets/collection-festive.jpg';
import collectionDesigner from '@/assets/collection-designer.jpg';

const collections = [
  {
    title: "Women's Wear",
    description: 'Elegant silhouettes for the modern woman',
    image: collectionWomen,
  },
  {
    title: "Men's Wear",
    description: 'Refined tailoring meets contemporary style',
    image: collectionMen,
  },
  {
    title: 'Festive Collection',
    description: 'Celebrate in timeless grandeur',
    image: collectionFestive,
  },
  {
    title: 'Designer Picks',
    description: 'Curated pieces for the discerning eye',
    image: collectionDesigner,
  },
];

const SignatureCollections = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="collections" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
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
            Our Collections
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Signature Collections
          </motion.h2>
          <motion.div
            className="w-24 h-[1px] bg-primary mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.8 }}
            >
              {/* Image */}
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl font-display font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {collection.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm md:text-base mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {collection.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <span className="text-sm font-body tracking-wider uppercase">Available In Store</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </motion.div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-4 right-4 w-[1px] h-8 bg-primary/30 group-hover:bg-primary transition-colors duration-500" />
                <div className="absolute top-4 right-4 w-8 h-[1px] bg-primary/30 group-hover:bg-primary transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureCollections;
