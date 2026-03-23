import { motion } from 'framer-motion';
import { ABOUT_CARDS } from '../../constants';
import { Brain, LineChart, Bot, Layout } from 'lucide-react';

const iconMap = {
  Brain,
  LineChart,
  Bot,
  Layout
};

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="about" className="py-24 relative bg-slate-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">About Me</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Bridging Data & Design
          </h3>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            I specialize in extracting actionable insights from complex datasets and building predictive machine learning models. With a strong foundation in Data Structures, Algorithms, and diverse analytical tools, I aim to solve real-world problems and deliver impactful, data-driven solutions to achieve organizational goals.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ABOUT_CARDS.map((card, index) => {
            const IconComponent = iconMap[card.icon] || Brain;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-2xl flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/10 group cursor-pointer border border-transparent hover:border-blue-500/30"
              >
                <div className="p-4 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  {card.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
