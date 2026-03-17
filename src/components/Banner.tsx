import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-950 border border-cyan-500/30 p-12 md:p-20 text-center shadow-[0_0_100px_-20px_rgba(6,182,212,0.4)]"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay bg-cover bg-center" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-extrabold mb-8 text-white tracking-tight leading-tight"
            >
              Gotowy na nową <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                jakość gry?
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-cyan-100/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Dołącz do społeczności graczy, którzy już wybrali AqaClient. 
              Pobierz za darmo i przekonaj się sam, jak płynny może być Minecraft.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/download" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-slate-950 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 hover:bg-cyan-50 transition-all shadow-2xl">
                <Download className="w-6 h-6" />
                Pobierz AqaClient
              </Link>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-sm text-cyan-200/50 font-medium"
            >
              Dostępne dla Windows 10/11. Wersja na macOS i Linux wkrótce.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
