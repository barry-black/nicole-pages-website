"use client";

import { MapPinIcon } from "@heroicons/react/24/outline";
import { Button } from "@/ui/design-system/button/button";

export const MapView = () => {
  return (
    <section className="w-full bg-gray-100 py-10 px-4" id="map">
      <div className="max-w-4xl mx-auto text-center mb-6">
        <h3 className="text-2xl font-semibold text-[var(--color-ocean-blue)] mb-2">
          Me trouver facilement
        </h3>

        <p className="flex items-center justify-center gap-2 text-gray-700 text-sm mb-4">
          <MapPinIcon className="w-5 h-5 text-[var(--color-ocean-blue)]" />
          Sainte-Livrade-sur-Lot (47)
        </p>

        <div className="flex justify-center">
          <Button
            variant="callAction"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/dir/?api=1&destination=44.3890333344963,0.5851546558193422",
                "_blank"
              )
            }
          >
            Itinéraire
          </Button>
        </div>
      </div>

      <div className="w-full h-[400px] max-w-5xl mx-auto rounded-xl overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps?q=44.3890333344963,0.5851546558193422&hl=fr&z=16&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};
