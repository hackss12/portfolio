import SectionHeading from "../SectionHeading";

export default function EducationSection() {
  return (
    <section id="education" className="section py-20" aria-label="Education section">
      <SectionHeading title="Education" subtitle="Academic background and foundation in information technology." />
      <div className="grid gap-6 lg:grid-cols-3">
        <article className="glass-card p-6 sm:p-8">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-300">Jun 2023 - Feb 2026</p>
          <h3 className="mt-2 text-xl font-semibold">Bachelor of Science in Information Technology (B.Sc. IT)</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Sant Rawool Maharaj Mahavidyalaya, Kudal, Sindhudurg</p>
          <p className="mt-1 text-slate-600 dark:text-slate-300">Mumbai University</p>
          <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-200">CGPA: SEM V - 8.00</p>
        </article>
        <article className="glass-card p-6 sm:p-8">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-300">Oct 2022 - Feb 2023</p>
          <h3 className="mt-2 text-xl font-semibold">Higher Secondary Education</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Gulabtai Diananath Kanistha Mahavidyalaya, Vetore, Vengurla, Maharashtra</p>
          <p className="mt-1 text-slate-600 dark:text-slate-300">Maharashtra State Board of Secondary and Higher Secondary Education</p>
          <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-200">Percentage: 71.20%</p>
        </article>
        <article className="glass-card p-6 sm:p-8">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-300">Apr 2023 - Jun 2023</p>
          <h3 className="mt-2 text-xl font-semibold">Diploma in Software Applications</h3>
          <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
            <li>MS Office, Excel & PowerPoint</li>
            <li>English Typing</li>
            <li>Desktop Publishing</li>
            <li>Basics of Photoshop & CorelDRAW</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
