import { useEffect, useState } from "react";
import Image from "next/image";

interface ModalProps {
  soin: {
    id: string;
    title: string;
    description: string;
    image: string;
  };
  onClose: () => void;
}

export function Modal({ soin, onClose }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      {/* Bouton de fermeture */}
      <button
        onClick={handleClose}
        className="fixed z-50 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-gray-700 text-xl font-bold hover:brightness-110 transition cursor-pointer"
        style={{
          top: "calc(env(safe-area-inset-top, 0px) + 1rem)",
          right: "1rem",
        }}
        aria-label="Fermer"
      >
        ✕
      </button>

      {/* Contenu modal */}
      <div
        className={`relative bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-56 w-full rounded-t-2xl overflow-hidden">
          <Image
            src={soin.image}
            alt={soin.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Texte */}
        <div className="p-6 md:p-8 text-left space-y-5">
          <h3 className="text-2xl font-semibold text-[var(--color-ocean-blue)]">
            {soin.title}
          </h3>

          <div className="border-t border-gray-200 pt-4">
            <p className="whitespace-pre-line text-gray-700 leading-relaxed text-[17px]">
              {soin.description.trim()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
