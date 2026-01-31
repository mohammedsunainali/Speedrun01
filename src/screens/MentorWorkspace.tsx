import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { MentorBadge, MentorLevel } from '../components/ui/MentorBadge';
import { Input, Textarea } from '../components/ui/Input';
import { Chip } from '../components/ui/Chip';
import { Send, Share, ChevronRight, AlertCircle, CheckCircle2, ChevronLeft, MoreHorizontal, Bot } from 'lucide-react';
import { cn } from '../lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  mentorId?: string;
  mentorName?: string;
  mentorRole?: string;
  whyThisMentor?: string;
  timestamp: Date;
}

interface DecisionPoint {
  id: string;
  label: string;
  value: string;
  placeholder: string;
}

interface MentorWorkspaceProps {
  sessionTitle?: string;
  onBack: () => void;
  onFinishStep: () => void;
}

const MOCK_MESSAGES: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content: "Hi, I've reviewed your idea. Since you're targeting a crowded market, we need to sharpen your differentiation immediately. Let's start with the core problem.",
    mentorId: 'M5',
    mentorName: 'The Strategist',
    mentorRole: 'Business Models',
    whyThisMentor: 'Strategic Positioning',
    timestamp: new Date()
  }
];

const QUICK_REPLIES = [
  "I'm not sure yet",
  "The problem is too broad",
  "Targeting SMBs",
  "Focusing on speed"
];

