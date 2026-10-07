import SectionHeading from "../SectionHeading";
import { profile, aboutParagraphs, highlights, languages } from "../../data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="section py-20" aria-label="About section">
      <SectionHeading
        title="About Me"
        subtitle="Professional summary, goals, and strengths that define my developer journey."
      />
      <div className="glass-card p-6 sm:p-8">
        <div className="space-y-4 text-slate-700 dark:text-slate-200">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/70">
            <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
            <p className="mt-1 font-semibold">{profile.location}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/70">
            <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
            <p className="mt-1 font-semibold">{profile.email}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/70">
            <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
            <p className="mt-1 font-semibold">{profile.phone}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h3 className="text-xl font-semibold">Professional Highlights</h3>
            <ul className="mt-4 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900/70">
            <h3 className="text-xl font-semibold">Languages</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {languages.map((language) => (
                <span key={language} className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-500/20 dark:text-blue-200">
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
