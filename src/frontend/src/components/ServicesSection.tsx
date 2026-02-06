import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-8 text-foreground text-center transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Services
          </h2>
          
          <div
            className={`bg-card border border-border rounded-2xl p-8 md:p-12 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="leading-relaxed">
                Simon Apps builds custom applications for small and businesses, designed to fit the way you work.
              </p>
              
              <p className="leading-relaxed">
                Standard software platforms are sometimes overkill, too generic, or too fragmented. Off-the-shelf tools rarely match your specific processes. I bridge the gap between standard software and your real operational needs.
              </p>
              
              <p className="leading-relaxed">
                From simple standalone tools to complete employee environments, I design and build business-specific solutions tailored to your workflows, your people, and your growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
