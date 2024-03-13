"use client";

import Banner from "./components/banner/Banner";
import { Donation } from "./components/donation/Donation";
import DynamicSections from "./components/dynamicSection/DynamicSection";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

function App() {
  const { visibleSection, headerRef, handleSmoothScroll, refCallback } =
    useIntersectionObserver({
      threshold: 0.5,
    });

  const sections = [
    { id: "home", label: "Bienvenidos" },
    //{ id: "about", label: "About" },
    { id: "project", label: "Hace tu Donaciòn" },
    { id: "contact", label: "Contacto" },
  ];

  const sections2 = [
    { id: "home", component: <Banner /> },
    { id: "project", component: <Donation /> },
    { id: "contact", component: <Banner /> },
  ];

  return (
    <>
      <Navbar
        sections={sections}
        visibleSection={visibleSection}
        handleSmoothScroll={handleSmoothScroll}
        headerRef={headerRef}
      />
      <main>
        <DynamicSections sections={sections2} refCallback={refCallback} />
      </main>
    </>
  );
}

export default App;
