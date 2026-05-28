import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { skills } from "../../data/portfolioData";

export default function SkillsSection() {
  return (
    <section id="skills" className="section py-20" aria-label="Skills section">
      <SectionHeading title="Skills" subtitle="Technologies and tools I use to build end-to-end solutions." />
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group, idx) => (
          <motion.article
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300">{group.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
