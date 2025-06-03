
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Users, Clock, MapPin, Search } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const courses = [
    {
      id: 1,
      name: "Introduction to Computer Science",
      code: "CS 101",
      instructor: "Dr. Sarah Wilson",
      department: "Computer Science",
      credits: 4,
      schedule: "MWF 10:00-11:00 AM",
      location: "Tech Center 302",
      enrolled: 45,
      capacity: 50,
      description: "Fundamental concepts of computer science including programming, algorithms, and data structures."
    },
    {
      id: 2,
      name: "Calculus II",
      code: "MATH 152",
      instructor: "Prof. Michael Johnson",
      department: "Mathematics",
      credits: 3,
      schedule: "TTh 2:00-3:30 PM",
      location: "Math Building 201",
      enrolled: 38,
      capacity: 40,
      description: "Continuation of calculus including integration techniques, series, and differential equations."
    },
    {
      id: 3,
      name: "Physics I",
      code: "PHYS 101",
      instructor: "Dr. Emily Brown",
      department: "Physics",
      credits: 4,
      schedule: "MWF 9:00-10:00 AM",
      location: "Science Building 205",
      enrolled: 42,
      capacity: 45,
      description: "Classical mechanics covering motion, forces, energy, and momentum."
    },
    {
      id: 4,
      name: "World History",
      code: "HIST 101",
      instructor: "Prof. David Clark",
      department: "History",
      credits: 3,
      schedule: "TTh 11:00-12:30 PM",
      location: "Liberal Arts 150",
      enrolled: 35,
      capacity: 40,
      description: "Survey of world civilizations from ancient times to the present."
    },
    {
      id: 5,
      name: "Organic Chemistry",
      code: "CHEM 201",
      instructor: "Dr. Lisa Anderson",
      department: "Chemistry",
      credits: 4,
      schedule: "MWF 1:00-2:00 PM",
      location: "Chemistry Lab 301",
      enrolled: 28,
      capacity: 30,
      description: "Study of carbon-based compounds and their reactions."
    },
    {
      id: 6,
      name: "English Literature",
      code: "ENG 201",
      instructor: "Prof. Robert Taylor",
      department: "English",
      credits: 3,
      schedule: "TTh 3:30-5:00 PM",
      location: "Liberal Arts 225",
      enrolled: 32,
      capacity: 35,
      description: "Analysis of major works in English literature from various periods."
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getEnrollmentStatus = (enrolled: number, capacity: number) => {
    const percentage = (enrolled / capacity) * 100;
    if (percentage >= 90) return { status: 'Full', variant: 'destructive' as const };
    if (percentage >= 70) return { status: 'Almost Full', variant: 'default' as const };
    return { status: 'Available', variant: 'secondary' as const };
  };

  return (
    <DashboardLayout title="Course Catalog">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Course Catalog</h1>
            <p className="text-gray-600">Browse and manage available courses</p>
          </div>
          <Button>Add New Course</Button>
        </div>

        {/* Search Bar */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search courses by name, code, instructor, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Course Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.length}</div>
              <p className="text-xs text-muted-foreground">Active this semester</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Enrollment</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.reduce((sum, course) => sum + course.enrolled, 0)}</div>
              <p className="text-xs text-muted-foreground">Students enrolled</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available Spots</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {courses.reduce((sum, course) => sum + (course.capacity - course.enrolled), 0)}
              </div>
              <p className="text-xs text-muted-foreground">Open enrollment slots</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Departments</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Set(courses.map(course => course.department)).size}
              </div>
              <p className="text-xs text-muted-foreground">Academic departments</p>
            </CardContent>
          </Card>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const enrollmentStatus = getEnrollmentStatus(course.enrolled, course.capacity);
            return (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <CardDescription>{course.code} • {course.credits} Credits</CardDescription>
                    </div>
                    <Badge variant={enrollmentStatus.variant}>
                      {enrollmentStatus.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {course.instructor}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {course.schedule}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {course.location}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Enrollment:</span>
                      <span className="font-medium">{course.enrolled}/{course.capacity}</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-3">{course.description}</p>
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" className="flex-1">View Details</Button>
                      <Button size="sm" variant="outline">Enroll</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredCourses.length === 0 && (
          <Card>
            <CardContent className="text-center py-8">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or browse all courses.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Courses;
