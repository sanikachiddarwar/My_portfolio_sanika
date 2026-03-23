import { motion } from 'framer-motion';
import { CERTIFICATES_DATA } from '../../constants';
import { ExternalLink, Award } from 'lucide-react';

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative bg-slate-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Qualifications</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Licenses & Certifications
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES_DATA.map((cert, index) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 block"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Certificate <ExternalLink size={18} />
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 relative bg-white dark:bg-transparent">
                <div className="absolute -top-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-[#1a1a1a] z-10 group-hover:scale-110 transition-transform duration-300">
                  <Award size={24} />
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-bold text-sm mb-2 uppercase tracking-wide">
                  {cert.date}
                </p>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                  {cert.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  {cert.issuer}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
