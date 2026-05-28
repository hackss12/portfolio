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
          I am Ganesh Sawant, an aspiring software developer focused on building practical and scalable web applications. I enjoy turning ideas into polished digital products with clean code, intuitive UI, and strong performance.
        </p>
        <p className="mt-4 text-slate-700 dark:text-slate-200">
          My career goal is to grow into a full-stack engineer who contributes to meaningful products, collaborates with strong teams, and continuously improves through real-world problem solving.
        </p>
      </div>
    </section>
  );
}
