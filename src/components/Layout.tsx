import React from 'react';
import { Home, History, Grid, User, LayoutDashboard, Plus } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';

type Screen = 'landing' | 'idea-intake' | 'mentor-workspace' | 'journey-overview' | 'step-detail' | 'founder-snapshot' | 'sessions' | 'templates';

interface LayoutProps {
  children: React.ReactNode;
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  onNewSession: () => void;
}

export const Layout = ({ children, currentScreen, onNavigate, onNewSession }: LayoutProps) => {
  const navItems = [
    { id: 'landing', label: 'Home', icon: Home },
    { id: 'sessions', label: 'History', icon: History },
    { id: 'templates', label: 'Templates', icon: Grid },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F7F5] font-sans text-zinc-900 selection:bg-purple-100 selection:text-purple-900">
      {/* Desktop Header */}
      <header className="hidden md:flex h-20 items-center justify-between border-b-2 border-zinc-200 bg-white px-8 sticky top-0 z-50">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('landing')}>
          <div className="h-10 w-10 bg-black text-white flex items-center justify-center rounded-lg shadow-[3px_3px_0px_0px_rgba(206,242,66,1)] group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_0px_rgba(206,242,66,1)] transition-all">
             <LayoutDashboard className="h-6 w-6" />
          </div>
          <span className="text-xl font-black tracking-tighter">Speedrun 0→1</span>
        </div>
        
        <nav className="flex items-center gap-8">
          {navItems.map((item) => {
            const targetScreen = item.id === 'profile' ? 'landing' : item.id as Screen;
            const isActive = currentScreen === targetScreen || (item.id === 'home' && currentScreen === 'landing');
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(targetScreen)}
                className={cn(
                  "text-sm font-bold uppercase tracking-wider transition-all relative py-1",
                  isActive ? "text-black" : "text-zinc-400 hover:text-black"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-600"></span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="secondary" size="sm" onClick={() => onNavigate('templates')} className="hidden lg:flex">
            Templates
          </Button>
          <Button size="sm" onClick={onNewSession} className="gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <Plus className="h-4 w-4" />
            New Session
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-around border-t-2 border-zinc-200 bg-white px-2 md:hidden pb-4">
        {navItems.map((item) => {
          const targetScreen = item.id === 'profile' ? 'landing' : item.id as Screen;
          const isActive = currentScreen === targetScreen || (item.id === 'home' && currentScreen === 'landing');
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(targetScreen)}
              className={cn(
                "flex flex-col items-center justify-center gap-1.5 p-2 rounded-xl transition-all w-full active:scale-95",
                isActive ? "text-black" : "text-zinc-400"
              )}
            >
              <div className={cn(
                  "p-1.5 rounded-lg transition-colors", 
                  isActive ? "bg-purple-100" : "bg-transparent"
              )}>
                 <item.icon className={cn("h-5 w-5", isActive && "text-purple-900 fill-current")} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wide">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
