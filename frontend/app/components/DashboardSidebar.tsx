"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  FilePlus,
  ClipboardList,
  User,
  LogOut,
  LayoutDashboard
} from "lucide-react";

import { useRouter } from "next/navigation";



export default function DashboardSidebar() {


  const router = useRouter();


  const [user,setUser] = useState<any>(null);




  useEffect(()=>{


    const savedUser = localStorage.getItem("user");


    if(savedUser){

      setUser(JSON.parse(savedUser));

    }


  },[]);







  function handleLogout(){


    localStorage.removeItem("token");

    localStorage.removeItem("user");


    router.push("/login");


  }







return (


<aside className="
w-full
md:w-72
min-h-[calc(100vh-80px)]
bg-[#061a3a]
p-5
flex
flex-col
justify-between
">





<div>




{/* PERFIL */}


<div className="
bg-white/10
rounded-2xl
p-5
border
border-white/10
mb-6
">


<div className="
w-16
h-16
rounded-full
bg-yellow-400
flex
items-center
justify-center
text-[#061a3a]
text-2xl
font-bold
mx-auto
mb-4
">


{user?.nome
?
user.nome.charAt(0).toUpperCase()
:
"M"
}


</div>




<h2 className="
text-white
text-center
font-semibold
">


{user?.nome || "Membro"}


</h2>





<p className="
text-gray-300
text-sm
text-center
mt-1
break-all
">


{user?.email || ""}


</p>


</div>









{/* MENU */}


<nav className="space-y-3">







<Link

href="/dashboard"

className="
flex
items-center
gap-3
text-white
px-4
py-3
rounded-xl
hover:bg-yellow-400
hover:text-[#061a3a]
transition
"

>


<LayoutDashboard size={20}/>


Painel


</Link>









<Link

href="/dashboard/pedidos"

className="
flex
items-center
gap-3
text-white
px-4
py-3
rounded-xl
hover:bg-yellow-400
hover:text-[#061a3a]
transition
"

>


<FilePlus size={20}/>


Fazer Pedido


</Link>









{/* MEUS PEDIDOS CORRIGIDO */}


<Link

href="/dashboard/meus-pedidos"

className="
flex
items-center
gap-3
text-white
px-4
py-3
rounded-xl
hover:bg-yellow-400
hover:text-[#061a3a]
transition
"

>


<ClipboardList size={20}/>


Meus Pedidos


</Link>









{/* MEUS DADOS */}


<Link

href="/dashboard/meus-dados"

className="
flex
items-center
gap-3
text-white
px-4
py-3
rounded-xl
hover:bg-yellow-400
hover:text-[#061a3a]
transition
"

>


<User size={20}/>


Meus Dados


</Link>









<button

onClick={handleLogout}

className="
w-full
flex
items-center
gap-3
text-white
px-4
py-3
rounded-xl
hover:bg-red-500
transition
"

>


<LogOut size={20}/>


Sair


</button>





</nav>





</div>










{/* FRASE BÍBLICA */}



<div className="
mt-8
bg-gradient-to-br
from-yellow-500/20
to-transparent
border
border-yellow-400/30
rounded-2xl
p-5
text-center
">


<p className="
text-yellow-400
text-2xl
mb-3
">

🙏

</p>




<p className="
text-white
italic
text-sm
leading-relaxed
">


"Tudo posso naquele
que me fortalece."


</p>




<p className="
text-yellow-400
text-xs
mt-3
">


Filipenses 4:13


</p>



</div>






</aside>


);


}