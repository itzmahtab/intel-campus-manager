
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users, BookOpen, GraduationCap, Calendar } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Analytics = () => {
  const enrollmentData = [
    { department: "Computer Science", students: 324, growth: "+12%" },
    { department: "Engineering", students: 289, growth: "+8%" },
    { department: "Mathematics", students: 156, growth: "+5%" },
    { department: "Physics", students: 98, growth: "+15%" },
    { department: "Chemistry", students: 142, growth: "+3%" },
    { department: "Biology", students: 198, growth: "+7%" }
  ];

  const performanceMetrics = [
    { metric: "Overall Pass Rate", value: "94.2%", trend: "up", change: "+2.1%" },
    { metric: "Average GPA", value: "3.42", trend: "up", change: "+0.08" },
    { metric: "Course Completion", value: "96.8%", trend: "stable", change: "+0.3%" },
    { metric: "Student Retention", value: "89.5%", trend: "up", change: "+1.7%" }
  ];

  const coursePopularity = [
    { course: "Introduction to Computer Science", enrollment: 156, capacity: 160, utilization: "97.5%" },
    { course: "Calculus I", enrollment: 142, capacity: 150, utilization: "94.7%" },
    { course: "General Physics", enrollment: 138, capacity: 145, utilization: "95.2%" },
    { course: "English Composition", enrollment: 134, capacity: 140, utilization: "95.7%" },
    { course: "Chemistry Fundamentals", enrollment: 128, capacity: 135, utilization: "94.8%" }
  ];

  const facultyMetrics = [
    { name: "Dr. Sarah Wilson", department: "Computer Science", courses: 3, avgRating: 4.8, students: 156 },
    { name: "Prof. Michael Johnson", department: "Mathematics", courses: 4, avgRating: 4.6, students: 142 },
    { name: "Dr. Emily Brown", department: "Physics", courses: 2, avgRating: 4.7, students: 98 },
    { name: "Prof. David Clark", department: "History", courses: 3, avgRating: 4.5, students: 134 },
    { name: "Dr. Lisa Anderson", department: "Chemistry", courses: 2, avgRating: 4.9, students: 128 }
  ];

  const getTrendColor = (trend: string) => {
    if (trend === 'up') return 'text-green-600';
    if (trend === 'down') return 'text-red-600';
    return 'text-gray-600';
  };

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (trend === 'down') return <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />;
    return <div className="h-4 w-4" />;
  };

  return (
    <DashboardLayout title="Analytics">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600">University performance insights and metrics</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">Export Report</Button>
            <Button>Generate Insights</Button>
          </div>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">+123 from last semester</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">452</div>
              <p className="text-xs text-muted-foreground">Across 8 departments</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Faculty Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">186</div>
              <p className="text-xs text-muted-foreground">Full and part-time</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Graduation Rate</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">91.3%</div>
              <p className="text-xs text-muted-foreground">+2.8% from last year</p>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>Key academic performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">{metric.metric}</span>
                    {getTrendIcon(metric.trend)}
                  </div>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className={`text-sm ${getTrendColor(metric.trend)}`}>
                    {metric.change} from last period
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Department Enrollment */}
          <Card>
            <CardHeader>
              <CardTitle>Department Enrollment</CardTitle>
              <CardDescription>Student distribution across departments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {enrollmentData.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{dept.department}</p>
                      <p className="text-sm text-gray-600">{dept.students} students</p>
                    </div>
                    <Badge variant="outline" className="text-green-600">
                      {dept.growth}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Course Popularity */}
          <Card>
            <CardHeader>
              <CardTitle>Course Utilization</CardTitle>
              <CardDescription>Most popular courses by enrollment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {coursePopularity.map((course, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">{course.course}</h4>
                      <Badge>{course.utilization}</Badge>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Enrollment: {course.enrollment}/{course.capacity}</span>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: course.utilization }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Faculty Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Faculty Performance</CardTitle>
            <CardDescription>Teaching metrics and student feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Faculty Member</th>
                    <th className="text-left p-3">Department</th>
                    <th className="text-left p-3">Courses</th>
                    <th className="text-left p-3">Students</th>
                    <th className="text-left p-3">Avg Rating</th>
                    <th className="text-left p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {facultyMetrics.map((faculty, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{faculty.name}</td>
                      <td className="p-3 text-gray-600">{faculty.department}</td>
                      <td className="p-3">{faculty.courses}</td>
                      <td className="p-3">{faculty.students}</td>
                      <td className="p-3">
                        <Badge variant={faculty.avgRating >= 4.5 ? 'default' : 'secondary'}>
                          {faculty.avgRating}/5.0
                        </Badge>
                      </td>
                      <td className="p-3">
                        <Button size="sm" variant="outline">View Details</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Analytics Tools</CardTitle>
            <CardDescription>Generate detailed reports and insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <BarChart3 className="h-6 w-6 mb-2" />
                Enrollment Report
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <TrendingUp className="h-6 w-6 mb-2" />
                Performance Trends
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Users className="h-6 w-6 mb-2" />
                Faculty Analysis
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <GraduationCap className="h-6 w-6 mb-2" />
                Student Outcomes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
