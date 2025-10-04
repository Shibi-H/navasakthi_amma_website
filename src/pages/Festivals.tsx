import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const festivals = [
  {
    month: "January - March",
    events: [
      { name: "Makar Sankranti", date: "Jan 14", description: "Harvest festival marking the sun's journey northward" },
      { name: "Maha Shivaratri", date: "Mar 8", description: "Great night of Shiva - fasting and night vigil" },
      { name: "Holi", date: "Mar 25", description: "Festival of colors celebrating spring and victory of good over evil" }
    ]
  },
  {
    month: "April - June",
    events: [
      { name: "Rama Navami", date: "Apr 17", description: "Birth anniversary of Lord Rama" },
      { name: "Hanuman Jayanti", date: "Apr 23", description: "Celebration of Lord Hanuman's birth" },
      { name: "Buddha Purnima", date: "May 23", description: "Birth, enlightenment, and passing of Buddha" }
    ]
  },
  {
    month: "July - September",
    events: [
      { name: "Guru Purnima", date: "Jul 21", description: "Day to honor spiritual teachers and gurus" },
      { name: "Raksha Bandhan", date: "Aug 9", description: "Celebration of brother-sister bond" },
      { name: "Krishna Janmashtami", date: "Aug 26", description: "Birth celebration of Lord Krishna" },
      { name: "Ganesh Chaturthi", date: "Sep 7", description: "Birth of Lord Ganesha - remover of obstacles" }
    ]
  },
  {
    month: "October - December",
    events: [
      { name: "Navaratri", date: "Oct 3-12", description: "Nine nights celebrating Divine Mother" },
      { name: "Dussehra", date: "Oct 12", description: "Victory of good over evil" },
      { name: "Diwali", date: "Oct 31", description: "Festival of lights - celebrating Lord Rama's return" },
      { name: "Kartik Purnima", date: "Nov 15", description: "Sacred full moon day for spiritual practices" }
    ]
  }
];

const Festivals = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6 text-gradient-sacred">
              Hindu Festival Calendar
            </h1>
            <p className="text-xl text-muted-foreground">
              Celebrate the sacred rhythm of the divine year with traditional festivals and auspicious days
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {festivals.map((season, index) => (
              <Card key={index} className="shadow-peaceful">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                  <CardTitle className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-primary" />
                    {season.month}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {season.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="border-l-4 border-primary/30 pl-4 py-2">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-lg">{event.name}</h3>
                          <span className="text-sm text-primary font-semibold">{event.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center">
              <CardContent className="pt-10 pb-10">
                <h3 className="text-2xl font-bold mb-4">Get Festival Reminders</h3>
                <p className="text-muted-foreground mb-6">
                  Never miss an important festival or auspicious day. Subscribe to receive timely notifications.
                </p>
                <Button variant="sacred" size="lg">
                  <Calendar className="w-5 h-5" />
                  Subscribe to Calendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Festivals;
