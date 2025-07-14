import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  Brain, 
  Trophy, 
  Clock, 
  Target,
  TrendingUp,
  BookOpen,
  MessageSquare,
  GraduationCap,
  Calendar,
  Star,
  Zap,
  Award,
  Activity
} from "lucide-react";

const Dashboard = () => {
  // Mock data for demonstration
  const stats = {
    totalStudyTime: 45,
    coursesCompleted: 3,
    topicsStudied: 12,
    interviewsPracticed: 8,
    averageQuizScore: 87,
    streakDays: 15
  };

  const recentActivity = [
    {
      type: "course",
      title: "Classical Mechanics - Day 5",
      score: 92,
      date: "Today",
      icon: GraduationCap
    },
    {
      type: "topic",
      title: "Newton's Laws Quiz",
      score: 85,
      date: "Yesterday",
      icon: BookOpen
    },
    {
      type: "interview",
      title: "Physics Interview Practice",
      score: 88,
      date: "2 days ago",
      icon: MessageSquare
    }
  ];

  const courseProgress = [
    {
      title: "Classical Mechanics Mastery",
      progress: 75,
      nextLesson: "Energy and Work",
      timeLeft: "2 weeks"
    },
    {
      title: "Calculus Fundamentals",
      progress: 45,
      nextLesson: "Integration Techniques",
      timeLeft: "4 weeks"
    }
  ];

  const achievements = [
    { title: "Quiz Master", description: "Scored 90%+ on 5 consecutive quizzes", icon: Trophy, unlocked: true },
    { title: "Study Streak", description: "15 day learning streak", icon: Zap, unlocked: true },
    { title: "Interview Pro", description: "Completed 10 mock interviews", icon: MessageSquare, unlocked: false },
    { title: "Course Crusher", description: "Complete 5 full courses", icon: GraduationCap, unlocked: false }
  ];

  const weeklyProgress = [
    { day: "Mon", hours: 2.5, completed: true },
    { day: "Tue", hours: 1.8, completed: true },
    { day: "Wed", hours: 3.2, completed: true },
    { day: "Thu", hours: 2.1, completed: true },
    { day: "Fri", hours: 1.5, completed: true },
    { day: "Sat", hours: 0, completed: false },
    { day: "Sun", hours: 0, completed: false }
  ];

  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                Learning <span className="hero-text">Dashboard</span>
              </h1>
              <p className="text-muted-foreground">Track your progress and achievements</p>
            </div>
            <Badge variant="secondary" className="neural-border">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Analytics
            </Badge>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="ai-card hover-lift">
            <CardContent className="p-4 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold hero-text">{stats.totalStudyTime}h</div>
              <div className="text-xs text-muted-foreground">Study Time</div>
            </CardContent>
          </Card>
          <Card className="ai-card hover-lift">
            <CardContent className="p-4 text-center">
              <GraduationCap className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold hero-text">{stats.coursesCompleted}</div>
              <div className="text-xs text-muted-foreground">Courses</div>
            </CardContent>
          </Card>
          <Card className="ai-card hover-lift">
            <CardContent className="p-4 text-center">
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold hero-text">{stats.topicsStudied}</div>
              <div className="text-xs text-muted-foreground">Topics</div>
            </CardContent>
          </Card>
          <Card className="ai-card hover-lift">
            <CardContent className="p-4 text-center">
              <MessageSquare className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold hero-text">{stats.interviewsPracticed}</div>
              <div className="text-xs text-muted-foreground">Interviews</div>
            </CardContent>
          </Card>
          <Card className="ai-card hover-lift">
            <CardContent className="p-4 text-center">
              <Target className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold hero-text">{stats.averageQuizScore}%</div>
              <div className="text-xs text-muted-foreground">Avg Score</div>
            </CardContent>
          </Card>
          <Card className="ai-card hover-lift">
            <CardContent className="p-4 text-center">
              <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold hero-text">{stats.streakDays}</div>
              <div className="text-xs text-muted-foreground">Day Streak</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Weekly Progress */}
            <Card className="ai-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  This Week's Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {weeklyProgress.map((day, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xs text-muted-foreground mb-2">{day.day}</div>
                      <div className={`h-20 rounded-lg flex items-end justify-center p-2 ${
                        day.completed 
                          ? 'bg-gradient-primary text-white' 
                          : 'bg-muted/50 border-2 border-dashed border-border'
                      }`}>
                        {day.completed && (
                          <div className="text-xs font-bold">{day.hours}h</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  Total this week: <span className="font-semibold">11.1 hours</span>
                </div>
              </CardContent>
            </Card>

            {/* Course Progress */}
            <Card className="ai-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Active Courses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {courseProgress.map((course, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{course.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          Next: {course.nextLesson}
                        </p>
                      </div>
                      <Badge variant="outline">{course.timeLeft}</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-semibold">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View All Courses
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="ai-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const IconComponent = activity.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activity.type === 'course' ? 'bg-gradient-to-r from-green-500 to-teal-500' :
                        activity.type === 'topic' ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
                        'bg-gradient-to-r from-purple-500 to-pink-500'
                      }`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{activity.title}</h4>
                        <p className="text-xs text-muted-foreground">{activity.date}</p>
                      </div>
                      <Badge variant="secondary">
                        {activity.score}%
                      </Badge>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* AI Insights */}
            <Card className="ai-card neural-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2" />
                  AI Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="ai-card p-4 bg-gradient-to-r from-primary/10 to-secondary/10">
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-sm font-medium">Peak Performance Time</p>
                      <p className="text-xs text-muted-foreground">
                        You learn best between 2-4 PM. Schedule complex topics during this time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ai-card p-4 bg-gradient-to-r from-green-500/10 to-teal-500/10">
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <p className="text-sm font-medium">Strong Progress</p>
                      <p className="text-xs text-muted-foreground">
                        Your quiz scores improved 15% this week. Keep up the great work!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ai-card p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10">
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-orange-500 mt-1" />
                    <div>
                      <p className="text-sm font-medium">Focus Area</p>
                      <p className="text-xs text-muted-foreground">
                        Consider more practice with calculus integration problems.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="ai-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div 
                      key={index} 
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                        achievement.unlocked 
                          ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20' 
                          : 'opacity-50'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        achievement.unlocked 
                          ? 'bg-gradient-primary text-white' 
                          : 'bg-muted'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{achievement.title}</p>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                      {achievement.unlocked && (
                        <Badge variant="secondary" className="text-xs">
                          Unlocked
                        </Badge>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="ai-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-primary hover:opacity-90" size="sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Study New Topic
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Practice Interview
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;