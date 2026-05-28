import { useEffect, useState } from "react";

export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids?.[0] ?? "home");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { threshold: [0.3, 0.6], rootMargin: "-30% 0px -40% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
