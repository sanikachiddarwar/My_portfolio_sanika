import { motion } from 'framer-motion';
import { EDUCATION_DATA } from '../../constants';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-white dark:bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Academic Journey</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Education
          </h3>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-blue-200 dark:border-blue-900/50 pl-8 md:pl-0 md:border-l-0">
          
          {/* Animated Center Line for Desktop */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="hidden md:block absolute left-1/2 top-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full transform -translate-x-1/2 origin-top"
          />

          <div className="space-y-12 md:space-y-0">
            {EDUCATION_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              
              const cardContent = (
                <>
                  <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold mb-4">
                    {item.duration}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.degree}</h4>
                  <h5 className="text-md font-medium text-slate-600 dark:text-slate-400 mb-3">{item.institution}</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">{item.description}</p>
                  <div className="inline-block font-mono font-semibold text-sm bg-slate-100 dark:bg-white/5 px-3 py-1 rounded text-slate-700 dark:text-slate-300">
                    {item.score}
                  </div>
                </>
              );

              return (
                <div key={index} className="relative md:flex items-center justify-between w-full md:mb-12 last:mb-0">
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="absolute -left-[41px] md:left-1/2 w-5 h-5 rounded-full bg-white dark:bg-[#0a0a0a] border-4 border-blue-600 z-10 transform md:-translate-x-1/2 mt-1.5 md:mt-0"
                  />

                  {/* Left Side (Desktop Even) */}
                  <div className={`hidden md:block md:w-[45%] ${isEven ? 'md:pr-12 md:text-right' : 'md:invisible'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                        className="glass p-6 rounded-2xl border border-transparent hover:border-blue-500/30 transition-colors shadow-sm"
                      >
                        {cardContent}
                      </motion.div>
                    )}
                  </div>

                  {/* Right Side (Desktop Odd) */}
                  <div className={`hidden md:block md:w-[45%] ${!isEven ? 'md:pl-12' : 'md:invisible'}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                        className="glass p-6 rounded-2xl border border-transparent hover:border-blue-500/30 transition-colors shadow-sm"
                      >
                        {cardContent}
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Mobile Card (Both Even & Odd - Mobile Only) */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    className="md:hidden glass p-6 rounded-2xl border border-transparent hover:border-blue-500/30 transition-colors shadow-sm w-full"
                  >
                    {cardContent}
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
