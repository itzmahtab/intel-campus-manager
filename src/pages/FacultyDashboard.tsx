
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Clock, MessageSquare, Calendar } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const FacultyDashboard = () => {
  const myCourses = [
    { name: "Physics 101", students: 45, section: "A", time: "MWF 9:00-10:00" },
    { name: "Advanced Physics", students: 23, section: "B", time: "TTh 2:00-3:30" },
    { name: "Physics Lab", students: 30, section: "C", time: "W 1:00-4:00" },
  ];

  const pendingGrading = [
    { assignment: "Midterm Exam", course: "Physics 101", submitted: 42, total: 45 },
    { assignment: "Lab Report #3", course: "Physics Lab", submitted: 28, total: 30 },
    { assignment: "Problem Set 5", course: "Advanced Physics", submitted: 23, total: 23 },
  ];

  const todaysClasses = [
    { course: "Physics 101", time: "9:00 AM", room: "Science 205", students: 45 },
    { course: "Physics Lab", time: "1:00 PM", room: "Lab 302", students: 30 },
  ];

  const recentMessages = [
    { from: "John Smith", subject: "Question about assignment", time: "2 hours ago" },
    { from: "Sarah Wilson", subject: "Office hours request", time: "4 hours ago" },
    { from: "Mike Johnson", subject: "Grade inquiry", time: "1 day ago" },
  ];

  return (
    <DashboardLayout title="Faculty Portal">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Faculty Dashboard</h1>
          <p className="text-gray-600">Manage your courses and student interactions.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98</div>
              <p className="text-xs text-muted-foreground">Across 3 courses</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">This semester</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Grading</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">17</div>
              <p className="text-xs text-muted-foreground">Assignments to grade</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Unread messages</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Classes */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Classes</CardTitle>
              <CardDescription>Your schedule for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todaysClasses.map((class_, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{class_.course}</p>
                      <p className="text-sm text-gray-600">{class_.room} • {class_.students} students</p>
                    </div>
                    <Badge variant="outline">{class_.time}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Messages */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
              <CardDescription>Student communications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMessages.map((message, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{message.from}</p>
                      <p className="text-sm text-gray-600">{message.subject}</p>
                    </div>
                    <span className="text-xs text-gray-500">{message.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Courses */}
        <Card>
          <CardHeader>
            <CardTitle>My Courses</CardTitle>
            <CardDescription>Courses you're teaching this semester</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {myCourses.map((course, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{course.name}</h3>
                    <Badge>Section {course.section}</Badge>
                  </div>
                  <p className="text-sm text-gray-600">{course.time}</p>
                  <p className="text-sm text-gray-500">{course.students} students</p>
                  <Button size="sm" className="mt-2 w-full">Manage Course</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Grading */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Grading</CardTitle>
            <CardDescription>Assignments waiting for your review</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingGrading.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{item.assignment}</p>
                    <p className="text-sm text-gray-600">{item.course}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={item.submitted === item.total ? "default" : "secondary"}>
                      {item.submitted}/{item.total}
                    </Badge>
                    <Button size="sm">Grade</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default FacultyDashboard;
