import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Video, 
  Brain, 
  CheckCircle, 
  Play, 
  ArrowRight,
  Clock,
  Target,
  Sparkles,
  Youtube
} from "lucide-react";

const StudyTopic = () => {
  const [topic, setTopic] = useState("");
  const [studyStage, setStudyStage] = useState<"input" | "summary" | "videos" | "quiz" | "complete">("input");
  const [progress, setProgress] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState<number | null>(null);

  // Simulated AI-generated content
  const mockSummary = {
    title: "Newton's Laws of Motion",
    content: `Newton's Laws form the foundation of classical mechanics:

**First Law (Law of Inertia)**: An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by an external force.

**Second Law**: The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass. F = ma

**Third Law**: For every action, there is an equal and opposite reaction.

These laws explain how forces affect motion and are fundamental to understanding physics, engineering, and everyday phenomena.`,
    keyPoints: [
      "Inertia explains why objects resist changes in motion",
      "Force equals mass times acceleration (F=ma)",
      "Action-reaction pairs are always equal and opposite",
      "These laws apply to all objects from atoms to planets"
    ]
  };

  const mockVideos = [
    {
      id: 1,
      title: "Newton's Laws Explained Simply",
      channel: "Physics Made Easy",
      duration: "8:45",
      difficulty: "Beginner",
      thumbnail: "🎯"
    },
    {
      id: 2,
      title: "Real-World Applications of Newton's Laws",
      channel: "Science Explorer",
      duration: "12:30",
      difficulty: "Intermediate",
      thumbnail: "🚀"
    },
    {
      id: 3,
      title: "Newton's Laws in Space",
      channel: "NASA Education",
      duration: "15:20",
      difficulty: "Advanced",
      thumbnail: "🌌"
    }
  ];

  const mockQuiz = [
    {
      id: 1,
      question: "What does Newton's First Law state?",
      options: [
        "Force equals mass times acceleration",
        "An object at rest stays at rest unless acted upon by a force",
        "For every action there is an equal and opposite reaction",
        "Gravity pulls objects toward Earth"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "What is the formula for Newton's Second Law?",
      options: [
        "F = ma",
        "E = mc²",
        "v = u + at",
        "P = mv"
      ],
      correct: 0
    },
    {
      id: 3,
      question: "Which best describes Newton's Third Law?",
      options: [
        "Objects have inertia",
        "Force causes acceleration",
        "Action and reaction forces are equal and opposite",
        "Mass affects gravitational force"
      ],
      correct: 2
    }
  ];

  const handleTopicSubmit = () => {
    if (topic.trim()) {
      setStudyStage("summary");
      setProgress(25);
    }
  };

  const handleSummaryComplete = () => {
    setStudyStage("videos");
    setProgress(50);
  };

  const handleVideosComplete = () => {
    setStudyStage("quiz");
    setProgress(75);
  };

  const handleQuizSubmit = () => {
    let correctAnswers = 0;
    mockQuiz.forEach((q, index) => {
      if (parseInt(quizAnswers[q.id]) === q.correct) {
        correctAnswers++;
      }
    });
    const finalScore = (correctAnswers / mockQuiz.length) * 100;
    setScore(finalScore);
    setProgress(100);
    setStudyStage("complete");
  };

  const resetStudy = () => {
    setTopic("");
    setStudyStage("input");
    setProgress(0);
    setQuizAnswers({});
    setScore(null);
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="neural-border mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            AI-Powered Study Mode
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Master Any <span className="hero-text">Topic</span>
          </h1>
          <p className="text-muted-foreground">
            AI-curated learning with summaries, videos, and adaptive quizzes
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Learning Progress</span>
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Topic Input Stage */}
        {studyStage === "input" && (
          <Card className="ai-card animate-slide-up">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 neural-glow">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <CardTitle>What would you like to study?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Enter a topic (e.g., Newton's Laws, Photosynthesis, React Hooks)</label>
                <Input
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Newton's Laws of Motion"
                  className="text-center text-lg py-6"
                  onKeyDown={(e) => e.key === 'Enter' && handleTopicSubmit()}
                />
              </div>
              <Button 
                onClick={handleTopicSubmit}
                disabled={!topic.trim()}
                className="w-full bg-gradient-primary hover:opacity-90 glow-effect"
                size="lg"
              >
                Start Learning with AI
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Summary Stage */}
        {studyStage === "summary" && (
          <Card className="ai-card animate-slide-up">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle>AI-Generated Summary</CardTitle>
                  <p className="text-sm text-muted-foreground">Curated content for: {topic}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-sm max-w-none">
                <h3 className="text-xl font-semibold mb-4">{mockSummary.title}</h3>
                <div className="whitespace-pre-line text-muted-foreground mb-6">
                  {mockSummary.content}
                </div>
                <h4 className="font-semibold mb-3">Key Points to Remember:</h4>
                <ul className="space-y-2">
                  {mockSummary.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button 
                onClick={handleSummaryComplete}
                className="w-full bg-gradient-primary hover:opacity-90"
                size="lg"
              >
                I've Read This - Continue to Videos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Videos Stage */}
        {studyStage === "videos" && (
          <Card className="ai-card animate-slide-up">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle>Curated Video Learning</CardTitle>
                  <p className="text-sm text-muted-foreground">AI-ordered videos from beginner to advanced</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockVideos.map((video, index) => (
                <div key={video.id} className="ai-card p-4 hover-lift group cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{video.thumbnail}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {video.title}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center">
                          <Youtube className="w-3 h-3 mr-1" />
                          {video.channel}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {video.duration}
                        </span>
                        <Badge variant="outline">{video.difficulty}</Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <Button 
                onClick={handleVideosComplete}
                className="w-full bg-gradient-primary hover:opacity-90"
                size="lg"
              >
                I've Watched the Videos - Take Quiz
                <Target className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Quiz Stage */}
        {studyStage === "quiz" && (
          <Card className="ai-card animate-slide-up">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle>Knowledge Assessment</CardTitle>
                  <p className="text-sm text-muted-foreground">Test your understanding with AI-generated questions</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {mockQuiz.map((question, index) => (
                <div key={question.id} className="space-y-3">
                  <h4 className="font-semibold">
                    {index + 1}. {question.question}
                  </h4>
                  <div className="space-y-2">
                    {question.options.map((option, optionIndex) => (
                      <label 
                        key={optionIndex}
                        className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer transition-colors"
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={optionIndex}
                          onChange={(e) => setQuizAnswers(prev => ({...prev, [question.id]: e.target.value}))}
                          className="text-primary"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <Button 
                onClick={handleQuizSubmit}
                disabled={Object.keys(quizAnswers).length !== mockQuiz.length}
                className="w-full bg-gradient-primary hover:opacity-90"
                size="lg"
              >
                Submit Quiz
                <CheckCircle className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Complete Stage */}
        {studyStage === "complete" && (
          <Card className="ai-card animate-slide-up text-center">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 neural-glow">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">
                {score && score >= 70 ? "Congratulations! 🎉" : "Good Try! 📚"}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                You scored <span className="font-bold hero-text">{score}%</span> on the quiz
              </p>
              {score && score >= 70 ? (
                <p className="text-green-500 mb-6">
                  Excellent work! You've mastered this topic. Your progress has been saved to your dashboard.
                </p>
              ) : (
                <p className="text-orange-500 mb-6">
                  You might want to review the material and try again. Learning is a process!
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={resetStudy}
                  className="bg-gradient-primary hover:opacity-90"
                >
                  Study Another Topic
                </Button>
                {score && score < 70 && (
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setStudyStage("summary");
                      setProgress(25);
                      setQuizAnswers({});
                      setScore(null);
                    }}
                  >
                    Review Material
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default StudyTopic;