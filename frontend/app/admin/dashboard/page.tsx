"use client";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardCards from "./components/DashboardCards";


export default function AdminDashboard(){


  return (

    <div
      className="
        min-h-screen
        bg-gray-100
      "
    >


      {/* MENU LATERAL */}

      <Sidebar />




      {/* CONTEÚDO PRINCIPAL */}

      <main
        className="
          ml-72
        "
      >


        {/* CABEÇALHO */}

        <Header />




        {/* ÁREA DO DASHBOARD */}

        <div
          className="
            p-8
          "
        >


          <div
            className="
              mb-8
            "
          >

            <h2
              className="
                text-3xl
                font-bold
                text-[#061a3a]
              "
            >
              Dashboard
            </h2>


            <p
              className="
                text-gray-500
                mt-2
              "
            >
              Visão geral da administração paroquial
            </p>


          </div>





          {/* CARTÕES */}

          <DashboardCards />



        </div>



      </main>


    </div>

  );

}