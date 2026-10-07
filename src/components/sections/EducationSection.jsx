import SectionHeading from "../SectionHeading";
import { education, achievements, certifications } from "../../data/portfolioData";

export default function EducationSection() {
  return (
    <section id="education" className="section py-20" aria-label="Education section">
      <SectionHeading title="Education" subtitle="Academic background and foundation in information technology." />
      <div className="grid gap-6 lg:grid-cols-3">
        {education.map((item) => (
          <article key={item.title} className="glass-card p-6 sm:p-8">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-300">{item.period}</p>
            <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{item.institution}</p>
            <p className="mt-1 text-slate-600 dark:text-slate-300">{item.extra}</p>
            <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-200">{item.result}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="glass-card p-6 sm:p-8">
          <h3 className="text-2xl font-semibold">Achievements</h3>
          <ul className="mt-4 grid gap-3">
            {achievements.map((achievement) => (
              <li key={achievement} className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">{achievement}</li>
            ))}
          </ul>
        </div>

        <div className="glass-card p-6 sm:p-8">
          <h3 className="text-2xl font-semibold">Certifications</h3>
          <ul className="mt-4 grid gap-3">
            {certifications.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
