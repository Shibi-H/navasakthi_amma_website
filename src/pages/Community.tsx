import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Heart, Users, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const forumTopics = [
  {
    title: "Understanding Karma and Dharma",
    replies: 24,
    category: "Philosophy",
    lastActive: "2 hours ago"
  },
  {
    title: "Daily Meditation Practices",
    replies: 18,
    category: "Spiritual Practice",
    lastActive: "5 hours ago"
  },
  {
    title: "Preparing for Navratri Festival",
    replies: 31,
    category: "Festivals",
    lastActive: "1 day ago"
  }
];

const Community = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6 text-gradient-sacred">
              Community & Support
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect with fellow devotees, share your journey, and grow together in faith
            </p>
          </div>

          {/* Community Forum */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-primary" />
              Community Forum
            </h2>
            <div className="space-y-4 mb-6">
              {forumTopics.map((topic, index) => (
                <Card key={index} className="shadow-peaceful hover:shadow-divine transition-sacred cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                            {topic.category}
                          </span>
                          <span>{topic.replies} replies</span>
                          <span>Last active {topic.lastActive}</span>
                        </div>
                      </div>
                      <Button variant="ghost">View Discussion</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button variant="sacred" size="lg" className="w-full md:w-auto">
              Start New Discussion
            </Button>
          </div>

          {/* Prayer Request Form */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="shadow-peaceful">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                <CardTitle className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-primary" />
                  Submit a Prayer Request
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Share your prayer intentions with our community. We hold all requests with love and confidentiality.
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prayerFor">Prayer For</Label>
                    <Input id="prayerFor" placeholder="Yourself, family member, friend..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="request">Your Prayer Request</Label>
                    <Textarea 
                      id="request" 
                      placeholder="Share your prayer intentions..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" variant="sacred" size="lg">
                    Submit Prayer Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Volunteer Opportunities */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <HandHeart className="w-8 h-8 text-primary" />
              Volunteer Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Content Translation",
                  description: "Help translate scriptures and prayers into various languages",
                  commitment: "Flexible hours"
                },
                {
                  title: "Event Coordination",
                  description: "Assist in organizing virtual and in-person spiritual events",
                  commitment: "5-10 hours/month"
                },
                {
                  title: "Community Moderation",
                  description: "Support and guide community members in forum discussions",
                  commitment: "2-5 hours/week"
                }
              ].map((opportunity, index) => (
                <Card key={index} className="shadow-peaceful">
                  <CardHeader>
                    <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{opportunity.description}</p>
                    <p className="text-sm font-semibold mb-4">
                      Time Commitment: {opportunity.commitment}
                    </p>
                    <Button variant="outline" className="w-full">
                      Apply to Volunteer
                    </Button>
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

export default Community;
