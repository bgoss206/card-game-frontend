"use client";

import { useEffect, useState } from "react";
import { SUITS, RANKS } from "./constants";
import CardImage from "./CardImage";

function CardGallery() {
  const [generatedCardImages, setGeneratedCardImages] = useState<string[]>([]);

  useEffect(() => {
    const generateCardImages = () => {
      const images = [];
      for (let suit of SUITS) {
        for (let rank of RANKS) {
          const imageSrc = `/cards/${rank}${suit}.svg`;
          images.push(imageSrc);
        }
      }
      setGeneratedCardImages(images);
    };

    generateCardImages();
  }, []);

  return (
    <div className="card-gallery" style={{ backgroundColor: "lightgray" }}>
      {generatedCardImages.map((imageSrc, index) => (
        <CardImage key={index} src={imageSrc} alt={`Card ${index}`} />
      ))}
    </div>
  );
}

export default CardGallery;
