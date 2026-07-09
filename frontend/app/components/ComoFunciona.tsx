"use client";


import {
  Search,
  FileText,
  Send,
  PhoneCall
} from "lucide-react";



export default function ComoFunciona(){


  const etapas = [

    {
      numero:"01",
      titulo:"Escolha o serviço",
      descricao:
      "Selecione o pedido paroquial que deseja realizar.",
      icon:<Search size={32}/>,
      cor:"bg-blue-100 text-blue-600"
    },


    {
      numero:"02",
      titulo:"Preencha os dados",
      descricao:
      "Informe os dados solicitados no formulário.",
      icon:<FileText size={32}/>,
      cor:"bg-purple-100 text-purple-600"
    },


    {
      numero:"03",
      titulo:"Envie o pedido",
      descricao:
      "Revise as informações e envie o seu pedido.",
      icon:<Send size={32}/>,
      cor:"bg-green-100 text-green-600"
    },


    {
      numero:"04",
      titulo:"Aguarde contacto",
      descricao:
      "Nossa equipa entrará em contacto em breve.",
      icon:<PhoneCall size={32}/>,
      cor:"bg-yellow-100 text-yellow-600"
    }


  ];





return (

<section className="
mt-12
border-t
pt-10
">



<h2 className="
text-2xl
font-bold
text-[#061a3a]
mb-2
">

Como funciona?

</h2>



<p className="
text-gray-600
mb-8
">

Veja como solicitar um serviço paroquial.

</p>





<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-6
">





{
etapas.map((etapa)=>(


<div
key={etapa.numero}
className="
bg-white
border
border-gray-100
rounded-2xl
p-5
shadow-sm
hover:shadow-lg
transition
"
>




<div className="
flex
items-center
justify-between
mb-4
">


<div className={`
w-14
h-14
rounded-xl
flex
items-center
justify-center
${etapa.cor}
`}>

{etapa.icon}

</div>



<span className="
text-yellow-500
font-bold
text-lg
">

{etapa.numero}

</span>


</div>





<h3 className="
font-bold
text-[#061a3a]
text-lg
">

{etapa.titulo}

</h3>



<p className="
text-gray-600
text-sm
mt-2
leading-relaxed
">

{etapa.descricao}

</p>



</div>


))

}





</div>



</section>

);


}