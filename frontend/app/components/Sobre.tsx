export default function Sobre() {
  return (
    <section id="sobre" className="w-full py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Sobre a Nossa Igreja
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed text-lg">
          A Igreja São Carlos Luanga é um espaço de fé, esperança e comunhão.
          Inspirada no testemunho dos mártires, a nossa comunidade procura viver
          o evangelho com amor, serviço e dedicação ao próximo.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed text-lg">
          Aqui celebramos a Eucaristia, fortalecemos a vida espiritual e
          promovemos a união entre famílias, jovens e todas as gerações.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl text-blue-700">Missão</h3>
            <p className="mt-2 text-gray-600">
              Levar o evangelho a todos, promovendo fé e esperança.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl text-blue-700">Visão</h3>
            <p className="mt-2 text-gray-600">
              Ser uma comunidade viva e acolhedora centrada em Cristo.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl text-blue-700">Valores</h3>
            <p className="mt-2 text-gray-600">
              Fé, união, caridade e serviço ao próximo.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}