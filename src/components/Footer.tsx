import { Droplets, MessageCircle, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Aqa<span className="text-cyan-400">Client</span></span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
              Najlepszy klient do Minecrafta dla graczy ceniących płynność, uczciwą grę i nowoczesny design.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://discord.gg/tMqfQW4jWm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#5865F2] hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/placeholder" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#1DA1F2] hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/placeholder" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#FF0000] hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Nawigacja</h4>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Strona Główna</Link></li>
              <li><Link to="/download" className="hover:text-cyan-400 transition-colors">Pobierz</Link></li>
              <li><a href="https://discord.gg/tMqfQW4jWm" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Społeczność (Discord)</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Sklep</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Wsparcie</h4>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li><Link to="/terms" className="hover:text-cyan-400 transition-colors">Regulamin</Link></li>
              <li><Link to="/privacy" className="hover:text-cyan-400 transition-colors">Polityka Prywatności</Link></li>
              <li><a href="https://discord.gg/tMqfQW4jWm" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Kontakt (Ticket)</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} AqaClient. Wszelkie prawa zastrzeżone.</p>
          <p className="mt-4 md:mt-0">Nie jesteśmy powiązani z Mojang AB ani Microsoft.</p>
        </div>
      </div>
    </footer>
  );
}
