import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Scroll, Sparkles } from "lucide-react";
import scripturesImage from "@/assets/scriptures.jpg";

const scriptures = [
  {
    title: "Bhagavad Gita",
    description: "The timeless dialogue between Lord Krishna and Arjuna on the battlefield of Kurukshetra",
    icon: BookOpen,
    chapters: 18
  },
  {
    title: "Upanishads",
    description: "Ancient philosophical texts revealing the nature of ultimate reality and the self",
    icon: Scroll,
    chapters: 108
  },
  {
    title: "Ramayana",
    description: "The epic tale of Lord Rama's journey, teaching dharma, devotion, and righteousness",
    icon: Sparkles,
    chapters: 24
  }
];

const ScriptureSection = () => {
  return (
    <section id="scriptures" className="py-20 gradient-peaceful">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Sacred Scriptures</h2>
              <p className="text-lg text-muted-foreground">
                Dive deep into the eternal wisdom of Hindu sacred texts, complete with translations, 
                commentaries, and profound insights for modern life.
              </p>
            </div>

            <div className="space-y-4">
              {scriptures.map((scripture) => (
                <Card key={scripture.title} className="p-5 shadow-peaceful hover:shadow-divine transition-sacred">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <scripture.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{scripture.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{scripture.description}</p>
                      <span className="text-xs text-primary font-medium">{scripture.chapters} Chapters</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Button variant="sacred" size="lg" className="w-full sm:w-auto">
              <BookOpen className="w-5 h-5" />
              Explore All Scriptures
            </Button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 gradient-sacred opacity-20 blur-3xl" />
              <img
                src={scripturesImage}
                alt="Sacred Scriptures"
                className="relative rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptureSection;
