import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface NavbarProps {
  currentView: 'landing' | 'student';
  onViewChange: (view: 'landing' | 'student') => void;
}

export function Navbar({ currentView, onViewChange }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-[#0A192F] text-white backdrop-blur supports-[backdrop-filter]:bg-[#0A192F]/95">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tighter text-white">ETHIO</span>
            <span className="text-xl font-bold tracking-tighter text-white">LINGO</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-full">
            <Label htmlFor="view-switch" className="text-xs font-medium cursor-pointer">
              {currentView === 'landing' ? 'Public Landing' : 'Student Dashboard'}
            </Label>
            <Switch
              id="view-switch"
              checked={currentView === 'student'}
              onCheckedChange={(checked) => onViewChange(checked ? 'student' : 'landing')}
              className="data-[state=checked]:bg-[#A3FF00] data-[state=unchecked]:bg-slate-600"
            />
          </div>
          
          <Button variant="ghost" className="text-white hover:bg-white/10 hidden md:inline-flex">
            About
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10 hidden md:inline-flex">
            Courses
          </Button>
          {currentView === 'landing' ? (
             <Button className="bg-[#A3FF00] text-[#0A192F] hover:bg-[#A3FF00]/90 font-bold">
              Join Now
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#A3FF00] flex items-center justify-center text-[#0A192F] font-bold">
                H
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
