import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Brain, 
  Zap, 
  Target, 
  Sparkles,
  Play
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-glow animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "4s" }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          {/* Badge */}
          <Badge variant="secondary" className="neural-border mx-auto">
            <Sparkles className="w-4 h-4 mr-2" />
            Powered by Advanced AI
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            The Future of
            <span className="block hero-text">Personalized Learning</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Master any subject with AI-powered video learning, adaptive quizzes, 
            and realistic interview simulations. Your personal AI tutor that adapts to your pace.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="ai-card p-4 hover-lift">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-2">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">AI-Powered</h3>
              <p className="text-sm text-muted-foreground">Smart content curation</p>
            </div>
            <div className="ai-card p-4 hover-lift">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-2">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Personalized</h3>
              <p className="text-sm text-muted-foreground">Adapts to your learning style</p>
            </div>
            <div className="ai-card p-4 hover-lift">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-2">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Interactive</h3>
              <p className="text-sm text-muted-foreground">Real-time feedback</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 glow-effect neural-pulse text-lg px-8 py-6"
            >
              Start Learning Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="neural-border text-lg px-8 py-6"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 mt-12">
            <div className="text-sm">🚀 10,000+ Students</div>
            <div className="text-sm">⭐ 4.9/5 Rating</div>
            <div className="text-sm">🧠 AI-Powered</div>
            <div className="text-sm">📚 1000+ Courses</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;