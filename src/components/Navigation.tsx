import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

type Page = 'home' | 'education' | 'fitness' | 'competitions';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleRegisterClick = () => {
    window.open('https://forms.google.com', '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigation('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-[#FF6B00] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">SS</span>
            </div>
            <span className="text-xl text-black">
              Startup Speedrun
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => handleNavigation('home')}
              className={`text-sm transition-colors ${
                currentPage === 'home' ? 'text-[#FF6B00]' : 'text-gray-600 hover:text-black'
              }`}
            >
              Home
            </button>

            <button className="text-sm text-gray-600 hover:text-black transition-colors">
              Events Calendar
            </button>

            {/* Verticals Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'verticals' ? null : 'verticals')}
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-black transition-colors"
              >
                Programs
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'verticals' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <button
                    onClick={() => handleNavigation('education')}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-sm text-black">🚀 LaunchLab</div>
                    <div className="text-xs text-gray-500 mt-1">Idea → MVP in one day</div>
                  </button>
                  <button
                    onClick={() => handleNavigation('fitness')}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-sm text-black">💪 FounderFuel</div>
                    <div className="text-xs text-gray-500 mt-1">Train like a leader</div>
                  </button>
                  <button
                    onClick={() => handleNavigation('competitions')}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-sm text-black">🎤 PitchArena</div>
                    <div className="text-xs text-gray-500 mt-1">Compete. Demo. Raise.</div>
                  </button>
                </div>
              )}
            </div>

            {/* Other Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-black transition-colors"
              >
                Other Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    MVP Development
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    Pitch Deck Building
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    Product Feedback
                  </button>
                </div>
              )}
            </div>

            <button className="text-sm text-gray-600 hover:text-black transition-colors">
              Community
            </button>
            <button className="text-sm text-gray-600 hover:text-black transition-colors">
              Contact
            </button>

            {/* CTA Button */}
            <button
              onClick={handleRegisterClick}
              className="px-6 py-2.5 bg-[#FF6B00] text-white rounded-lg hover:bg-[#E55F00] transition-all hover:shadow-lg"
            >
              Register for Event
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-black transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleNavigation('home')}
                className={`text-left px-4 py-2 text-sm ${
                  currentPage === 'home' ? 'text-[#FF6B00]' : 'text-gray-600'
                }`}
              >
                Home
              </button>
              
              <div className="px-4">
                <div className="text-sm text-gray-400 mb-2">Verticals</div>
                <div className="flex flex-col gap-2 pl-4">
                  <button
                    onClick={() => handleNavigation('education')}
                    className="text-left text-sm text-gray-700"
                  >
                    Education (0 → 1)
                  </button>
                  <button
                    onClick={() => handleNavigation('fitness')}
                    className="text-left text-sm text-gray-700"
                  >
                    Fitness for Founders
                  </button>
                  <button
                    onClick={() => handleNavigation('competitions')}
                    className="text-left text-sm text-gray-700"
                  >
                    Competitions & Demo Days
                  </button>
                </div>
              </div>

              <div className="px-4">
                <div className="text-sm text-gray-400 mb-2">Other Services</div>
                <div className="flex flex-col gap-2 pl-4">
                  <button className="text-left text-sm text-gray-700">MVP Development</button>
                  <button className="text-left text-sm text-gray-700">Pitch Deck Building</button>
                  <button className="text-left text-sm text-gray-700">Product Feedback</button>
                </div>
              </div>

              <button className="text-left px-4 py-2 text-sm text-gray-600">About</button>
              <button className="text-left px-4 py-2 text-sm text-gray-600">Contact</button>

              <div className="px-4 pt-2">
                <button
                  onClick={handleRegisterClick}
                  className="w-full px-6 py-3 bg-[#FF6B00] text-white rounded-lg hover:bg-[#E55F00] transition-colors"
                >
                  Register for Event
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}