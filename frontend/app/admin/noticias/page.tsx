"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Newspaper,
  Upload,
  Trash2,
  CalendarDays,
  Plus,
  Loader2,
  ImageIcon,
} from "lucide-react";

import { motion } from "framer-motion";


const API_URL = process.env.NEXT_PUBLIC_API_URL;



export default function NoticiasPage(){


  const [titulo,setTitulo] = useState("");

  const [resumo,setResumo] = useState("");

  const [conteudo,setConteudo] = useState("");

  const [tipo,setTipo] = useState("NOTICIA");

  const [dataEvento,setDataEvento] = useState("");

  const [imagem,setImagem] = useState<File | null>(null);


  const [noticias,setNoticias] = useState<any[]>([]);

  const [loading,setLoading] = useState(false);





  async function carregarNoticias(){


    try{


      const resposta = await fetch(
        `${API_URL}/noticias`
      );


      const dados = await resposta.json();


      setNoticias(dados);



    }catch(error){


      console.log(
        "Erro ao carregar notícias",
        error
      );


    }


  }







  useEffect(()=>{


    carregarNoticias();


  },[]);









  async function publicarNoticia(){



    if(!titulo || !conteudo){


      alert(
        "Preencha o título e o conteúdo"
      );


      return;


    }





    setLoading(true);





    const formData = new FormData();




    formData.append(
      "titulo",
      titulo
    );



    formData.append(
      "resumo",
      resumo
    );



    formData.append(
      "conteudo",
      conteudo
    );



    formData.append(
      "tipo",
      tipo
    );





    if(dataEvento){


      formData.append(
        "dataEvento",
        dataEvento
      );


    }






    if(imagem){


      formData.append(
        "imagem",
        imagem
      );


    }









    try{


      await fetch(

        `${API_URL}/noticias`,

        {

          method:"POST",

          body:formData,

        }

      );





      setTitulo("");

      setResumo("");

      setConteudo("");

      setImagem(null);

      setDataEvento("");




      await carregarNoticias();





    }catch(error){


      console.log(
        "Erro ao publicar notícia",
        error
      );



    }finally{


      setLoading(false);


    }



  }












  async function apagarNoticia(id:string){



    const confirmar = confirm(

      "Deseja realmente apagar esta publicação?"

    );



    if(!confirmar) return;





    try{


      await fetch(

        `${API_URL}/noticias/${id}`,

        {

          method:"DELETE",

        }

      );



      carregarNoticias();



    }catch(error){


      console.log(error);


    }


  }









  return (


    <main

      className="
      min-h-screen
      bg-[#050b16]
      p-4
      md:p-8
      text-white
      "

    >



      <motion.div


        initial={{
          opacity:0,
          y:20
        }}


        animate={{
          opacity:1,
          y:0
        }}


        className="
        max-w-6xl
        mx-auto
        "


      >






        <div

          className="
          flex
          items-center
          gap-4
          mb-10
          "

        >



          <div

            className="
            p-3
            rounded-2xl
            bg-yellow-500/10
            "

          >

            <Newspaper

              size={38}

              className="
              text-yellow-400
              "

            />


          </div>





          <div>


            <h1

              className="
              text-3xl
              md:text-4xl
              font-bold
              text-white
              "

            >

              Notícias da Paróquia

            </h1>



            <p

              className="
              text-gray-400
              mt-1
              "

            >

              Publique comunicados, eventos e informações para a comunidade.

            </p>


          </div>



        </div>









        <section

          className="
          bg-[#0b162b]
          border
          border-white/10
          rounded-3xl
          shadow-2xl
          p-6
          mb-12
          "

        >



          <h2

            className="
            text-xl
            font-bold
            text-yellow-400
            mb-6
            "

          >

            Nova publicação

          </h2>





          <div

            className="
            grid
            md:grid-cols-2
            gap-5
            "

          >



            <input


              value={titulo}


              onChange={
                e=>setTitulo(e.target.value)
              }


              placeholder="Título da notícia"


              className="
              bg-[#061a3a]
              border
              border-white/10
              rounded-xl
              p-3
              text-white
              outline-none
              focus:border-yellow-400
              "

            />





            <select


              value={tipo}


              onChange={
                e=>setTipo(e.target.value)
              }


              className="
              bg-[#061a3a]
              border
              border-white/10
              rounded-xl
              p-3
              text-white
              "

            >


              <option value="NOTICIA">

                Notícia

              </option>



              <option value="COMUNICADO">

                Comunicado

              </option>



            </select>



          </div>

                    <input

            value={resumo}

            onChange={
              e=>setResumo(e.target.value)
            }

            placeholder="Resumo da publicação"

            className="
            mt-5
            w-full
            bg-[#061a3a]
            border
            border-white/10
            rounded-xl
            p-3
            text-white
            outline-none
            focus:border-yellow-400
            "

          />








          <textarea


            value={conteudo}


            onChange={
              e=>setConteudo(e.target.value)
            }


            placeholder="Conteúdo completo da publicação"


            rows={6}


            className="
            mt-5
            w-full
            bg-[#061a3a]
            border
            border-white/10
            rounded-xl
            p-3
            text-white
            outline-none
            focus:border-yellow-400
            "

          />









          {
            tipo === "COMUNICADO" &&

            <div className="mt-5">


              <label

                className="
                flex
                items-center
                gap-2
                text-gray-300
                mb-2
                "

              >

                <CalendarDays size={18}/>

                Data do evento

              </label>




              <input


                type="date"


                value={dataEvento}


                onChange={
                  e=>setDataEvento(e.target.value)
                }


                className="
                bg-[#061a3a]
                border
                border-white/10
                rounded-xl
                p-3
                text-white
                "

              />


            </div>

          }









          <label


            className="
            mt-6
            flex
            items-center
            gap-3
            cursor-pointer
            text-yellow-400
            font-semibold
            "

          >


            <Upload size={22}/>


            Escolher imagem


            <input


              type="file"


              accept="image/*"


              hidden


              onChange={

                e=>

                setImagem(
                  e.target.files?.[0] || null
                )

              }


            />



          </label>









          <button


            onClick={publicarNoticia}


            disabled={loading}


            className="
            mt-6
            bg-yellow-500
            text-[#061a3a]
            font-bold
            px-7
            py-3
            rounded-xl
            flex
            items-center
            gap-3
            hover:bg-yellow-400
            transition
            disabled:opacity-50
            "

          >



            {

              loading

              ?

              <Loader2

                className="
                animate-spin
                "

              />

              :

              <Plus/>

            }



            Publicar notícia


          </button>




        </section>












        <section>


          <h2

            className="
            text-xl
            font-bold
            text-yellow-400
            mb-6
            "

          >

            Publicações existentes

          </h2>









          <div

            className="
            grid
            md:grid-cols-2
            gap-7
            "

          >



          {

            noticias.map((item)=>(



              <motion.div



                key={item.id}



                initial={{

                  opacity:0,

                  scale:0.95

                }}



                animate={{

                  opacity:1,

                  scale:1

                }}



                className="
                bg-[#0b162b]
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                shadow-xl
                "

              >






                {

                  item.imagem

                  ?

                  <img


                    src={item.imagem}


                    alt={item.titulo}


                    className="
                    w-full
                    h-52
                    object-cover
                    "

                  />

                  :

                  <div

                    className="
                    h-52
                    flex
                    items-center
                    justify-center
                    bg-[#061a3a]
                    text-gray-400
                    "

                  >

                    <ImageIcon size={45}/>

                  </div>

                }









                <div className="p-6">



                  <h3


                    className="
                    text-xl
                    font-bold
                    text-white
                    "

                  >

                    {item.titulo}


                  </h3>





                  <p

                    className="
                    text-gray-400
                    mt-3
                    leading-relaxed
                    "

                  >

                    {item.resumo}


                  </p>






                  {

                    item.tipo &&

                    <span

                      className="
                      inline-block
                      mt-4
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      bg-yellow-500/20
                      text-yellow-400
                      "

                    >

                      {item.tipo}


                    </span>


                  }









                  <button



                    onClick={()=>

                      apagarNoticia(item.id)

                    }



                    className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-red-400
                    hover:text-red-300
                    transition
                    "

                  >


                    <Trash2 size={18}/>


                    Apagar



                  </button>





                </div>






              </motion.div>



            ))

          }



          </div>




        </section>








      </motion.div>





    </main>


  );


}