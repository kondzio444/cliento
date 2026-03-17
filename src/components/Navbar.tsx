import { motion } from 'motion/react';
import { Droplets, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Link to="/" className="flex items-center gap-2">
            {/* Tu możesz wstawić swoje logo jako <img> */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">Aqa<span className="text-cyan-400">Client</span></span>
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-8"
        >
          {isHome ? (
            <>
              <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Funkcje</a>
              <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">FAQ</a>
            </>
          ) : (
            <Link to="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Strona Główna</Link>
          )}
          <a href="https://discord.gg/tMqfQW4jWm" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Społeczność</a>
          <Link to="/download" className="flex items-center gap-2 bg-white text-slate-950 px-6 py-2.5 rounded-full font-bold hover:bg-cyan-50 hover:scale-105 transition-all shadow-lg">
            <Download className="w-4 h-4" />
            Pobierz
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}
