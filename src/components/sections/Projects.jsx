import { useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { PROJECTS_DATA } from '../../constants';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const TiltCard = ({ project, index }) => {
  const ref = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Motion values for the 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalize mouse position between -0.5 and 0.5
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="perspective-1000 w-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="glass rounded-3xl overflow-hidden shadow-xl border border-white/10 relative group bg-white/50 dark:bg-black/40 h-full flex flex-col"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-0" />

        {/* Image Container */}
        <div className="relative h-56 w-full overflow-hidden z-10" style={{ transform: "translateZ(30px)" }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          <h4 className="absolute bottom-4 left-6 right-6 text-2xl font-bold text-white leading-tight">
            {project.title}
          </h4>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col z-10" style={{ transform: "translateZ(20px)" }}>
          <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-200 dark:border-white/10">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github size={18} /> Code
            </a>
            {/* <a 
              href={project.demo} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-auto"
            >
              <ExternalLink size={18} /> Demo
            </a> */}
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 flex items-center justify-center gap-1 w-full py-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors border border-dashed border-gray-300 dark:border-white/20 rounded-xl"
          >
            {isExpanded ? 'Show Less' : 'Deep Dive'}
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {/* Expandable Details */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-4 pt-4 border-t border-gray-100 dark:border-white/5"
              >
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 block text-xs uppercase mb-1">Role</span>
                    <span className="text-slate-600 dark:text-slate-400">{project.role}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 block text-xs uppercase mb-1">Challenges</span>
                    <span className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.challenges}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 block text-xs uppercase mb-1">Outcome</span>
                    <span className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.outcome}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-white dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Featured Projects
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <TiltCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
