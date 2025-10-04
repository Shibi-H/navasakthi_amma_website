import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Maha Shivaratri Celebration",
    date: "March 8, 2025",
    time: "5:00 AM - 12:00 PM",
    location: "Main Temple Hall",
    description: "Night-long vigil with special puja and abhishekam"
  },
  {
    title: "Holi Festival of Colors",
    date: "March 25, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Temple Grounds",
    description: "Celebrate the victory of good over evil with colors and joy"
  },
  {
    title: "Weekly Bhajan Sandhya",
    date: "Every Saturday",
    time: "6:00 PM - 8:00 PM",
    location: "Prayer Hall",
    description: "Join us for devotional singing and spiritual discourses"
  }
];

const UpcomingEvents = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient-sacred">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us in celebrating sacred festivals and spiritual gatherings
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-divine transition-sacred">
              <CardHeader>
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{event.location}</span>
                </div>
                <p className="text-sm pt-2">{event.description}</p>
                <Button variant="outline" className="w-full mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
