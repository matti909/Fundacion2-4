import Image from "next/image";
import { useEffect, useState } from "react";
import "./Carousel.scss";

interface Props {
  images: string[];
  autoPlay?: boolean;
  showButtons?: boolean;
}

export default function Carousel({ showButtons, images, autoPlay }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (autoPlay || !showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [selectedIndex, autoPlay, images, showButtons]);

  const selectNewImage = (index: number, images: string[], next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  return (
    <div className="carousel-container">
      <div>
        <Image
          src={`/assets/${selectedImage}`}
          alt="fundacion"
          className={loaded ? "loaded" : ""}
          onLoad={() => setLoaded(true)}
          priority={true}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
          }}
          fill
        />
      </div>
      {showButtons && (
        <div className="buttonContainer">
          <button onClick={previous}>{"<"}</button>
          <button onClick={next}>{">"}</button>
        </div>
      )}
    </div>
  );
}
