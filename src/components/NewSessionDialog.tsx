import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Button } from './ui/Button';
import { Input, Select } from './ui/Input';

interface NewSessionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContinue: (data: { name: string; template: string }) => void;
}

export const NewSessionDialog = ({ open, onOpenChange, onContinue }: NewSessionDialogProps) => {
  const [name, setName] = useState('');
  const [template, setTemplate] = useState('blank');

  const handleSubmit = () => {
    onContinue({ name, template });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-[#F7F7F5] border-2 border-black p-0 overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
        {/* Retro Title Bar */}
        <div className="bg-black text-white px-4 py-3 flex items-center justify-between">
            <span className="font-mono text-sm font-bold uppercase tracking-wider">New_Session.exe</span>
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
            </div>
        </div>
        
        <div className="p-6">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-black text-black">Start a new session</DialogTitle>
              <DialogDescription className="text-zinc-600 font-medium">
                Configure your workspace settings.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-6 py-2">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-bold text-black uppercase tracking-wide">
                  Session name
                </label>
                <Input
                  id="name"
                  placeholder="e.g., NRI wealth app for India..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white border-2 border-zinc-300 focus:border-black"
                />
                <p className="text-[10px] text-zinc-500 font-mono">OPTIONAL_PARAMETER</p>
              </div>
              <div className="grid gap-2">
                <label htmlFor="template" className="text-sm font-bold text-black uppercase tracking-wide">
                  Choose template
                </label>
                <Select
                  id="template"
                  value={template}
                  onChange={(e) => setTemplate(e.target.value)}
                  className="bg-white border-2 border-zinc-300 focus:border-black"
                  options={[
                    { label: 'Blank (default)', value: 'blank' },
                    { label: 'B2B SaaS', value: 'b2b-saas' },
                    { label: 'Consumer app', value: 'consumer' },
                    { label: 'Marketplace', value: 'marketplace' },
                    { label: 'Community', value: 'community' },
                    { label: 'Fintech', value: 'fintech' },
                  ]}
                />
              </div>
            </div>
            
            <DialogFooter className="gap-3 sm:gap-0 mt-8">
              <Button variant="outline" onClick={() => onOpenChange(false)} className="border-2 border-zinc-300">
                Cancel
              </Button>
              <Button onClick={handleSubmit} variant="primary" className="shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all">
                Launch Session
              </Button>
            </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};
