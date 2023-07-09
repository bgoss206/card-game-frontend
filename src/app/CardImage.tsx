"use client";

import Image from "next/image";

interface CardImageProps {
  src: string;
  alt: string;
}

export default function CardImage({ src, alt }: CardImageProps) {
  return (
    <div style={{ width: "100px", height: "150px" }}>
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  );
}
