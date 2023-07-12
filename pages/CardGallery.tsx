import React from "react";
import { SUITS, RANKS } from "./constants";
import CardImage from "./CardImage";

function CardGallery() {
  const generatedCardImages = [];

  for (let suit of SUITS) {
    for (let rank of RANKS) {
      const cardName = `${rank}${suit}`;
      const cardImageSrc = require(`../public/cards/${cardName}.svg`).default;

      generatedCardImages.push(
        <CardImage key={cardName} src={cardImageSrc} alt={cardName} />
      );
    }
  }

  return (
    <div className="card-gallery" style={{ backgroundColor: "lightgray" }}>
      {generatedCardImages}
    </div>
  );
}

export default CardGallery;
