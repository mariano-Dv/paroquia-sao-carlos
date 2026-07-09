"use client";

import {
  FileText,
  Users,
  Newspaper,
  Image as ImageIcon,
  ShieldCheck,
  Clock,
} from "lucide-react";

import {
  useEffect,
  useState
} from "react";

import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL;



export default function DashboardCards(){


  const [totalPedidos,setTotalPedidos] = useState(0);

  const [pedidosPendentes,setPedidosPendentes] = useState(0);

  const [totalGaleria,setTotalGaleria] = useState(0);





  useEffect(()=>{


    async function carregarDados(){


      try{


        // ==========================
        // PEDIDOS
        // ==========================

        const respostaPedidos = await fetch(
          `${API_URL}/pedidos`
        );


        const dadosPedidos = await respostaPedidos.json();



        if(Array.isArray(dadosPedidos)){


          setTotalPedidos(
            dadosPedidos.length
          );


          const pendentes = dadosPedidos.filter(
            (pedido:any)=>
              pedido.status === "PENDENTE"
          );


          setPedidosPendentes(
            pendentes.length
          );


        }




        // ==========================
        // GALERIA
        // ==========================


        const respostaGaleria = await fetch(
          `${API_URL}/galeria`
        );


        const dadosGaleria = await respostaGaleria.json();



        if(Array.isArray(dadosGaleria)){


          setTotalGaleria(
            dadosGaleria.length
          );


        }



      }catch(error){


        console.log(
          "Erro ao carregar dados do dashboard",
          error
        );


      }



    }




    carregarDados();



  },[]);







  const cards = [


    {
      titulo:"Pedidos Pendentes",
      valor: pedidosPendentes,
      descricao:"Aguardando análise da secretaria",
      icon:Clock,
      link:true,
      caminho:"/admin/pedidos"
    },



    {
      titulo:"Total de Pedidos",
      valor:totalPedidos,
      descricao:"Pedidos recebidos",
      icon:FileText,
      link:true,
      caminho:"/admin/pedidos"
    },



    {
      titulo:"Membros",
      valor:"0",
      descricao:"Utilizadores cadastrados",
      icon:Users,
      link:false,
      caminho:"#"
    },



    {
      titulo:"Notícias",
      valor:"0",
      descricao:"Publicações no site",
      icon:Newspaper,
      link:false,
      caminho:"#"
    },



    {
      titulo:"Galeria",
      valor:totalGaleria,
      descricao:"Fotos publicadas",
      icon:ImageIcon,
      link:true,
      caminho:"/dashboard/galeria"
    },



    {
      titulo:"Administradores",
      valor:"1",
      descricao:"Contas administrativas",
      icon:ShieldCheck,
      link:false,
      caminho:"#"
    },


  ];







  return (

    <section

      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3
        gap-6
      "

    >



      {cards.map((card,index)=>{


        const Icon = card.icon;



        const conteudo = (


          <div

            className="
              bg-white
              rounded-2xl
              p-6
              border
              border-gray-200
              shadow-sm
              hover:shadow-lg
              transition
              cursor-pointer
            "

          >



            <div

              className="
                flex
                items-center
                justify-between
              "

            >



              <div>


                <p

                  className="
                    text-gray-500
                    text-sm
                  "

                >

                  {card.titulo}

                </p>



                <h2

                  className="
                    text-4xl
                    font-bold
                    text-[#061a3a]
                    mt-3
                  "

                >

                  {card.valor}

                </h2>



                <p

                  className="
                    text-xs
                    text-gray-400
                    mt-3
                  "

                >

                  {card.descricao}

                </p>


              </div>






              <div

                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-yellow-500
                  flex
                  items-center
                  justify-center
                  shadow-md
                "

              >


                <Icon

                  size={32}

                  className="
                    text-[#061a3a]
                  "

                />


              </div>



            </div>



          </div>


        );






        return card.link ? (


          <Link

            href={card.caminho}

            key={index}

          >

            {conteudo}


          </Link>


        ) : (


          <div

            key={index}

          >

            {conteudo}


          </div>


        );



      })}



    </section>


  );


}