import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'Business Website',
      description: 'A modern, responsive business website with contact forms and service showcase',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
      tier: 'Simple Page',
      link: '#',
    },
    {
      title: 'Project Time Tracker',
      description: 'Easily track how much time employees spend on projects, tasks, and client work. A full-featured web application with secure user access and real-time insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
      tier: 'Moderate Tool',
      link: '#',
    },
    {
      title: 'Field Service App',
      description: 'A mobile app for field workers to receive jobs, register progress, and report completed work in real time.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&q=80',
      tier: 'Complex System',
      link: '#',
    },
  ];

  const getTierColors = (tier: string): [string, string] => {
    if (tier === 'Simple Page') {
      return [
        'bg-green-500/10 text-green-500 border-green-500/20',
        'bg-blue-500/10 text-blue-500 border-blue-500/20'
      ];
    } else if (tier === 'Moderate Tool') {
      return [
        'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
        'bg-orange-500/10 text-orange-500 border-orange-500/20'
      ];
    } else if (tier === 'Complex System') {
      return [
        'bg-purple-500/10 text-purple-500 border-purple-500/20',
        'bg-pink-500/10 text-pink-500 border-pink-500/20'
      ];
    }
    return ['bg-muted text-muted-foreground', 'bg-muted text-muted-foreground'];
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-foreground transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Examples of web solutions built for various business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const tierWords = project.tier.split(' ');
            const [color1, color2] = getTierColors(project.tier);
            
            return (
              <div
                key={project.title}
                className={`group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-brand-blue/50 transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button variant="secondary" size="sm" className="gap-2">
                      View Project <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <Badge variant="outline" className={color1}>
                      {tierWords[0]}
                    </Badge>
                    <Badge variant="outline" className={color2}>
                      {tierWords[1]}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-blue transition-colors text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
