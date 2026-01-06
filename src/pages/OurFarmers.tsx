
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const OurFarmers = () => {
  const farmers = [
    {
      name: "Green Valley Farm",
      owner: "James & Sarah Wilson",
      location: "Riverside County",
      specialty: "Heirloom vegetables",
      bio: "Third-generation farmers who transitioned to organic methods in 2005. Known for their incredible variety of tomatoes and peppers."
    },
    {
      name: "Sunrise Orchards",
      owner: "Maria Gonzalez",
      location: "Oak Hills",
      specialty: "Stone fruits & apples",
      bio: "Maria's family has been tending these orchards for over 40 years, using integrated pest management and minimal intervention."
    },
    {
      name: "Blue Moon Dairy",
      owner: "Thomas & Emma Chen",
      location: "Pleasant Valley",
      specialty: "Artisanal cheeses & yogurt",
      bio: "A small-scale dairy operation with pasture-raised Jersey cows producing exceptionally rich milk for their award-winning cheeses."
    },
    {
      name: "Wild Honey Apiary",
      owner: "Robert Jackson",
      location: "Pine Ridge",
      specialty: "Raw honey & bee products",
      bio: "Robert maintains over 50 hives in diverse locations to produce varietal honeys while supporting pollinator populations."
    },
    {
      name: "Fertile Ground Farm",
      owner: "Amara & David Williams",
      location: "Meadow Creek",
      specialty: "Mixed vegetables & herbs",
      bio: "First-generation farmers practicing no-till methods and creating rich, biodiverse growing environments."
    },
    {
      name: "Heritage Grains",
      owner: "Michael Peterson",
      location: "Golden Fields",
      specialty: "Ancient & heirloom grains",
      bio: "Reviving forgotten grain varieties and stone-milling them fresh for maximum nutrition and flavor."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="container-custom py-12">
        <h1 className="text-4xl font-serif font-bold mb-8">Our Farmers</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground mb-8">
            Every item in our store comes from the hands of dedicated local farmers who share our values of sustainability, quality, and community. Get to know the people growing your food!
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {farmers.map((farmer) => (
              <Card key={farmer.name} className="overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="text-xl font-medium mb-1">{farmer.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4">Owned by {farmer.owner} • {farmer.location}</p>
                  <div className="bg-secondary/30 px-3 py-1 rounded-full text-xs inline-block mb-3">
                    {farmer.specialty}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {farmer.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OurFarmers;
