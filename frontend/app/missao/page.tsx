"use client";

import {
  HeartHandshake,
  Cross,
  Church,
  Users,
  BookOpen,
  HandHeart,
  Globe2,
} from "lucide-react";


export default function MissaoPage() {


  const pilares = [

    {
      titulo:"Evangelização",
      texto:
      "Anunciar o Evangelho de Jesus Cristo, levando a mensagem de amor, esperança e salvação a todos os membros da comunidade.",
      icon:Cross
    },


    {
      titulo:"Comunidade",
      texto:
      "Fortalecer a união entre os fiéis, criando uma família paroquial baseada na fé, fraternidade e solidariedade.",
      icon:Users
    },


    {
      titulo:"Serviço",
      texto:
      "Servir ao próximo seguindo o exemplo de Cristo, através da caridade, acolhimento e ajuda aos mais necessitados.",
      icon:HandHeart
    },


    {
      titulo:"Formação Cristã",
      texto:
      "Promover a formação espiritual através da catequese, oração e preparação para os sacramentos.",
      icon:BookOpen
    }

  ];




  return (

    <main
      className="
      min-h-screen
      bg-[#050B16]
      text-white
      "
    >


      {/* HERO */}

      <section

        className="
        relative
        h-[420px]
        flex
        items-center
        justify-center
        bg-cover
        bg-center
        "

        style={{

          backgroundImage:
          "linear-gradient(rgba(5,11,22,.75),rgba(5,11,22,.9)),url('https://images.unsplash.com/photo-1548625361-3c7d9b0b7f31')"

        }}

      >


        <div className="text-center px-6">


          <Church

            size={65}

            className="
            mx-auto
            text-yellow-400
            mb-5
            "

          />


          <h1

            className="
            text-4xl
            md:text-6xl
            font-bold
            "
          >

            Nossa Missão

          </h1>



          <p

            className="
            max-w-3xl
            mx-auto
            mt-5
            text-gray-300
            text-lg
            "
          >

            Servir a Deus e à comunidade seguindo os ensinamentos de Jesus Cristo,
            promovendo fé, esperança e amor.

          </p>


        </div>


      </section>






      {/* INTRODUÇÃO */}


      <section

        className="
        max-w-6xl
        mx-auto
        px-6
        py-16
        "

      >


        <div

          className="
          bg-[#091426]
          border
          border-yellow-500/20
          rounded-3xl
          p-8
          md:p-12
          shadow-xl
          "

        >


          <div className="
          flex
          items-center
          gap-4
          mb-6
          ">


            <HeartHandshake

              size={45}

              className="
              text-yellow-400
              "

            />


            <h2

              className="
              text-3xl
              font-bold
              "

            >

              A missão da Paróquia São Carlos Lwanga

            </h2>


          </div>





          <p

            className="
            text-gray-300
            leading-8
            text-lg
            "

          >

            A Paróquia São Carlos Lwanga tem como missão ser uma presença viva
            de Cristo no meio da comunidade, acolhendo todos os fiéis e anunciando
            a Palavra de Deus através da oração, dos sacramentos e do serviço ao próximo.

            <br/><br/>

            Inspirada no testemunho de São Carlos Lwanga, mártir africano que entregou
            sua vida pela fé em Cristo, a nossa comunidade procura viver os valores do
            Evangelho, formando cristãos comprometidos com Deus e com a sociedade.

          </p>


        </div>


      </section>







      {/* PILARES */}


      <section

        className="
        max-w-6xl
        mx-auto
        px-6
        pb-16
        "

      >


        <h2

          className="
          text-3xl
          font-bold
          text-center
          mb-10
          "

        >

          Os nossos compromissos

        </h2>




        <div

          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          "

        >


          {

          pilares.map((item,index)=>{


            const Icon = item.icon;


            return (

              <div

                key={index}

                className="
                bg-white
                text-[#061a3a]
                rounded-3xl
                p-7
                shadow-lg
                hover:scale-[1.02]
                transition
                "

              >


                <Icon

                  size={45}

                  className="
                  text-yellow-600
                  mb-5
                  "

                />


                <h3

                  className="
                  text-xl
                  font-bold
                  mb-3
                  "

                >

                  {item.titulo}

                </h3>


                <p

                  className="
                  text-gray-600
                  leading-7
                  "

                >

                  {item.texto}

                </p>


              </div>


            );


          })

          }


        </div>


      </section>







      {/* FINAL */}


      <section

        className="
        max-w-6xl
        mx-auto
        px-6
        pb-20
        "

      >


        <div

          className="
          rounded-3xl
          overflow-hidden
          relative
          "

          style={{

            backgroundImage:
            "linear-gradient(rgba(6,26,58,.8),rgba(6,26,58,.9)),url('https://images.unsplash.com/photo-1507692049790-de58290a4334')",

            backgroundSize:"cover",

            backgroundPosition:"center"

          }}

        >


          <div

            className="
            p-10
            md:p-16
            text-center
            "

          >


            <Globe2

              size={55}

              className="
              mx-auto
              text-yellow-400
              mb-5
              "

            />


            <h2

              className="
              text-3xl
              font-bold
              "

            >

              Uma Igreja aberta para todos

            </h2>



            <p

              className="
              text-gray-300
              mt-5
              max-w-3xl
              mx-auto
              "

            >

              A Paróquia São Carlos Lwanga continua a sua missão de levar
              Cristo ao coração das famílias, fortalecendo a fé e construindo
              uma comunidade unida pelo amor de Deus.

            </p>


          </div>


        </div>


      </section>




    </main>

  );

}