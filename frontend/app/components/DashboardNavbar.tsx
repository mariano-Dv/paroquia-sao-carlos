"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { UserCircle, Bell, Check } from "lucide-react";


const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function DashboardNavbar() {


  const [user, setUser] = useState<any>(null);

  const [notificacoes, setNotificacoes] = useState<any[]>([]);

  const [totalNaoLidas, setTotalNaoLidas] = useState(0);

  const [mostrarNotificacoes, setMostrarNotificacoes] = useState(false);





  useEffect(() => {


    const savedUser = localStorage.getItem("user");


    if(savedUser){

      const usuario = JSON.parse(savedUser);

      setUser(usuario);

      carregarNotificacoes(usuario.id);

    }


  }, []);








  async function carregarNotificacoes(userId:string){


    try{


      const resposta = await fetch(

        `${API_URL}/notificacoes/usuario/${userId}`

      );


      const dados = await resposta.json();


      setNotificacoes(dados);



      const pendentes = dados.filter(

        (item:any)=>!item.lida

      ).length;


      setTotalNaoLidas(pendentes);



    }catch(error){

      console.log(error);

    }


  }








  async function marcarComoLida(id:string){


    try{


      await fetch(

        `${API_URL}/notificacoes/${id}/lida`,

        {

          method:"PATCH"

        }

      );



      if(user){

        carregarNotificacoes(user.id);

      }



    }catch(error){

      console.log(error);

    }


  }








  return (

<header className="w-full z-50">


<div className="
backdrop-blur-md
bg-[#061a3a]/90
border-b
border-white/10
shadow-lg
">


<div className="
max-w-7xl
mx-auto
flex
items-center
justify-between
px-6
py-3
">





{/* LOGO */}


<Link

href="/"

className="
flex
items-center
gap-4
"

>


<div className="
w-14
h-14
rounded-full
overflow-hidden
border-2
border-yellow-400
shadow-lg
">


<img

src="/images/logo.png"

alt="Logo São Carlos Lwanga"

className="
w-full
h-full
object-cover
"

/>


</div>




<div className="leading-tight">


<div className="
text-xs
text-gray-300
tracking-widest
">

PARÓQUIA

</div>



<div className="
text-yellow-400
font-bold
text-lg
">

São Carlos

</div>



<div className="
text-white
text-sm
">

Lwanga

</div>


</div>


</Link>









{/* LINKS */}


<nav className="
hidden
md:flex
items-center
gap-6
text-sm
text-white
">


{[
["Início","/"],
["Sobre","/sobre"],
["Missão","/missao"],
["Galeria","/galeria"],
["Notícias","/noticias"],
["Contato","/contato"]

].map(([texto,url])=>(

<Link

key={url}

href={url}

className="
hover:text-yellow-400
transition
"

>

{texto}

</Link>


))}


</nav>









{/* ÁREA DIREITA */}


<div className="
flex
items-center
gap-5
">







{/* SINO */}


<div className="relative">


<button

onClick={()=>setMostrarNotificacoes(!mostrarNotificacoes)}

className="
relative
w-12
h-12
rounded-full
bg-white/10
hover:bg-yellow-400/20
flex
items-center
justify-center
transition
"

>


<Bell

size={26}

className="text-yellow-400"

/>



{totalNaoLidas > 0 && (


<span

className="
absolute
-top-1
-right-1
bg-red-600
text-white
text-xs
font-bold
w-6
h-6
rounded-full
flex
items-center
justify-center
"

>

{totalNaoLidas}

</span>


)}



</button>









{mostrarNotificacoes && (


<div

className="
absolute
right-0
mt-3
w-80
bg-white
rounded-2xl
shadow-2xl
overflow-hidden
z-50
"

>


<div className="
bg-[#061a3a]
text-white
p-4
font-bold
">

Notificações

</div>






<div className="
max-h-96
overflow-y-auto
">


{
notificacoes.length === 0 ?


(

<p className="
p-5
text-gray-500
text-sm
">

Nenhuma notificação

</p>


)


:


notificacoes.map((item)=>(


<div

key={item.id}

onClick={()=>marcarComoLida(item.id)}

className={`
p-4
border-b
cursor-pointer
hover:bg-gray-50
${!item.lida ? "bg-yellow-50" : ""}
`}

>


<div className="
flex
justify-between
gap-2
">


<h3 className="
font-bold
text-[#061a3a]
text-sm
">

{item.titulo}

</h3>


{
!item.lida &&

<Check
size={18}
className="text-green-600"
/>

}


</div>



<p className="
text-xs
text-gray-600
mt-2
">

{item.mensagem}

</p>



</div>


))


}


</div>



</div>


)}



</div>









{/* UTILIZADOR */}


<div className="
flex
items-center
gap-3
">


<UserCircle

size={42}

className="text-yellow-400"

/>



<div className="leading-tight">


<p className="
text-xs
text-gray-300
">

Olá 👋

</p>



<p className="
text-white
font-semibold
">

{user?.nome || "Membro"}

</p>



<p className="
text-xs
text-gray-300
">

{user?.email || ""}

</p>


</div>



</div>







</div>





</div>


</div>


</header>


);


}