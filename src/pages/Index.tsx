import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PathSelection from "@/components/PathSelection";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        <PathSelection />
        <Features />
      </main>
      
      {/* Footer */}
      <footer className="ai-card border-t border-border/50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold hero-text mb-4">Ready to Transform Your Learning?</h3>
            <p className="text-muted-foreground mb-6">Join thousands of learners who are already mastering new skills with AI.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3 rounded-lg glow-effect font-semibold">
                Start Your Journey
              </button>
              <button className="border border-border hover:bg-muted/50 px-8 py-3 rounded-lg transition-colors">
                Book a Demo
              </button>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Versity.AI. All rights reserved. Powered by Advanced AI Technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
