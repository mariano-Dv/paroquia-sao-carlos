"use client";

import { Newspaper, Construction, Clock, Sparkles } from "lucide-react";

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050B16] via-[#071C3A] to-[#050B16] flex items-center justify-center px-6 py-20">

      <div className="max-w-3xl w-full">

        <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-white/5 backdrop-blur-lg shadow-2xl">

          {/* brilho */}
          <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-yellow-500/20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>

          <div className="relative z-10 px-10 py-16 text-center">

            {/* Ícone */}
            <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-yellow-500/15 border border-yellow-500/40 shadow-lg animate-bounce">

              <Newspaper
                size={55}
                className="text-yellow-400"
              />

            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">

              Notícias

            </h1>

            <div className="mx-auto mb-8 h-1 w-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"></div>

            {/* Mensagem */}
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex justify-center items-center gap-2">

              <Construction size={28} />

              Estamos a trabalhar nesta página

            </h2>

            <p className="text-gray-300 leading-8 text-lg">

              A equipa da <span className="text-yellow-400 font-semibold">
                Paróquia São Carlos Lwanga
              </span>{" "}
              está a preparar um espaço dedicado às notícias da nossa comunidade.

            </p>

            <p className="text-gray-400 mt-5 leading-8">

              Muito em breve poderá acompanhar eventos,
              celebrações, comunicados oficiais,
              atividades pastorais, fotografias,
              avisos importantes e todas as novidades
              da nossa paróquia.

            </p>

            {/* Cards */}

            <div className="grid md:grid-cols-3 gap-5 mt-12">

              <div className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-yellow-500 transition duration-500">

                <Clock
                  className="mx-auto text-yellow-400 mb-4"
                  size={34}
                />

                <h3 className="text-white font-semibold mb-2">

                  Em Desenvolvimento

                </h3>

                <p className="text-sm text-gray-400">

                  Estamos a finalizar esta funcionalidade para oferecer uma melhor experiência.

                </p>

              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-yellow-500 transition duration-500">

                <Sparkles
                  className="mx-auto text-yellow-400 mb-4"
                  size={34}
                />

                <h3 className="text-white font-semibold mb-2">

                  Novidades

                </h3>

                <p className="text-sm text-gray-400">

                  Em breve encontrará todas as notícias e comunicados da paróquia.

                </p>

              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-yellow-500 transition duration-500">

                <Newspaper
                  className="mx-auto text-yellow-400 mb-4"
                  size={34}
                />

                <h3 className="text-white font-semibold mb-2">

                  Informação Oficial

                </h3>

                <p className="text-sm text-gray-400">

                  Este espaço reunirá publicações oficiais, eventos e informações importantes.

                </p>

              </div>

            </div>

            {/* Rodapé */}

            <div className="mt-12">

              <div className="inline-flex items-center gap-3 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-3 text-yellow-300 animate-pulse">

                Obrigado pela compreensão. Voltaremos em breve!

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}