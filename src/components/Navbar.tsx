import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-peaceful">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-sacred flex items-center justify-center">
              <span className="text-2xl">🕉️</span>
            </div>
            <h1 className="text-2xl font-bold text-gradient-sacred">Divine Path</h1>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#deities" className="text-foreground/80 hover:text-primary transition-sacred">
              Deities
            </a>
            <a href="#scriptures" className="text-foreground/80 hover:text-primary transition-sacred">
              Scriptures
            </a>
            <a href="#prayers" className="text-foreground/80 hover:text-primary transition-sacred">
              Prayers
            </a>
            <a href="#community" className="text-foreground/80 hover:text-primary transition-sacred">
              Community
            </a>
            <Button variant="donate" size="sm">
              <Heart className="w-4 h-4" />
              Donate
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
