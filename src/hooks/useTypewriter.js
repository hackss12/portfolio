import { useEffect, useState } from "react";

export function useTypewriter(words, speed = 110, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words?.length) return undefined;

    const current = words[index];
    const atEnd = subIndex === current.length;
    const atStart = subIndex === 0;

    const timeout = setTimeout(
      () => {
        if (!deleting && atEnd) {
          setDeleting(true);
          return;
        }
        if (deleting && atStart) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      atEnd && !deleting ? pause : deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [deleting, index, pause, speed, subIndex, words]);

  return words?.[index]?.slice(0, subIndex) ?? "";
}
