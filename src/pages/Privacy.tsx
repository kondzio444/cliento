import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-white">Polityka Prywatności</h1>
          <div className="prose prose-invert prose-cyan max-w-none text-slate-300 space-y-6">
            <p>Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Zbierane dane</h2>
            <p>AqaClient szanuje Twoją prywatność. Zbieramy jedynie anonimowe dane telemetryczne dotyczące wydajności (np. średnie FPS, błędy aplikacji), aby móc stale ulepszać nasz produkt. Nie zbieramy haseł, danych logowania ani prywatnych wiadomości.</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Wykorzystanie danych</h2>
            <p>Zebrane dane są wykorzystywane wyłącznie w celach statystycznych i diagnostycznych. Nie sprzedajemy ani nie udostępniamy Twoich danych podmiotom trzecim.</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Pliki cookies na stronie</h2>
            <p>Nasza strona internetowa może używać plików cookies w celu zapewnienia prawidłowego działania serwisu oraz w celach analitycznych.</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Kontakt</h2>
            <p>W razie pytań dotyczących polityki prywatności, prosimy o kontakt poprzez nasz oficjalny serwer Discord.</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
