import { ArrowRight, Calendar, MapPin, Users, GraduationCap, Dumbbell, Trophy, Check, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  const handleRegisterClick = () => {
    window.open('https://forms.google.com', '_blank');
  };

  const handleJoinCommunity = () => {
    window.open('https://forms.google.com', '_blank');
  };

  const upcomingEvents = [
    {
      id: 1,
      title: 'Education: Idea to MVP',
      date: 'Oct 25, 2025',
      type: 'Education',
      location: 'Bangalore',
      price: '₹499',
      tag: 'Intro Offer'
    },
    {
      id: 2,
      title: 'Founders Boxing Session',
      date: 'Nov 2, 2025',
      type: 'Fitness',
      location: 'Bangalore',
      price: '₹799',
      tag: 'Limited Spots'
    },
    {
      id: 3,
      title: 'Demo Day Pitch Night',
      date: 'Nov 15, 2025',
      type: 'Competition',
      location: 'Online',
      price: 'Free',
      tag: 'Apply Now'
    },
    {
      id: 4,
      title: 'Weekend Marathon Prep',
      date: 'Nov 20, 2025',
      type: 'Fitness',
      location: 'Bangalore',
      price: '₹599',
      tag: 'Open to All'
    }
  ];

  const verticals = [
    {
      id: 1,
      title: 'Education (From –0 → 1)',
      description: 'Validate your idea, build your MVP, and acquire your first customer in 8 hours. We also help you build pitch decks and refine your product story.',
      icon: GraduationCap,
      image: 'https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGxlYXJuaW5nJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NjI4NTkzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      cta: 'Explore Education',
      features: ['Workshop-based learning', 'AI tools & frameworks', 'First customer in 8 hours']
    },
    {
      id: 2,
      title: 'Fitness for Founders',
      description: 'High-energy sessions — boxing, MMA, BJJ, marathons — to boost discipline, focus & resilience. Build your body and mind for the startup journey.',
      icon: Dumbbell,
      image: 'https://images.unsplash.com/photo-1734191797121-de71b48ba038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyMGZpdG5lc3N8ZW58MXx8fHwxNzYyNzcwODk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cta: 'Join Fitness Events',
      features: ['Boxing & MMA training', 'Marathon preparation', 'Mental resilience building']
    },
    {
      id: 3,
      title: 'Competitions & Demo Days',
      description: 'Pitch your startup to real investors, demo your MVP, and raise funding (up to ₹80 L). Founder showcases that open doors to capital & visibility.',
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1599592187465-6dc742367282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwcGl0Y2glMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzYyODU5Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cta: 'Explore Competitions',
      features: ['Live pitch sessions', 'Investor feedback', 'Funding opportunities']
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Founder, TechFlow',
      image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjg1OTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'In just 8 hours, I went from a vague idea to a working MVP with my first paying customer. This workshop is a game-changer for founders.'
    },
    {
      id: 2,
      name: 'Arjun Patel',
      role: 'Founder, HealthTrack',
      image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjg1OTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The fitness sessions helped me build mental toughness. Boxing twice a week completely transformed my energy levels and focus at work.'
    },
    {
      id: 3,
      name: 'Kavya Menon',
      role: 'Founder, EdTech Startup',
      image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjg1OTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'I pitched at Demo Day and secured my first angel investor. The feedback from experienced founders was invaluable.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] rounded-full text-sm">
                  The Fastest Way for Founders to Level Up
                </span>
              </div>
              <h1 className="text-black">
                Build Faster. Think Sharper. Go Further.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join Startup Speedrun — the ultimate playground for founders who are done waiting. Build your startup, train your mind and body, and pitch to investors — all in one community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleRegisterClick}
                  className="px-8 py-4 bg-[#FF6B00] text-white rounded-lg hover:bg-[#E55F00] transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  Register for Upcoming Event
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={handleJoinCommunity}
                  className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-all hover:shadow-lg"
                >
                  Join the Community
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1568658176307-bfbd2873abda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3VuZGVycyUyMGNvbGxhYm9yYXRpb24lMjBzdGFydHVwfGVufDF8fHx8MTc2Mjg1OTM5NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Founders collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl text-black">500+</div>
                    <div className="text-sm text-gray-600">Active Founders</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Calendar Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-black mb-4">
              What's Happening Next 🚀
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our upcoming workshops, training sessions and pitch events built for founders who execute fast.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-[#FF6B00] group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    event.type === 'Education' ? 'bg-blue-100 text-blue-700' :
                    event.type === 'Fitness' ? 'bg-green-100 text-green-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {event.type}
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
                  <button className="text-[#FF6B00] text-sm group-hover:gap-2 flex items-center gap-1 transition-all">
                    Register
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-all">
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-black mb-6">
              What is Startup Speedrun?
            </h2>
            <div className="space-y-6 text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              <p>
                Startup Speedrun is where <strong className="text-black">execution beats theory</strong>. We help founders build real products, strengthen their mindset, and connect with investors — faster than ever.
              </p>
              <p>
                Forget long programs and delayed plans — here, you learn by doing.
              </p>
            </div>
            <div className="mt-10">
              <button className="px-8 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-all">
                Discover How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Verticals Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-black mb-4">
              Three Ways to Level Up Your Founder Game
            </h2>
          </div>

          <div className="space-y-12">
            {[
              {
                emoji: '🚀',
                title: 'LaunchLab — From Idea → MVP in a Day',
                description: 'Turn your idea into a real product in 8 hours. Validate, design, build your MVP, and even get your first user — guided by builders who\'ve done it before. We also help craft pitch decks and demo live.',
                cta: 'Join the Next LaunchLab',
                image: 'https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGxlYXJuaW5nJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NjI4NTkzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
                features: ['Validate your idea', 'Build your MVP in 8 hours', 'Get your first user', 'Craft pitch decks']
              },
              {
                emoji: '💪',
                title: 'FounderFuel — Train Like a Leader',
                description: 'Strong founders build strong companies. High-intensity workouts (MMA, BJJ, marathons) to boost discipline, focus, and resilience.',
                cta: 'Get Fueled Up',
                image: 'https://images.unsplash.com/photo-1734191797121-de71b48ba038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyMGZpdG5lc3N8ZW58MXx8fHwxNzYyNzcwODk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
                features: ['MMA & BJJ training', 'Marathon preparation', 'Boost discipline & focus', 'Build mental resilience']
              },
              {
                emoji: '🎤',
                title: 'PitchArena — Compete. Demo. Raise.',
                description: 'The stage for founders ready to be seen. Pitch to investors, demo your product, and win funding (up to ₹80 L).',
                cta: 'Enter the Arena',
                image: 'https://images.unsplash.com/photo-1599592187465-6dc742367282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwcGl0Y2glMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzYyODU5Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
                features: ['Pitch to real investors', 'Demo your product', 'Win up to ₹80 L', 'Get expert feedback']
              }
            ].map((program, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <ImageWithFallback
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="text-5xl mb-6">{program.emoji}</div>
                    
                    <h3 className="text-black mb-4">
                      {program.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                          <div className="w-5 h-5 rounded-full bg-[#FF6B00]/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-[#FF6B00]" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="px-8 py-3 bg-[#FF6B00] text-white rounded-lg hover:bg-[#E55F00] transition-all hover:shadow-lg flex items-center gap-2 group">
                      {program.cta}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-black mb-4">
              What Founders Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real founders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <Quote className="w-10 h-10 text-[#FF6B00] mb-6" />
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-black">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready to Build, Compete & Grow?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Your idea deserves momentum. Join the founders who build faster, train smarter, and pitch bolder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRegisterClick}
              className="px-8 py-4 bg-[#FF6B00] text-white rounded-lg hover:bg-[#E55F00] transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
            >
              Register for Upcoming Event
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleJoinCommunity}
              className="px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-all"
            >
              Join the Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}