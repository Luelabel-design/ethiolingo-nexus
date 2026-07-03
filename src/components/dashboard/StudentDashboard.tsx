import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Search, Bell, Settings, Flame, Trophy, Calendar, ChevronRight, PlayCircle, BookOpen, Coffee } from 'lucide-react';

const GEEZ_SCRIPTS = [
  { char: 'ሀ', phonetic: 'ha', color: 'bg-red-50 text-red-600 border-red-100' },
  { char: 'ለ', phonetic: 'la', color: 'bg-orange-50 text-orange-600 border-orange-100' },
  { char: 'ሐ', phonetic: 'ha', color: 'bg-yellow-50 text-yellow-600 border-yellow-100' },
  { char: 'መ', phonetic: 'ma', color: 'bg-green-50 text-green-600 border-green-100' },
  { char: 'ሠ', phonetic: 'sza', color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { char: 'ረ', phonetic: 'ra', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
  { char: 'ሰ', phonetic: 'sa', color: 'bg-purple-50 text-purple-600 border-purple-100' },
  { char: 'ሸ', phonetic: 'sha', color: 'bg-pink-50 text-pink-600 border-pink-100' },
];

export function StudentDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar (Simple Mock) */}
      <aside className="w-20 lg:w-64 bg-white border-r hidden md:flex flex-col py-8 px-4 gap-8">
        <div className="flex flex-col gap-2 items-center lg:items-start px-2">
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tighter text-[#0A192F]">ETHIO</span>
            <span className="text-xl font-bold tracking-tighter text-[#0A192F]">LINGO</span>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          <Button variant="ghost" className="justify-start gap-3 bg-[#A3FF00]/10 text-[#0A192F] hover:bg-[#A3FF00]/20 font-bold">
            <Calendar className="w-5 h-5" />
            <span className="hidden lg:inline">Learning Path</span>
          </Button>
          <Button variant="ghost" className="justify-start gap-3 text-slate-500 hover:text-[#0A192F]">
            <BookOpen className="w-5 h-5" />
            <span className="hidden lg:inline">My Courses</span>
          </Button>
          <Button variant="ghost" className="justify-start gap-3 text-slate-500 hover:text-[#0A192F]">
            <Trophy className="w-5 h-5" />
            <span className="hidden lg:inline">Achievements</span>
          </Button>
          <Button variant="ghost" className="justify-start gap-3 text-slate-500 hover:text-[#0A192F]">
            <Settings className="w-5 h-5" />
            <span className="hidden lg:inline">Settings</span>
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-y-auto">
        {/* Top Header */}
        <header className="h-16 bg-white border-b px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4 bg-slate-100 px-4 py-2 rounded-xl w-96 max-w-full">
            <Search className="w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Search lessons..." className="bg-transparent border-none focus:outline-none text-sm w-full" />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-slate-500">
              <Bell className="w-5 h-5" />
            </Button>
            <div className="w-8 h-8 rounded-full bg-slate-200 border border-white" />
          </div>
        </header>

        <div className="p-8 lg:p-12 max-w-7xl mx-auto w-full space-y-12">
          {/* Welcome Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-[#0A192F]">Welcome Back, Hanna! 👋</h1>
              <p className="text-slate-500 mt-2">You're making great progress. Continue your Amharic journey.</p>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-3xl shadow-sm border">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Current Streak</p>
                <p className="text-2xl font-bold text-[#0A192F]">14 Days</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column (Main Path) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Daily Goal Card */}
              <Card className="border-none shadow-sm rounded-3xl bg-[#0A192F] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#A3FF00]/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">Daily Goal</CardTitle>
                    <Badge className="bg-[#A3FF00] text-[#0A192F] hover:bg-[#A3FF00]">75% Complete</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
                  <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#A3FF00] transition-all" style={{ width: '75%' }} />
                  </div>
                  <div className="flex justify-between items-center text-sm text-slate-400">
                    <span>30/40 mins learning today</span>
                    <Button variant="link" className="text-[#A3FF00] p-0 font-bold">View details →</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Ge'ez Script Cards */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#0A192F]">Ge'ez Script Mastery</h2>
                  <Button variant="link" className="text-slate-500">View All</Button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {GEEZ_SCRIPTS.map((item, idx) => (
                    <Card key={idx} className={`border border-solid ${item.color} rounded-2xl cursor-pointer hover:scale-105 transition-transform`}>
                      <CardContent className="flex flex-col items-center justify-center p-6 gap-2">
                        <span className="text-4xl font-bold">{item.char}</span>
                        <span className="text-xs font-medium uppercase tracking-widest">{item.phonetic}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Current Lesson */}
              <Card className="border-none shadow-sm rounded-3xl overflow-hidden group">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 aspect-video sm:aspect-auto bg-slate-200 overflow-hidden relative">
                    <img 
                      src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/81d71a9f-9e9e-4c11-875d-0c4c84aed59e/students-learning-image-5e8f7244-1782927941017.webp" 
                      alt="Current Lesson" 
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <PlayCircle className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="p-8 flex-1 bg-white">
                    <Badge variant="outline" className="mb-4 border-slate-200 text-slate-500 uppercase tracking-widest text-[10px]">Intermediate Amharic</Badge>
                    <h3 className="text-2xl font-bold text-[#0A192F] mb-2">Lesson 14: Coffee Culture</h3>
                    <p className="text-slate-500 mb-6 text-sm">Discover the social importance and traditional etiquette of the Ethiopian coffee ceremony.</p>
                    <Button className="bg-[#0A192F] text-white hover:bg-[#0A192F]/90 rounded-xl px-8 h-12">
                      Resume Lesson
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column (Widgets) */}
            <div className="space-y-8">
              {/* Buna Widget */}
              <Card className="border-none shadow-xl rounded-3xl overflow-hidden bg-white group ring-1 ring-slate-100">
                <div className="relative h-48">
                  <img 
                    src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/81d71a9f-9e9e-4c11-875d-0c4c84aed59e/buna-image-34a59593-1782927940707.webp" 
                    alt="Buna Coffee" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 mb-1">
                       <Coffee className="w-4 h-4 text-[#A3FF00]" />
                       <span className="text-[10px] text-[#A3FF00] font-bold uppercase tracking-widest">Cultural Insight</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Buna (ቡና)</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    In Ethiopia, "Buna tetu" (drinking coffee) is a daily social event. It involves three rounds: Abol, Tona, and Baraka.
                  </p>
                  <Button variant="outline" className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl font-bold">
                    Learn Phrasing
                  </Button>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="border-none shadow-sm rounded-3xl bg-white">
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Live</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: 'Amharic Grammar Q&A', time: 'Today, 4:00 PM', attendees: 12 },
                    { title: 'Coffee Ritual Discussion', time: 'Tomorrow, 10:00 AM', attendees: 45 }
                  ].map((event, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-colors group">
                      <div>
                        <p className="font-bold text-sm text-[#0A192F]">{event.title}</p>
                        <p className="text-xs text-slate-400">{event.time}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#0A192F] transition-colors" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
