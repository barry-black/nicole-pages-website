"use client";

import React from "react";

export const ButterflyLoader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
    <div className="flex flex-col items-center justify-center">
      {/* Cercle avec halo tournant */}
      <div className="relative w-40 h-40 rounded-full bg-[#13abc4] shadow-xl animate-pulse flex items-center justify-center overflow-hidden">
        {/* Lumière en rotation */}
        <div className="absolute w-full h-full rounded-full animate-spin duration-[3s]">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-white/60 via-transparent to-white/60 opacity-40" />
        </div>

        {/* Papillon blanc (image PNG) */}
        <img
          src="/assets/svg/papillon_blanc.png"
          alt="Papillon"
          className="w-24 h-24 z-10 pointer-events-none select-none"
        />
      </div>

      {/* Texte de chargement */}
      <p className="mt-6 text-[#13abc4] font-semibold tracking-wide text-lg">
        Envoi en cours...
      </p>
    </div>
  </div>
);
