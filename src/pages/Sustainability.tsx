
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const Sustainability = () => {
  return (
    <>
      <Navbar />
      <main className="container-custom py-12">
        <h1 className="text-4xl font-serif font-bold mb-8">Our Sustainability Commitment</h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">Responsible Farming</h2>
            <p className="text-muted-foreground">
              All of our partner farms practice organic, regenerative agriculture that builds soil health, promotes biodiversity, and sequesters carbon. We believe that healthy soil creates healthy food, healthy people, and a healthy planet.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">Reducing Food Miles</h2>
            <p className="text-muted-foreground">
              By sourcing exclusively from local farms within a 100-mile radius, we dramatically reduce the carbon footprint associated with transporting food. This means fresher produce for you and fewer emissions for our planet.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">Packaging & Waste</h2>
            <p className="text-muted-foreground mb-4">
              We're committed to minimizing waste throughout our supply chain. Our initiatives include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Compostable or reusable packaging for all products</li>
              <li>A container return program with a deposit system</li>
              <li>Partnerships with local composting facilities</li>
              <li>Repurposing "imperfect" produce that would otherwise go to waste</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">Water Conservation</h2>
            <p className="text-muted-foreground">
              Our partner farms implement advanced irrigation techniques and water management practices that use up to 60% less water than conventional farming methods, while still producing abundant, high-quality crops.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Sustainability;