export const MentorWorkspace = ({ sessionTitle = "Untitled Session", onBack, onFinishStep }: MentorWorkspaceProps) => {
  const [activeTab, setActiveTab] = useState<'chat' | 'decisions'>('chat');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [decisions, setDecisions] = useState<DecisionPoint[]>([
    { id: 'd1', label: 'Core Problem', value: '', placeholder: 'What is the painful problem?' },
    { id: 'd2', label: 'Target Audience', value: '', placeholder: 'Who feels this pain most?' },
    { id: 'd3', label: 'Current Solution', value: '', placeholder: 'How do they solve it now?' },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMsg]);
    setInput('');

    // Mock AI Response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "That's a good start. But let's get specific. Who exactly pays for this?",
        mentorId: 'M2',
        mentorName: 'The Realist',
        mentorRole: 'Ops & Finance',
        whyThisMentor: 'Viability Check',
        timestamp: new Date()
      }]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] bg-[#F7F7F5] overflow-hidden">
      {/* Session Header */}
      <div className="flex items-center justify-between border-b-2 border-zinc-200 px-6 py-4 bg-white shrink-0 z-20">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack} className="md:hidden">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div>
            <h2 className="text-lg font-black text-black flex items-center gap-3">
              {sessionTitle}
              <Badge variant="retro" className="hidden md:inline-flex text-[10px]">Step 1/6</Badge>
            </h2>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wide mt-1">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               Session Active
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" className="hidden md:flex gap-2 border-2 border-zinc-200 text-zinc-600 hover:text-black hover:border-black">
            <Share className="h-3 w-3" /> Share
          </Button>
          <Button size="sm" onClick={onFinishStep} className="gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Next Step <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Chat Area */}
        <div className={cn(
          "flex-1 flex flex-col bg-[#F7F7F5] transition-transform duration-300 absolute inset-0 md:relative md:translate-x-0",
          activeTab === 'decisions' ? "-translate-x-full md:translate-x-0" : "translate-x-0"
        )}>
          {/* Messages List */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8">
            {messages.map((msg) => (
              <div key={msg.id} className={cn("flex flex-col max-w-2xl group", msg.role === 'user' ? "ml-auto items-end" : "mr-auto items-start")}>
                
                {msg.role === 'assistant' && msg.mentorId && (
                  <div className="flex items-center gap-3 mb-2 ml-1">
                    <div className="h-8 w-8 rounded-lg bg-black text-white flex items-center justify-center border-2 border-black">
                        <Bot className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-black text-black">{msg.mentorName}</span>
                            <MentorBadge level={msg.mentorId as MentorLevel} />
                        </div>
                    </div>
                  </div>
                )}

                <div className={cn(
                  "p-5 text-sm md:text-base leading-relaxed font-medium relative",
                  msg.role === 'user' 
                    ? "bg-black text-white rounded-2xl rounded-tr-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]" 
                    : "bg-white text-zinc-900 border-2 border-zinc-200 rounded-2xl rounded-tl-none shadow-sm"
                )}>
                  {msg.content}
                  
                  {msg.role === 'assistant' && msg.whyThisMentor && (
                    <div className="mt-3 pt-3 border-t-2 border-dashed border-zinc-100 text-xs font-mono text-zinc-400 uppercase tracking-wide">
                        Reason: {msg.whyThisMentor}
                    </div>
                  )}
                </div>
                
                <span className="text-[10px] text-zinc-400 mt-2 px-1 font-mono uppercase">
                  {msg.role === 'user' ? 'You • ' : 'AI • '}{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
            
            <div ref={messagesEndRef} />
            
            {/* Quick Replies */}
            {messages[messages.length - 1].role === 'assistant' && (
               <div className="flex flex-wrap gap-2 mt-4 ml-1">
                 {QUICK_REPLIES.map((reply, i) => (
                   <Chip key={i} onClick={() => { setInput(reply); }} className="bg-white border-2 border-zinc-200 hover:border-black hover:bg-zinc-50 text-zinc-600 font-bold text-xs py-2">
                     {reply}
                   </Chip>
                 ))}
               </div>
            )}
          </div>

          {/* Composer */}
          <div className="p-4 md:p-6 bg-white border-t-2 border-zinc-200 z-10">
            <div className="flex items-end gap-3 max-w-4xl mx-auto">
              <div className="relative flex-1">
                  <Textarea 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your answer..."
                    className="min-h-[60px] max-h-[150px] resize-none py-4 px-4 text-base border-2 border-zinc-200 focus:border-black rounded-xl pr-12 bg-zinc-50 focus:bg-white transition-colors"
                    onKeyDown={(e) => {
                      if(e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                  />
                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-zinc-400 uppercase">
                    Return ⏎
                  </div>
              </div>
              <Button size="icon" className="h-[60px] w-[60px] shrink-0 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all" onClick={handleSend} disabled={!input.trim()}>
                <Send className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Decision Panel (Desktop Sidebar / Mobile Tab) */}
        <div className={cn(
          "w-full md:w-[380px] lg:w-[420px] bg-white border-l-2 border-zinc-200 flex flex-col absolute inset-0 md:relative transition-transform duration-300 z-10 shadow-xl md:shadow-none",
           activeTab === 'chat' ? "translate-x-full md:translate-x-0" : "translate-x-0"
        )}>
          <div className="p-5 border-b-2 border-zinc-200 bg-zinc-50">
            <div className="flex items-center justify-between mb-2">
                <Badge variant="success" className="bg-green-100 text-green-800 border-2 border-green-800 font-bold uppercase tracking-wider">Artifacts</Badge>
                <MoreHorizontal className="h-5 w-5 text-zinc-400 cursor-pointer hover:text-black" />
            </div>
            <h3 className="font-black text-xl text-black">
              Key Decisions
            </h3>
            <p className="text-xs text-zinc-500 font-medium mt-1">Structured outputs from your conversation.</p>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-8 bg-[#F7F7F5]">
            <div className="space-y-6">
              {decisions.map((d) => (
                <div key={d.id} className="space-y-2 group">
                  <label className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-zinc-500 group-hover:text-black transition-colors">
                    <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full group-hover:bg-purple-500 transition-colors" />
                    {d.label}
                  </label>
                  <Textarea 
                     value={d.value} 
                     onChange={(e) => {
                       const newDecisions = decisions.map(x => x.id === d.id ? { ...x, value: e.target.value } : x);
                       setDecisions(newDecisions);
                     }}
                     placeholder={d.placeholder}
                     className="bg-white min-h-[100px] text-sm border-2 border-zinc-200 focus:border-black shadow-sm"
                  />
                </div>
              ))}
            </div>

            <Card variant="outline" density="compact" className="bg-yellow-50/50 border-yellow-200 border-2 border-dashed">
              <h4 className="text-xs font-black text-yellow-900 mb-3 flex items-center gap-2 uppercase tracking-wide">
                <AlertCircle className="h-4 w-4" /> Open Questions
              </h4>
              <ul className="text-xs font-medium text-yellow-800 space-y-2.5">
                <li className="flex gap-2">
                    <span className="text-yellow-500">•</span>
                    Is the market size &gt; $1B?
                </li>
                <li className="flex gap-2">
                    <span className="text-yellow-500">•</span>
                    What is the unfair advantage?
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="md:hidden absolute top-4 left-1/2 -translate-x-1/2 bg-black text-white rounded-full shadow-xl border-2 border-white/20 p-1.5 flex gap-1 z-30">
          <button 
            onClick={() => setActiveTab('chat')}
            className={cn("px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-colors", activeTab === 'chat' ? "bg-white text-black" : "text-zinc-400 hover:text-white")}
          >
            Chat
          </button>
          <button 
            onClick={() => setActiveTab('decisions')}
            className={cn("px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-colors", activeTab === 'decisions' ? "bg-white text-black" : "text-zinc-400 hover:text-white")}
          >
            Decisions
          </button>
        </div>

      </div>
    </div>
  );
};
