import { User, Users, CheckCircle, BarChart, Palette, Sparkles, Globe, Code } from "lucide-react";

export function WhatYouLearn() {
  const learningPoints = [
    {
      icon: User,
      title: "Identify your founder type",
      description: "Understand your strengths and build accordingly",
    },
    {
      icon: Users,
      title: "Define your ICP",
      description: "Create precise Ideal Customer Profiles",
    },
    {
      icon: CheckCircle,
      title: "Validate startup ideas",
      description: "Test assumptions before investing time",
    },
    {
      icon: BarChart,
      title: "Measure market need",
      description: "Quantify demand and opportunity size",
    },
    {
      icon: Palette,
      title: "Design your MVP",
      description: "Create user-centered product designs",
    },
    {
      icon: Sparkles,
      title: "Build with AI tools",
      description: "Leverage AI for rapid development",
    },
    {
      icon: Code,
      title: "Deploy & demo MVP",
      description: "Ship your product live to users",
    },
    {
      icon: Globe,
      title: "Get your first customer",
      description: "Learn how to acquire and pitch users",
    },
  ];

  return (
    <section id="what-you-learn" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-black mb-6">
            Learn by Building.
          </h2>
          <p className="text-xl text-gray-600">
            Walk away with a working MVP and clarity on your founder type.
          </p>
        </div>

        {/* Learning Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {learningPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-[#FF6B00]" />
              </div>
              <h3 className="text-lg text-black mb-2">{point.title}</h3>
              <p className="text-sm text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}