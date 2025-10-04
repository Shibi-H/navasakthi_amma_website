import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ganeshaImage from "@/assets/deity-ganesha.jpg";
import lakshmiImage from "@/assets/deity-lakshmi.jpg";

const deities = [
  {
    name: "Lord Ganesha",
    title: "Remover of Obstacles",
    description: "The elephant-headed deity who brings wisdom, prosperity, and removes barriers on your spiritual path.",
    image: ganeshaImage,
    symbolism: ["Wisdom", "New Beginnings", "Success"]
  },
  {
    name: "Goddess Lakshmi",
    title: "Divine Mother of Prosperity",
    description: "The goddess of wealth, fortune, and abundance who blesses devotees with both material and spiritual prosperity.",
    image: lakshmiImage,
    symbolism: ["Abundance", "Grace", "Purity"]
  }
];

const DeityShowcase = () => {
  return (
    <section id="deities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Sacred Deities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the divine manifestations and their profound teachings
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {deities.map((deity) => (
            <Card key={deity.name} className="overflow-hidden shadow-peaceful hover:shadow-elevated transition-sacred">
              <div className="aspect-[4/5] relative">
                <img
                  src={deity.image}
                  alt={deity.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-card-foreground">
                  <h3 className="text-2xl font-bold mb-1">{deity.name}</h3>
                  <p className="text-primary font-medium">{deity.title}</p>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground">{deity.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {deity.symbolism.map((symbol) => (
                    <span
                      key={symbol}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {symbol}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeityShowcase;
