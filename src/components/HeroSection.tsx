import { Button } from "@/components/ui/button";
import { Calendar, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-temple.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Welcome to Your
              <span className="block text-gradient-sacred">Spiritual Journey</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
              Discover ancient wisdom, connect with divine teachings, and nurture your soul through
              sacred scriptures, prayers, and community.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="sacred" size="lg">
              <BookOpen className="w-5 h-5" />
              Explore Scriptures
            </Button>
            <Button variant="outline" size="lg">
              <Calendar className="w-5 h-5" />
              Festival Calendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
