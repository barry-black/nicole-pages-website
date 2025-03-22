/* Component */
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";

/* Image */
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Seo title="Nicole Pagès Thérapie" description="Description..." />

      <div>
        {/* Navigation */}
        <Navigation />

        {/* Image section */}
        <div className="relative w-full h-[1080px]">
          <Image
            src="/assets/images/accueil.webp"
            alt="Accueil"
            fill
            className="object-contain"
          />
        </div>

      </div>
    </>
  );
}
