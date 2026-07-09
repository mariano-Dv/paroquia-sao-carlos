"use client";


import {
  Droplets,
  Wine,
  Flame,
  BookOpen
} from "lucide-react";

import { useRouter } from "next/navigation";



interface PedidoCardProps {

  titulo: string;

  descricao: string;

  tipo:
    | "batismo"
    | "comunhao"
    | "crisma"
    | "catequese";

}





export default function PedidoCard({

  titulo,
  descricao,
  tipo

}: PedidoCardProps){



const router = useRouter();





const configuracoes = {


  batismo:{

    cor:
    "bg-blue-100 text-blue-600",

    icone:
    <Droplets size={40}/>,

    rota:
    "/pedido/batismo"

  },





  comunhao:{

    cor:
    "bg-purple-100 text-purple-600",

    icone:
    <Wine size={40}/>,

    rota:
    "/pedido/primeira-comunhao"

  },





  crisma:{

    cor:
    "bg-pink-100 text-pink-600",

    icone:
    <Flame size={40}/>,

    rota:
    "/pedido/crisma"

  },





  catequese:{

    cor:
    "bg-green-100 text-green-600",

    icone:
    <BookOpen size={40}/>,

    rota:
    "/pedido/catequese"

  }



};





const config = configuracoes[tipo];







return (


<div

className="
w-full
bg-white
rounded-2xl
border
border-gray-100
shadow-md
p-5
sm:p-6
flex
flex-col
justify-between
transition
duration-300
hover:shadow-xl
hover:-translate-y-1
"

>






<div>



{/* ÍCONE */}

<div

className={`
w-14
h-14
sm:w-16
sm:h-16
rounded-xl
flex
items-center
justify-center
mb-5
${config.cor}
`}

>

{config.icone}

</div>








<h2

className="
text-lg
sm:text-xl
font-bold
text-[#061a3a]
"

>

{titulo}

</h2>








<p

className="
mt-3
text-sm
sm:text-base
text-gray-600
leading-relaxed
"

>

{descricao}

</p>




</div>









{/* BOTÃO */}


<button


onClick={()=>router.push(config.rota)}



className="
mt-6
w-full
bg-gradient-to-r
from-yellow-600
to-yellow-400
text-white
font-bold
py-3
rounded-xl
transition
duration-300
hover:opacity-90
active:scale-95
"


>


Solicitar


</button>







</div>


);


}