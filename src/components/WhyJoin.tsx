import { Zap, Cpu, RocketIcon } from "lucide-react";

export function WhyJoin() {
  const benefits = [
    {
      icon: Zap,
      title: "Validate Fast",
      description: "Validate your idea and get real feedback quickly. Learn frameworks to test assumptions before building.",
    },
    {
      icon: Cpu,
      title: "Build with AI",
      description: "Learn to design and develop your MVP using AI tools. Build faster without sacrificing quality.",
    },
    {
      icon: RocketIcon,
      title: "Launch & Demo",
      description: "Deploy your MVP and get your first customer. Walk away with a live product and a pitch-ready demo.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-black mb-6">
            Why Startup Speedrun?
          </h2>
          <p className="text-xl text-gray-600">
            Startup Speedrun gives you the proven path from idea to traction.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-[#FF6B00]" />
              </div>
              <h3 className="text-2xl text-black mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}