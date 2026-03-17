import { motion } from 'motion/react';
import { Download as DownloadIcon, Monitor, Apple, Terminal } from 'lucide-react';

export default function Download() {
  return (
    <main className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white"
          >
            Pobierz <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AqaClient</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Wybierz swój system operacyjny i dołącz do tysięcy graczy cieszących się płynną rozgrywką.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Windows */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/80 border border-cyan-500/30 rounded-3xl p-8 text-center relative overflow-hidden group hover:border-cyan-400 transition-all shadow-[0_0_30px_rgba(6,182,212,0.1)]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
            <Monitor className="w-16 h-16 mx-auto text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-2">Windows</h3>
            <p className="text-slate-400 mb-8">Windows 10 / 11 (64-bit)</p>
            <button disabled className="w-full flex items-center justify-center gap-2 bg-white/5 text-slate-400 px-6 py-3 rounded-xl font-bold cursor-not-allowed">
              Wkrótce
            </button>
          </motion.div>

          {/* macOS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 text-center relative overflow-hidden opacity-70"
          >
            <Apple className="w-16 h-16 mx-auto text-slate-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">macOS</h3>
            <p className="text-slate-400 mb-8">Apple Silicon & Intel</p>
            <button disabled className="w-full flex items-center justify-center gap-2 bg-white/5 text-slate-400 px-6 py-3 rounded-xl font-bold cursor-not-allowed">
              Wkrótce
            </button>
          </motion.div>

          {/* Linux */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 text-center relative overflow-hidden opacity-70"
          >
            <Terminal className="w-16 h-16 mx-auto text-slate-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">Linux</h3>
            <p className="text-slate-400 mb-8">AppImage / .deb</p>
            <button disabled className="w-full flex items-center justify-center gap-2 bg-white/5 text-slate-400 px-6 py-3 rounded-xl font-bold cursor-not-allowed">
              Wkrótce
            </button>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
