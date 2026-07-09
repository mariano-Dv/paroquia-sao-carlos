"use client";

import { 
  CheckCircle,
  XCircle,
  Printer,
  FileDown,
  ArrowLeft,
  User,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Hash
} from "lucide-react";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";


const API_URL = process.env.NEXT_PUBLIC_API_URL;



export default function PedidoDetalhes(){


const router = useRouter();

const params = useParams();

const id = params.id;



const [pedido,setPedido] = useState<any>(null);

const [loading,setLoading] = useState(true);

const [acao,setAcao] = useState("");





async function carregarPedido(){


try{


const resposta = await fetch(
`${API_URL}/pedidos/${id}`
);


const dados = await resposta.json();


setPedido(dados);



}catch(error){

console.log(error);


}finally{

setLoading(false);

}


}





useEffect(()=>{


if(id){

carregarPedido();

}


},[id]);







async function atualizarStatus(status:string){


try{


setAcao(status);



await fetch(
`${API_URL}/pedidos/${id}/status`,
{

method:"PATCH",

headers:{
"Content-Type":"application/json"
},


body:JSON.stringify({

status

})


}

);



await carregarPedido();



}catch(error){

console.log(error);

}finally{

setAcao("");

}


}







function imprimir(){

window.print();

}







function gerarPDF(){


window.open(
`${API_URL}/pdf/pedido/${id}`,
"_blank"
);


}







if(loading){


return(

<div className="
min-h-screen
flex
items-center
justify-center
text-[#061a3a]
font-bold
">

Carregando pedido...

</div>

);

}








if(!pedido){


return(

<div className="
min-h-screen
flex
items-center
justify-center
">

Pedido não encontrado.

</div>

);

}







return(


<div
className="
min-h-screen
bg-gray-100
p-4
md:p-8
"
>





<button

onClick={()=>router.back()}

className="
flex
items-center
gap-2
text-[#061a3a]
font-semibold
mb-6
"

>

<ArrowLeft size={20}/>

Voltar aos pedidos

</button>







<div

className="
max-w-5xl
mx-auto
bg-white
rounded-3xl
shadow-xl
overflow-hidden
"

>






<div

className="
bg-[#061a3a]
p-8
text-white
"

>


<div className="
flex
justify-between
items-center
flex-wrap
gap-4
">





<div>


<h1 className="
text-3xl
font-bold
">

Pedido de {pedido.tipo}

</h1>



<p className="
text-yellow-400
mt-2
">

Paróquia São Carlos Lwanga

</p>



</div>






<div

className="
px-5
py-2
rounded-full
bg-yellow-500
text-[#061a3a]
font-bold
"

>

{pedido.status}

</div>





</div>


</div>

<div className="p-8">





<h2 className="
text-xl
font-bold
text-[#061a3a]
mb-6
">

Dados completos do solicitante

</h2>







<div className="
grid
md:grid-cols-2
gap-5
">







<Info
icon={<Hash/>}
titulo="Número do pedido"
valor={pedido.id}
/>






<Info
icon={<Calendar/>}
titulo="Data do pedido"
valor={
pedido.createdAt
?
new Date(pedido.createdAt)
.toLocaleDateString()
:
"-"
}
/>







<Info
icon={<User/>}
titulo="Nome completo"
valor={pedido.nomeCompleto}
/>







<Info
icon={<Calendar/>}
titulo="Data de nascimento"
valor={
pedido.dataNascimento
?
new Date(pedido.dataNascimento)
.toLocaleDateString()
:
"-"
}
/>








<Info
icon={<User/>}
titulo="Nome do pai"
valor={pedido.nomePai || "-"}
/>







<Info
icon={<User/>}
titulo="Nome da mãe"
valor={pedido.nomeMae || "-"}
/>







<Info
icon={<User/>}
titulo="Sexo"
valor={pedido.sexo || "-"}
/>








<Info
icon={<Phone/>}
titulo="Telefone"
valor={pedido.telefone || "-"}
/>







<Info
icon={<Mail/>}
titulo="Email"
valor={pedido.email || "-"}
/>







<Info
icon={<MapPin/>}
titulo="Endereço"
valor={pedido.endereco || "-"}
/>





</div>









<div className="
mt-10
border-t
pt-8
">



<h2 className="
text-xl
font-bold
text-[#061a3a]
mb-4
">

Observações

</h2>




<p className="
text-gray-600
leading-relaxed
">

{
pedido.observacao ||
"Sem observações adicionais."
}

</p>



</div>









<div className="
mt-10
flex
flex-wrap
gap-4
">







<button

onClick={()=>atualizarStatus("APROVADO")}

disabled={!!acao}

className="
flex
items-center
gap-2
bg-green-600
text-white
px-5
py-3
rounded-xl
font-bold
hover:bg-green-700
"

>


<CheckCircle size={20}/>


{
acao==="APROVADO"
?
"Aprovando..."
:
"Aprovar pedido"
}


</button>









<button

onClick={()=>atualizarStatus("CANCELADO")}

disabled={!!acao}

className="
flex
items-center
gap-2
bg-red-600
text-white
px-5
py-3
rounded-xl
font-bold
hover:bg-red-700
"

>


<XCircle size={20}/>


Rejeitar


</button>









<button

onClick={imprimir}

className="
flex
items-center
gap-2
bg-gray-800
text-white
px-5
py-3
rounded-xl
font-bold
"

>


<Printer size={20}/>


Imprimir ficha


</button>









<button

onClick={gerarPDF}

className="
flex
items-center
gap-2
bg-yellow-500
text-[#061a3a]
px-5
py-3
rounded-xl
font-bold
"

>


<FileDown size={20}/>


Gerar PDF oficial


</button>






</div>






</div>






</div>







</div>


);


}









function Info({
icon,
titulo,
valor
}:any){


return(

<div

className="
flex
gap-4
items-start
bg-gray-50
p-4
rounded-xl
"

>


<div className="
text-yellow-600
">

{icon}

</div>




<div>


<p className="
text-xs
text-gray-500
">

{titulo}

</p>



<p className="
font-semibold
text-[#061a3a]
break-words
">

{valor}

</p>



</div>


</div>


);


}