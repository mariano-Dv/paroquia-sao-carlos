"use client";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#061a3a] text-white">

      {/* LINHA SUPERIOR */}
      <div className="border-t border-white/10" />

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* ESQUERDA — FRASE */}
        <div className="md:w-1/3">
          <p className="text-white text-sm md:text-base leading-relaxed">
            “Tudo o que fizerdes, fazei-o por amor a Deus, São Carlos Lwanda.”
          </p>
        </div>

        {/* CENTRO — NEWSLETTER */}
        <div className="md:w-1/3 text-center">
          <h3 className="text-yellow-400 font-semibold mb-3">
            Receba nossas novidades
          </h3>

          <div className="flex items-center justify-center gap-2">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none w-48 md:w-56"
            />

            <button className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 transition">
              Inscrever
            </button>
          </div>
        </div>

        {/* DIREITA — REDES SOCIAIS */}
        <div className="md:w-1/3 flex justify-end">
          <div className="flex items-center gap-5 text-white">

            <a href="#" className="hover:text-yellow-400 transition">
              <FaFacebook size={20} />
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              <FaInstagram size={20} />
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              <FaYoutube size={20} />
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              <FaWhatsapp size={20} />
            </a>

          </div>
        </div>

      </div>

      {/* LINHA FINAL */}
      <div className="border-t border-white/10" />

      <div className="text-center text-gray-400 text-xs py-4">
        © {new Date().getFullYear()} Paróquia São Carlos Luanda
      </div>

    </footer>
  );
}