
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Schedule = () => {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  const scheduleData = {
    'Monday': {
      '9:00 AM': { course: 'Physics 101', location: 'Science 205', instructor: 'Dr. Smith' },
      '11:00 AM': { course: 'Calculus II', location: 'Math 101', instructor: 'Prof. Johnson' },
      '2:00 PM': { course: 'Computer Science', location: 'Tech 302', instructor: 'Prof. Wilson' }
    },
    'Tuesday': {
      '10:00 AM': { course: 'Chemistry Lab', location: 'Chem Lab 201', instructor: 'Dr. Anderson' },
      '2:00 PM': { course: 'World History', location: 'Liberal Arts 150', instructor: 'Prof. Clark' }
    },
    'Wednesday': {
      '9:00 AM': { course: 'Physics 101', location: 'Science 205', instructor: 'Dr. Smith' },
      '11:00 AM': { course: 'Calculus II', location: 'Math 101', instructor: 'Prof. Johnson' },
      '1:00 PM': { course: 'Physics Lab', location: 'Lab 302', instructor: 'Dr. Smith' }
    },
    'Thursday': {
      '10:00 AM': { course: 'Chemistry Lab', location: 'Chem Lab 201', instructor: 'Dr. Anderson' },
      '2:00 PM': { course: 'World History', location: 'Liberal Arts 150', instructor: 'Prof. Clark' },
      '3:30 PM': { course: 'English Literature', location: 'Liberal Arts 225', instructor: 'Prof. Taylor' }
    },
    'Friday': {
      '9:00 AM': { course: 'Physics 101', location: 'Science 205', instructor: 'Dr. Smith' },
      '11:00 AM': { course: 'Calculus II', location: 'Math 101', instructor: 'Prof. Johnson' },
      '2:00 PM': { course: 'Computer Science', location: 'Tech 302', instructor: 'Prof. Wilson' }
    }
  };

  const upcomingEvents = [
    { title: 'Physics Midterm Exam', date: '2025-06-10', time: '9:00 AM', location: 'Science 205' },
    { title: 'Math Assignment Due', date: '2025-06-12', time: '11:59 PM', location: 'Online' },
    { title: 'Computer Science Project Demo', date: '2025-06-15', time: '2:00 PM', location: 'Tech 302' },
    { title: 'History Essay Due', date: '2025-06-18', time: '11:59 PM', location: 'Online' }
  ];

  return (
    <DashboardLayout title="Schedule">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Schedule</h1>
            <p className="text-gray-600">Your weekly class schedule and upcoming events</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">Export</Button>
            <Button>Add Event</Button>
          </div>
        </div>

        {/* Weekly Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Schedule</CardTitle>
            <CardDescription>Your classes for this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-6 gap-1 min-w-[800px]">
                {/* Header */}
                <div className="p-3 font-medium text-center bg-gray-50">Time</div>
                {weekDays.map(day => (
                  <div key={day} className="p-3 font-medium text-center bg-gray-50">{day}</div>
                ))}
                
                {/* Time slots */}
                {timeSlots.map(time => (
                  <React.Fragment key={time}>
                    <div className="p-3 text-sm text-gray-600 bg-gray-50 text-center">{time}</div>
                    {weekDays.map(day => {
                      const classData = scheduleData[day as keyof typeof scheduleData]?.[time];
                      return (
                        <div key={`${day}-${time}`} className="p-1 border border-gray-200 min-h-[60px]">
                          {classData && (
                            <div className="bg-blue-100 border border-blue-200 rounded p-2 h-full">
                              <div className="text-xs font-medium text-blue-900">{classData.course}</div>
                              <div className="text-xs text-blue-700">{classData.location}</div>
                              <div className="text-xs text-blue-600">{classData.instructor}</div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Classes */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Classes</CardTitle>
              <CardDescription>Monday, June 3, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(scheduleData.Monday).map(([time, classData]) => (
                  <div key={time} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="flex flex-col items-center">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span className="text-xs text-gray-600">{time}</span>
                      </div>
                      <div>
                        <p className="font-medium">{classData.course}</p>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-3 w-3 mr-1" />
                          {classData.location}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline">In 2 hours</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Important dates and deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        {event.date} at {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-3 w-3 mr-1" />
                        {event.location}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Details</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Classes This Week</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Across 4 courses</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Free Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground">Available this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Study Groups</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Scheduled sessions</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Deadlines</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Schedule;
