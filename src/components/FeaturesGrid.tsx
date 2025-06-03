
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Calendar, BarChart3, MessageSquare, Settings, Shield, Clock, FileText } from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Course Management",
      description: "Create, schedule, and manage courses with intelligent enrollment systems",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Student Portal",
      description: "Comprehensive student dashboard with grades, schedules, and resources",
      color: "text-green-600"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered scheduling that optimizes resource allocation and prevents conflicts",
      color: "text-purple-600"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Real-time insights into student performance and institutional metrics",
      color: "text-orange-600"
    },
    {
      icon: MessageSquare,
      title: "Communication Hub",
      description: "Integrated messaging, announcements, and notification system",
      color: "text-red-600"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Enterprise-grade security with GDPR compliance and role-based access",
      color: "text-indigo-600"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Instant synchronization across all modules and user interfaces",
      color: "text-teal-600"
    },
    {
      icon: Settings,
      title: "Admin Dashboard",
      description: "Comprehensive administrative tools for complete university oversight",
      color: "text-slate-600"
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Centralized storage and management of academic and administrative documents",
      color: "text-amber-600"
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to Manage Your University
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our comprehensive platform integrates all essential university management tools 
            into one seamless, user-friendly interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader>
                <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
