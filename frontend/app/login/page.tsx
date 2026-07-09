"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function AuthPage() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);

  const [nome, setNome] = useState("");
  const [numeroMembro, setNumeroMembro] = useState("");
  const [morada, setMorada] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isLogin) {
        // LOGIN
        const res = await fetch(`${API_URL}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Erro no login");
        }

        localStorage.setItem("token", data.access_token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // 🚀 REDIRECIONAMENTO PARA A IGREJA
        router.push("/dashboard");

      } else {
        // REGISTER
        const res = await fetch(`${API_URL}/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome,
            email,
            password,
            telefone,
            morada,
            numeroMembro,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Erro no registo");
        }

        alert("Conta criada com sucesso! Agora faz login.");
        setIsLogin(true);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-end px-12 bg-[#050B16] font-sans overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/imagen.png')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#050B16] via-[#050B16]/70 to-transparent" />

      <div className="relative z-10 w-full max-w-[420px] p-10 bg-[#0A192F]/60 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl">

        <div className="mb-8">
          <h1 className="text-3xl font-serif text-white mb-2">
            {isLogin ? "Bem-vindo" : "Criação de Conta"}
          </h1>
          <p className="text-yellow-500/90 font-medium tracking-widest uppercase text-xs">
            Paróquia São Carlos Lwanga
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>

          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Nome Completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full p-3 bg-white/5 border border-white/10 rounded text-white"
              />

              <input
                type="text"
                placeholder="Número de Membro"
                value={numeroMembro}
                onChange={(e) => setNumeroMembro(e.target.value)}
                className="w-full p-3 bg-white/5 border border-white/10 rounded text-white"
              />

              <input
                type="text"
                placeholder="Morada"
                value={morada}
                onChange={(e) => setMorada(e.target.value)}
                className="w-full p-3 bg-white/5 border border-white/10 rounded text-white"
              />

              <input
                type="tel"
                placeholder="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="w-full p-3 bg-white/5 border border-white/10 rounded text-white"
              />
            </>
          )}

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-white/5 border border-white/10 rounded text-white"
          />

          <input
            type="password"
            placeholder="Palavra-passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-white/5 border border-white/10 rounded text-white"
          />

          {isLogin && (
            <div className="flex justify-end">
              <a className="text-xs text-blue-300 hover:text-yellow-500">
                Esqueci a palavra-passe?
              </a>
            </div>
          )}

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            disabled={loading}
            className="w-full p-3 mt-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-bold rounded hover:opacity-90"
          >
            {loading ? "Aguarde..." : isLogin ? "ENTRAR" : "CADASTRAR"}
          </button>

        </form>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-blue-200/60">
            {isLogin ? "Não possui conta?" : "Já possui uma conta?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-yellow-500 font-bold hover:underline"
            >
              {isLogin ? "Criar conta agora" : "Fazer login"}
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}