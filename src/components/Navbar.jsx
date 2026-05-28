import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ items, activeId, darkMode, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/70">
      <nav className="section flex h-16 items-center justify-between">
        <a href="#home" className="text-lg font-semibold text-blue-600 dark:text-blue-400">
          GS
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeId === item.id ? "nav-link-active" : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300"}`}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            className="ml-3 rounded-lg border border-slate-300 p-2 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-md p-2 text-slate-700 dark:text-slate-200 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section pb-4 md:hidden">
          <div className="glass-card flex flex-col gap-2 p-3">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`nav-link ${activeId === item.id ? "nav-link-active" : "text-slate-600 dark:text-slate-300"}`}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={onToggleTheme}
              className="mt-2 flex items-center justify-center gap-2 rounded-md border border-slate-300 py-2 dark:border-slate-700"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
