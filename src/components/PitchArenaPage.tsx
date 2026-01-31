import { ArrowRight, Calendar, MapPin, Check, Trophy, Mic, DollarSign, Users, Star, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PitchArenaPage() {
  const handleRegisterClick = () => {
    window.open('https://forms.google.com', '_blank');
  };

  const handleJoinCommunity = () => {
    window.open('https://forms.google.com', '_blank');
  };

  const upcomingEvents = [
    {
      id: 1,
      title: 'Pitchathon: Tech Edition',
      date: 'Dec 10, 2025',
      location: 'Bangalore - Innovation Hub',
      price: 'Free',
      tag: 'Applications Open',
      type: 'Pitchathon'
    },
    {
      id: 2,
      title: 'Demo Day: Consumer Apps',
      date: 'Dec 18, 2025',
      location: 'Bangalore',
      price: 'Free',
      tag: 'Invite Only',
      type: 'Demo Day'
    },
    {
      id: 3,
      title: 'Product Launch Showcase',
      date: 'Dec 28, 2025',
      location: 'Online',
      price: 'Free',
      tag: 'Open Applications',
      type: 'Showcase'
    }
  ];

  const gains = [
    {
      icon: Users,
      title: 'Live Investor Feedback',
      description: 'Get real-time feedback from experienced angels and VCs on your pitch and product'
    },
    {
      icon: DollarSign,
      title: 'Funding up to ₹80L',
      description: 'Access funding opportunities and connect with investors looking for their next investment'
    },
    {
      icon: TrendingUp,
      title: 'Founder Visibility & Networking',
      description: 'Build your network, gain visibility, and connect with co-founders, advisors, and partners'
    },
    {
      icon: Star,
      title: 'Real Startup Validation',
      description: 'Test your ideas with an audience that understands startups and can provide actionable insights'
    }
  ];

  const testimonials = [
    {
      name: 'Neha Gupta',
      role: 'Founder, EduTech Platform',
      quote: 'I met two angels through PitchArena! The exposure and feedback were game-changing for my fundraising journey.',
      image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjg1OTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Founder, B2B SaaS',
      quote: 'The feedback reshaped my strategy completely. I learned more in 30 minutes on stage than in months of planning.',
      image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjg1OTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm flex items-center gap-2 w-fit">
                  🎤 PitchArena
                </span>
              </div>
              <h1 className="text-black">
                Where Founders Meet Investors.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                PitchArena connects bold founders to real investors through live Pitchathons and Demo Days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleRegisterClick}
                  className="px-8 py-4 bg-[#FF6B00] text-white rounded-lg hover:bg-[#E55F00] transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  Apply to PitchArena
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
                  src="https://images.unsplash.com/photo-1599592187465-6dc742367282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwcGl0Y2glMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzYyODU5Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Pitch presentation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why PitchArena */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-black mb-6">
              Great Ideas Deserve a Stage.
            </h2>
            <div className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto space-y-4">
              <p>
                PitchArena is the launchpad for startups ready to be seen, funded, and celebrated.
              </p>
              <p>
                Demo your product, compete with top founders, and raise your first round.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 lg:p-12 border border-purple-100">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl mb-3">🎤</div>
                <h3 className="text-black mb-2">Pitch</h3>
                <p className="text-gray-600 text-sm">Present your vision to investors</p>
              </div>
              <div>
                <div className="text-5xl mb-3">💻</div>
                <h3 className="text-black mb-2">Demo</h3>
                <p className="text-gray-600 text-sm">Show your working product</p>
              </div>
              <div>
                <div className="text-5xl mb-3">💰</div>
                <h3 className="text-black mb-2">Raise</h3>
                <p className="text-gray-600 text-sm">Secure funding & partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Gain */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-black mb-4">
              From Pitch to Payoff
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {gains.map((gain, index) => {
              const Icon = gain.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 rounded-xl mb-6">
                    <Icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-black mb-3">
                    {gain.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {gain.description}
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
              Perfect For Founders With...
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'MVPs Ready to Scale',
                description: 'You have a working product and are looking for funding to grow'
              },
              {
                title: 'Pre-Seed or Seed Stage',
                description: 'You\'re seeking your first round of external funding from angels or VCs'
              },
              {
                title: 'Compelling Story',
                description: 'You can articulate your vision, problem, and solution clearly'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                  {index + 1}
                </div>
                <h3 className="text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-black mb-4">
              Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-purple-600 text-xl">⭐</span>
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
              Upcoming Events
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-purple-500 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                    🎤 {event.type}
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
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-black">{event.price}</div>
                  <button
                    onClick={handleRegisterClick}
                    className="text-[#FF6B00] text-sm group-hover:gap-2 flex items-center gap-1 transition-all"
                  >
                    Apply
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-all">
              View All
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Your Startup Deserves the Spotlight.
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Pitch it. Demo it. Raise it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRegisterClick}
              className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
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