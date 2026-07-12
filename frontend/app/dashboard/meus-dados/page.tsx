"use client";

import { User, Mail, Lock, ShieldCheck } from "lucide-react";

export default function MeusDadosPage() {
  // Futuramente estes dados virão da API.
  const usuario = {
    nome: "Carregando...",
    email: "Carregando...",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050B16] via-[#071C3A] to-[#050B16] px-6 py-16 flex items-center justify-center">

      <div className="w-full max-w-4xl">

        <div className="rounded-3xl border border-yellow-500/20 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">

          {/* Cabeçalho */}

          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-8 text-center">

            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mx-auto shadow-xl">

              <User size={48} className="text-yellow-600" />

            </div>

            <h1 className="text-3xl font-bold text-[#050B16] mt-5">
              Meus Dados
            </h1>

            <p className="text-[#2d2d2d] mt-2">
              Informações da sua conta na Paróquia São Carlos Lwanga
            </p>

          </div>

          {/* Conteúdo */}

          <div className="p-8 grid gap-6">

            <div className="rounded-2xl bg-[#091a34] border border-white/10 p-5">

              <div className="flex items-center gap-3 mb-2">

                <User className="text-yellow-400" />

                <span className="text-white font-semibold">
                  Nome
                </span>

              </div>

              <p className="text-gray-300 text-lg">
                {usuario.nome}
              </p>

            </div>

            <div className="rounded-2xl bg-[#091a34] border border-white/10 p-5">

              <div className="flex items-center gap-3 mb-2">

                <Mail className="text-yellow-400" />

                <span className="text-white font-semibold">
                  E-mail
                </span>

              </div>

              <p className="text-gray-300 text-lg">
                {usuario.email}
              </p>

            </div>

            <div className="rounded-2xl bg-[#091a34] border border-white/10 p-5">

              <div className="flex items-center gap-3 mb-2">

                <Lock className="text-yellow-400" />

                <span className="text-white font-semibold">
                  Palavra-passe
                </span>

              </div>

              <p className="text-gray-300 text-lg tracking-[6px]">
                ••••••••
              </p>

            </div>

            <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5 flex items-start gap-4">

              <ShieldCheck
                className="text-yellow-400 mt-1"
                size={28}
              />

              <div>

                <h3 className="text-yellow-400 font-semibold mb-2">
                  Segurança da Conta
                </h3>

                <p className="text-gray-300 leading-7">
                  Esta página apresenta as informações básicas da sua conta.
                  Em futuras atualizações será possível editar o nome,
                  alterar a palavra-passe e atualizar outras informações
                  pessoais.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}