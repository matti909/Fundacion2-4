"use client";

import Banner from "./components/banner/Banner";
import { Donation } from "./components/donation/Donation";
import DynamicSections from "./components/dynamicSection/DynamicSection";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { Map, Marker } from "pigeon-maps";

function App() {
  const { visibleSection, refCallback } = useIntersectionObserver({
    threshold: 0.5,
  });

  const sections = [
    { id: "home", label: "Bienvenidos" },
    //{ id: "about", label: "About" },
    { id: "project", label: "Hace tu Donaciòn" },
    { id: "contact", label: "Contacto" },
  ];

  const sections2 = [
    { id: "home", component: <Banner /> },/* 
    { id: "project", component: <Donation /> },
    { id: "contact", component: <Banner /> }, */
  ];

  return (
    <>
      <Navbar sections={sections} visibleSection={visibleSection} />
      <main style={{position: 'relative', top: '-13px'}}>
        <DynamicSections sections={sections2} refCallback={refCallback} />
        {/* <div style={{width:'500px', height: '500px'}}>
          <Map height={300} defaultCenter={[-27.468342086764366, -58.93438204042026]} defaultZoom={11}>
            <Marker width={50} anchor={[-27.468342086764366, -58.93438204042026]} />
          </Map>
        </div> */}
      </main>
    </>
  );
}

export default App;
