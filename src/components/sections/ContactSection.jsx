import { Github, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { profile } from "../../data/portfolioData";

export default function ContactSection() {
  return (
    <section id="contact" className="section py-20" aria-label="Contact section">
      <SectionHeading title="Contact" subtitle="Let us connect for opportunities, collaborations, or project discussions." />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold">Contact Details</h3>
          <div className="mt-4 space-y-3 text-slate-700 dark:text-slate-200">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-blue-600"><Mail size={16} /> {profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 hover:text-blue-600"><Phone size={16} /> {profile.phone}</a>
            <p className="flex items-center gap-2"><MapPin size={16} /> {profile.location}</p>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600"><Github size={16} /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600"><Linkedin size={16} /> LinkedIn</a>
            <a href={profile.resumeUrl} download={profile.resumeFileName} className="flex items-center gap-2 hover:text-blue-600"><Download size={16} /> Download Resume</a>
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
