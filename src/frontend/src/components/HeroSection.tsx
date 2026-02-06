import { ArrowRight, MessageSquare, Cpu, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';
import { useRef, useEffect, useState } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Calculate parallax transform (soft movement)
  const parallaxOffset = scrollY * 0.5;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{
            transform: `translate3d(0, ${parallaxOffset}px, 0)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <img
            src="/assets/generated/hero-showcase.dim_1200x800.jpg"
            alt="Web Development Showcase"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        
        {/* Enhanced darkened overlays - approximately 75% darker across entire hero area */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/99 via-background/98 to-background/99" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/97 to-background/90" />
        <div className="absolute inset-0 bg-black/75" />
        {/* Additional gradient layers for smooth blending and extra darkening */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/20" />
        {/* Extra contrast layer behind title area */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground drop-shadow-lg">
            Let's build your Business app
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto drop-shadow-md">
            Deploy and host on the Internet Computer blockchain for next-level security and scalability
          </p>

          {/* Three-Step Process */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div
              className={`bg-card/95 backdrop-blur-sm border border-border rounded-xl p-6 transition-all duration-700 delay-100 hover:scale-105 hover:border-brand-blue/50 hover:shadow-xl shadow-lg ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-full flex items-center justify-center shadow-lg">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">We Discuss Your Needs</h3>
              <p className="text-sm text-muted-foreground">I start with understanding your business and requirements</p>
            </div>

            <div
              className={`bg-card/95 backdrop-blur-sm border border-border rounded-xl p-6 transition-all duration-700 delay-300 hover:scale-105 hover:border-brand-blue/50 hover:shadow-xl shadow-lg ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-full flex items-center justify-center shadow-lg">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">I Build Your App</h3>
              <p className="text-sm text-muted-foreground">Custom development on the Internet Computer blockchain</p>
            </div>

            <div
              className={`bg-card/95 backdrop-blur-sm border border-border rounded-xl p-6 transition-all duration-700 delay-500 hover:scale-105 hover:border-brand-blue/50 hover:shadow-xl shadow-lg ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-full flex items-center justify-center shadow-lg">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Launch & Grow</h3>
              <p className="text-sm text-muted-foreground">Your solution goes live with ongoing support</p>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 text-lg px-8 py-6 group shadow-xl"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-blue rounded-full flex items-start justify-center p-2 shadow-lg">
          <div className="w-1 h-2 bg-brand-blue rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
