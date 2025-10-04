import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, Send } from "lucide-react";

const PrayerRequestSection = () => {
  return (
    <section id="prayers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-8 md:p-12 shadow-elevated">
          <div className="text-center space-y-4 mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-sacred">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Prayer Request</h2>
            <p className="text-muted-foreground">
              Share your intentions, and our community will hold you and your loved ones in prayer. 
              Every prayer is received with love and compassion.
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                className="shadow-peaceful"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email (Optional)</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="shadow-peaceful"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="prayer">Your Prayer Request</Label>
              <Textarea
                id="prayer"
                placeholder="Share what's on your heart... We hold space for your joys, concerns, and hopes."
                rows={6}
                className="shadow-peaceful resize-none"
              />
              <p className="text-xs text-muted-foreground">
                Your request can be for yourself or for someone you care about
              </p>
            </div>

            <Button type="submit" variant="sacred" size="lg" className="w-full">
              <Send className="w-5 h-5" />
              Submit Prayer Request
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground italic">
              "Where two or three gather in prayer, divine presence resides among them"
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PrayerRequestSection;
