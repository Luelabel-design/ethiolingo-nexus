import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Video, FileText, Upload, Send, MessageCircle, Lock, GraduationCap, Globe } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const AMHARIC_TRACKS = [
  { id: 1, title: 'Beginner Amharic', description: 'Master the basics of greeting and introduction.', icon: <BookOpen className="w-6 h-6" /> },
  { id: 2, title: 'Conversational Amharic', description: 'Speak fluently in everyday Ethiopian settings.', icon: <MessageCircle className="w-6 h-6" /> },
  { id: 3, title: 'Culture & Expressions', description: 'Understand deep cultural nuances and idioms.', icon: <Globe className="w-6 h-6" /> },
];

const ENGLISH_TRACKS = [
  { id: 4, title: 'Beginner English', description: 'Essential grammar and vocabulary for daily life.', icon: <BookOpen className="w-6 h-6" /> },
  { id: 5, title: 'Intermediate English', description: 'Advance your professional communication skills.', icon: <GraduationCap className="w-6 h-6" /> },
  { id: 6, title: 'Advanced English', description: 'Master complex structures and academic English.', icon: <Lock className="w-6 h-6 text-muted-foreground" />, locked: true },
];

export function LandingPage() {
  const [resources, setResources] = useState([
    { id: 1, title: 'Basic Amharic Greetings PDF', type: 'PDF', date: '2 days ago' },
    { id: 2, title: "Introduction to Ge'ez Alphabet", type: 'Video', date: '5 days ago' },
    { id: 3, title: 'Ethiopian Coffee Ceremony Guide', type: 'PDF', date: '1 week ago' },
  ]);

  const [newResourceName, setNewResourceName] = useState('');

  const handleAddResource = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newResourceName.trim()) {
      toast.error('Please enter a resource name');
      return;
    }
    const newRes = {
      id: resources.length + 1,
      title: newResourceName,
      type: Math.random() > 0.5 ? 'PDF' : 'Video',
      date: 'Just now'
    };
    setResources([newRes, ...resources]);
    setNewResourceName('');
    toast.success('Resource uploaded successfully (locally)');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:py-32 overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-left z-10">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0A192F]">
              Master Amharic and English with <span className="text-[#A3FF00] bg-[#0A192F] px-2 rounded">Real</span> Cultural Context.
            </h1>
            <p className="text-xl text-slate-600 max-w-lg">
              From Amharic to English, and Beyond. EthioLingo is your gateway to language mastery through authentic experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button className="bg-[#A3FF00] text-[#0A192F] hover:bg-[#A3FF00]/90 text-lg py-7 px-10 font-bold rounded-xl shadow-lg shadow-[#A3FF00]/20">
                Start Learning For Free
              </Button>
              <Button variant="outline" className="border-[#0A192F] text-[#0A192F] text-lg py-7 px-10 rounded-xl hover:bg-[#0A192F] hover:text-white transition-all">
                View All Courses
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#A3FF00]/10 rounded-full blur-3xl" />
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/81d71a9f-9e9e-4c11-875d-0c4c84aed59e/hero-graphic-6ff52356-1782927942713.webp" 
              alt="Language Learning Interface" 
              className="rounded-3xl shadow-2xl relative z-10 border-8 border-white"
            />
          </div>
        </div>
      </section>

      {/* Course Track Trackers */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">Explore Our Learning Tracks</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Choose your path and start your journey with structured, culturally-rich courses.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Amharic Track */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0A192F] flex items-center justify-center text-[#A3FF00]">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A192F]">Amharic Track</h3>
              </div>
              <div className="grid gap-4">
                {AMHARIC_TRACKS.map((track) => (
                  <Card key={track.id} className="hover:shadow-md transition-shadow cursor-pointer group border-none shadow-sm overflow-hidden rounded-2xl">
                    <CardContent className="p-0">
                      <div className="flex items-center p-6 gap-6">
                        <div className="bg-[#F1F5F9] p-4 rounded-xl text-[#0A192F] group-hover:bg-[#0A192F] group-hover:text-[#A3FF00] transition-colors">
                          {track.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-[#0A192F]">{track.title}</h4>
                          <p className="text-slate-500 text-sm">{track.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* English Track */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0A192F] flex items-center justify-center text-[#A3FF00]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A192F]">English Track</h3>
              </div>
              <div className="grid gap-4">
                {ENGLISH_TRACKS.map((track) => (
                  <Card key={track.id} className={`hover:shadow-md transition-shadow cursor-pointer group border-none shadow-sm overflow-hidden rounded-2xl ${track.locked ? 'opacity-70 bg-slate-50' : ''}`}>
                    <CardContent className="p-0">
                      <div className="flex items-center p-6 gap-6">
                        <div className="bg-[#F1F5F9] p-4 rounded-xl text-[#0A192F] group-hover:bg-[#0A192F] group-hover:text-[#A3FF00] transition-colors">
                          {track.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-lg text-[#0A192F]">{track.title}</h4>
                            {track.locked && <Badge variant="secondary" className="bg-slate-200 text-slate-500">Coming Soon</Badge>}
                          </div>
                          <p className="text-slate-500 text-sm">{track.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources & Video Feature */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">Free Resources</h2>
              <p className="text-slate-600 text-lg">Downloadable guides and video tutorials to boost your learning.</p>
            </div>
            <form onSubmit={handleAddResource} className="flex gap-2 bg-[#F8FAFC] p-2 rounded-2xl border w-full md:w-auto">
              <Input 
                placeholder="Admin: Add resource name..." 
                className="bg-transparent border-none focus-visible:ring-0 min-w-[200px]"
                value={newResourceName}
                onChange={(e) => setNewResourceName(e.target.value)}
              />
              <Button type="submit" size="icon" className="bg-[#0A192F] text-[#A3FF00] hover:bg-[#0A192F]/90 rounded-xl shrink-0">
                <Upload className="w-4 h-4" />
              </Button>
            </form>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((res) => (
              <Card key={res.id} className="border-none shadow-sm hover:shadow-xl transition-all rounded-3xl overflow-hidden group">
                <div className="aspect-video bg-slate-100 relative flex items-center justify-center overflow-hidden">
                  <img 
                    src={res.type === 'Video' ? "https://storage.googleapis.com/dala-prod-public-storage/generated-images/81d71a9f-9e9e-4c11-875d-0c4c84aed59e/resources-preview-image-0a90ed46-1782927941017.webp" : "https://storage.googleapis.com/dala-prod-public-storage/generated-images/81d71a9f-9e9e-4c11-875d-0c4c84aed59e/amharic-script-image-36e82c0a-1782927940187.webp"} 
                    alt={res.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    {res.type === 'Video' ? (
                      <div className="w-16 h-16 rounded-full bg-[#A3FF00] flex items-center justify-center text-[#0A192F] shadow-lg">
                        <Video className="w-8 h-8 ml-1" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#0A192F] shadow-lg">
                        <FileText className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#A3FF00] text-[#0A192F] hover:bg-[#A3FF00]">{res.type}</Badge>
                    <span className="text-xs text-slate-400">{res.date}</span>
                  </div>
                  <CardTitle className="text-xl text-[#0A192F]">{res.title}</CardTitle>
                </CardHeader>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="link" className="p-0 text-[#0A192F] font-bold group-hover:text-[#A3FF00] transition-colors">
                    Access Now →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section & Newsletter */}
      <section className="py-24 bg-[#0A192F] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#A3FF00]/5 -skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#A3FF00] text-[#0A192F] hover:bg-[#A3FF00] px-4 py-1 text-sm rounded-full font-bold">COMMUNITY</Badge>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Learn with peers. Grow together.</h2>
              <p className="text-slate-400 text-lg">
                Join our exclusive community of over 10,000 language learners. Access private chat rooms, cultural workshops, and weekly live practice sessions.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-[#0A192F] bg-slate-800 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium"><span className="text-[#A3FF00]">+9,996 members</span> online now</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Stay updated with EthioLingo</h3>
              <p className="text-slate-400 mb-8 text-sm">Get weekly language tips, cultural insights, and special offers delivered to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 h-14 rounded-xl focus-visible:ring-[#A3FF00]" 
                />
                <Button className="bg-[#A3FF00] text-[#0A192F] hover:bg-[#A3FF00]/90 h-14 px-8 font-bold rounded-xl whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-[10px] text-slate-500 mt-4 text-center">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0A192F] text-slate-500 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="text-xl font-bold text-white tracking-tighter">ETHIO LINGO</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Help Center</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
          <p className="text-xs">© 2024 EthioLingo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
