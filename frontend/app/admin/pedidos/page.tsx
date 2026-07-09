"use client";

import { useEffect, useState } from "react";
import { Eye, RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";


const API_URL = "http://localhost:3000";



interface Pedido {

  id: string;

  tipo: string;

  status: string;

  nomeCompleto: string;

  telefone?: string;

  email?: string;

  createdAt: string;

}




export default function PedidosAdminPage() {


  const router = useRouter();


  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  const [loading, setLoading] = useState(true);

  const [erro, setErro] = useState("");




  async function carregarPedidos(){


    try {


      setLoading(true);


      const token =
      localStorage.getItem("token");



      const resposta = await fetch(
        `${API_URL}/pedidos`,
        {

          headers: {

            Authorization:
            `Bearer ${token}`

          }

        }

      );



      const dados =
      await resposta.json();



      if(!resposta.ok){

        throw new Error(
          dados.message ||
          "Erro ao carregar pedidos"
        );

      }



      setPedidos(dados);



    }
    catch(error:any){


      setErro(
        error.message
      );


    }
    finally{


      setLoading(false);


    }


  }





  useEffect(()=>{

    carregarPedidos();

  },[]);






  return (


    <main

      className="
      p-6
      bg-[#050B16]
      min-h-screen
      "

    >


      <div

        className="
        max-w-7xl
        mx-auto
        "

      >



        <div

          className="
          flex
          justify-between
          items-center
          mb-8
          "

        >


          <div>


            <h1

              className="
              text-3xl
              font-bold
              text-white
              "

            >

              Pedidos Recebidos

            </h1>



            <p

              className="
              text-gray-400
              mt-2
              "

            >

              Gerencie todos os pedidos enviados pelos membros.

            </p>


          </div>




          <button

            onClick={carregarPedidos}

            className="
            flex
            items-center
            gap-2
            bg-yellow-500
            text-black
            px-4
            py-2
            rounded-xl
            font-bold
            "

          >

            <RefreshCcw size={18}/>

            Atualizar

          </button>



        </div>






        {
          loading && (

            <p className="text-white">

              Carregando pedidos...

            </p>

          )
        }






        {
          erro && (

            <div

              className="
              bg-red-500/20
              border
              border-red-500
              text-red-300
              p-4
              rounded-xl
              "

            >

              {erro}

            </div>

          )
        }







        {!loading && !erro && (


          <div

            className="
            bg-[#0A192F]
            rounded-2xl
            border
            border-white/10
            overflow-hidden
            "

          >



            <table

              className="
              w-full
              text-left
              "

            >



              <thead

                className="
                bg-white/5
                text-gray-300
                "

              >

                <tr>

                  <th className="p-4">
                    Nome
                  </th>

                  <th className="p-4">
                    Tipo
                  </th>

                  <th className="p-4">
                    Estado
                  </th>

                  <th className="p-4">
                    Data
                  </th>

                  <th className="p-4">
                    Ação
                  </th>

                </tr>


              </thead>






              <tbody>


                {
                  pedidos.map((pedido)=>(


                    <tr

                      key={pedido.id}

                      className="
                      border-t
                      border-white/10
                      text-gray-200
                      "

                    >



                      <td className="p-4">

                        {pedido.nomeCompleto}

                      </td>




                      <td className="p-4">

                        {pedido.tipo}

                      </td>





                      <td className="p-4">


                        <span

                          className="
                          bg-yellow-500/20
                          text-yellow-400
                          px-3
                          py-1
                          rounded-full
                          text-sm
                          "

                        >

                          {pedido.status}

                        </span>


                      </td>





                      <td className="p-4">


                        {
                          new Date(
                            pedido.createdAt
                          )
                          .toLocaleDateString()
                        }


                      </td>






                      <td className="p-4">


                        <button

                          onClick={()=>


                            router.push(
                              `/admin/pedidos/${pedido.id}`
                            )


                          }


                          className="
                          flex
                          items-center
                          gap-2
                          text-yellow-400
                          hover:text-yellow-300
                          "

                        >

                          <Eye size={18}/>

                          Ver

                        </button>


                      </td>




                    </tr>


                  ))

                }



              </tbody>




            </table>




          </div>


        )}



      </div>


    </main>


  );


}