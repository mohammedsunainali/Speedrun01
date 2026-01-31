import { Lightbulb, Target, Hammer, Rocket, Trophy } from "lucide-react";

export function WhatIs() {
  const steps = [
    { icon: Lightbulb, label: "Idea", description: "Start with your concept" },
    { icon: Target, label: "Validate", description: "Test with real users" },
    { icon: Hammer, label: "Build", description: "Create your MVP" },
    { icon: Rocket, label: "Launch", description: "Deploy live" },
    { icon: Trophy, label: "Demo", description: "Present & pitch" },
  ];

  return (
    <section id="what-is" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl text-black mb-6">
            What is Startup Speedrun?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A day-long, hands-on workshop designed to help founders go from idea to MVP to customer in 8 hours. You'll validate your concept, build with AI, and leave with a working product ready to demo.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-[#FF6B00]/10 flex items-center justify-center mb-4 hover:bg-[#FF6B00]/20 transition-colors">
                      <step.icon className="w-10 h-10 text-[#FF6B00]" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-10 left-20 w-full h-0.5 bg-gray-200">
                        <div className="h-full w-full bg-[#FF6B00]/30"></div>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <div className="text-lg text-black mb-1">{step.label}</div>
                    <div className="text-sm text-gray-600">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-[#FF6B00]" />
                </div>
                <div>
                  <div className="text-lg text-black mb-1">{step.label}</div>
                  <div className="text-sm text-gray-600">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}