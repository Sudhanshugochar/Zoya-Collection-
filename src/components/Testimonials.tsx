import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Fashion Enthusiast',
    text: "Zoya Collection transformed my wardrobe. The quality and attention to detail in every piece is remarkable. Their styling advice made all the difference.",
    rating: 5,
  },
  {
    name: 'Rahul Mehta',
    role: 'Business Executive',
    text: "The tailoring at Zoya Collection is exceptional. My suits fit perfectly, and the fabrics are premium. This is my go-to boutique for all formal wear.",
    rating: 5,
  },
  {
    name: 'Ananya Patel',
    role: 'Interior Designer',
    text: "Found my dream festive outfit here! The team understood exactly what I was looking for. The entire shopping experience feels luxurious.",
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'Entrepreneur',
    text: "Exceptional service and even more exceptional clothing. Zoya Collection has become synonymous with quality in my mind. Highly recommend!",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-body tracking-[0.3em] text-primary uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">
            Customer Love
          </h2>
          <div className="w-24 h-[1px] bg-primary mx-auto" />
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${current * 100}%` }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: current === index ? 1 : 0.3 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl font-display italic text-foreground/90 mb-8 leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author */}
                    <div>
                      <p className="text-lg font-display font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm font-body text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    current === index ? 'w-8 bg-primary' : 'bg-foreground/30'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
