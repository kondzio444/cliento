import { motion } from 'motion/react';
import { Download, ChevronRight, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-8 shadow-lg backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Wersja 1.0.0 Wkrótce !
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white"
          >
            Graj płynniej.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Dominuj na serwerach.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            AqaClient to zoptymalizowany klient Minecraft stworzony dla graczy PvP. 
            Zwiększ swoje FPS, korzystaj z wbudowanych modyfikacji i ciesz się czystą grą bez cheatów.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link to="/download" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)] border border-cyan-400/20">
              <Download className="w-5 h-5" />
              Pobierz dla Windows
            </Link>
            <a href="#features" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all border border-white/10 hover:border-white/20">
              Zobacz modyfikacje
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
        
        {/* App Preview Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="aspect-video rounded-2xl bg-slate-900 border border-white/10 shadow-2xl overflow-hidden relative group">
            {/* Mockup Header */}
            <div className="h-8 bg-slate-950 border-b border-white/10 flex items-center px-4 gap-2 z-20 relative">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 text-xs text-slate-500 font-mono">AqaClient 1.0.0</div>
            </div>
            {/* Mockup Content - Placeholder for actual client screenshot */}
            <div className="absolute inset-0 top-8 bg-[url('https://images.unsplash.com/photo-1607513746994-51f730a44832?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 top-8 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            
            <div className="absolute inset-0 top-8 flex items-center justify-center flex-col gap-6 z-10">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 rounded-3xl bg-slate-950/80 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.3)]"
              >
                <Droplets className="w-12 h-12 text-cyan-400" />
              </motion.div>
              <h3 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg">AqaClient Launcher</h3>
              <div className="flex gap-2">
                <div className="w-12 h-1 rounded-full bg-cyan-500"></div>
                <div className="w-2 h-1 rounded-full bg-cyan-500/50"></div>
                <div className="w-2 h-1 rounded-full bg-cyan-500/50"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
