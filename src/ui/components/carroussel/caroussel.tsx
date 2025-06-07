"use client";

/* Public Library */
import { useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CabinetCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const images = [
    "/assets/images/Cabinet/Image_4.png",
    "/assets/images/Cabinet/Image_5.png",
    "/assets/images/Cabinet/Image_6.png",
    "/assets/images/Cabinet/Image_7.png",
    "/assets/images/Cabinet/Image_8.png",
    "/assets/images/Cabinet/Image_1.png",
    "/assets/images/Cabinet/Image_2.png",
    "/assets/images/Cabinet/Image_3.png",
  ];

  // Duplication pour boucle
  const loopImages = [...images, ...images, ...images, ...images, ...images];

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const scrollAmount = clientWidth;

    carouselRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  // Recentrer à la vraie section si on atteint une extrémité
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = carousel;
      const sectionWidth = scrollWidth / 3;

      if (scrollLeft <= 0) {
        // trop à gauche → recentrer au milieu
        carousel.scrollLeft = sectionWidth;
      } else if (scrollLeft + clientWidth >= scrollWidth) {
        // trop à droite → recentrer au milieu
        carousel.scrollLeft = sectionWidth - clientWidth;
      }
    };

    const node = carouselRef.current;
    node?.addEventListener("scroll", handleScroll);

    if (node) {
      node.scrollLeft = node.scrollWidth / 3;
    }

    return () => node?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white py-5 px-6">
      <div className="relative max-w-6xl mx-auto">
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
          {loopImages.map((src, i) => (
            <div
              key={i}
              className="relative min-w-[90%] md:min-w-[33%] aspect-[4/3] snap-center shrink-0 rounded-lg overflow-hidden shadow"
            >
              <Image
                src={src}
                alt={`Cabinet ${(i % images.length) + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 90vw, 33vw"
                priority={i > 5}
              />
            </div>
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
