import React from "react";
import Carousel from "../carousel/Carousel";

const Banner = () => {
  const images = ["a1.jpg", "a2.jpg", "a3.jpg"];

  return (
    <section className="banner">
      <h1>fundacion 2 de abril</h1>
      <Carousel images={images} autoPlay={false} showButtons={true} />
    </section>
  );
};

export default Banner;
