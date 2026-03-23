import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import DataNode from '../3d/DataNode';
import { PERSONAL_INFO } from '../../constants';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Environment preset="city" />
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <group position={[2, 0, -2]}>
              <DataNode />
            </group>
          </Float>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full border border-blue-600/30 bg-blue-600/10 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide backdrop-blur-sm">
              Hello, I'm
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {PERSONAL_INFO.role.split('|')[0]}
            </span>
            <span className="text-slate-400 dark:text-slate-600 mx-2">|</span>
            {PERSONAL_INFO.role.split('|')[1]}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed"
          >
            {PERSONAL_INFO.shortIntro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href={PERSONAL_INFO.resume}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1"
            >
              <Download size={20} /> Download CV
            </a>

            <div className="flex items-center gap-4">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-700 dark:text-white transition-all hover:-translate-y-1">
                <Github size={22} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-700 dark:text-white transition-all hover:-translate-y-1">
                <Linkedin size={22} />
              </a>
              <a href={PERSONAL_INFO.email} className="p-3 rounded-full bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-700 dark:text-white transition-all hover:-translate-y-1">
                <Mail size={22} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Image Column (Floating effect) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="relative hidden lg:flex justify-center items-center h-full"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-blue-600 to-purple-600"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-4 border-[#0a0a0a]">
              <img src="/myphoto.png" alt="Profile" className="w-full h-full object-cover object-center" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
