"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, User } from "lucide-react";


const API_URL = process.env.NEXT_PUBLIC_API_URL;


export default function AdminLoginPage() {


  const router = useRouter();


  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");





  async function entrar(e: React.FormEvent) {


    e.preventDefault();

    setLoading(true);
    setErro("");



    try {


      const resposta = await fetch(
        `${API_URL}/auth/login`,
        {

          method:"POST",

          headers:{
            "Content-Type":"application/json",
          },


          body:JSON.stringify({

            nome,
            email,
            password,

          }),

        }
      );




      const data = await resposta.json();




      if(!resposta.ok){

        throw new Error(
          data.message || "Erro no login"
        );

      }





      if(data.user.role !== "ADMIN"){


        throw new Error(
          "Acesso negado. Área exclusiva para administradores."
        );


      }





      localStorage.setItem(
        "token",
        data.access_token
      );


      localStorage.setItem(
        "admin",
        JSON.stringify(data.user)
      );



      router.push(
        "/admin/dashboard"
      );




    }catch(error:any){


      setErro(error.message);


    }finally{


      setLoading(false);


    }


  }





  return (


    <div
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      px-4
      overflow-hidden
      "
    >



      {/* IMAGEM DE FUNDO */}

      <div
        className="
        absolute
        inset-0
        bg-cover
        bg-center
        "
        style={{
          backgroundImage:
          "url('/images/imagen.png')"
        }}
      />



      {/* CAMADA ESCURA */}

      <div
        className="
        absolute
        inset-0
        bg-[#050B16]/80
        backdrop-blur-sm
        "
      />





      {/* CARD LOGIN */}


      <div
        className="
        relative
        z-10
        w-full
        max-w-md
        bg-[#0A192F]/80
        backdrop-blur-xl
        border
        border-yellow-500/20
        rounded-3xl
        shadow-2xl
        p-8
        "
      >





        {/* LOGO */}


        <div
          className="
          text-center
          mb-8
          "
        >


          <div
            className="
            w-24
            h-24
            mx-auto
            rounded-full
            overflow-hidden
            border-4
            border-yellow-500
            shadow-xl
            mb-5
            "
          >

            <img
              src="/images/imagen.png"
              alt="Paróquia São Carlos Lwanga"
              className="
              w-full
              h-full
              object-cover
              "
            />


          </div>





          <h1
            className="
            text-3xl
            font-bold
            text-white
            "
          >

            Área Administrativa

          </h1>




          <p
            className="
            text-yellow-400
            mt-3
            text-sm
            "
          >

            Paróquia São Carlos Lwanga

          </p>




          <p
            className="
            text-gray-300
            text-sm
            mt-2
            "
          >

            Acesso exclusivo da secretaria paroquial

          </p>



        </div>







        <form
          onSubmit={entrar}
          className="
          space-y-5
          "
        >






          <div>


            <label
              className="
              text-gray-300
              text-sm
              "
            >

              Nome do administrador

            </label>



            <div
              className="
              relative
              mt-2
              "
            >


              <User
                className="
                absolute
                left-3
                top-3
                text-yellow-500
                "
                size={20}
              />



              <input

                value={nome}

                onChange={(e)=>setNome(e.target.value)}

                placeholder="Nome completo"

                className="
                w-full
                bg-white/5
                border
                border-white/10
                rounded-xl
                py-3
                pl-11
                text-white
                outline-none
                focus:border-yellow-500
                "

                required

              />


            </div>


          </div>







          <div>


            <label
              className="
              text-gray-300
              text-sm
              "
            >

              E-mail

            </label>



            <div className="relative mt-2">


              <Mail
                className="
                absolute
                left-3
                top-3
                text-yellow-500
                "
                size={20}
              />



              <input

                type="email"

                value={email}

                onChange={(e)=>setEmail(e.target.value)}

                placeholder="admin@email.com"

                className="
                w-full
                bg-white/5
                border
                border-white/10
                rounded-xl
                py-3
                pl-11
                text-white
                outline-none
                focus:border-yellow-500
                "

                required

              />


            </div>


          </div>







          <div>


            <label
              className="
              text-gray-300
              text-sm
              "
            >

              Palavra-passe

            </label>



            <div className="relative mt-2">


              <Lock

                className="
                absolute
                left-3
                top-3
                text-yellow-500
                "

                size={20}

              />



              <input

                type="password"

                value={password}

                onChange={(e)=>setPassword(e.target.value)}

                placeholder="********"

                className="
                w-full
                bg-white/5
                border
                border-white/10
                rounded-xl
                py-3
                pl-11
                text-white
                outline-none
                focus:border-yellow-500
                "

                required

              />


            </div>


          </div>








          {erro && (

            <div
              className="
              bg-red-500/10
              border
              border-red-500/30
              text-red-400
              p-3
              rounded-xl
              text-sm
              "
            >

              {erro}

            </div>

          )}








          <button

            disabled={loading}

            className="
            w-full
            py-3
            rounded-xl
            bg-gradient-to-r
            from-yellow-600
            to-yellow-400
            text-black
            font-bold
            hover:opacity-90
            transition
            disabled:opacity-50
            "

          >


            {
              loading
              ?
              "A verificar..."
              :
              "ENTRAR NA ADMINISTRAÇÃO"
            }



          </button>




        </form>



      </div>




    </div>


  );


}