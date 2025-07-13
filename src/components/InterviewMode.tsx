import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  MessageSquare, 
  Mic, 
  MicOff, 
  Play, 
  Square,
  Brain,
  CheckCircle,
  FileText,
  BarChart3,
  Clock,
  Star,
  Volume2,
  Camera,
  AlertCircle
} from "lucide-react";

interface InterviewQuestion {
  id: number;
  question: string;
  expectedPoints: string[];
  difficulty: "Easy" | "Medium" | "Hard";
}

const InterviewMode = () => {
  const [interviewStage, setInterviewStage] = useState<"setup" | "interview" | "evaluation" | "report">("setup");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [responses, setResponses] = useState<string[]>([]);
  const [aiAnalysis, setAiAnalysis] = useState<any>(null);

  // Mock interview questions
  const interviewQuestions: InterviewQuestion[] = [
    {
      id: 1,
      question: "Can you explain Newton's First Law and give a real-world example?",
      expectedPoints: [
        "Law of inertia",
        "Object at rest stays at rest",
        "Object in motion stays in motion",
        "Unless acted upon by external force",
        "Real-world example (car braking, etc.)"
      ],
      difficulty: "Easy"
    },
    {
      id: 2,
      question: "How would you apply Newton's Second Law to calculate the force needed to accelerate a 1000kg car from 0 to 60 mph in 10 seconds?",
      expectedPoints: [
        "F = ma formula",
        "Convert mph to m/s",
        "Calculate acceleration",
        "Apply formula correctly",
        "Final answer with units"
      ],
      difficulty: "Medium"
    },
    {
      id: 3,
      question: "Describe a situation where Newton's Third Law is crucial in engineering design, and explain the implications if this law didn't exist.",
      expectedPoints: [
        "Action-reaction pairs",
        "Engineering application",
        "Rocket propulsion example",
        "Structural considerations",
        "Hypothetical implications"
      ],
      difficulty: "Hard"
    }
  ];

  // Mock AI responses for demonstration
  const mockResponses = [
    "Newton's First Law states that an object at rest will stay at rest, and an object in motion will stay in motion at constant velocity, unless acted upon by an external force. This is also known as the law of inertia. A good example is when you're in a car that suddenly stops - your body continues moving forward due to inertia until the seatbelt applies a force to stop you.",
    "Newton's Second Law is F equals m times a. First, I need to convert 60 mph to meters per second, which is about 26.8 m/s. The acceleration would be 26.8 divided by 10, which is 2.68 m/s². Then F equals 1000 kg times 2.68 m/s², which gives us 2,680 Newtons of force needed.",
    "Newton's Third Law is crucial in rocket design. When a rocket burns fuel and expels gas downward, the gas pushes back on the rocket with equal force, propelling it upward. In structural engineering, when designing bridges, every force the bridge exerts on its supports creates an equal and opposite reaction force. If this law didn't exist, rockets couldn't work in space, and structures would be impossible to design safely."
  ];

  const startInterview = () => {
    setInterviewStage("interview");
  };

  const handleRecordingToggle = () => {
    if (!isRecording) {
      // Start recording
      setIsRecording(true);
      // In a real app, this would start actual recording
    } else {
      // Stop recording and simulate AI processing
      setIsRecording(false);
      
      // Simulate processing delay
      setTimeout(() => {
        const newResponses = [...responses];
        newResponses[currentQuestion] = mockResponses[currentQuestion];
        setResponses(newResponses);
      }, 2000);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < interviewQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Interview complete, generate report
      generateReport();
    }
  };

  const generateReport = () => {
    setInterviewStage("evaluation");
    
    // Simulate AI analysis
    setTimeout(() => {
      setAiAnalysis({
        overallScore: 85,
        scores: {
          technical: 90,
          communication: 80,
          completeness: 85
        },
        feedback: [
          {
            question: 1,
            score: 90,
            feedback: "Excellent explanation with clear real-world example. Good understanding of inertia concept.",
            improvements: "Could mention more specific examples from different domains."
          },
          {
            question: 2,
            score: 85,
            feedback: "Correct application of formula and unit conversion. Mathematical approach is sound.",
            improvements: "Could explain the physical meaning of the calculated force."
          },
          {
            question: 3,
            score: 80,
            feedback: "Good engineering application with rocket example. Shows understanding of practical implications.",
            improvements: "Could explore more structural engineering examples."
          }
        ],
        strengths: [
          "Strong mathematical problem-solving skills",
          "Clear communication and explanation",
          "Good use of real-world examples",
          "Solid understanding of physics concepts"
        ],
        recommendations: [
          "Practice more complex engineering applications",
          "Work on providing multiple examples per concept",
          "Enhance explanations with visual aids when possible"
        ]
      });
      setInterviewStage("report");
    }, 3000);
  };

  const resetInterview = () => {
    setInterviewStage("setup");
    setCurrentQuestion(0);
    setResponses([]);
    setAiAnalysis(null);
    setIsRecording(false);
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="neural-border mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            AI Interview Simulation
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Practice with <span className="hero-text">AI Interviewer</span>
          </h1>
          <p className="text-muted-foreground">
            Realistic mock interviews with intelligent feedback and detailed analysis
          </p>
        </div>

        {/* Setup Stage */}
        {interviewStage === "setup" && (
          <Card className="ai-card animate-slide-up">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 neural-glow">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <CardTitle>Interview Setup</CardTitle>
              <p className="text-muted-foreground">
                Prepare for your AI-powered mock interview on Newton's Laws
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Permissions Check */}
              <div className="space-y-4">
                <h3 className="font-semibold flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-orange-500" />
                  Required Permissions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="ai-card p-4">
                    <div className="flex items-center space-x-3">
                      <Mic className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium">Microphone Access</p>
                        <p className="text-sm text-muted-foreground">For voice responses</p>
                      </div>
                    </div>
                  </div>
                  <div className="ai-card p-4">
                    <div className="flex items-center space-x-3">
                      <Camera className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium">Camera Access</p>
                        <p className="text-sm text-muted-foreground">For proctoring (optional)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interview Details */}
              <div className="space-y-4">
                <h3 className="font-semibold">Interview Details</h3>
                <div className="ai-card p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Topic:</span>
                    <span className="font-medium">Newton's Laws of Motion</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Questions:</span>
                    <span className="font-medium">{interviewQuestions.length} questions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">~15 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Difficulty:</span>
                    <span className="font-medium">Mixed (Easy to Hard)</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={startInterview}
                className="w-full bg-gradient-primary hover:opacity-90 glow-effect"
                size="lg"
              >
                Start AI Interview
                <Play className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Interview Stage */}
        {interviewStage === "interview" && (
          <div className="space-y-6">
            {/* Progress */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">
                  Question {currentQuestion + 1} of {interviewQuestions.length}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round(((currentQuestion + 1) / interviewQuestions.length) * 100)}%
                </span>
              </div>
              <Progress value={((currentQuestion + 1) / interviewQuestions.length) * 100} className="h-2" />
            </div>

            <Card className="ai-card animate-slide-up">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle>AI Interviewer</CardTitle>
                      <Badge variant="outline">{interviewQuestions[currentQuestion].difficulty}</Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Volume2 className="w-4 h-4 mr-2" />
                    Speak
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="text-lg leading-relaxed">
                    {interviewQuestions[currentQuestion].question}
                  </p>
                </div>

                {/* Recording Interface */}
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <Button
                      onClick={handleRecordingToggle}
                      className={`w-20 h-20 rounded-full ${
                        isRecording 
                          ? "bg-red-500 hover:bg-red-600 animate-pulse" 
                          : "bg-gradient-primary hover:opacity-90"
                      } glow-effect`}
                      size="lg"
                    >
                      {isRecording ? (
                        <Square className="w-8 h-8 text-white" />
                      ) : (
                        <Mic className="w-8 h-8 text-white" />
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {isRecording ? "Recording... Click to stop" : "Click to start recording your answer"}
                  </p>
                </div>

                {/* Response Display */}
                {responses[currentQuestion] && (
                  <div className="space-y-3">
                    <h4 className="font-semibold">Your Response:</h4>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm">{responses[currentQuestion]}</p>
                    </div>
                    <Button 
                      onClick={nextQuestion}
                      className="w-full bg-gradient-primary hover:opacity-90"
                    >
                      {currentQuestion < interviewQuestions.length - 1 ? "Next Question" : "Complete Interview"}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Evaluation Stage */}
        {interviewStage === "evaluation" && (
          <Card className="ai-card animate-slide-up text-center">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 neural-glow animate-pulse">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">AI Analysis in Progress</h2>
              <p className="text-muted-foreground mb-6">
                Our advanced AI is analyzing your responses for technical accuracy, 
                communication clarity, and completeness...
              </p>
              <div className="space-y-3 max-w-md mx-auto">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Speech-to-text conversion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Technical accuracy assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 border-2 border-primary rounded-full animate-spin" />
                  <span className="text-sm">Communication analysis</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Report Stage */}
        {interviewStage === "report" && aiAnalysis && (
          <div className="space-y-6">
            {/* Overall Score */}
            <Card className="ai-card animate-slide-up text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 neural-glow">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-2">
                  Overall Score: <span className="hero-text">{aiAnalysis.overallScore}%</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  {aiAnalysis.overallScore >= 80 ? "Excellent Performance! 🎉" : 
                   aiAnalysis.overallScore >= 60 ? "Good Performance! 👍" : "Keep Practicing! 💪"}
                </p>
              </CardContent>
            </Card>

            {/* Detailed Scores */}
            <Card className="ai-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Performance Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(aiAnalysis.scores).map(([category, score]) => (
                  <div key={category} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="capitalize font-medium">{category}</span>
                      <span className="font-bold">{score as number}%</span>
                    </div>
                    <Progress value={score as number} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Question-by-Question Feedback */}
            <Card className="ai-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Detailed Feedback
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {aiAnalysis.feedback.map((item: any, index: number) => (
                  <div key={index} className="ai-card p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">Question {item.question}</h4>
                    <Badge variant={item.score >= 80 ? "default" : "secondary"}>
                      {item.score}%
                    </Badge>
                    </div>
                    <p className="text-sm text-green-600 mb-2">✓ {item.feedback}</p>
                    <p className="text-sm text-orange-600">💡 {item.improvements}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Strengths and Recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="ai-card animate-slide-up">
                <CardHeader>
                  <CardTitle className="text-green-600">Strengths</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {aiAnalysis.strengths.map((strength: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="ai-card animate-slide-up">
                <CardHeader>
                  <CardTitle className="text-orange-600">Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {aiAnalysis.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={resetInterview}
                className="bg-gradient-primary hover:opacity-90"
              >
                Practice Another Interview
              </Button>
              <Button variant="outline">
                Save Report to Dashboard
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewMode;