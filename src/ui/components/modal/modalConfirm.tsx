"use client";

/* Public Library */
import { useEffect, useState } from "react";

interface ModalConfirmProps {
  title?: string;
  message?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export function ModalConfirm({
  title = "Êtes-vous sûr(e) ?",
  message = "Souhaitez-vous confirmer l’envoi de votre message ?",
  onCancel,
  onConfirm,
}: ModalConfirmProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.history.pushState({ modal: "confirm" }, "");

    const handlePopState = () => {
      setIsVisible(false);
      setTimeout(onCancel, 300);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [onCancel]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onCancel, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white rounded-xl p-6 shadow-xl max-w-md w-full transform transition duration-300 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 text-center leading-relaxed">
          {message}
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}
