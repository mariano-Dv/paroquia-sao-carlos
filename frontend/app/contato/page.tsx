"use client";

import {
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Church,
  Navigation,
} from "lucide-react";


export default function ContatoPage(){


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
        py-24
        px-6
        text-center
        "

      >


        <div

          className="
          max-w-4xl
          mx-auto
          "

        >


          <Church

            size={70}

            className="
            mx-auto
            text-yellow-400
            animate-pulse
            mb-6
            "

          />


          <h1

            className="
            text-4xl
            md:text-6xl
            font-bold
            "

          >

            Entre em Contacto

          </h1>



          <p

            className="
            mt-5
            text-gray-300
            text-lg
            "

          >

            Estamos disponíveis para acolher,
            orientar e caminhar juntos na fé.

          </p>


        </div>


      </section>







      {/* CONTACTOS */}


      <section

        className="
        max-w-6xl
        mx-auto
        px-6
        pb-16
        "

      >


        <div

          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
          "

        >




          {/* TELEFONE */}


          <div

            className="
            bg-[#091426]
            border
            border-yellow-500/20
            rounded-3xl
            p-8
            shadow-xl
            hover:-translate-y-2
            transition
            "

          >


            <Phone

              size={45}

              className="
              text-yellow-400
              animate-bounce
              mb-5
              "

            />


            <h2

              className="
              text-xl
              font-bold
              "

            >

              Telefone

            </h2>



            <p

              className="
              text-gray-300
              mt-3
              "

            >

              945 53 77 71

            </p>



            <a

              href="https://wa.me/244945537771"

              target="_blank"

              className="
              inline-flex
              items-center
              gap-2
              mt-5
              bg-green-600
              px-5
              py-3
              rounded-xl
              font-semibold
              hover:opacity-90
              transition
              "

            >

              <MessageCircle size={20}/>

              WhatsApp


            </a>



          </div>









          {/* LOCALIZAÇÃO */}



          <div

            className="
            bg-[#091426]
            border
            border-yellow-500/20
            rounded-3xl
            p-8
            shadow-xl
            hover:-translate-y-2
            transition
            "

          >



            <MapPin

              size={45}

              className="
              text-yellow-400
              animate-pulse
              mb-5
              "

            />



            <h2

              className="
              text-xl
              font-bold
              "

            >

              Localização

            </h2>



            <p

              className="
              text-gray-300
              mt-3
              "

            >

              Paróquia São Carlos Lwanga
              <br/>
              Luanda - Angola

            </p>



          </div>








          {/* HORÁRIO */}



          <div

            className="
            bg-[#091426]
            border
            border-yellow-500/20
            rounded-3xl
            p-8
            shadow-xl
            hover:-translate-y-2
            transition
            "

          >


            <Clock

              size={45}

              className="
              text-yellow-400
              animate-spin
              mb-5
              "

            />


            <h2

              className="
              text-xl
              font-bold
              "

            >

              Atendimento

            </h2>



            <p

              className="
              text-gray-300
              mt-3
              "

            >

              Secretaria Paroquial
              <br/>
              Consulte os horários de atendimento.

            </p>


          </div>




        </div>



      </section>









      {/* MAPA */}



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
          bg-white
          rounded-3xl
          overflow-hidden
          shadow-2xl
          "

        >



          <div

            className="
            bg-[#061a3a]
            p-6
            flex
            items-center
            gap-3
            "

          >


            <Navigation

              className="
              text-yellow-400
              "

            />


            <h2

              className="
              text-xl
              font-bold
              "

            >

              Como chegar até nós

            </h2>


          </div>





          <iframe

            src="https://www.google.com/maps?q=Luanda%20Angola%20Igreja%20Catolica&output=embed"

            width="100%"

            height="450"

            style={{
              border:0
            }}

            loading="lazy"

            allowFullScreen

          ></iframe>



        </div>



      </section>






      {/* FINAL */}



      <section

        className="
        text-center
        px-6
        pb-20
        "

      >


        <h2

          className="
          text-3xl
          font-bold
          "

        >

          A nossa porta está aberta para si

        </h2>


        <p

          className="
          text-gray-300
          mt-4
          "

        >

          Venha fazer parte da comunidade da Paróquia São Carlos Lwanga.

        </p>


      </section>



    </main>


  );


}