import { useEffect } from "react";

/**
 * Custom hook that observes elements with the "reveal" class
 * inside the given ref and adds "animate-in" when they enter the viewport.
 */
export function useRevealOnScroll(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target); // stop observing once animated
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = ref.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ref]);
}
