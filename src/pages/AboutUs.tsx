
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main className="container-custom py-12">
        <h1 className="text-4xl font-serif font-bold mb-8">About Us</h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">Our Story</h2>
            <p className="text-muted-foreground">
              Founded in 2010, Harvest began with a simple mission: to connect local organic farmers directly with consumers who care about the quality of their food and its impact on the environment. What started as a small farm-to-table initiative has grown into a thriving marketplace serving thousands of customers while maintaining our core values.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              We envision a food system where sustainable agriculture is the norm, not the exception. Where every family has access to fresh, nutritious food grown with respect for the earth. Where farmers earn fair wages for their hard work, and communities thrive through local food economies.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-medium mb-2">Sustainability</h3>
                <p className="text-sm text-muted-foreground">
                  From farm practices to packaging choices, we prioritize environmental responsibility in everything we do.
                </p>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-medium mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">
                  We strengthen local food systems by creating meaningful connections between producers and consumers.
                </p>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-medium mb-2">Transparency</h3>
                <p className="text-sm text-muted-foreground">
                  We believe you deserve to know exactly where your food comes from and how it was grown.
                </p>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-medium mb-2">Quality</h3>
                <p className="text-sm text-muted-foreground">
                  We never compromise on the freshness, flavor, and nutritional value of our products.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
