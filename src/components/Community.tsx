import { Sparkles, DollarSign, Target, Presentation } from "lucide-react";

export function Community() {
  const events = [
    {
      icon: Sparkles,
      title: "AI Hackathon",
      description: "Build AI-powered products in 24 hours",
    },
    {
      icon: DollarSign,
      title: "Fundraising 101",
      description: "Master the art of raising capital",
    },
    {
      icon: Target,
      title: "GTM Deep Dive",
      description: "Go-to-market strategies that work",
    },
    {
      icon: Presentation,
      title: "Demo Day",
      description: "Present your startup to investors",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-black mb-6">
            Beyond the Workshop
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Startup Speedrun is part of a growing community of makers and founders learning through hands-on events.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-50 group-hover:bg-[#FF6B00]/10 flex items-center justify-center mb-4 transition-colors">
                <event.icon className="w-7 h-7 text-[#FF6B00]" />
              </div>
              <h3 className="text-lg text-black mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}