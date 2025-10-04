import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-gradient-sacred">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              We're here to support your spiritual journey. Reach out to us anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-peaceful">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-sacred flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">info@divinepath.org</p>
                      <p className="text-sm text-muted-foreground">support@divinepath.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-sacred flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Toll-free: 1-800-DIVINE-1</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-sacred flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Temple Address</h3>
                      <p className="text-sm text-muted-foreground">
                        Divine Path Temple<br />
                        123 Spiritual Way<br />
                        Sacred City, SC 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-sacred flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Visiting Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 6:00 AM - 8:00 PM<br />
                        Saturday - Sunday: 5:00 AM - 9:00 PM<br />
                        Special poojas: Daily at 6 AM & 7 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">Follow Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Stay connected through our social media channels
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">Facebook</Button>
                    <Button variant="outline" size="sm">Instagram</Button>
                    <Button variant="outline" size="sm">YouTube</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-peaceful">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Name *</Label>
                    <Input id="contact-name" placeholder="Your name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input id="contact-email" type="email" placeholder="your@email.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone</Label>
                    <Input id="contact-phone" type="tel" placeholder="(555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" variant="sacred" size="lg" className="w-full">
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map placeholder */}
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-peaceful overflow-hidden">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Temple Location Map</p>
                  <p className="text-sm text-muted-foreground mt-2">Interactive map would be displayed here</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
