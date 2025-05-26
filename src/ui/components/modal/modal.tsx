import { useEffect, useState } from "react";
import Image from "next/image";

interface ModalProps {
  soin: {
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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      {/* Bouton de fermeture FIXE, hors du contenu scrollable */}
      <button
        onClick={handleClose}
        className="fixed z-50 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg text-gray-700 text-xl font-bold hover:brightness-110 transition cursor-pointer"
        style={{
          top: "calc(env(safe-area-inset-top, 0px) + 2rem)", // safe area + marge
          right: "1rem",
        }}
        aria-label="Fermer"
      >
        ✕
      </button>

      {/* Contenu scrollable */}
      <div
        className={`relative bg-white rounded-xl shadow-lg w-full max-w-xl max-h-screen overflow-y-auto transform transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-48 w-full">
          <Image
            src={soin.image}
            alt={soin.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Texte */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4">{soin.title}</h3>
          <p className="whitespace-pre-line text-gray-700">
            {soin.description.trim()}
          </p>
          <div style={{ height: 16 }}></div>
        </div>
      </div>
    </div>
  );
}
