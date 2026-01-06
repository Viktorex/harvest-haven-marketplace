
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { Leaf, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Section */}
        <section className="py-16 bg-accent bg-opacity-30">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Leaf className="h-6 w-6 mb-4" />,
                  title: "100% Organic",
                  description: "All our products are certified organic, grown without synthetic pesticides or fertilizers."
                },
                {
                  icon: <Truck className="h-6 w-6 mb-4" />,
                  title: "Free Delivery",
                  description: "Free delivery on orders over $50. We deliver within 24 hours to your doorstep."
                },
                {
                  icon: <ShieldCheck className="h-6 w-6 mb-4" />,
                  title: "Quality Guaranteed",
                  description: "We stand behind the quality of every product. Not satisfied? Full refund guaranteed."
                },
                {
                  icon: <RefreshCw className="h-6 w-6 mb-4" />,
                  title: "Always Fresh",
                  description: "We harvest on demand to ensure maximum freshness and nutritional value."
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center p-6 transition-all hover:translate-y-[-5px] duration-300"
                >
                  {feature.icon}
                  <h3 className="font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Products Section */}
        <FeaturedProducts />
        
        {/* About/Story Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="font-serif text-3xl font-semibold mb-6">From Our Farm to Your Table</h2>
                <p className="text-muted-foreground mb-4">
                  At Harvest, we believe in sustainable farming practices that nurture both the earth and the communities we serve. Our journey began with a simple belief: everyone deserves access to fresh, nutritious food grown with care.
                </p>
                <p className="text-muted-foreground mb-6">
                  We partner with local farmers who share our commitment to organic practices, ethical labor, and environmental stewardship. Every product that reaches your table supports this ecosystem of sustainable agriculture.
                </p>
                <Button asChild className="btn-hover-effect">
                  <Link to="/about">Our Story</Link>
                </Button>
              </div>
              
              <div className="order-1 md:order-2 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=1200&auto=format&fit=crop" 
                  alt="Farmer harvesting fresh produce" 
                  className="w-full h-auto object-cover aspect-[4/3] hover-scale"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Subscribe to our newsletter for seasonal recipes, farming insights, and exclusive offers.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
              <Button type="submit" className="whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
