import React from "react";

interface NavigationProps {
  sections: { id: string; label: string }[];
  visibleSection: string;
  handleSmoothScroll: (id: string) => void;
  headerRef: React.RefObject<HTMLElement>;
}

const Navbar: React.FC<NavigationProps> = ({
  sections,
  visibleSection,
  handleSmoothScroll,
  headerRef,
}) => {
  return (
    <header ref={headerRef}>
      <nav>
        <ul>
          {sections.map((section) => (
            <li
              key={section.id}
              className={visibleSection === section.id ? "active" : ""}
            >
              <a
                href={`#${section.id}`}
                onClick={() => handleSmoothScroll(section.id)}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
