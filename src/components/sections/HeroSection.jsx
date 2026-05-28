import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import { useTypewriter } from "../../hooks/useTypewriter";
import { roles } from "../../data/portfolioData";

export default function HeroSection() {
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="section flex min-h-screen items-center pt-24" aria-label="Hero section">
      <div className="w-full">
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="font-medium text-blue-600 dark:text-blue-400">
          Hello, I am
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
          Ganesh Sawant
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-2xl font-semibold text-slate-700 dark:text-slate-200 sm:text-3xl">
          Aspiring Software Developer
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-3 h-8 text-lg text-blue-600 dark:text-blue-300">
          {typed}
          <span className="animate-pulse">|</span>
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6 max-w-2xl text-slate-600 dark:text-slate-300">
          IT graduate skilled in HTML, CSS, JavaScript, SQL, Firebase, and frontend-backend integration, with internship experience in web development.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 flex flex-wrap gap-3">
          <a href="/Ganesh-Sawant-Resume.pdf" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
            <Download size={18} />
            Download Resume
          </a>
          <a href="https://github.com/hackss12/ganeshsawant.git" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200">
            <Github size={18} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ganesh-sawant-295922282" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200">
            <Linkedin size={18} />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
