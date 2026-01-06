
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Set loaded to true after a brief delay for animation purposes
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1626906722163-bd4c03cb3b9b?q=80&w=2000&auto=format&fit=crop" 
          alt="Fresh vegetables on a wooden table" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="container-custom relative z-10 mt-16">
        <div className={`max-w-xl text-white transition-all duration-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-block bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase mb-6 animate-fade-in">
            Farm to Table Experience
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Fresh Organic Produce, Delivered to Your Door
          </h1>
          
          <p className="mt-6 text-white/80 text-lg max-w-md">
            Discover the finest locally sourced organic fruits, vegetables, and artisanal products harvested at peak freshness.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 btn-hover-effect">
              <Link to="/shop">
                Shop Now
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
