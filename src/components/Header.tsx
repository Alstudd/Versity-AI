import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Menu, 
  X, 
  Zap, 
  User,
  Settings,
  Moon,
  Sun
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 ai-card border-b border-border/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="neural-glow">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold hero-text">Versity.AI</h1>
              <p className="text-xs text-muted-foreground">AI-Powered Learning</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#courses" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Courses
            </a>
            <a href="#interview" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              AI Interview
            </a>
            <a href="#dashboard" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Dashboard
            </a>
            <Badge variant="secondary" className="neural-border">
              <Zap className="w-3 h-3 mr-1" />
              Beta
            </Badge>
          </nav>

          {/* Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90 glow-effect">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#courses" className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Courses
              </a>
              <a href="#interview" className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                AI Interview
              </a>
              <a href="#dashboard" className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Dashboard
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                <Button size="sm" className="w-full bg-gradient-primary hover:opacity-90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;