import {
  Cross,
  BookOpen,
  HeartHandshake,
  HandCoins,
  CalendarDays,
} from "lucide-react";

export default function Atalhos() {
  const cards = [
    {
      title: "Missas",
      desc: "Horários e celebrações da nossa comunidade.",
      icon: Cross,
    },
    {
      title: "Formação",
      desc: "Crescimento espiritual e estudo da fé.",
      icon: BookOpen,
    },
    {
      title: "Pastorais",
      desc: "Serviços e grupos da igreja.",
      icon: HeartHandshake,
    },
    {
      title: "Doações",
      desc: "Apoie a missão evangelizadora.",
      icon: HandCoins,
    },
    {
      title: "Eventos",
      desc: "Agenda e atividades da paróquia.",
      icon: CalendarDays,
    },
  ];

  return (
    <section className="w-full py-20 bg-[#061a3a]">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-6">

        {cards.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="group p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md
                         hover:bg-white/10 transition-all cursor-pointer"
            >
              {/* ÍCONE DOURADO */}
              <div className="text-yellow-400 mb-4 group-hover:scale-110 transition">
                <Icon size={34} />
              </div>

              {/* TÍTULO */}
              <h3 className="text-white font-semibold text-lg">
                {item.title}
              </h3>

              {/* DESCRIÇÃO */}
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}