import { motion } from 'motion/react';
import { Zap, Shield, Palette, Crosshair, MonitorPlay, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Ogromny Boost FPS",
    description: "Zoptymalizowaliśmy silnik renderowania, aby zapewnić Ci najwyższą możliwą płynność gry, nawet na słabszych komputerach."
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    title: "Fair Play (Bez Cheatów)",
    description: "Nasz klient jest w 100% zgodny z zasadami serwerów. Wbudowany anty-cheat gwarantuje czystą i uczciwą rozgrywkę."
  },
  {
    icon: <Palette className="w-6 h-6 text-purple-400" />,
    title: "Pełna Personalizacja",
    description: "Dostosuj interfejs do swoich potrzeb. Zmieniaj kolory, pozycje modów i twórz własne profile ustawień."
  },
  {
    icon: <Crosshair className="w-6 h-6 text-red-400" />,
    title: "Modyfikacje PvP",
    description: "Wbudowane mody takie jak Keystrokes, CPS Counter, Armor Status, Potion Effects i wiele innych, gotowe do użycia."
  },
  {
    icon: <MonitorPlay className="w-6 h-6 text-blue-400" />,
    title: "Czysty Interfejs",
    description: "Nowoczesny, przejrzysty i nieinwazyjny interfejs użytkownika, który nie rozprasza podczas intensywnych walk."
  },
  {
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    title: "Niskie Zużycie RAM",
    description: "AqaClient zużywa znacznie mniej pamięci RAM niż standardowy Minecraft, pozostawiając zasoby dla innych aplikacji."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-900/50 border-y border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
          >
            Wszystko, czego <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">potrzebujesz</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Zaprojektowany z myślą o graczach, AqaClient oferuje zestaw narzędzi, które pomogą Ci osiągnąć przewagę w każdej walce.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-950/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-slate-900 hover:border-cyan-500/50 transition-all group shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
