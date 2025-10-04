import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Flower2, Book, Users } from "lucide-react";

const donationOptions = [
  {
    icon: Flower2,
    title: "Sponsor Daily Pooja",
    description: "Support daily temple rituals and offerings",
    amount: "$25"
  },
  {
    icon: Book,
    title: "Support Education",
    description: "Help preserve and teach sacred scriptures",
    amount: "$50"
  },
  {
    icon: Users,
    title: "Community Programs",
    description: "Fund spiritual retreats and gatherings",
    amount: "$100"
  }
];

const DonateSection = () => {
  return (
    <section className="py-20 gradient-divine relative overflow-hidden">
      <div className="absolute inset-0 bg-background/90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Support Our Sacred Mission
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
            Your generous contributions help us maintain the temple, support spiritual education,
            and serve the community with love and devotion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {donationOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card key={index} className="text-center hover:shadow-elevated transition-sacred">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-full gradient-sacred mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{option.description}</p>
                  <p className="text-2xl font-bold text-primary mb-4">{option.amount}</p>
                  <Button variant="outline" className="w-full">
                    Donate Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="donate" className="shadow-elevated">
            <Heart className="w-5 h-5" />
            Make a Custom Donation
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            All donations are tax-deductible. Thank you for your generosity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
