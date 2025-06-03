
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
          🎓 Smart University Management v2.0
        </Badge>
        
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Transform Your
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> University </span>
          Operations
        </h1>
        
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Streamline course management, enhance student experience, and boost administrative efficiency 
          with our comprehensive university management platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-slate-300">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-1 shadow-2xl">
            <div className="bg-white rounded-xl p-8">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="h-3 bg-slate-200 rounded"></div>
                <div className="h-3 bg-blue-200 rounded"></div>
                <div className="h-3 bg-slate-200 rounded"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                <div className="h-4 bg-slate-100 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
