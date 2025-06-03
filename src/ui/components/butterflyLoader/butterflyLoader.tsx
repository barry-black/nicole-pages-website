"use client";

import React from "react";

export const ButterflyLoader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-32 h-32 rounded-full bg-[#13abc4] flex items-center justify-center overflow-hidden">
        <div className="absolute w-full h-full rounded-full animate-spin">
          <div className="w-full h-full rounded-full border-t-4 border-white border-opacity-70" />
        </div>
        <img
          src="assets/svg/papillon_blanc.png"
          alt="Papillon"
          className="w-16 h-16 z-10 pointer-events-none select-none"
        />
      </div>
      <p className="mt-4 text-[#13abc4] font-semibold tracking-wide">
        Envoi...
      </p>
    </div>
  </div>
);
