import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Deities", path: "/#deities" },
    { name: "Festivals", path: "/festivals" },
    { name: "Devotional", path: "/devotional" },
    { name: "Community", path: "/community" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-peaceful">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-sacred flex items-center justify-center">
              <span className="text-2xl">🕉️</span>
            </div>
            <h1 className="text-2xl font-bold text-gradient-sacred">Divine Path</h1>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-foreground/80 hover:text-primary transition-sacred"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="donate" size="sm" onClick={() => navigate("/community")}>
              <Heart className="w-4 h-4" />
              Donate
            </Button>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-4 space-y-3 border-t border-border mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-foreground/80 hover:text-primary transition-sacred py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="donate" size="sm" className="w-full" onClick={() => {
              navigate("/community");
              setMobileMenuOpen(false);
            }}>
              <Heart className="w-4 h-4" />
              Donate
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
