"use client";

import { useEffect, useState } from "react";
import { Image as ImageIcon } from "lucide-react";


interface Galeria {

  id:string;

  titulo:string | null;

  imagemUrl:string;

  createdAt:string;

}




export default function GaleriaPage(){


const API_URL = process.env.NEXT_PUBLIC_API_URL;


  const [imagens,setImagens] = useState<Galeria[]>([]);

  const [carregando,setCarregando] = useState(true);





  async function carregarGaleria(){


    try{


      const resposta = await fetch(
        `${API_URL}/galeria`
      );


      const dados = await resposta.json();


      if(Array.isArray(dados)){


        setImagens(dados);


      }



    }catch(error){


      console.log(
        "Erro ao carregar galeria",
        error
      );


    }finally{


      setCarregando(false);


    }



  }





  useEffect(()=>{


    carregarGaleria();


  },[]);







  return (

    <main className="min-h-screen bg-gray-100 pt-28 pb-16">


      <section className="max-w-7xl mx-auto px-6">



        {/* CABEÇALHO */}


        <div
          className="
            bg-[#061a3a]
            rounded-3xl
            p-8
            text-white
            shadow-xl
            mb-10
          "
        >


          <div className="flex items-center gap-3">


            <ImageIcon
              size={38}
              className="text-yellow-400"
            />


            <h1
              className="
                text-3xl
                font-bold
              "
            >

              Galeria Paroquial

            </h1>


          </div>



          <p
            className="
              text-gray-300
              mt-3
            "
          >

            Momentos e atividades da Paróquia São Carlos Lwanga.

          </p>



        </div>







        {carregando && (


          <div className="text-center text-gray-500">

            Carregando imagens...

          </div>


        )}








        {!carregando && imagens.length === 0 && (


          <div
            className="
              bg-white
              rounded-3xl
              p-10
              text-center
              shadow
            "
          >

            <p className="text-gray-500">

              Ainda não existem imagens publicadas.

            </p>


          </div>


        )}









        <div

          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
          "

        >




          {imagens.map((imagem)=>(


            <div

              key={imagem.id}

              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-md
                hover:shadow-xl
                transition
              "

            >



              <img

                src={`${API_URL}/${imagem.imagemUrl}`}

                alt={
                  imagem.titulo || 
                  "Imagem da galeria"
                }

                className="
                  w-full
                  h-72
                  object-cover
                "

              />





              <div className="p-5">


                <h2
                  className="
                    text-lg
                    font-bold
                    text-[#061a3a]
                  "
                >

                  {
                    imagem.titulo ||
                    "Momento paroquial"
                  }

                </h2>



                <p
                  className="
                    text-sm
                    text-gray-400
                    mt-2
                  "
                >

                  Paróquia São Carlos Lwanga

                </p>


              </div>



            </div>



          ))}



        </div>




      </section>



    </main>


  );


}