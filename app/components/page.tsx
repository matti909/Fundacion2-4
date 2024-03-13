import React, { useRef, useEffect } from "react";

interface SectionProps {
  section: {
    title: string;
    subtitle: string;
  };
  refCallback: (element: HTMLDivElement | null) => void;
}

const Page: React.FC<SectionProps> = ({ section, refCallback }) => {
  const { title, subtitle } = section;
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    refCallback(sectionRef.current);
  }, [refCallback]);

  return (
    <section id={title} ref={sectionRef}>
      <div className="content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default Page;
