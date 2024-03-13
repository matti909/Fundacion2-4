"use client";

import React from "react";
import "./globals.css";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import Banner from "./components/banner/Banner";
import Donation from "./components/donation/Donation";
import Story from "./components/story/Story";
import DynamicSections from "./components/dynamicSection/DynamicSection";
import Navbar from "./components/navbar/Navbar";

function App() {
  const { visibleSection, headerRef, handleSmoothScroll, refCallback } =
    useIntersectionObserver({
      threshold: 0.5,
    });

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
  ];

  const sections2 = [
    { id: "home", component: <Banner /> },
    { id: "about", component: <Story /> },
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
