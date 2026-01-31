import { ArrowRight, Calendar, MapPin, Check, Rocket, Lightbulb, Target, Zap, Code, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function LaunchLabPage() {
  const handleRegisterClick = () => {
    window.open('https://forms.google.com', '_blank');
  };

  const handleJoinCommunity = () => {
    window.open('https://forms.google.com', '_blank');
  };

  const upcomingEvents = [
    {
      id: 1,
      title: 'LaunchLab Sprint: Tech Edition',
      date: 'Dec 5, 2025',
      location: 'Bangalore',
      price: '₹999',
      tag: 'Limited Spots',
      duration: '8 hours'
    },
    {
      id: 2,
      title: 'LaunchLab Sprint: Consumer Apps',
      date: 'Dec 15, 2025',
      location: 'Bangalore',
      price: '₹999',
      tag: 'Open Now',
      duration: '8 hours'
    },
    {
      id: 3,
      title: 'LaunchLab Sprint: B2B SaaS',
      date: 'Dec 22, 2025',
      location: 'Online',
      price: '₹799',
      tag: 'Virtual',
      duration: '8 hours'
    }
  ];

  const transformationCards = [
    {
      icon: Lightbulb,
      title: 'Validated Idea',
      description: 'Real market research, customer interviews, and validation frameworks'
    },
    {
      icon: Code,
      title: 'Working MVP',
      description: 'A functional prototype built with AI and no-code tools'
    },
    {
      icon: Target,
      title: 'Pitch Deck Ready',
      description: 'Investor-ready presentation to tell your story'
    }
  ];

  const testimonials = [
    {
      name: 'Rohan Mehta',
      role: 'Founder, TaskFlow',
      quote: 'LaunchLab gave me clarity and a product in one day. The most actionable workshop I\'ve ever attended.',
      image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjg1OTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Priya Sharma',
      role: 'Founder, HealthSync',
      quote: 'The most productive 8 hours I\'ve ever spent as a founder. I went in with just an idea and left with a demo.',
      image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjg1OTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] rounded-full text-sm flex items-center gap-2 w-fit">
                  🚀 LaunchLab
                </span>
              </div>
              <h1 className="text-black">
                Turn Your Idea Into a Real Product — in Just 8 Hours.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                LaunchLab helps founders go from zero to demo-ready in one day. Validate, build, and show your MVP — no code, just execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleRegisterClick}
                  className="px-8 py-4 bg-[#FF6B00] text-white rounded-lg hover:bg-[#E55F00] transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  Apply for LaunchLab
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={handleJoinCommunity}
                  className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-all hover:shadow-lg"
                >
                  Join Community
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGxlYXJuaW5nJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NjI4NTkzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="LaunchLab workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why LaunchLab */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-black mb-6">
              Stop Thinking. Start Building.
            </h2>
            <div className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto space-y-4">
              <p>
                You don't need a big team or endless plans — just momentum.
              </p>
              <p className="text-left max-w-2xl mx-auto">
                In one day, LaunchLab helps you:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
            {[
              'Validate your idea',
              'Build your MVP using AI + no-code',
              'Create your pitch deck',
              'Demo to real users and mentors'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF6B00]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#FF6B00]" />
                </div>
                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 border border-gray-100">
            <div className="flex items-center justify-center gap-8 text-center">
              <div className="flex items-center gap-4">
                <Lightbulb className="w-12 h-12 text-[#FF6B00]" />
                <ArrowRight className="w-8 h-8 text-gray-400" />
                <Code className="w-12 h-12 text-[#FF6B00]" />
                <ArrowRight className="w-8 h-8 text-gray-400" />
                <Rocket className="w-12 h-12 text-[#FF6B00]" />
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6">
              Sprint-style layout: <strong className="text-black">Idea → MVP → Demo</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-black mb-4">
              What You'll Walk Away With
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {transformationCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B00]/10 rounded-2xl mb-6">
                    <Icon className="w-8 h-8 text-[#FF6B00]" />
                  </div>
                  <h3 className="text-black mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-black mb-6">
              Perfect For Founders Who…
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              '…are tired of waiting and ready to build.',
              '…want to validate before investing more time.',
              '…don\'t code but want a working prototype.'
            ].map((text, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-12 h-12 bg-[#FF6B00] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#FF6B00] text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-black">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-black mb-4">
              Upcoming LaunchLab Events
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-[#FF6B00] group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                    🚀 LaunchLab
                  </span>
                  <span className="px-3 py-1 bg-[#FF6B00]/10 text-[#FF6B00] rounded-full text-xs">
                    {event.tag}
                  </span>
                </div>
                
                <h3 className="text-black mb-3">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Zap className="w-4 h-4" />
                    {event.duration}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-black">{event.price}</div>
                  <button
                    onClick={handleRegisterClick}
                    className="text-[#FF6B00] text-sm group-hover:gap-2 flex items-center gap-1 transition-all"
                  >
                    Register
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-all">
              View All LaunchLab Sprints
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#FF6B00] to-[#E55F00] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            This is Your Moment to Build.
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Don't overthink. Execute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRegisterClick}
              className="px-8 py-4 bg-white text-[#FF6B00] rounded-lg hover:bg-gray-100 transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleJoinCommunity}
              className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-all"
            >
              Join Community
            </button>
          </div>
        </div>
      </section>

      {/* Global Closing Section */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            The Complete Founder Journey — Powered by Startup Speedrun.
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Start at <strong className="text-[#FF6B00]">LaunchLab</strong> to build,
            stay strong with <strong className="text-[#FF6B00]">FounderFuel</strong>,
            and scale at <strong className="text-[#FF6B00]">PitchArena</strong>.
          </p>
          <p className="text-lg text-gray-400 mb-10">
            Three paths. One mission.<br/>
            Helping founders execute faster and grow stronger.
          </p>
          <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-all">
            Explore All Programs
          </button>
        </div>
      </section>
    </div>
  );
}