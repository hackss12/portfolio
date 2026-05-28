import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="section flex flex-col items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-300 sm:flex-row">
        <p>© {new Date().getFullYear()} Ganesh Sawant. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/hackss12/ganeshsawant.git" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/ganesh-sawant-295922282" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
