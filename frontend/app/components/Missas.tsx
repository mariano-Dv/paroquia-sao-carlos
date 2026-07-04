export default function Missas() {
  return (
    <section id="missas" className="w-full py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Horários das Missas
        </h2>

        <p className="mt-4 text-gray-600">
          Acompanhe os horários das celebrações na nossa paróquia.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6 text-left">

          <div className="p-6 rounded-xl shadow border">
            <h3 className="text-xl font-semibold text-blue-700">
              Domingo
            </h3>
            <ul className="mt-3 text-gray-600 space-y-2">
              <li>07:00 — Missa da manhã</li>
              <li>10:00 — Missa principal</li>
              <li>18:00 — Missa da noite</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl shadow border">
            <h3 className="text-xl font-semibold text-blue-700">
              Semana
            </h3>
            <ul className="mt-3 text-gray-600 space-y-2">
              <li>Terça-feira — 18:00</li>
              <li>Quinta-feira — 18:00</li>
              <li>Sábado — 17:00</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}