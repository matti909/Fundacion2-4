import React from "react";

interface Section {
  id: string;
  component: JSX.Element;
}

interface DynamicSectionsProps {
  sections: Section[];
  refCallback: (element: HTMLElement | null) => void;
}

const DynamicSections: React.FC<DynamicSectionsProps> = ({
  sections,
  refCallback,
}) => {
  return (
    <div>
      {sections.map((section) => (
        <section key={section.id} id={section.id} ref={refCallback}>
          {section.component}
        </section>
      ))}
    </div>
  );
};

export default DynamicSections;
