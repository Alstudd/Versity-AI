import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { 
  GraduationCap, 
  Calendar, 
  Clock, 
  Target,
  Play,
  CheckCircle,
  Book,
  Video,
  Brain,
  BarChart3,
  Zap,
  Camera,
  Mic,
  Trophy,
  TrendingUp
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  topics: string[];
}

const CourseComplete = () => {
  const [courseStage, setCourseStage] = useState<"selection" | "preferences" | "daily-plan" | "learning" | "quiz" | "progress">("selection");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [preferences, setPreferences] = useState({
    pace: "medium" as "slow" | "medium" | "fast",
    dailyHours: [1],
    duration: [30] // days
  });
  const [currentDay, setCurrentDay] = useState(1);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [dailyProgress, setDailyProgress] = useState(0);

  // Mock courses
  const courses: Course[] = [
    {
      id: "physics-mechanics",
      title: "Classical Mechanics Mastery",
      description: "Complete course covering Newton's Laws, Energy, Momentum, and Rotational Motion with real-world applications.",
      duration: "6 weeks",
      lessons: 24,
      difficulty: "Intermediate",
      topics: ["Newton's Laws", "Energy & Work", "Momentum", "Rotational Motion", "Oscillations", "Gravitation"]
    },
    {
      id: "calculus-fundamentals",
      title: "Calculus Fundamentals",
      description: "From limits to integrals, master the fundamentals of differential and integral calculus with practical applications.",
      duration: "8 weeks",
      lessons: 32,
      difficulty: "Intermediate",
      topics: ["Limits", "Derivatives", "Applications of Derivatives", "Integration", "Applications of Integrals", "Sequences & Series"]
    },
    {
      id: "chemistry-organic",
      title: "Organic Chemistry Complete",
      description: "Comprehensive organic chemistry course covering structure, reactions, and mechanisms with laboratory applications.",
      duration: "10 weeks",
      lessons: 40,
      difficulty: "Advanced",
      topics: ["Structure & Bonding", "Alkanes & Alkenes", "Aromatic Compounds", "Functional Groups", "Reactions", "Mechanisms"]
    }
  ];

  // Mock daily lessons for selected course
  const dailyLessons = selectedCourse ? [
    {
      day: 1,
      title: "Introduction to Forces",
      type: "video",
      duration: "45 min",
      completed: completedLessons.includes(1)
    },
    {
      day: 1,
      title: "Force Vectors Quiz",
      type: "quiz",
      duration: "15 min",
      completed: completedLessons.includes(2)
    },
    {
      day: 2,
      title: "Newton's First Law Deep Dive",
      type: "video",
      duration: "50 min",
      completed: completedLessons.includes(3)
    },
    {
      day: 2,
      title: "Inertia Applications",
      type: "practice",
      duration: "20 min",
      completed: completedLessons.includes(4)
    }
  ] : [];

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setCourseStage("preferences");
  };

  const handlePreferencesSubmit = () => {
    setCourseStage("daily-plan");
  };

  const startLearning = () => {
    setCourseStage("learning");
  };

  const completeLesson = (lessonId: number) => {
    setCompletedLessons(prev => [...prev, lessonId]);
    
    // Update daily progress
    const todayLessons = dailyLessons.filter(lesson => lesson.day === currentDay);
    const completedToday = todayLessons.filter(lesson => completedLessons.includes(lessonId) || lesson.completed).length + 1;
    setDailyProgress((completedToday / todayLessons.length) * 100);
    
    // Check if day is complete
    if (completedToday >= todayLessons.length) {
      setCourseStage("quiz");
    }
  };

  const completeQuiz = () => {
    setCourseStage("progress");
  };

  const nextDay = () => {
    setCurrentDay(prev => prev + 1);
    setDailyProgress(0);
    setCourseStage("learning");
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="neural-border mb-4">
            <GraduationCap className="w-4 h-4 mr-2" />
            Structured Learning Paths
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Complete a <span className="hero-text">Course</span>
          </h1>
          <p className="text-muted-foreground">
            Structured, AI-personalized learning with daily schedules and proctored assessments
          </p>
        </div>

        {/* Course Selection */}
        {courseStage === "selection" && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-center mb-8">Choose Your Course</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card 
                  key={course.id} 
                  className="ai-card hover-lift cursor-pointer group"
                  onClick={() => handleCourseSelect(course)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{course.difficulty}</Badge>
                      <Badge variant="secondary">{course.duration}</Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{course.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span className="flex items-center">
                        <Book className="w-4 h-4 mr-1" />
                        {course.lessons} lessons
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Topics covered:</p>
                      <div className="flex flex-wrap gap-1">
                        {course.topics.slice(0, 3).map((topic, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                        {course.topics.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{course.topics.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Preferences Setup */}
        {courseStage === "preferences" && selectedCourse && (
          <Card className="ai-card max-w-2xl mx-auto animate-slide-up">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 neural-glow">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle>Customize Your Learning Experience</CardTitle>
              <p className="text-muted-foreground">
                Let's personalize {selectedCourse.title} for your schedule and goals
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Learning Pace */}
              <div className="space-y-4">
                <label className="text-sm font-medium">Learning Pace</label>
                <div className="grid grid-cols-3 gap-3">
                  {["slow", "medium", "fast"].map((pace) => (
                    <button
                      key={pace}
                      onClick={() => setPreferences(prev => ({...prev, pace: pace as any}))}
                      className={`p-4 rounded-lg border transition-all ${
                        preferences.pace === pace 
                          ? "border-primary bg-primary/10 text-primary" 
                          : "border-border hover:bg-muted/50"
                      }`}
                    >
                      <div className="text-center">
                        <div className="font-medium capitalize">{pace}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {pace === "slow" ? "Thorough & detailed" : 
                           pace === "medium" ? "Balanced approach" : 
                           "Quick & efficient"}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Daily Study Time */}
              <div className="space-y-4">
                <label className="text-sm font-medium">
                  Daily Study Time: {preferences.dailyHours[0]} hour{preferences.dailyHours[0] > 1 ? 's' : ''} per day
                </label>
                <Slider
                  value={preferences.dailyHours}
                  onValueChange={(value) => setPreferences(prev => ({...prev, dailyHours: value}))}
                  min={0.5}
                  max={4}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>30 min</span>
                  <span>4 hours</span>
                </div>
              </div>

              {/* Course Duration */}
              <div className="space-y-4">
                <label className="text-sm font-medium">
                  Complete course in: {preferences.duration[0]} days
                </label>
                <Slider
                  value={preferences.duration}
                  onValueChange={(value) => setPreferences(prev => ({...prev, duration: value}))}
                  min={14}
                  max={90}
                  step={7}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>2 weeks</span>
                  <span>3 months</span>
                </div>
              </div>

              <Button 
                onClick={handlePreferencesSubmit}
                className="w-full bg-gradient-primary hover:opacity-90 glow-effect"
                size="lg"
              >
                Generate My Learning Plan
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Daily Plan Preview */}
        {courseStage === "daily-plan" && selectedCourse && (
          <Card className="ai-card max-w-4xl mx-auto animate-slide-up">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 neural-glow">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <CardTitle>Your Personalized Learning Plan</CardTitle>
              <p className="text-muted-foreground">
                AI-generated daily schedule for {selectedCourse.title}
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Plan Summary */}
              <div className="ai-card p-6 space-y-4">
                <h3 className="font-semibold text-lg">Plan Overview</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold hero-text">{preferences.duration[0]}</div>
                    <div className="text-sm text-muted-foreground">Total Days</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold hero-text">{preferences.dailyHours[0]}h</div>
                    <div className="text-sm text-muted-foreground">Daily Study</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold hero-text">{selectedCourse.lessons}</div>
                    <div className="text-sm text-muted-foreground">Total Lessons</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold hero-text">{preferences.pace}</div>
                    <div className="text-sm text-muted-foreground">Learning Pace</div>
                  </div>
                </div>
              </div>

              {/* Sample Daily Schedule */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Sample Daily Schedule (Day 1-2)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2].map((day) => (
                    <div key={day} className="ai-card p-4">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Day {day}
                      </h4>
                      <div className="space-y-3">
                        {dailyLessons.filter(lesson => lesson.day === day).map((lesson, index) => (
                          <div key={index} className="flex items-center space-x-3 p-2 rounded border border-border/50">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              lesson.type === 'video' ? 'bg-blue-500/20' :
                              lesson.type === 'quiz' ? 'bg-green-500/20' : 'bg-purple-500/20'
                            }`}>
                              {lesson.type === 'video' ? <Video className="w-4 h-4" /> :
                               lesson.type === 'quiz' ? <CheckCircle className="w-4 h-4" /> :
                               <Target className="w-4 h-4" />}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">{lesson.title}</p>
                              <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={startLearning}
                className="w-full bg-gradient-primary hover:opacity-90 glow-effect"
                size="lg"
              >
                Start My Course Journey
                <Play className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Daily Learning */}
        {courseStage === "learning" && selectedCourse && (
          <div className="space-y-6">
            {/* Daily Progress */}
            <Card className="ai-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Day {currentDay} - {selectedCourse.title}</h2>
                  <Badge variant="secondary">
                    {Math.round(dailyProgress)}% Complete
                  </Badge>
                </div>
                <Progress value={dailyProgress} className="h-3" />
              </CardContent>
            </Card>

            {/* Today's Lessons */}
            <Card className="ai-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="w-5 h-5 mr-2" />
                  Today's Lessons
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {dailyLessons.filter(lesson => lesson.day === currentDay).map((lesson, index) => (
                  <div 
                    key={index} 
                    className={`ai-card p-4 hover-lift cursor-pointer transition-all ${
                      lesson.completed ? 'opacity-50 bg-green-500/10' : ''
                    }`}
                    onClick={() => !lesson.completed && completeLesson(index + 1)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        lesson.type === 'video' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                        lesson.type === 'quiz' ? 'bg-gradient-to-r from-green-500 to-teal-500' : 
                        'bg-gradient-to-r from-purple-500 to-pink-500'
                      }`}>
                        {lesson.type === 'video' ? <Video className="w-6 h-6 text-white" /> :
                         lesson.type === 'quiz' ? <CheckCircle className="w-6 h-6 text-white" /> :
                         <Target className="w-6 h-6 text-white" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{lesson.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {lesson.duration}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {lesson.type}
                          </Badge>
                        </div>
                      </div>
                      {lesson.completed ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <Button variant="ghost" size="sm">
                          <Play className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Proctoring Notice */}
            <Card className="ai-card border-orange-200 dark:border-orange-800">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <Camera className="w-5 h-5 text-orange-500" />
                    <Mic className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Proctored Learning Session</p>
                    <p className="text-xs text-muted-foreground">
                      Camera and microphone monitoring active for quiz sessions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Daily Quiz */}
        {courseStage === "quiz" && (
          <Card className="ai-card max-w-2xl mx-auto animate-slide-up text-center">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 neural-glow">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Daily Assessment Complete!</h2>
              <p className="text-muted-foreground mb-6">
                Great job! You've completed all lessons for Day {currentDay}. 
                Your AI-proctored quiz score: <span className="font-bold text-primary">92%</span>
              </p>
              <Button 
                onClick={completeQuiz}
                className="bg-gradient-primary hover:opacity-90 glow-effect"
                size="lg"
              >
                View Progress & Continue
                <TrendingUp className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Progress Dashboard */}
        {courseStage === "progress" && selectedCourse && (
          <div className="space-y-6">
            {/* Overall Progress */}
            <Card className="ai-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  Course Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold hero-text mb-2">
                      {Math.round((currentDay / preferences.duration[0]) * 100)}%
                    </div>
                    <p className="text-sm text-muted-foreground">Course Complete</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold hero-text mb-2">{currentDay}</div>
                    <p className="text-sm text-muted-foreground">Days Studied</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold hero-text mb-2">92%</div>
                    <p className="text-sm text-muted-foreground">Avg Quiz Score</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Progress value={(currentDay / preferences.duration[0]) * 100} className="h-3" />
                </div>
              </CardContent>
            </Card>

            {/* Performance Analytics */}
            <Card className="ai-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Performance Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Quiz Performance</span>
                    <span className="font-semibold">Excellent (90%+)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Study Consistency</span>
                    <span className="font-semibold">Perfect Streak</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>AI Difficulty Adjustment</span>
                    <span className="font-semibold">+15% Increased</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Continue Learning */}
            <div className="text-center">
              <Button 
                onClick={nextDay}
                className="bg-gradient-primary hover:opacity-90 glow-effect"
                size="lg"
              >
                Continue to Day {currentDay + 1}
                <Zap className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseComplete;