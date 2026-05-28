import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">{subtitle}</p>
      ) : null}
    </motion.div>
  );
}
