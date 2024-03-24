"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import "./Navbar.scss";
import Image from "next/image";
import logo from '../../../public/assets/a12.webp';

interface NavigationProps {
  sections: { id: string; label: string }[];
  visibleSection: string;
}

const Navbar: React.FC<NavigationProps> = ({ sections, visibleSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined as unknown as number,
    height: undefined as unknown as number,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <header
      className={`header ${
        visibleSection !== "home" ? "bg-white" : "bg-black"
      }`}
    >
      <div className="header__content">
        <Link className="header__content__logo" href={"/"}>
        <Image src={logo.src} alt="logo"  width={60} height={60}/> 
        </Link>
        <nav
          className={`header__content__nav ${
            menuOpen ? "isMenu" : ""
          }`}
        >
          <ul>
            {sections.map((section) => (
              <li
                key={section.id}
                className={visibleSection === section.id ? "active" : ""}
              >
                <Link href={`#${section.id}`}>{section.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="header__content__toggle" onClick={menuToggler}>
          {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
