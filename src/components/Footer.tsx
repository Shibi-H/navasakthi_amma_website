import { Button } from "@/components/ui/button";
import { Heart, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full gradient-sacred flex items-center justify-center">
                <span className="text-2xl">🕉️</span>
              </div>
              <h3 className="text-xl font-bold">Divine Path</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Your spiritual companion for daily wisdom, sacred teachings, and divine connection.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#deities" className="text-muted-foreground hover:text-primary transition-sacred">Deities</a></li>
              <li><a href="#scriptures" className="text-muted-foreground hover:text-primary transition-sacred">Scriptures</a></li>
              <li><a href="#prayers" className="text-muted-foreground hover:text-primary transition-sacred">Prayers</a></li>
              <li><a href="#community" className="text-muted-foreground hover:text-primary transition-sacred">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-sacred">Festival Calendar</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-sacred">Pooja Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-sacred">Audio Chants</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-sacred">Articles</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Stay Connected</h4>
            <p className="text-sm text-muted-foreground">
              Receive daily wisdom and festival reminders
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Divine Path. All rights reserved.
            </p>
            <Button variant="donate" size="sm">
              <Heart className="w-4 h-4" />
              Support Our Mission
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
