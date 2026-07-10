"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { UserCircle, Bell, Check, Menu, X } from "lucide-react";


const API_URL = process.env.NEXT_PUBLIC_API_URL;


export default function DashboardNavbar() {


  const [user, setUser] = useState<any>(null);

  const [notificacoes, setNotificacoes] = useState<any[]>([]);

  const [totalNaoLidas, setTotalNaoLidas] = useState(0);

  const [mostrarNotificacoes, setMostrarNotificacoes] = useState(false);

  const [menuAberto, setMenuAberto] = useState(false);





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








  const links = [

    ["Início","/"],

    ["Sobre","/sobre"],

    ["Missão","/missao"],

    ["Galeria","/galeria"],

    ["Notícias","/noticias"],

    ["Contato","/contato"]

  ];







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
px-4
sm:px-6
py-3
">






<div className="
flex
items-center
justify-between
gap-3
">






{/* LOGO + IDENTIDADE */}


<Link

href="/"

className="
flex
items-center
gap-3
min-w-0
"

>


<div className="
w-12
h-12
sm:w-14
sm:h-14
rounded-full
overflow-hidden
border-2
border-yellow-400
shadow-lg
flex-shrink-0
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





<div className="leading-tight min-w-0">


<div className="
text-[10px]
sm:text-xs
text-gray-300
tracking-widest
">

PARÓQUIA

</div>




<div className="
text-yellow-400
font-bold
text-base
sm:text-lg
truncate
">

São Carlos

</div>




<div className="
text-white
text-xs
sm:text-sm
">

Lwanga

</div>



</div>



</Link>


{/* MENU DESKTOP */}

<nav className="
hidden
md:flex
items-center
gap-6
text-sm
text-white
">

{

links.map(([texto,url])=>(

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

))

}

</nav>






{/* ÁREA DIREITA */}

<div className="
flex
items-center
gap-2
sm:gap-4
">






{/* SINO */}

<div className="relative">


<button

onClick={()=>setMostrarNotificacoes(!mostrarNotificacoes)}

className="
relative
w-11
h-11
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

size={24}

className="text-yellow-400"

/>



{

totalNaoLidas > 0 && (


<span

className="
absolute
-top-1
-right-1
bg-red-600
text-white
text-xs
font-bold
w-5
h-5
rounded-full
flex
items-center
justify-center
"

>

{totalNaoLidas}

</span>


)

}



</button>









{mostrarNotificacoes && (


<div

className="
absolute
right-0
mt-3
w-[300px]
sm:w-80
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
hidden
sm:flex
items-center
gap-2
max-w-[180px]
">


<UserCircle

size={38}

className="text-yellow-400 flex-shrink-0"

/>




<div className="
leading-tight
overflow-hidden
">


<p className="
text-xs
text-gray-300
">

Olá 👋

</p>



<p className="
text-white
font-semibold
truncate
">

{user?.nome || "Membro"}

</p>



<p className="
text-xs
text-gray-300
truncate
">

{user?.email || ""}

</p>



</div>


</div>










{/* BOTÃO MENU MOBILE */}


<button

onClick={()=>setMenuAberto(!menuAberto)}

className="
md:hidden
w-11
h-11
rounded-full
bg-white/10
flex
items-center
justify-center
text-yellow-400
"

>


{

menuAberto

?

<X size={26}/>

:

<Menu size={26}/>

}



</button>




</div>



</div>








{/* MENU MOBILE */}


{

menuAberto && (


<div className="
md:hidden
mt-4
bg-[#061a3a]
rounded-2xl
p-4
border
border-white/10
">


<nav className="
flex
flex-col
gap-4
text-white
">


{

links.map(([texto,url])=>(


<Link

key={url}

href={url}

onClick={()=>setMenuAberto(false)}

className="
hover:text-yellow-400
transition
"

>

{texto}

</Link>


))


}



</nav>


</div>


)


}





</div>


</div>


</header>


);


}