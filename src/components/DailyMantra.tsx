import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const DailyMantra = () => {
  return (
    <section className="py-16 gradient-peaceful">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-elevated border-primary/20">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-primary">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">Daily Mantra</span>
              <Sparkles className="w-5 h-5" />
            </div>

            <h3 className="text-3xl md:text-4xl font-serif text-primary italic">
              "Om Sarve Bhavantu Sukhinah"
            </h3>

            <div className="space-y-3">
              <p className="text-xl text-muted-foreground italic">
                May all beings be happy, may all beings be free from illness
              </p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                This ancient Vedic prayer reminds us of our interconnectedness and the importance of
                wishing well-being for all creatures. It cultivates compassion and universal love,
                transcending boundaries of religion, nationality, and species.
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                From the <span className="text-foreground font-medium">Brihadaranyaka Upanishad</span>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DailyMantra;
