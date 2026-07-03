import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { LandingPage } from '@/components/landing/LandingPage';
import { StudentDashboard } from '@/components/dashboard/StudentDashboard';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'student'>('landing');

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#A3FF00] selection:text-[#0A192F]">
      <Navbar currentView={currentView} onViewChange={setCurrentView} />
      
      <main>
        {currentView === 'landing' ? (
          <LandingPage />
        ) : (
          <StudentDashboard />
        )}
      </main>

      <Toaster position="top-right" expand={false} richColors />
    </div>
  );
}
export default App;
