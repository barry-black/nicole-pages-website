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
    }, 300); // durée de l'animation
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative bg-white rounded-xl shadow-lg max-w-xl w-full transform transition-transform duration-300 overflow-hidden ${
          isVisible ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton de fermeture */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-white hover:shadow-[0_0_8px_rgba(0,0,0,0.6)] bg-gray-200 hover:bg-gray-800 transition-all duration-300 text-xl font-bold rounded-full w-8 h-8 flex items-center justify-center cursor-pointer z-10"
          aria-label="Fermer"
        >
          ✕
        </button>

        {/* Image du soin */}
        <div className="relative h-48 w-full">
          <Image
            src={soin.image}
            alt={soin.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Contenu du texte */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4">{soin.title}</h3>
          <p className="whitespace-pre-line text-gray-700">
            {soin.description.trim()}
          </p>
        </div>
      </div>
    </div>
  );
}
