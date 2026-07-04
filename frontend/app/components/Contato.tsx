export default function Contato() {
  return (
    <section id="contato" className="w-full py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Contacte-nos
        </h2>

        <p className="mt-4 text-gray-600">
          Estamos disponíveis para atender a comunidade.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8 text-left">

          {/* INFO */}
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-xl shadow">
              <h3 className="font-semibold text-blue-700">Localização</h3>
              <p className="text-gray-600">
                Paróquia São Carlos Luanga, Luanda, Angola
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow">
              <h3 className="font-semibold text-blue-700">Telefone</h3>
              <p className="text-gray-600">+244 900 000 000</p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow">
              <h3 className="font-semibold text-blue-700">Email</h3>
              <p className="text-gray-600">paroquia@email.com</p>
            </div>
          </div>

          {/* FORMULÁRIO */}
          <form className="p-6 bg-white rounded-xl shadow space-y-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full border p-3 rounded"
            />

            <input
              type="email"
              placeholder="Seu email"
              className="w-full border p-3 rounded"
            />

            <textarea
              placeholder="Sua mensagem"
              className="w-full border p-3 rounded h-32"
            />

            <button
              type="button"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Enviar
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}