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

      console.log(error);

    }


  }





  useEffect(()=>{

    carregarNoticias();

  },[]);









  async function publicarNoticia(){



    if(!titulo || !conteudo){

      alert("Preencha título e conteúdo");

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


      console.log(error);


    }finally{


      setLoading(false);


    }


  }









  async function apagarNoticia(id:string){



    const confirmar = confirm(

      "Deseja realmente apagar esta notícia?"

    );



    if(!confirmar) return;



    await fetch(

      `${API_URL}/noticias/${id}`,

      {

        method:"DELETE",

      }

    );



    carregarNoticias();



  }









  return (

    <main

    className="
    min-h-screen
    bg-gray-100
    p-4
    md:p-8
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
        gap-3
        mb-8
        "

        >

          <Newspaper

          className="
          text-yellow-500
          "

          size={35}

          />

          <div>

            <h1

            className="
            text-3xl
            font-bold
            text-[#061a3a]
            "

            >

              Notícias da Paróquia

            </h1>


            <p

            className="
            text-gray-500
            "

            >

              Publique notícias e comunicados para os fiéis

            </p>


          </div>


        </div>










        <section

        className="
        bg-white
        rounded-2xl
        shadow-lg
        p-6
        mb-10
        "

        >



          <h2

          className="
          text-xl
          font-bold
          text-[#061a3a]
          mb-5
          "

          >

            Adicionar publicação

          </h2>






          <div className="
          grid
          md:grid-cols-2
          gap-4
          ">



            <input

            value={titulo}

            onChange={
              e=>setTitulo(e.target.value)
            }

            placeholder="Título da notícia"

            className="
            border
            rounded-xl
            p-3
            outline-none
            "

            />



            <select


            value={tipo}


            onChange={
              e=>setTipo(e.target.value)
            }


            className="
            border
            rounded-xl
            p-3
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
          border
          rounded-xl
          p-3
          w-full
          mt-4
          "

          />








          <textarea


          value={conteudo}


          onChange={
            e=>setConteudo(e.target.value)
          }


          placeholder="Conteúdo completo"

          rows={6}


          className="
          border
          rounded-xl
          p-3
          w-full
          mt-4
          "

          />









          {
            tipo==="COMUNICADO" &&

            <div

            className="
            mt-4
            "

            >

              <label

              className="
              flex
              items-center
              gap-2
              text-gray-600
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
              border
              rounded-xl
              p-3
              "

              />

            </div>

          }









          <label

          className="
          mt-5
          flex
          items-center
          gap-3
          cursor-pointer
          text-[#061a3a]
          font-medium
          "

          >


            <Upload/>


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


          className="
          mt-6
          bg-[#061a3a]
          text-white
          px-6
          py-3
          rounded-xl
          flex
          items-center
          gap-2
          hover:bg-yellow-500
          hover:text-[#061a3a]
          transition
          "

          >


            {
              loading
              ?
              <Loader2 className="animate-spin"/>
              :
              <Plus/>
            }


            Publicar


          </button>



        </section>













        <section>


          <h2

          className="
          text-xl
          font-bold
          text-[#061a3a]
          mb-5
          "

          >

            Publicações existentes

          </h2>







          <div

          className="
          grid
          md:grid-cols-2
          gap-6
          "

          >


          {
            noticias.map((item)=> (


              <motion.div


              key={item.id}


              initial={{
                opacity:0
              }}


              animate={{
                opacity:1
              }}


              className="
              bg-white
              rounded-2xl
              shadow
              overflow-hidden
              "

              >


                {
                  item.imagem &&

                  <img

                  src={`${API_URL}/${item.imagem}`}

                  className="
                  w-full
                  h-48
                  object-cover
                  "

                  />

                }




                <div className="p-5">


                  <h3

                  className="
                  font-bold
                  text-lg
                  text-[#061a3a]
                  "

                  >

                    {item.titulo}

                  </h3>


                  <p className="text-gray-500 mt-2">

                    {item.resumo}

                  </p>



                  <button


                  onClick={()=>
                    apagarNoticia(item.id)
                  }


                  className="
                  mt-4
                  text-red-600
                  flex
                  items-center
                  gap-2
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