import { Download, FileText } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { profile } from "../../data/portfolioData";

export default function ResumeSection() {
  return (
    <section id="resume" className="section py-20" aria-label="Resume section">
      <SectionHeading
        title="Resume"
        subtitle="A quick overview of my profile, skills, and experience in one place."
      />

      <div className="glass-card overflow-hidden p-4 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-100 p-2 text-blue-700 dark:bg-blue-500/20 dark:text-blue-200">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{profile.name} Resume</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Web Developer • Data Analyst • IT Graduate</p>
            </div>
          </div>

          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>

        <iframe
          src={profile.resumeUrl}
          title="Ganesh Sawant Resume"
          className="h-[720px] w-full rounded-xl border border-slate-200 bg-white dark:border-slate-700"
          loading="lazy"
        />
      </div>
    </section>
  );
}
