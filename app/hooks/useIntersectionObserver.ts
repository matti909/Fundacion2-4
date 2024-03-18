import { useEffect, useRef, useState } from "react";

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

function useIntersectionObserver(options: IntersectionObserverOptions = {}) {
  const [visibleSection, setVisibleSection] = useState("home");
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.getAttribute("id") || "");
        }
      });
    }, options);

    const elements = sectionsRef.current;
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [options]); // Agrega las opciones como dependencia para actualizar el observer si cambian

  const refCallback = (element: HTMLElement | null) => {
    if (element) {
      sectionsRef.current.push(element);
    }
  };

  return { visibleSection, refCallback };
}

export default useIntersectionObserver;
