import { useCallback, useEffect, useRef, useState } from "react";

function useIntersectionObserver(options = {}) {
  const [visibleSection, setVisibleSection] = useState("home");
  const headerRef = useRef<HTMLHeadElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const element = sectionsRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.getAttribute("id") || "");

          entry.target.id !== "home"
            ? headerRef.current?.classList.add("bg-white")
            : headerRef.current?.classList.remove("bg-white");
        }
      });
    }, options);

    //const sections = document.querySelectorAll("section[id]");
    if (element) {
      element.forEach((section) => {
        observer.observe(section);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSmoothScroll = (id: string) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      const scrollOffset = 60;

      window.scrollTo({
        top: offsetTop - scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const refCallback = useCallback((element: HTMLElement | null) => {
    if (element) {
      sectionsRef.current.push(element);
    }
  }, []);

  return { visibleSection, headerRef, handleSmoothScroll, refCallback };
}

export default useIntersectionObserver;
