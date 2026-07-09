"use client";


import {
  Heart,
  Church
} from "lucide-react";



export default function FooterDashboard(){


return (

<footer className="
mt-12
border-t
pt-8
text-center
">


<div className="
flex
justify-center
items-center
gap-3
text-[#061a3a]
mb-3
">


<Church
size={28}
className="text-yellow-500"
/>


<h3 className="
font-bold
text-lg
">

Paróquia São Carlos Lwanga

</h3>


</div>





<p className="
text-gray-600
text-sm
max-w-xl
mx-auto
">

Acompanhe os seus pedidos paroquiais
de forma simples, segura e organizada.
Nossa equipa está sempre disponível
para servir a comunidade.

</p>





<div className="
flex
justify-center
items-center
gap-2
mt-5
text-sm
text-gray-500
">


Feito com


<Heart
size={16}
className="text-red-500"
/>


pela Paróquia São Carlos Lwanga


</div>





<p className="
text-xs
text-gray-400
mt-4
">

© {new Date().getFullYear()} Todos os direitos reservados.

</p>




</footer>

);


}