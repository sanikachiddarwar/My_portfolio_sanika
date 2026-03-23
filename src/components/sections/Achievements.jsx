import { motion } from 'framer-motion';
import { ACHIEVEMENTS_DATA } from '../../constants';
import { Trophy } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-white dark:bg-[#050505] overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Milestones</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Key Achievements
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass p-8 rounded-3xl relative group border border-transparent hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300 transform -rotate-6 group-hover:rotate-0">
                <Trophy size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                {item.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
