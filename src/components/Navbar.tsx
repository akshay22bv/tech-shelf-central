
import { User, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-border-elevated">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Laptop className="w-8 h-8 text-brand-primary" />
            <span className="text-2xl font-bold gradient-text">TechLap</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground-muted hover:text-brand-primary transition-colors">
              Home
            </a>
            <a href="/laptops" className="text-foreground-muted hover:text-brand-primary transition-colors">
              Laptops
            </a>
            <a href="/admin" className="text-foreground-muted hover:text-brand-primary transition-colors">
              Admin
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-foreground-muted hover:text-brand-primary">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
