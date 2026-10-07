import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import { useTypewriter } from "../../hooks/useTypewriter";
import { profile, roles } from "../../data/portfolioData";

export default function HeroSection() {
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="section flex min-h-screen items-center pt-24" aria-label="Hero section">
      <div className="w-full">
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="font-medium text-blue-600 dark:text-blue-400">
          Hello, I am
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
          {profile.name}
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-2xl font-semibold text-slate-700 dark:text-slate-200 sm:text-3xl">
          Data Analyst
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-3 h-8 text-lg text-blue-600 dark:text-blue-300">
          {typed}
          <span className="animate-pulse">|</span>
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6 max-w-2xl text-slate-600 dark:text-slate-300">
          {profile.heroSummary}
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 flex flex-wrap gap-3">
          <a href={profile.resumeUrl} download={profile.resumeFileName} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
            <Download size={18} />
            Download Resume
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200">
            <Github size={18} />
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200">
            <Linkedin size={18} />
            LinkedIn
          </a>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {[
            { label: "Projects", value: "2" },
            { label: "Core Skills", value: "10+" },
            { label: "Languages", value: "3" }
          ].map((item) => (
            <div key={item.label} className="glass-card p-4 text-left">
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
              <p className="mt-2 text-2xl font-bold text-blue-600 dark:text-blue-300">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
