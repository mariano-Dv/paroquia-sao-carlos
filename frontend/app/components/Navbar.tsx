"use client";

import { useState, useEffect } from "react";
import { Menu, X, HandHeart, LogIn } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  // 🔥 CARREGA USUÁRIO DO LOCALSTORAGE
  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      try {
        const parsed = JSON.parse(user);
        setUserName(parsed.nome || parsed.name || null);
      } catch (err) {
        console.log("Erro ao ler user:", err);
      }
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="backdrop-blur-md bg-[#061a3a]/90 border-b border-white/10 shadow-lg">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

          {/* LOGO */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-400 shadow-lg">
              <img
                src="/images/logo.png"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="leading-tight">
              <div className="text-xs text-gray-300 tracking-widest">
                PARÓQUIA
              </div>

              <div className="text-yellow-400 font-bold text-lg">
                São Carlos
              </div>

              <div className="text-white text-sm">
                Luanda
              </div>
            </div>
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white">

            <a className="hover:text-yellow-400 transition">Início</a>
            <a className="hover:text-yellow-400 transition">Sobre</a>
            <a className="hover:text-yellow-400 transition">Missão</a>
            <a className="hover:text-yellow-400 transition">Galeria</a>
            <a className="hover:text-yellow-400 transition">Notícias</a>
            <a className="hover:text-yellow-400 transition">Contato</a>

            {/* 🔥 NOME DINÂMICO DO USER */}
            {userName && (
              <span className="ml-2 text-yellow-400 font-semibold">
                Bem-vindo, {userName}
              </span>
            )}

            {/* PEDIDOS */}
            <button className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
              <HandHeart size={18} />
              Pedidos
            </button>

            {/* ÁREA RESTRITA */}
            <button className="flex items-center gap-2 border border-yellow-400 text-yellow-300 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
              <LogIn size={18} />
              Área Restrita
            </button>

          </nav>

          {/* MOBILE */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden px-6 pb-4 text-white space-y-3">

            <p>Início</p>
            <p>Sobre</p>
            <p>Missão</p>
            <p>Galeria</p>
            <p>Notícias</p>
            <p>Contato</p>

            {userName && (
              <p className="text-yellow-400 font-semibold">
                Bem-vindo, {userName}
              </p>
            )}

            <div className="pt-2 space-y-2">

              <button className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full w-full justify-center">
                <HandHeart size={18} />
                Pedidos
              </button>

              <button className="flex items-center gap-2 border border-yellow-400 text-yellow-300 px-4 py-2 rounded-full w-full justify-center">
                <LogIn size={18} />
                Área Restrita
              </button>

            </div>

          </div>
        )}

      </div>
    </header>
  );
}