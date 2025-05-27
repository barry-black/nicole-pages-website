// src/ui/components/carroussel/caroussel.tsx
"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CabinetCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const scrollAmount = clientWidth;

    carouselRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const images = [
    "/assets/images/cabinet1.jpg",
    "/assets/images/cabinet2.jpg",
    "/assets/images/cabinet3.jpg",
    "/assets/images/cabinet4.jpg",
    "/assets/images/cabinet5.jpg",
    "/assets/images/cabinet6.jpg"
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="relative max-w-4xl mx-auto">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
          onClick={() => scroll("left")}
        >
          <ChevronLeft />
        </button>
        <div
          ref={carouselRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Cabinet ${i + 1}`}
              className="w-full max-w-md rounded-lg shadow snap-center shrink-0"
            />
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
          onClick={() => scroll("right")}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};
