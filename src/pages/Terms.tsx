import { motion } from 'motion/react';

export default function Terms() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-white">Regulamin</h1>
          <div className="prose prose-invert prose-cyan max-w-none text-slate-300 space-y-6">
            <p>Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Postanowienia ogólne</h2>
            <p>Niniejszy regulamin określa zasady korzystania z oprogramowania AqaClient. Pobierając i korzystając z naszego klienta, akceptujesz poniższe warunki.</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Dozwolony użytek</h2>
            <p>AqaClient jest modyfikacją gry Minecraft przeznaczoną do poprawy wydajności i komfortu gry. Zabrania się modyfikowania kodu klienta w celu tworzenia niedozwolonych ułatwień (cheatów).</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Odpowiedzialność</h2>
            <p>Nie ponosimy odpowiedzialności za blokady (bany) nałożone na konta graczy przez administrację serwerów zewnętrznych, choć dokładamy wszelkich starań, aby klient był w 100% zgodny z zasadami Fair Play.</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Zmiany w regulaminie</h2>
            <p>Zastrzegamy sobie prawo do wprowadzania zmian w niniejszym regulaminie. O wszelkich zmianach będziemy informować na naszym serwerze Discord.</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
