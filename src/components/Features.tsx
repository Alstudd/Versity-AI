import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Video, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Zap,
  Target,
  Clock,
  Award,
  Mic,
  Camera,
  BookOpen
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Content Curation",
      description: "Advanced AI algorithms analyze your learning patterns and curate the most relevant educational content.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Video,
      title: "Smart Video Learning",
      description: "Automatically ordered YouTube videos based on difficulty and relevance to your learning objectives.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageSquare,
      title: "Interactive AI Assistant",
      description: "Voice-enabled AI tutor that answers questions, provides explanations, and guides your learning journey.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive performance tracking with detailed insights into your learning progress and areas for improvement.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Proctored Assessments",
      description: "Secure, AI-monitored quizzes and exams with webcam and microphone integration for integrity.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Target,
      title: "Adaptive Learning Paths",
      description: "Personalized curriculum that adjusts difficulty and content based on your performance and preferences.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const stats = [
    { icon: Clock, value: "50%", label: "Faster Learning" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: Mic, value: "24/7", label: "AI Support" },
    { icon: Camera, value: "100%", label: "Secure Testing" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="secondary" className="neural-border mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Advanced Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Powered by <span className="hero-text">Cutting-Edge AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the next generation of education technology with features designed 
            to maximize your learning potential and career success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="ai-card hover-lift group transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 neural-glow group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="ai-card p-8 lg:p-12 neural-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Proven <span className="hero-text">Results</span>
            </h3>
            <p className="text-muted-foreground">
              Join thousands of learners who have transformed their careers with Versity.AI
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 neural-glow group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold hero-text mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* AI Learning Process */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">
            How Our <span className="hero-text">AI Works</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="ai-card p-6 hover-lift">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Analyze</h4>
              <p className="text-sm text-muted-foreground">AI analyzes your learning style and preferences</p>
            </div>
            <div className="ai-card p-6 hover-lift">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Curate</h4>
              <p className="text-sm text-muted-foreground">Personalized content selection and ordering</p>
            </div>
            <div className="ai-card p-6 hover-lift">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Adapt</h4>
              <p className="text-sm text-muted-foreground">Dynamic difficulty and pace adjustment</p>
            </div>
            <div className="ai-card p-6 hover-lift">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Optimize</h4>
              <p className="text-sm text-muted-foreground">Continuous learning path optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;