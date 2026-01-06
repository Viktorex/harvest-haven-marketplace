
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const openPositions = [
    {
      title: "Delivery Driver",
      department: "Operations",
      location: "Multiple Locations",
      type: "Full-time",
      description: "Join our delivery team to bring fresh, organic produce directly to our customers' doors."
    },
    {
      title: "Warehouse Associate",
      department: "Operations",
      location: "Central Warehouse",
      type: "Full-time",
      description: "Help receive, sort, and package incoming produce from our network of local farms."
    },
    {
      title: "Customer Service Representative",
      department: "Customer Experience",
      location: "Remote",
      type: "Part-time",
      description: "Provide exceptional support to our customers via phone, email, and chat."
    },
    {
      title: "Marketing Coordinator",
      department: "Marketing",
      location: "Main Office",
      type: "Full-time",
      description: "Create engaging content and campaigns to tell the story of our farmers and products."
    },
    {
      title: "Farm Relationship Manager",
      department: "Sourcing",
      location: "Field-based",
      type: "Full-time",
      description: "Build and maintain relationships with our partner farms, ensuring quality and sustainable practices."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="container-custom py-12">
        <h1 className="text-4xl font-serif font-bold mb-8">Join Our Team</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">Why Work With Us</h2>
            <p className="text-muted-foreground mb-6">
              At Harvest, we're building a more sustainable food system while creating rewarding careers for our team members. We offer competitive compensation, comprehensive benefits, and the opportunity to make a real difference in your community.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-secondary/50 p-5 rounded-lg">
                <h3 className="font-medium mb-2">Mission-Driven Work</h3>
                <p className="text-sm text-muted-foreground">
                  Be part of a company that's making a positive impact on people and the planet.
                </p>
              </div>
              <div className="bg-secondary/50 p-5 rounded-lg">
                <h3 className="font-medium mb-2">Team Culture</h3>
                <p className="text-sm text-muted-foreground">
                  Join a diverse, collaborative team that values creativity and personal growth.
                </p>
              </div>
              <div className="bg-secondary/50 p-5 rounded-lg">
                <h3 className="font-medium mb-2">Benefits</h3>
                <p className="text-sm text-muted-foreground">
                  Enjoy health insurance, paid time off, employee discounts, and regular team events.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-6">Open Positions</h2>
            
            <div className="space-y-4">
              {openPositions.map((position) => (
                <Card key={position.title} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-lg font-medium">{position.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {position.department} • {position.location} • {position.type}
                        </p>
                        <p className="text-sm my-2">
                          {position.description}
                        </p>
                      </div>
                      <Button className="mt-4 md:mt-0 md:ml-4 whitespace-nowrap">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Careers;
