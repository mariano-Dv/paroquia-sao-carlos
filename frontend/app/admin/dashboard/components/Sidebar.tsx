"use client";

import {
  LayoutDashboard,
  FileText,
  Users,
  Newspaper,
  Image,
  ShieldCheck,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


const menu = [
  {
    nome: "Dashboard",
    icon: LayoutDashboard,
    rota: "/admin/dashboard",
  },
  {
    nome: "Pedidos",
    icon: FileText,
    rota: "/admin/pedidos",
  },
 
  {
    nome: "Notícias",
    icon: Newspaper,
    rota: "/admin/noticias",
  },
  {
    nome: "Galeria",
    icon: Image,
    rota: "/dashboard/galeria",
  },
  
 
];



export default function Sidebar(){


  const router = useRouter();


  const [aberto,setAberto] = useState(false);



  function sair(){

    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    router.push("/admin/login");

  }




  return (

    <>


    {/* BOTÃO MOBILE */}


    <button

      onClick={()=>setAberto(true)}

      className="
      md:hidden
      fixed
      top-4
      left-4
      z-[60]
      bg-[#061a3a]
      text-white
      p-3
      rounded-xl
      shadow-lg
      "

    >

      <Menu size={24}/>

    </button>





    {/* FUNDO MOBILE */}


    {
      aberto && (

        <div

        onClick={()=>setAberto(false)}

        className="
        md:hidden
        fixed
        inset-0
        bg-black/50
        z-40
        "

        />

      )
    }







    <aside

    className={`

      fixed
      left-0
      top-0
      h-screen
      w-72
      bg-[#061a3a]
      text-white
      shadow-xl
      flex
      flex-col
      z-50

      transform
      transition-transform
      duration-300

      ${
        aberto
        ?
        "translate-x-0"
        :
        "-translate-x-full md:translate-x-0"
      }

    `}

    >





      {/* TOPO MOBILE */}


      <div

      className="
      md:hidden
      absolute
      right-4
      top-4
      "

      >

        <button

        onClick={()=>setAberto(false)}

        >

          <X size={25}/>

        </button>


      </div>







      {/* LOGO */}


      <div

      className="
      h-24
      flex
      items-center
      gap-4
      px-6
      border-b
      border-white/10
      "

      >


        <div

        className="
        w-14
        h-14
        rounded-full
        overflow-hidden
        border-2
        border-yellow-500
        flex-shrink-0
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





        <div>

          <h2

          className="
          font-bold
          text-lg
          "

          >

            São Carlos Lwanga

          </h2>



          <p

          className="
          text-xs
          text-yellow-400
          "

          >

            Administração

          </p>


        </div>


      </div>









      {/* MENU */}


      <nav

      className="
      flex-1
      px-4
      py-6
      space-y-2
      overflow-y-auto
      "

      >


      {
        menu.map((item,index)=>{


          const Icon = item.icon;


          return (

          <Link

          key={index}

          href={item.rota}

          onClick={()=>setAberto(false)}

          className="
          flex
          items-center
          gap-4
          px-4
          py-3
          rounded-xl
          text-gray-200
          hover:bg-yellow-500
          hover:text-[#061a3a]
          transition
          font-medium
          "

          >

            <Icon size={21}/>


            <span>

              {item.nome}

            </span>


          </Link>


          );


        })
      }


      </nav>









      {/* SAIR */}


      <div

      className="
      p-4
      border-t
      border-white/10
      "

      >


        <button

        onClick={sair}

        className="
        w-full
        flex
        items-center
        gap-4
        px-4
        py-3
        rounded-xl
        text-red-300
        hover:bg-red-500/20
        transition
        "

        >

          <LogOut size={21}/>


          Sair


        </button>


      </div>





    </aside>


    </>

  );


}