import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function ApplySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-[#FF6B00] px-4 py-2 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B00]"></span>
            </span>
            <span className="uppercase tracking-wide">Applications Open</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-black mb-6 tracking-tight">
            Apply for Startup Speedrun
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're curating a small, focused batch of founders. Fill the form to apply — selected participants will get a confirmation call.
          </p>
        </div>

        {/* What the Form Asks */}
        <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 lg:p-10 mb-12 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="uppercase tracking-wider text-xs text-gray-500 mb-6">The application includes:</div>
          <div className="space-y-4">
            <div className="flex items-start gap-3 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                <CheckCircle className="w-4 h-4 text-[#FF6B00]" />
              </div>
              <span className="text-gray-700 text-left">Your background and startup experience</span>
            </div>
            <div className="flex items-start gap-3 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                <CheckCircle className="w-4 h-4 text-[#FF6B00]" />
              </div>
              <span className="text-gray-700 text-left">Your startup idea or concept</span>
            </div>
            <div className="flex items-start gap-3 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                <CheckCircle className="w-4 h-4 text-[#FF6B00]" />
              </div>
              <span className="text-gray-700 text-left">What you hope to achieve in one day</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500">Takes 2-3 minutes to complete</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="space-y-4">
          <Button 
            size="lg"
            className="bg-[#FF6B00] hover:bg-[#E55F00] text-white px-12 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg group"
            onClick={() => window.open('https://forms.google.com', '_blank')}
          >
            Apply Now — ₹499
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          {/* Supporting Text */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></div>
            <span>Limited to 30 founders</span>
            <span className="text-gray-400">•</span>
            <span>Applications close October 20th</span>
          </div>
        </div>
      </div>
    </section>
  );
}