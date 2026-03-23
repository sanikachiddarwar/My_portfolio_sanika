import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-50 transition-colors duration-300">
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Certificates />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
