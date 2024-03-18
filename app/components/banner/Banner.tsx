import React from "react";
import Carousel from "../carousel/Carousel";
import './Banner.scss'

const Banner = () => {
  const images = ["a11.webp"];

  return (
    <section className="banner">
      <Carousel images={images} autoPlay={false} showButtons={true} />
      <div className="history">
        <h2>
          FUNDACION 2 DE ABRIL
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut
          enim animi pariatur expedita cumque, facilis dolorem magni commodi
          ipsum culpa vel distinctio aspernatur unde perspiciatis harum
          laboriosam sed accusantium.
        </p>
      </div>
    </section>
  );
};

export default Banner;
