"use client";

/* Public Library */
import { useEffect, useState } from "react";

interface ModalSuccessProps {
  title?: string;
  message?: string;
  onClose: () => void;
}

export function ModalSuccess({
  title = "Message envoyé !",
  message = "Nicole vous contactera très prochainement pour convenir d’un rendez-vous adapté à vos besoins.",
  onClose,
}: ModalSuccessProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.history.pushState({ modal: "success" }, "");

    const handlePopState = () => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
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
        <h3 className="text-xl font-semibold text-green-700 mb-4 text-center">
          {title}
        </h3>
        <p className="text-gray-700 text-sm mb-6 text-center leading-relaxed">
          {message}
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleClose}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
