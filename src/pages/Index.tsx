
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Calendar, BarChart3, MessageSquare, Settings, GraduationCap, Clock, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import DashboardPreview from "@/components/DashboardPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      <HeroSection />
      <FeaturesGrid />
      <DashboardPreview />
      
      {/* Statistics Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <p className="text-gray-600">System Uptime</p>
            </CardContent>
          </Card>
          <Card className="text-center border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">50k+</div>
              <p className="text-gray-600">Students Managed</p>
            </CardContent>
          </Card>
          <Card className="text-center border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
              <p className="text-gray-600">Universities Served</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-8 w-8 mr-2 text-blue-400" />
            <span className="text-xl font-bold">Smart University</span>
          </div>
          <p className="text-slate-400 mb-4">Revolutionizing university management through intelligent technology</p>
          <p className="text-sm text-slate-500">© 2025 Smart University Management. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
