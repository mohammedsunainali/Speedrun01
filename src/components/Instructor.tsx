import { Button } from "./ui/button";
import { Linkedin, Award, Briefcase, TrendingUp } from "lucide-react";

export function Instructor() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl text-black mb-6">
            Meet Your Mentor — PK
          </h2>
        </div>

        {/* Profile Card */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Avatar Placeholder */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#E55F00] flex items-center justify-center text-white text-4xl shadow-lg">
                PK
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                PK has over 15 years of experience and has built 30+ products. He's worked at a YC startup, helped founders raise $20M in 2025, and leads Clean Design Company.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center md:items-start">
                  <Award className="w-6 h-6 text-[#FF6B00] mb-2" />
                  <div className="text-sm text-gray-600">15+ Years</div>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <Briefcase className="w-6 h-6 text-[#FF6B00] mb-2" />
                  <div className="text-sm text-gray-600">30+ Products</div>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <TrendingUp className="w-6 h-6 text-[#FF6B00] mb-2" />
                  <div className="text-sm text-gray-600">$20M+ Raised</div>
                </div>
              </div>

              <Button 
                variant="outline"
                className="border-2 border-gray-300 hover:border-[#FF6B00] hover:text-[#FF6B00] px-6 py-5 rounded-xl transition-all"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                View PK on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}