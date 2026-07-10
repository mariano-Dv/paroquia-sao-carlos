"use client";

import {
  Bell,
  Search,
  UserCircle2,
} from "lucide-react";

import { useEffect, useState } from "react";


const API_URL = process.env.NEXT_PUBLIC_API_URL;



export default function Header() {


  const [adminNome, setAdminNome] = useState("Administrador");

  const [quantidadePedidos, setQuantidadePedidos] = useState(0);





  useEffect(()=>{


    const admin = localStorage.getItem("admin");


    if(admin){

      const dados = JSON.parse(admin);

      setAdminNome(dados.nome);

    }





    async function carregarPedidos(){


      try{


        const resposta = await fetch(
          `${API_URL}/pedidos`
        );


        const dados = await resposta.json();



        if(Array.isArray(dados)){


          const pendentes = dados.filter(

            (pedido:any)=>
              pedido.status === "PENDENTE"

          );


          setQuantidadePedidos(
            pendentes.length
          );


        }



      }catch(error){


        console.log(
          "Erro ao carregar pedidos",
          error
        );


      }


    }





    carregarPedidos();



  },[]);









return (

<header

className="
w-full
h-auto
min-h-20
bg-white
border-b
border-gray-200
flex
items-center
px-4
sm:px-6
lg:px-8
py-4
"

>


<div

className="
w-full
flex
flex-col
sm:flex-row
items-center
justify-between
gap-4
"

>





{/* TÍTULO */}


<div

className="
w-full
sm:w-auto
"

>


<h1

className="
text-xl
sm:text-2xl
font-bold
text-[#061a3a]
"

>

Secretaria Paroquial

</h1>



<p

className="
text-xs
sm:text-sm
text-gray-500
mt-1
"

>

Painel Administrativo • Paróquia São Carlos Lwanga

</p>


</div>










{/* ÁREA DIREITA */}


<div

className="
w-full
sm:w-auto
flex
items-center
justify-between
sm:justify-end
gap-3
"

>







{/* PESQUISA */}


<div

className="
hidden
lg:flex
relative
"

>


<Search

size={19}

className="
absolute
left-3
top-3
text-gray-400
"

/>




<input


placeholder="Pesquisar..."


className="
w-64
py-2.5
pl-10
pr-4
rounded-xl
border
border-gray-200
outline-none
text-sm
focus:border-yellow-500
"

/>



</div>










{/* NOTIFICAÇÃO */}


<button

className="
relative
w-11
h-11
rounded-full
bg-gray-100
flex
items-center
justify-center
hover:bg-gray-200
transition
"

>


<Bell size={21}/>





{

quantidadePedidos > 0 && (


<span

className="
absolute
-top-1
-right-1
min-w-5
h-5
px-1
rounded-full
bg-red-500
text-white
text-xs
flex
items-center
justify-center
font-bold
"

>

{quantidadePedidos}

</span>


)

}



</button>












{/* ADMINISTRADOR */}


<div

className="
flex
items-center
gap-2
sm:gap-3
"

>


<UserCircle2

size={40}

className="
text-yellow-600
flex-shrink-0
"

/>




<div

className="
hidden
sm:block
leading-tight
max-w-[150px]
"

>


<p

className="
font-semibold
text-[#061a3a]
truncate
"

>

{adminNome}

</p>




<p

className="
text-xs
text-gray-500
"

>

Secretaria Paroquial

</p>



</div>



</div>






</div>





</div>



</header>


);


}