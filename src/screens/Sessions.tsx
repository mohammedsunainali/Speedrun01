import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Clock, ArrowRight, MoreHorizontal, FolderOpen } from 'lucide-react';

interface SessionsProps {
  onOpenSession: (id: string) => void;
}

export const Sessions = ({ onOpenSession }: SessionsProps) => {
  const sessions = [
    { id: '1', title: 'Freelance FinTech App', date: '2 hours ago', step: '6/6', status: 'completed' },
    { id: '2', title: 'AI Legal Assistant', date: 'Yesterday', step: '2/6', status: 'in-progress' },
    { id: '3', title: 'Pet Sitting Marketplace', date: '3 days ago', step: '1/6', status: 'archived' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 min-h-screen bg-[#F7F7F5]">
      <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black text-black tracking-tight">Your Sessions</h1>
            <p className="text-zinc-500 font-medium mt-1">Pick up where you left off.</p>
          </div>
          <div className="hidden md:block">
             <Badge variant="neutral">3 TOTAL</Badge>
          </div>
      </div>
      
      <div className="space-y-4">
        {sessions.map((session) => (
          <Card 
             key={session.id} 
             variant="outline"
             className="flex items-center justify-between p-4 md:p-6 hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group bg-white" 
             onClick={() => onOpenSession(session.id)}
          >
            <div className="flex items-center gap-5">
               <div className="h-14 w-14 rounded-xl bg-zinc-100 border-2 border-zinc-200 flex items-center justify-center text-black font-black text-lg group-hover:bg-purple-100 group-hover:border-purple-900 group-hover:text-purple-900 transition-colors">
                 {session.title.substring(0,2).toUpperCase()}
               </div>
               <div>
                 <h3 className="text-xl font-bold text-black group-hover:underline decoration-2 underline-offset-4">{session.title}</h3>
                 <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mt-1 uppercase tracking-wide">
                   <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {session.date}</span>
                   <span className="text-zinc-300">|</span>
                   <span className="font-bold text-zinc-700">Step {session.step}</span>
                 </div>
               </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge 
                 variant={session.status === 'completed' ? 'success' : session.status === 'in-progress' ? 'warning' : 'neutral'}
                 className="hidden md:inline-flex uppercase tracking-wider font-bold border-2"
              >
                {session.status}
              </Badge>
              <div className="h-8 w-8 rounded-full hover:bg-zinc-100 flex items-center justify-center transition-colors">
                <ArrowRight className="h-5 w-5 text-zinc-300 group-hover:text-black" />
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 p-8 border-2 border-dashed border-zinc-300 rounded-2xl flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 transition-opacity bg-zinc-100/50">
         <FolderOpen className="h-10 w-10 text-zinc-400 mb-2" />
         <p className="font-bold text-zinc-500">Archived Sessions (0)</p>
      </div>
    </div>
  );
};
