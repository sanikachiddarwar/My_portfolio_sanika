import { PERSONAL_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-[#0a0a0a] text-center w-full z-10 relative">
      <p className="text-slate-500 dark:text-slate-400 font-medium">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Made with React & Vite.
      </p>
    </footer>
  );
}
