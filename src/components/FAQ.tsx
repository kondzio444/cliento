import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Czy AqaClient jest w pełni darmowy?",
    answer: "Tak, nasz klient jest w 100% darmowy. Nie ma żadnych ukrytych opłat ani subskrypcji za podstawowe funkcje."
  },
  {
    question: "Czy mogę dostać bana na serwerach za używanie AqaClient?",
    answer: "Nie. AqaClient został stworzony z myślą o Fair Play. Nie zawiera żadnych cheatów, makr ani niedozwolonych modyfikacji, dzięki czemu jest bezpieczny na wszystkich popularnych serwerach."
  },
  {
    question: "Jakie wersje Minecrafta są obsługiwane?",
    answer: "Obecnie skupiamy się na wersji 1.8.9, która jest najbardziej zoptymalizowana i popularna wśród graczy PvP. W przyszłości planujemy wsparcie dla nowszych wersji."
  },
  {
    question: "Jak zainstalować AqaClient?",
    answer: "Wystarczy wejść w zakładkę Pobieranie, ściągnąć instalator dla swojego systemu operacyjnego i postępować zgodnie z instrukcjami. Instalator automatycznie doda profil do Twojego launchera."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white"
          >
            Często zadawane <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">pytania</span>
          </motion.h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-2xl bg-slate-900/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-lg text-white">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
