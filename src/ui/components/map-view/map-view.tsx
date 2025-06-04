"use client";

import { MapPinIcon } from "@heroicons/react/24/outline";
import { Button } from "@/ui/design-system/button/button";
import { motion } from "framer-motion";

export const MapView = () => {
  return (
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-[var(--color-ocean-blue)] mb-2">
          Me rendre visite
        </h3>

        <p className="flex items-center justify-center gap-2 text-gray-700 text-sm mb-4">
          <MapPinIcon className="w-5 h-5 text-[var(--color-ocean-blue)]" />
          Sainte-Livrade-sur-Lot (47)
        </p>

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

      <div className="w-full h-[400px] max-w-4xl mx-auto rounded-xl overflow-hidden shadow-md">
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
    </motion.div>
  );
};
