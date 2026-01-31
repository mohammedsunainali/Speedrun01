import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-5xl lg:text-6xl text-black mb-6 leading-tight">
          Ready to build your startup in a day?
        </h2>
        
        {/* Subheadline */}
        <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed">
          Turn your idea into a live MVP and your first customer — all in one day.
        </p>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="bg-[#FF6B00] hover:bg-[#E55F00] text-white px-12 py-7 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 text-xl"
          onClick={() => window.open('https://forms.google.com', '_blank')}
        >
          Apply Now — ₹499
          <ArrowRight className="ml-3 h-6 w-6" />
        </Button>

        {/* Supporting Text */}
        <p className="text-gray-600 mt-8">
          A Clean Design Company Initiative.
        </p>
      </div>
    </section>
  );
}