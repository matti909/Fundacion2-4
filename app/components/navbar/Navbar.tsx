'use client'

import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import './Navbar.scss'

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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <header ref={headerRef} className="header">
      <div className="header__content">
        <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
          <ul className="nav__menu">
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
          <button className="header__toggle" onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
      </div>
    </header>
  );
};

export default Navbar;
