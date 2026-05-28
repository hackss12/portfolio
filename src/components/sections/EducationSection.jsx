import SectionHeading from "../SectionHeading";

export default function EducationSection() {
  return (
    <section id="education" className="section py-20" aria-label="Education section">
      <SectionHeading title="Education" subtitle="Academic background and foundation in information technology." />
      <div className="glass-card p-6 sm:p-8">
        <h3 className="text-xl font-semibold">Bachelor of Science in Information Technology (BSc IT)</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Mumbai University</p>
      </div>
    </section>
  );
}
