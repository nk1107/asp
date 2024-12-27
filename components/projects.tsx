// components/Projects.tsx
"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export default function ParallaxScrollDemo() {
  return(
       
      <ParallaxScroll images={images} />
  )
}

const images = [
    "/proj1.jpg",
    "/proj2.jpg",
    "/proj3.jpg",
    "/proj4.jpg",
    "/proj5.jpg",
    "/proj6.jpg",
    "/proj7.jpg",
    "/proj8.jpg",
    
  ];
