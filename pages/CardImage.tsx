"use client";

import Image from "next/image";

interface CardImageProps {
  src: string;
  alt: string;
}

export default function CardImage({ src, alt }: CardImageProps) {
  return (
    <div className="relative w-1/10 pb-10%">
      <Image src={src} alt={alt} fill />
    </div>
  );
}
