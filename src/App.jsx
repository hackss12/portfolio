import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import EducationSection from "./components/sections/EducationSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";
import { navItems } from "./data/portfolioData";
import { useActiveSection } from "./hooks/useActiveSection";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const activeId = useActiveSection(ids);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const shouldDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(shouldDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <ScrollProgress />
      <Navbar
        items={navItems}
        activeId={activeId}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((prev) => !prev)}
      />
      <main id="main-content" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.18),transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.14),transparent_45%)]" />
        <AnimatePresence mode="wait">
          <motion.div
            key="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <EducationSection />
            <ContactSection />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
