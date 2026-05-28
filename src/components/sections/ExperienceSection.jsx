import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { experience } from "../../data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section py-20" aria-label="Experience section">
      <SectionHeading title="Experience" subtitle="Hands-on internship experience in web development." />
      <div className="glass-card p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-300">
            <BriefcaseBusiness size={16} />
            {experience.role}
          </span>
          <span className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <CalendarDays size={16} />
            {experience.period}
          </span>
        </div>
        <p className="mt-2 font-medium">{experience.company}</p>
        <ol className="mt-4 space-y-2">
          {experience.responsibilities.map((item) => (
            <li key={item} className="rounded-lg border border-slate-200/70 p-3 text-slate-700 dark:border-slate-700 dark:text-slate-200">
              {item}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
