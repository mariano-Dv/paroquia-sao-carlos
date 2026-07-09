"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* IMAGEM COM FADE */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={images[index]}
          className="w-full h-full object-cover"
        />
      </div>

      {/* OVERLAY PREMIUM */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061a3a]/90 via-[#061a3a]/60 to-black/40" />

      {/* CONTEÚDO */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-3xl px-8 md:px-16 text-white">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Bem-vindo à nossa Paróquia
          </h1>

          <h2 className="text-yellow-400 text-xl md:text-2xl mt-3 font-semibold">
            São Carlos Lwanga
          </h2>

          <p className="text-gray-200 mt-4 text-base md:text-lg leading-relaxed">
            Comunidade de fé, esperança e caridade a serviço de Deus e do próximo.
          </p>

          {/* BOTÃO PREMIUM */}
          <button className="mt-6 flex items-center gap-2 bg-yellow-500/90 hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold transition">
            Conheça sobre nós
            <ChevronDown size={18} />
          </button>

        </div>
      </div>

      {/* DOTS BRANCOS */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
}