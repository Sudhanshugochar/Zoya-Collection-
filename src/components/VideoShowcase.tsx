import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, X } from 'lucide-react';

const videos = [
  { src: '/videos/fashion-1.mp4', title: 'Spring Collection' },
  { src: '/videos/fashion-2.mp4', title: 'Bridal Elegance' },
  { src: '/videos/fashion-3.mp4', title: 'Designer Showcase' },
  { src: '/videos/fashion-4.mp4', title: 'Festive Glamour' },
  { src: '/videos/fashion-5.mp4', title: 'New Arrivals' },
];

const VideoShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-body tracking-[0.3em] text-primary uppercase mb-4">
            Behind The Scenes
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold mb-6">
            Fashion In Motion
          </h2>
          <motion.div
            className="w-24 h-[1px] bg-primary mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.src}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveVideo(video.src)}
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg shadow-elegant">
                <video
                  src={video.src}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                  </motion.div>
                </div>
                
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-display text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {video.title}
                  </h3>
                  <div className="w-0 group-hover:w-12 h-[1px] bg-primary transition-all duration-300 mt-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {activeVideo && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveVideo(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setActiveVideo(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <motion.video
            src={activeVideo}
            className="max-h-[90vh] max-w-full rounded-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
};

export default VideoShowcase;
