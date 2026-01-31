import React from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Share, Download, Copy, CheckSquare, Printer, Check } from 'lucide-react';

interface FounderSnapshotProps {
  onBack: () => void;
}

export const FounderSnapshot = ({ onBack }: FounderSnapshotProps) => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 pb-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b-2 border-zinc-200 pb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="retro" className="bg-black text-white border-black">FINAL OUTPUT</Badge>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">v1.0 • Generated Jan 31</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-black">Founder Snapshot</h1>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" size="sm" className="gap-2 hidden md:flex">
            <Printer className="h-4 w-4" /> Print
          </Button>
          <Button variant="secondary" size="sm" className="gap-2">
            <Download className="h-4 w-4" /> PDF
          </Button>
          <Button size="sm" className="gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <Share className="h-4 w-4" /> Share Public Link
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Core Thesis */}
        <Card variant="window" className="md:col-span-2 shadow-lg">
          <div className="p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between border-b-2 border-zinc-100 pb-4">
              <h3 className="font-black text-xl flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full" />
                  Core Thesis
              </h3>
              <Badge variant="success" className="bg-green-100 text-green-900 border-2 border-green-900 font-bold uppercase tracking-wider">Validated</Badge>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="text-xs font-black text-zinc-400 uppercase tracking-widest">Problem Statement</label>
                <p className="text-lg md:text-xl font-medium text-black leading-relaxed">
                  "Freelance designers spend <span className="bg-yellow-100 px-1">40% of their time</span> chasing payments and managing invoices manually, leading to cash flow gaps."
                </p>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-zinc-400 uppercase tracking-widest">Solution (MVP)</label>
                <p className="text-lg md:text-xl font-medium text-black leading-relaxed">
                  "Instant Pay" invoicing tool. We factor the invoice immediately for a 3% fee, so they get <span className="bg-green-100 px-1">paid instantly</span>.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Customer ICP */}
        <Card variant="outline" className="shadow-md bg-white">
          <div className="bg-zinc-50 border-b-2 border-zinc-200 p-4">
             <h3 className="font-black text-lg">Customer (ICP)</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-4 text-sm">
                {[
                    { label: 'Who', val: 'US-based UX Designers' },
                    { label: 'Revenue', val: '$50k - $150k / yr' },
                    { label: 'Channel', val: 'Dribbble, Design Twitter' },
                    { label: 'Motivation', val: 'Cash flow anxiety' }
                ].map((item, i) => (
                    <li key={i} className="flex justify-between items-center border-b border-dashed border-zinc-200 pb-2 last:border-0 last:pb-0">
                        <span className="text-zinc-500 font-mono text-xs uppercase tracking-wide">{item.label}</span>
                        <span className="font-bold text-black text-right">{item.val}</span>
                    </li>
                ))}
            </ul>
          </div>
        </Card>

        {/* Business Model */}
        <Card variant="outline" className="shadow-md bg-white">
          <div className="bg-zinc-50 border-b-2 border-zinc-200 p-4">
             <h3 className="font-black text-lg">Monetization</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between bg-zinc-50 border-2 border-zinc-100 p-4 rounded-lg">
              <span className="text-xs text-zinc-500 font-mono uppercase">Model</span>
              <span className="font-black text-black">Transaction Fee</span>
            </div>
            <div className="flex items-center justify-between bg-zinc-50 border-2 border-zinc-100 p-4 rounded-lg">
              <span className="text-xs text-zinc-500 font-mono uppercase">Pricing</span>
              <span className="font-black text-black">3% per invoice</span>
            </div>
          </div>
        </Card>

        {/* Next 7 Days */}
        <Card className="md:col-span-2 bg-yellow-50 border-2 border-yellow-400 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]">
          <div className="p-6 md:p-8">
            <h3 className="font-black text-xl flex items-center gap-3 mb-6 text-yellow-900">
              <CheckSquare className="h-6 w-6" /> Next 7 Days Action Plan
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Set up landing page waiting list",
                "Interview 5 designers about cash flow",
                "Mockup the 'Instant Pay' button UI",
                "Post on 'Freelance Finance' Subreddit"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white border-2 border-yellow-200 rounded-xl hover:border-yellow-500 transition-colors group cursor-pointer shadow-sm">
                   <div className="h-6 w-6 rounded border-2 border-zinc-300 group-hover:border-black flex items-center justify-center bg-white shrink-0 transition-colors">
                      <div className="h-0 w-0 group-hover:h-3 group-hover:w-3 bg-black rounded-sm transition-all duration-300" />
                   </div>
                   <span className="font-bold text-zinc-800 group-hover:text-black">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

      </div>
      
      <div className="mt-16 text-center border-t-2 border-zinc-200 pt-8">
         <Button variant="ghost" onClick={onBack} className="text-zinc-400 hover:text-black hover:bg-transparent hover:underline">
            ← Back to Dashboard
         </Button>
      </div>
    </div>
  );
};
