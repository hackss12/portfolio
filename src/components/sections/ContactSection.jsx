import { Github, Linkedin, Mail, Phone } from "lucide-react";
import SectionHeading from "../SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="section py-20" aria-label="Contact section">
      <SectionHeading title="Contact" subtitle="Let us connect for opportunities, collaborations, or project discussions." />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold">Contact Details</h3>
          <div className="mt-4 space-y-3 text-slate-700 dark:text-slate-200">
            <p className="flex items-center gap-2"><Mail size={16} /> ganesh.sawant.dev@email.com</p>
            <p className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</p>
            <a href="https://github.com/hackss12/ganeshsawant.git" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600"><Github size={16} /> GitHub</a>
            <a href="https://www.linkedin.com/in/ganesh-sawant-295922282" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600"><Linkedin size={16} /> LinkedIn</a>
          </div>
        </div>
        <form className="glass-card space-y-4 p-6">
          <label className="block">
            <span className="mb-1 block text-sm">Name</span>
            <input type="text" className="w-full rounded-lg border border-slate-300 bg-white/80 px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900/70" required />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm">Email</span>
            <input type="email" className="w-full rounded-lg border border-slate-300 bg-white/80 px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900/70" required />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm">Message</span>
            <textarea rows="4" className="w-full rounded-lg border border-slate-300 bg-white/80 px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900/70" required />
          </label>
          <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
