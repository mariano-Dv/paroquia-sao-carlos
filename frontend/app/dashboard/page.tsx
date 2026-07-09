"use client";

import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";
import PedidoCard from "../components/PedidoCard";
import ComoFunciona from "../components/ComoFunciona";
import FooterDashboard from "../components/FooterDashboard";


export default function DashboardPage(){


  return (

    <div className="
      min-h-screen
      bg-gray-100
    ">



      {/* NAVBAR */}

      <DashboardNavbar />





      {/* ÁREA PRINCIPAL */}

      <div className="
        flex
        pt-20
      ">





        {/* SIDEBAR */}

        <DashboardSidebar />







        {/* CONTEÚDO */}

        <main className="
          flex-1
          p-6
          md:p-8
        ">





          <div className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
            md:p-8
          ">





            {/* CABEÇALHO */}

            <h1 className="
              text-3xl
              font-bold
              text-[#061a3a]
            ">

              Pedidos Paroquiais

            </h1>





            <div className="
              w-24
              h-1
              bg-yellow-400
              mt-3
              mb-5
              rounded-full
            "></div>





            <p className="
              text-gray-600
              text-lg
              mb-8
            ">

              Escolha abaixo o serviço que deseja solicitar.

            </p>








            {/* SERVIÇOS */}

            <div className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
            ">





              <PedidoCard

                titulo="Batismo"

                descricao="
                Solicite o Batismo para crianças.
                Preencha os dados necessários
                e nossa equipa entrará em contacto.
                "

                tipo="batismo"

              />







              <PedidoCard

                titulo="Primeira Comunhão"

                descricao="
                Solicite a Primeira Comunhão
                para crianças e adolescentes
                que já fizeram o Batismo.
                "

                tipo="comunhao"

              />







              <PedidoCard

                titulo="Crisma"

                descricao="
                Solicite o Sacramento da Crisma
                para adolescentes e adultos
                batizados.
                "

                tipo="crisma"

              />








              <PedidoCard

                titulo="Catequese"

                descricao="
                Inscrição para os encontros
                de catequese para crianças,
                adolescentes e adultos.
                "

                tipo="catequese"

              />





            </div>







            {/* COMO FUNCIONA */}

            <ComoFunciona />







            {/* RODAPÉ */}

            <FooterDashboard />






          </div>





        </main>






      </div>





    </div>

  );

}