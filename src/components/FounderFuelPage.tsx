import { ArrowRight, Calendar, MapPin, Check, Dumbbell, Zap, Heart, Brain, Users, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FounderFuelPage() {
  const handleRegisterClick = () => {
    window.open('https://forms.google.com', '_blank');
  };

  const handleJoinCommunity = () => {
    window.open('https://forms.google.com', '_blank');
  };

  const upcomingEvents = [
    {
      id: 1,
      title: 'Founder Boxing Session',
      date: 'Dec 7, 2025',
      location: 'Bangalore - Fight Club',
      price: '₹799',
      tag: 'High Intensity',
      type: 'Combat'
    },
    {
      id: 2,
      title: 'Weekend Marathon Prep',
      date: 'Dec 14, 2025',
      location: 'Bangalore - Cubbon Park',
      price: '₹599',
      tag: 'Open to All',
      type: 'Endurance'
    },
    {
      id: 3,
      title: 'BJJ for Founders',
      date: 'Dec 21, 2025',
      location: 'Bangalore - Dojo',
      price: '₹899',
      tag: 'Beginners Welcome',
      type: 'Combat'
    }
  ];

  const programs = [
    {
      icon: '🥊',
      title: 'Combat Training',
      subtitle: 'MMA / BJJ / Boxing',
      description: 'High-intensity combat sports that build mental toughness, discipline, and quick decision-making under pressure.',
      features: ['Technical training', 'Sparring sessions', 'Mental resilience', 'Community support']
    },
    {
      icon: '🏃',
      title: 'Founder Marathons',
      subtitle: 'Endurance & Stamina',
      description: 'Long-distance running programs that teach persistence, goal-setting, and the power of consistent effort.',
      features: ['Training plans', 'Group runs', 'Race preparation', 'Recovery techniques']
    },
    {
      icon: '🧘',
      title: 'Mind & Focus Sessions',
      subtitle: 'Mental Clarity',
      description: 'Meditation, breathwork, and mindfulness practices to enhance focus, reduce stress, and improve decision-making.',
      features: ['Guided meditation', 'Breathing exercises', 'Stress management', 'Peak performance']
    },
    {
      icon: '🤝',
      title: 'Founder Challenges',
      subtitle: 'Team Events',
      description: 'Group fitness challenges and competitions that build camaraderie, accountability, and healthy competition.',
      features: ['Team challenges', 'Accountability groups', 'Progress tracking', 'Celebration events']
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Boost Energy & Consistency',
      description: 'Build sustainable energy levels for long startup journeys'
    },
    {
      icon: Brain,
      title: 'Build Focus & Resilience',
      description: 'Train your mind to stay sharp under pressure'
    },
    {
      icon: Target,
      title: 'Handle Pressure Better',
      description: 'Develop mental toughness to overcome challenges'
    },
    {
      icon: Users,
      title: 'Strengthen Community',
      description: 'Connect with like-minded founders who prioritize health'
    }
  ];

  const testimonials = [
    {
      name: 'Arjun Patel',
      role: 'Founder, FinTech Startup',
      quote: 'That MMA session reset my mindset. The discipline I learned in the ring translated directly to how I run my company.',
      image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjg1OTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Kavya Menon',
      role: 'Founder, HealthTech',
      quote: 'FounderFuel reminded me why health is part of leadership. I\'m sharper, more focused, and more resilient than ever.',
      image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjg1OTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm flex items-center gap-2 w-fit">
                  💪 FounderFuel
                </span>
              </div>
              <h1 className="text-black">
                Build the Founder, Not Just the Startup.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                FounderFuel is a fitness and performance movement for founders who treat themselves like athletes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleRegisterClick}
                  className="px-8 py-4 bg-[#FF6B00] text-white rounded-lg hover:bg-[#E55F00] transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  Join Next Session
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
                  src="https://images.unsplash.com/photo-1734191797121-de71b48ba038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyMGZpdG5lc3N8ZW58MXx8fHwxNzYyNzcwODk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Founder training"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why FounderFuel */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-black mb-6">
              You Can't Build a 10X Startup with 1X Energy.
            </h2>
            <div className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto space-y-4">
              <p>
                Building a startup is exhausting — but strength and focus are trainable.
              </p>
              <p>
                FounderFuel combines physical training, mindset, and community so you can lead with clarity and stamina.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-black mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-black mb-4">
              Move. Sweat. Build. Repeat.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-black mb-2">
                  {program.title}
                </h3>
                <div className="text-sm text-[#FF6B00] mb-4">{program.subtitle}</div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-600" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Benefits */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-black mb-6">
              Founders Who Train, Lead Better.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              'Boost energy & consistency',
              'Build focus & resilience',
              'Handle pressure better',
              'Strengthen community & mindset'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
                <div className="w-8 h-8 bg-[#FF6B00] text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                <p className="text-lg text-gray-700 pt-1">
                  {benefit}
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
                    <span key={i} className="text-green-600 text-xl">⭐</span>
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

      {/* Upcoming Sessions */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-black mb-4">
              Upcoming Sessions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-green-500 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                    💪 {event.type}
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
                    Register
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Train Your Body. Strengthen Your Mind. Lead Relentlessly.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              onClick={handleRegisterClick}
              className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
            >
              Register for FounderFuel
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