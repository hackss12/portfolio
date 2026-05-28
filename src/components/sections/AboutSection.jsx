import SectionHeading from "../SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="section py-20" aria-label="About section">
      <SectionHeading
        title="About Me"
        subtitle="Professional summary, goals, and strengths that define my developer journey."
      />
      <div className="glass-card p-6 sm:p-8">
        <p className="text-slate-700 dark:text-slate-200">
          I am Ganesh Sawant, a motivated and detail-oriented IT graduate with hands-on experience in web development, Firebase integration, and software project development.
        </p>
        <p className="mt-4 text-slate-700 dark:text-slate-200">
          I build responsive web applications, connect frontend and backend systems, manage database-driven features, and enjoy solving technical issues through clean, practical implementation.
        </p>
      </div>
    </section>
  );
}
