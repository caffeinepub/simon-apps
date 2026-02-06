import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { Shield, Zap, Globe, Lock } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const icpFeatures = [
    {
      icon: Shield,
      title: 'Secure',
      description: 'Blockchain technology secured',
    },
    {
      icon: Zap,
      title: 'Fast',
      description: 'Lightning-quick performance',
    },
    {
      icon: Globe,
      title: 'Decentralized',
      description: 'No single point of failure',
    },
    {
      icon: Lock,
      title: 'Owned',
      description: 'True data ownership',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-foreground transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            About Simon Apps
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* About Me */}
          <div
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-card border border-border rounded-2xl p-8 h-full">
              <div className="flex items-start gap-6 mb-6">
                <img
                  src="/assets/generated/about-me-photo.dim_300x300.jpg"
                  alt="Developer"
                  className="w-24 h-24 rounded-full object-cover border-4 border-brand-blue/20"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">About Me</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full" />
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                I'm an Internet Computer enthusiast passionate about exploring ICP's revolutionary capabilities and bringing them to businesses and individuals worldwide.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My mission is to make blockchain technology accessible by offering professional web solutions built on the Internet Computer. Whether you need a simple or a complex application, I leverage cutting-edge AI tools and ICP's powerful infrastructure to deliver exceptional results.
              </p>
            </div>
          </div>

          {/* About ICP */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-card border border-border rounded-2xl p-8 h-full">
              <div className="flex items-start gap-6 mb-6">
                <img
                  src="/assets/generated/icp-blockchain.dim_800x600.jpg"
                  alt="Internet Computer"
                  className="w-24 h-24 rounded-full object-cover border-4 border-brand-cyan/20"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Why Internet Computer?</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full" />
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Internet Computer (ICP) is a revolutionary blockchain that enables websites and applications to run entirely on-chain. Unlike traditional hosting, ICP provides decentralized, tamper-proof infrastructure that's always available.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {icpFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="bg-accent/50 rounded-xl p-4 hover:bg-accent transition-colors"
                    >
                      <Icon className="w-8 h-8 text-brand-blue mb-2" />
                      <h4 className="font-semibold text-sm mb-1 text-foreground">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
