import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';
import collectionWomen from '@/assets/collection-women.jpg';
import collectionMen from '@/assets/collection-men.jpg';
import collectionFestive from '@/assets/collection-festive.jpg';
import collectionDesigner from '@/assets/collection-designer.jpg';
import heroImage from '@/assets/hero-1.jpg';

const galleryImages = [
  { src: heroImage, title: 'Evening Elegance', category: 'Evening Wear' },
  { src: collectionWomen, title: 'Silk Dreams', category: "Women's Collection" },
  { src: collectionMen, title: 'Tailored Excellence', category: "Men's Collection" },
  { src: collectionFestive, title: 'Festive Glory', category: 'Festive Wear' },
  { src: collectionDesigner, title: 'Designer Showcase', category: 'Designer Picks' },
  { src: collectionWomen, title: 'Graceful Flow', category: "Women's Collection" },
];

const Lookbook = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="lookbook" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-body tracking-[0.3em] text-primary uppercase mb-4">
            Visual Stories
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">
            The Lookbook
          </h2>
          <div className="w-24 h-[1px] bg-primary mx-auto" />
        </motion.div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid mb-4 md:mb-6 group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
              onClick={() => setSelectedImage(index)}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full object-cover ${
                    index % 3 === 0 ? 'aspect-[3/4]' : index % 3 === 1 ? 'aspect-square' : 'aspect-[4/5]'
                  }`}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <motion.p
                    className="text-xs font-body tracking-wider text-primary uppercase mb-1"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {image.category}
                  </motion.p>
                  <motion.h3
                    className="text-xl font-display font-semibold"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {image.title}
                  </motion.h3>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8">
                  <div className="absolute top-0 right-0 w-full h-[1px] bg-primary/0 group-hover:bg-primary transition-colors duration-500" />
                  <div className="absolute top-0 right-0 w-[1px] h-full bg-primary/0 group-hover:bg-primary transition-colors duration-500" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <motion.img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].title}
            className="max-w-full max-h-[85vh] object-contain"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-xs font-body tracking-wider text-primary uppercase mb-1">
              {galleryImages[selectedImage].category}
            </p>
            <h3 className="text-2xl font-display font-semibold">
              {galleryImages[selectedImage].title}
            </h3>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Lookbook;
