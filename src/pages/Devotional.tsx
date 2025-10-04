import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, BookOpen, Flower2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const poojaGuides = [
  {
    title: "Daily Morning Pooja",
    duration: "15-20 minutes",
    difficulty: "Beginner",
    items: ["Oil lamp", "Incense", "Flowers", "Water", "Sandalwood paste"],
    description: "Simple daily worship ritual for home practice"
  },
  {
    title: "Ganesh Pooja",
    duration: "30-45 minutes",
    difficulty: "Intermediate",
    items: ["Ganesh murti", "Modak", "Durva grass", "Red flowers", "Fruits"],
    description: "Invocation of Lord Ganesha for removing obstacles"
  },
  {
    title: "Lakshmi Pooja",
    duration: "45-60 minutes",
    difficulty: "Intermediate",
    items: ["Lakshmi idol", "Lotus flowers", "Gold items", "Sweets", "Coins"],
    description: "Worship of Goddess Lakshmi for prosperity and abundance"
  }
];

const prayers = [
  {
    title: "Gayatri Mantra",
    category: "Universal Prayer",
    audio: true,
    lyrics: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥"
  },
  {
    title: "Mahamrityunjaya Mantra",
    category: "Healing & Protection",
    audio: true,
    lyrics: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥"
  },
  {
    title: "Shanti Mantra",
    category: "Peace Prayer",
    audio: true,
    lyrics: "ॐ सह नाववतु सह नौ भुनक्तु सह वीर्यं करवावहै"
  }
];

const Devotional = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Flower2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6 text-gradient-sacred">
              Devotional Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need for your spiritual practice - prayers, chants, and pooja guides
            </p>
          </div>

          {/* Pooja Guides Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-primary" />
              Step-by-Step Pooja Guides
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {poojaGuides.map((guide, index) => (
                <Card key={index} className="shadow-peaceful hover:shadow-divine transition-sacred">
                  <CardHeader>
                    <CardTitle className="text-xl">{guide.title}</CardTitle>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {guide.duration}
                      </span>
                      <span className="text-xs bg-accent/10 text-accent-foreground px-2 py-1 rounded">
                        {guide.difficulty}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                    <div className="mb-4">
                      <p className="text-sm font-semibold mb-2">Required Items:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {guide.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" className="w-full">
                      View Full Guide
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Prayers and Chants Section */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Music className="w-8 h-8 text-primary" />
              Sacred Prayers & Chants
            </h2>
            <div className="space-y-4">
              {prayers.map((prayer, index) => (
                <Card key={index} className="shadow-peaceful hover:shadow-divine transition-sacred">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{prayer.title}</h3>
                        <p className="text-sm text-primary mb-3">{prayer.category}</p>
                        <p className="font-serif text-lg mb-4 leading-relaxed">{prayer.lyrics}</p>
                      </div>
                      <Button variant="sacred" size="icon" className="shrink-0">
                        <Play className="w-5 h-5" />
                      </Button>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <Button variant="outline" size="sm">
                        View Translation
                      </Button>
                      <Button variant="outline" size="sm">
                        Download Audio
                      </Button>
                      <Button variant="outline" size="sm">
                        View Meaning
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Devotional;
