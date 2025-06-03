
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, BookOpen, Calendar } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Grades = () => {
  const courses = [
    {
      name: "Physics 101",
      instructor: "Dr. Emily Smith",
      credits: 4,
      currentGrade: "A-",
      percentage: 91.5,
      trend: "up",
      assignments: [
        { name: "Midterm Exam", score: 88, total: 100, weight: "30%", date: "2025-05-15" },
        { name: "Lab Report 1", score: 95, total: 100, weight: "15%", date: "2025-05-20" },
        { name: "Homework Set 1", score: 92, total: 100, weight: "10%", date: "2025-05-25" },
        { name: "Lab Report 2", score: 89, total: 100, weight: "15%", date: "2025-05-30" },
        { name: "Quiz 1", score: 96, total: 100, weight: "5%", date: "2025-06-01" }
      ]
    },
    {
      name: "Calculus II",
      instructor: "Prof. Michael Johnson",
      credits: 3,
      currentGrade: "B+",
      percentage: 87.2,
      trend: "stable",
      assignments: [
        { name: "Midterm Exam", score: 85, total: 100, weight: "35%", date: "2025-05-18" },
        { name: "Problem Set 1", score: 90, total: 100, weight: "20%", date: "2025-05-22" },
        { name: "Problem Set 2", score: 88, total: 100, weight: "20%", date: "2025-05-28" },
        { name: "Quiz 1", score: 92, total: 100, weight: "10%", date: "2025-06-02" }
      ]
    },
    {
      name: "Computer Science",
      instructor: "Prof. Sarah Wilson",
      credits: 4,
      currentGrade: "A",
      percentage: 94.3,
      trend: "up",
      assignments: [
        { name: "Project 1", score: 96, total: 100, weight: "25%", date: "2025-05-16" },
        { name: "Midterm Exam", score: 92, total: 100, weight: "30%", date: "2025-05-19" },
        { name: "Programming Assignment 1", score: 98, total: 100, weight: "15%", date: "2025-05-26" },
        { name: "Programming Assignment 2", score: 94, total: 100, weight: "15%", date: "2025-05-31" }
      ]
    },
    {
      name: "World History",
      instructor: "Prof. David Clark",
      credits: 3,
      currentGrade: "A",
      percentage: 93.8,
      trend: "down",
      assignments: [
        { name: "Midterm Exam", score: 91, total: 100, weight: "30%", date: "2025-05-17" },
        { name: "Essay 1", score: 95, total: 100, weight: "25%", date: "2025-05-24" },
        { name: "Discussion Posts", score: 97, total: 100, weight: "15%", date: "2025-05-29" },
        { name: "Research Project", score: 89, total: 100, weight: "20%", date: "2025-06-03" }
      ]
    }
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-green-600 bg-green-100';
    if (grade.startsWith('B')) return 'text-blue-600 bg-blue-100';
    if (grade.startsWith('C')) return 'text-yellow-600 bg-yellow-100';
    if (grade.startsWith('D')) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (trend === 'down') return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <div className="h-4 w-4" />;
  };

  const overallGPA = courses.reduce((sum, course) => {
    const gradePoints = course.currentGrade.startsWith('A') ? 4.0 : 
                       course.currentGrade.startsWith('B') ? 3.0 : 
                       course.currentGrade.startsWith('C') ? 2.0 : 1.0;
    return sum + (gradePoints * course.credits);
  }, 0) / courses.reduce((sum, course) => sum + course.credits, 0);

  return (
    <DashboardLayout title="Grades">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Grades</h1>
            <p className="text-gray-600">Track your academic performance and progress</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">Download Transcript</Button>
            <Button>Grade Calculator</Button>
          </div>
        </div>

        {/* GPA Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current GPA</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallGPA.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">+0.12 from last semester</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Credits</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {courses.reduce((sum, course) => sum + course.credits, 0)}
              </div>
              <p className="text-xs text-muted-foreground">This semester</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Courses</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.length}</div>
              <p className="text-xs text-muted-foreground">Currently enrolled</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(courses.reduce((sum, course) => sum + course.percentage, 0) / courses.length).toFixed(1)}%
              </div>
              <p className="text-xs text-muted-foreground">Across all courses</p>
            </CardContent>
          </Card>
        </div>

        {/* Course Grades */}
        <div className="space-y-6">
          {courses.map((course, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{course.name}</CardTitle>
                    <CardDescription>{course.instructor} • {course.credits} Credits</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getTrendIcon(course.trend)}
                    <Badge className={getGradeColor(course.currentGrade)}>
                      {course.currentGrade} ({course.percentage}%)
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {course.assignments.map((assignment, assignmentIndex) => (
                      <div key={assignmentIndex} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-sm">{assignment.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {assignment.weight}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Score:</span>
                            <span className="font-medium">
                              {assignment.score}/{assignment.total}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Percentage:</span>
                            <span className="font-medium">
                              {((assignment.score / assignment.total) * 100).toFixed(1)}%
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 mt-2">
                            {assignment.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Grade Distribution Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Overall Progress</span>
                      <span>{course.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          course.percentage >= 90 ? 'bg-green-500' :
                          course.percentage >= 80 ? 'bg-blue-500' :
                          course.percentage >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${course.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Grades;
