import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../../constants';
import * as SiIcons from 'react-icons/si';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 bg-pattern overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">My Arsenal</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Technical Skills
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SKILLS_DATA.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass p-8 rounded-3xl"
            >
              <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 border-b border-gray-200 dark:border-white/10 pb-4">
                {category.category}
              </h4>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-3 sm:grid-cols-4 gap-6"
              >
                {category.items.map((skill, index) => {
                  const IconComponent = SiIcons[skill.icon] || SiIcons.SiCodeigniter;
                  
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex flex-col items-center gap-3 group"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-white dark:bg-black/50 shadow-md border border-gray-100 dark:border-white/5 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-500/30">
                        {/* Hover Gradient Background */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                          style={{ backgroundColor: skill.color }}
                        />
                        <IconComponent 
                          size={32} 
                          className="text-slate-600 dark:text-slate-400 group-hover:text-[var(--hover-color)] transition-colors duration-300" 
                          style={{ '--hover-color': skill.color }}
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
