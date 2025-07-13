import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  GraduationCap, 
  MessageSquare, 
  ArrowRight,
  Brain,
  Video,
  CheckCircle,
  Mic,
  BarChart3,
  Zap
} from "lucide-react";

const PathSelection = () => {
  const paths = [
    {
      id: "study",
      icon: BookOpen,
      title: "Study a Topic",
      description: "AI-curated learning with videos, summaries, and adaptive quizzes",
      features: [
        "Newton's Law, Biology, etc.",
        "AI-generated summaries",
        "Curated YouTube videos",
        "Adaptive quizzing system",
        "Real-time progress tracking"
      ],
      color: "from-blue-500 to-purple-600",
      badge: "Quick Start",
      buttonText: "Start Studying"
    },
    {
      id: "course",
      icon: GraduationCap,
      title: "Complete a Course",
      description: "Structured learning paths with personalized pacing and proctored assessments",
      features: [
        "Personalized daily schedules",
        "Fast/Slow pace options",
        "Proctored quizzes",
        "AI performance tracking",
        "Dynamic difficulty adjustment"
      ],
      color: "from-green-500 to-teal-600",
      badge: "Most Popular",
      buttonText: "Browse Courses"
    },
    {
      id: "interview",
      icon: MessageSquare,
      title: "AI Interview Mode",
      description: "Realistic mock interviews with AI voice assistant and detailed feedback",
      features: [
        "Voice-based AI interviews",
        "Technical question practice",
        "Real-time answer evaluation",
        "Comprehensive reports",
        "Interview readiness score"
      ],
      color: "from-purple-500 to-pink-600",
      badge: "Advanced",
      buttonText: "Practice Interview"
    }
  ];

  const handlePathSelect = (pathId: string) => {
    const routes = {
      study: '/study',
      course: '/course',
      interview: '/interview'
    };
    window.location.href = routes[pathId as keyof typeof routes];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="secondary" className="neural-border mb-4">
            <Brain className="w-4 h-4 mr-2" />
            Choose Your Learning Path
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Three Ways to <span className="hero-text">Master Knowledge</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you want to explore a specific topic, complete a structured course, 
            or prepare for interviews, we have the perfect AI-powered path for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {paths.map((path, index) => {
            const IconComponent = path.icon;
            return (
              <Card 
                key={path.id} 
                className={`ai-card hover-lift group cursor-pointer transition-all duration-500 animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => handlePathSelect(path.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${path.color} rounded-2xl flex items-center justify-center neural-glow group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="absolute -top-2 -right-8 text-xs neural-border"
                    >
                      {path.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">{path.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {path.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {path.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full bg-gradient-to-r ${path.color} hover:opacity-90 glow-effect group-hover:shadow-lg transition-all duration-300`}
                    size="lg"
                  >
                    {path.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features Row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center ai-card p-6 hover-lift">
            <Video className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Video Learning</h4>
            <p className="text-sm text-muted-foreground">Curated YouTube content</p>
          </div>
          <div className="text-center ai-card p-6 hover-lift">
            <Mic className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Voice AI</h4>
            <p className="text-sm text-muted-foreground">Interactive voice assistant</p>
          </div>
          <div className="text-center ai-card p-6 hover-lift">
            <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Analytics</h4>
            <p className="text-sm text-muted-foreground">Smart progress tracking</p>
          </div>
          <div className="text-center ai-card p-6 hover-lift">
            <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Adaptive</h4>
            <p className="text-sm text-muted-foreground">Personalized difficulty</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathSelection;