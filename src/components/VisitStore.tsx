import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Phone, Navigation, MessageCircle } from 'lucide-react';

const VisitStore = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="visit" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 fabric-texture opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-body tracking-[0.3em] text-primary uppercase mb-4">
            Experience Luxury
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">
            Visit Our Boutique
          </h2>
          <div className="w-24 h-[1px] bg-primary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Store Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Address */}
            <div className="flex gap-6">
              <div className="w-14 h-14 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold mb-2">Store Address</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  42 Fashion Avenue, Designer District<br />
                  Luxury Mall, Ground Floor<br />
                  Mumbai - 400001, India
                </p>
              </div>
            </div>

            {/* Timings */}
            <div className="flex gap-6">
              <div className="w-14 h-14 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold mb-2">Store Timings</h3>
                <p className="text-muted-foreground font-body">
                  Monday - Saturday: 10:00 AM - 9:00 PM<br />
                  Sunday: 11:00 AM - 7:00 PM
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex gap-6">
              <div className="w-14 h-14 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold mb-2">Contact Us</h3>
                <p className="text-muted-foreground font-body">
                  +91 98765 43210<br />
                  hello@zoyacollection.com
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase transition-all hover:shadow-lg hover:shadow-primary/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Navigation size={18} />
                Get Directions
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-foreground/30 text-foreground font-body text-sm tracking-wider uppercase transition-all hover:border-primary hover:text-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={18} />
                Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-foreground/30 text-foreground font-body text-sm tracking-wider uppercase transition-all hover:border-primary hover:text-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle size={18} />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="h-[400px] lg:h-[500px] relative"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8324766158147!2d72.82651531490237!3d18.930091987173445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e8572b4f8b%3A0x4c0a3f8b4e8b4c0a!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Map overlay */}
              <div className="absolute inset-0 pointer-events-none border border-primary/20" />
            </div>

            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary" />
              <div className="absolute top-0 left-0 w-[2px] h-full bg-primary" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8">
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-primary" />
              <div className="absolute bottom-0 right-0 w-[2px] h-full bg-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitStore;
