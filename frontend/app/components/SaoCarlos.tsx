import { CalendarCheck2 } from "lucide-react";

export default function SaoCarlos() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#061a3a] to-[#081f45]">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">

        {/* ESQUERDA — BIOGRAFIA */}
        <div>
          <h2 className="text-white text-2xl font-bold">
            São Carlos Luanda
          </h2>

          <p className="mt-4 text-gray-300 leading-relaxed text-sm md:text-base">
            São Carlos Luanga foi um catequista e mártir angolano.
            Exemplo de fé, humildade e amor a Cristo.
            A sua vida inspira a caminhada cristã da nossa comunidade até hoje.
          </p>
        </div>

        {/* CENTRO — IMAGEM */}
        <div className="flex justify-center">
          <div className="w-56 h-56 rounded-full border-4 border-yellow-400 overflow-hidden shadow-2xl">
            <img
              src="/images/logo.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* DIREITA — EVENTOS */}
        <div>
          <h2 className="text-white text-2xl font-bold flex items-center gap-2">
            <CalendarCheck2 className="text-yellow-400" />
            Próximos Eventos
          </h2>

          <div className="mt-4 space-y-3">

            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-gray-300 text-sm">
                Nenhum evento carregado no momento.
              </p>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-gray-400 text-sm">
                Conectado ao sistema de backend em breve.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}