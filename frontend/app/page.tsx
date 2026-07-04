import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Atalhos from "./components/Atalhos";
import SaoCarlos from "./components/SaoCarlos";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#061a3a] text-white overflow-x-hidden">
      
      {/* NAVBAR FIXO */}
      <Navbar />

      {/* CONTEÚDO PRINCIPAL */}
      <div className="pt-20">

        {/* HERO (FULL SCREEN) */}
        <Hero />

        {/* ATALHOS */}
        <Atalhos />

        {/* SOBRE SÃO CARLOS LUANGA */}
        <SaoCarlos />

        {/* FOOTER */}
        <Footer />

      </div>

    </main>
  );
}