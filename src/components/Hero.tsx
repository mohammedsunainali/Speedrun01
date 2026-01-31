import { Button } from "./ui/button";
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";
import heroImage from "figma:asset/7071c64dc6cefcd376f88d511d4f86eea827d693.png";

export function Hero() {
  const scrollToSchedule = () => {
    document.getElementById('what-you-learn')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl tracking-tight text-black leading-[1.1]">
                Build your startup from 0 → 1 in a single day.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A day-long workshop where founders validate, build, and launch an MVP — leave with a working product and a demo-ready customer pitch.
              </p>
              <div className="flex items-center gap-3 text-gray-700 flex-wrap">
                <span className="inline-flex items-center">25th October 2025</span>
                <span className="text-gray-400">•</span>
                <span className="inline-flex items-center">Bangalore</span>
                <span className="text-gray-400">•</span>
                <span className="inline-flex items-center">
                  <span className="line-through text-gray-400 mr-2">₹4999</span>
                  <span className="text-[#FF6B00]">₹499 (Intro Offer)</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#FF6B00] hover:bg-[#E55F00] text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={() => window.open('https://forms.google.com', '_blank')}
              >
                Apply Now — ₹499
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 hover:border-gray-900 px-8 py-6 rounded-xl transition-all duration-200"
                onClick={scrollToSchedule}
              >
                View Schedule
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Founders collaborating at Startup Speedrun Workshop" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="mt-24 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF6B00]/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-[#FF6B00]" />
              </div>
              <div>
                <div className="text-2xl text-black">15+ years</div>
                <div className="text-sm text-gray-600">Building products</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF6B00]/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#FF6B00]" />
              </div>
              <div>
                <div className="text-2xl text-black">30+ products</div>
                <div className="text-sm text-gray-600">Launched and scaled</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF6B00]/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#FF6B00]" />
              </div>
              <div>
                <div className="text-2xl text-black">$20M+ raised</div>
                <div className="text-sm text-gray-600">Helped founders in 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}