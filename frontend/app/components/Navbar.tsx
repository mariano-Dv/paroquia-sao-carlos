"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, HandHeart, LogIn } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-[#061a3a]/90 border-b border-white/10 shadow-lg">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-400 shadow-lg">
              <img
                src="/images/logo.png"
                alt="Logo"
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
                Lwanga
              </div>
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white">

            <Link href="/" className="hover:text-yellow-400 transition">
              Início
            </Link>

            <Link href="/sobre" className="hover:text-yellow-400 transition">
              Sobre
            </Link>

            <Link href="/missao" className="hover:text-yellow-400 transition">
              Missão
            </Link>

            <Link href="/galeria" className="hover:text-yellow-400 transition">
              Galeria
            </Link>

            <Link href="/noticias" className="hover:text-yellow-400 transition">
              Notícias
            </Link>

            <Link href="/contato" className="hover:text-yellow-400 transition">
              Contato
            </Link>

            {/* FAZER PEDIDO */}
            <Link
              href="/login"
              className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              <HandHeart size={18} />
              Fazer Pedido
            </Link>

            {/* ÁREA ADMINISTRATIVA */}
            <Link
              href="/admin/login"
              className="flex items-center gap-2 border border-yellow-400 text-yellow-300 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <LogIn size={18} />
              Área Administrativa
            </Link>

          </nav>

          {/* BOTÃO MOBILE */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

        {/* MENU MOBILE */}
        {open && (
          <div className="md:hidden px-6 pb-4 text-white space-y-3">

            <Link
              href="/"
              className="block hover:text-yellow-400"
              onClick={() => setOpen(false)}
            >
              Início
            </Link>

            <Link
              href="/sobre"
              className="block hover:text-yellow-400"
              onClick={() => setOpen(false)}
            >
              Sobre
            </Link>

            <Link
              href="/missao"
              className="block hover:text-yellow-400"
              onClick={() => setOpen(false)}
            >
              Missão
            </Link>

            <Link
              href="/galeria"
              className="block hover:text-yellow-400"
              onClick={() => setOpen(false)}
            >
              Galeria
            </Link>

            <Link
              href="/noticias"
              className="block hover:text-yellow-400"
              onClick={() => setOpen(false)}
            >
              Notícias
            </Link>

            <Link
              href="/contato"
              className="block hover:text-yellow-400"
              onClick={() => setOpen(false)}
            >
              Contato
            </Link>

            <div className="pt-2 space-y-2">

              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full w-full justify-center font-semibold hover:bg-yellow-400 transition"
              >
                <HandHeart size={18} />
                Fazer Pedido
              </Link>

              <Link
                href="/admin/login"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 border border-yellow-400 text-yellow-300 px-4 py-2 rounded-full w-full justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                <LogIn size={18} />
                Área Administrativa
              </Link>

            </div>

          </div>
        )}

      </div>
    </header>
  );
}