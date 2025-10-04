import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    text: "This platform has become my daily spiritual companion. The morning mantras set the perfect tone for my day, and the scripture explanations are so accessible.",
    role: "Devotee"
  },
  {
    name: "Raj Patel",
    location: "London, UK",
    text: "Being far from home, this website helps me stay connected to my roots. The prayer guides are detailed yet easy to follow, even for my children learning our traditions.",
    role: "Community Member"
  },
  {
    name: "Anita Desai",
    location: "New York, USA",
    text: "The prayer request feature touched my heart deeply. During difficult times, knowing others are praying for you creates such a powerful sense of community and support.",
    role: "Seeker"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="community" className="py-20 gradient-peaceful">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Devotee Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our community members about their spiritual journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6 space-y-4 shadow-peaceful hover:shadow-divine transition-sacred">
              <Quote className="w-10 h-10 text-primary opacity-50" />
              
              <p className="text-muted-foreground italic leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                <p className="text-xs text-primary mt-1">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
