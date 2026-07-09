"use client";

import { useEffect, useState } from "react";

import {
  Search,
  Eye,
  Trash2,
  X,
  FileText,
  CalendarDays,
  CheckCircle,
  Clock,
  XCircle
} from "lucide-react";



const API_URL = process.env.NEXT_PUBLIC_API_URL;



interface Pedido {


  id:string;

  tipo:string;

  createdAt:string;

  status:string;

  observacao?:string;

  nomeCompleto:string;

  telefone?:string;

  email?:string;

}





export default function MeusPedidosPage(){


  const [pedidos,setPedidos] = useState<Pedido[]>([]);


  const [user,setUser] = useState<any>(null);


  const [pesquisa,setPesquisa] = useState("");


  const [filtro,setFiltro] = useState("Todos");


  const [pedidoSelecionado,setPedidoSelecionado] = useState<Pedido|null>(null);


  const [pedidoRemover,setPedidoRemover] = useState<Pedido|null>(null);


  const [carregando,setCarregando] = useState(true);









  useEffect(()=>{


    const usuario = localStorage.getItem("user");


    if(usuario){


      const dados = JSON.parse(usuario);


      setUser(dados);


      carregarPedidos(dados.id);


    }


  },[]);









  async function carregarPedidos(userId:string){


    try{


      setCarregando(true);



      const resposta = await fetch(

        `${API_URL}/pedidos/meus/${userId}`

      );



      const dados = await resposta.json();



      setPedidos(dados);



    }catch(error){


      console.log(error);


    }finally{


      setCarregando(false);


    }


  }









  async function removerPedido(){


    if(!pedidoRemover || !user)

      return;





    try{


      await fetch(

        `${API_URL}/pedidos/${pedidoRemover.id}/remover-usuario/${user.id}`,

        {

          method:"PATCH"

        }

      );



      setPedidos(

        pedidos.filter(

          item=>item.id !== pedidoRemover.id

        )

      );



      setPedidoRemover(null);



    }catch(error){


      console.log(error);


    }


  }









  function formatarData(data:string){


    return new Date(data).toLocaleDateString("pt-PT");


  }









  function nomeStatus(status:string){


    if(status==="APROVADO")

      return "Aprovado";


    if(status==="CANCELADO")

      return "Recusado";


    return "Em análise";


  }









  function corEstado(status:string){


    if(status==="APROVADO")

      return "text-green-600 bg-green-100";


    if(status==="CANCELADO")

      return "text-red-600 bg-red-100";


    return "text-yellow-700 bg-yellow-100";


  }









  const pedidosFiltrados = pedidos.filter((pedido)=>{


    const nome = pedido.tipo
      .toLowerCase()
      .includes(
        pesquisa.toLowerCase()
      );



    const estado =


      filtro==="Todos"

      ||

      nomeStatus(pedido.status)===filtro;



    return nome && estado;



  });









return (

<div className="min-h-screen bg-gray-100 p-5 md:p-10">


<div className="max-w-5xl mx-auto">



<div className="bg-[#061a3a] rounded-3xl p-6 text-white shadow-xl mb-8">


<h1 className="text-3xl font-bold">

Meus Pedidos

</h1>



<p className="text-gray-300 mt-2">

Consulte os pedidos enviados à secretaria paroquial.

</p>


</div>









<div className="bg-white rounded-2xl shadow-md p-5 mb-6">


<div className="flex flex-col md:flex-row gap-4">



<div className="flex-1 relative">


<Search

className="absolute left-3 top-3 text-gray-400"

size={20}

/>



<input

value={pesquisa}

onChange={(e)=>setPesquisa(e.target.value)}

placeholder="Pesquisar pedido..."

className="w-full border rounded-xl py-3 pl-10 px-4 outline-none"

/>


</div>





<select

value={filtro}

onChange={(e)=>setFiltro(e.target.value)}

className="border rounded-xl px-4 py-3"

>


<option>Todos</option>

<option>Em análise</option>

<option>Aprovado</option>

<option>Recusado</option>


</select>


</div>


</div>









{carregando ? (


<div className="bg-white p-10 rounded-2xl text-center">

Carregando pedidos...

</div>


)

:

pedidosFiltrados.length===0 ? (


<div className="bg-white rounded-2xl p-10 text-center">


<FileText

size={50}

className="mx-auto text-gray-400 mb-4"

/>


<p className="text-gray-500">

Nenhum pedido encontrado.

</p>


</div>


)

:

(

<div className="space-y-5">


{

pedidosFiltrados.map((pedido)=>(


<div

key={pedido.id}

className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row justify-between gap-5"

>


<div>


<h2 className="text-xl font-bold text-[#061a3a]">

{pedido.tipo}

</h2>



<div className="flex items-center gap-2 text-gray-500 mt-2">

<CalendarDays size={18}/>

{formatarData(pedido.createdAt)}

</div>





<span

className={`inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full text-sm font-semibold ${corEstado(pedido.status)}`}

>


{

pedido.status==="APROVADO"

&& <CheckCircle size={16}/>

}



{

pedido.status==="CANCELADO"

&& <XCircle size={16}/>

}



{

pedido.status!=="APROVADO"

&& pedido.status!=="CANCELADO"

&& <Clock size={16}/>

}



{nomeStatus(pedido.status)}


</span>


</div>









<div className="flex gap-3">


<button

onClick={()=>setPedidoSelecionado(pedido)}

className="flex items-center gap-2 bg-[#061a3a] text-white px-4 py-2 rounded-xl"

>


<Eye size={18}/>

Detalhes


</button>





<button

onClick={()=>setPedidoRemover(pedido)}

className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl"

>


<Trash2 size={18}/>

Remover


</button>



</div>




</div>


))


}


</div>

)

}









{pedidoSelecionado && (


<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-5 z-50">


<div className="bg-white rounded-3xl max-w-md w-full p-6">


<div className="flex justify-between mb-5">


<h2 className="text-xl font-bold text-[#061a3a]">

Detalhes do Pedido

</h2>



<button onClick={()=>setPedidoSelecionado(null)}>

<X/>

</button>


</div>



<p>

<strong>Tipo:</strong> {pedidoSelecionado.tipo}

</p>



<p className="mt-2">

<strong>Nome:</strong> {pedidoSelecionado.nomeCompleto}

</p>



<p className="mt-2">

<strong>Status:</strong> {nomeStatus(pedidoSelecionado.status)}

</p>



<p className="mt-2">

<strong>Observação:</strong>

{" "}

{pedidoSelecionado.observacao || "Sem observação"}

</p>



</div>

</div>


)}









{pedidoRemover && (


<div className="fixed inset-0 bg-black/50 flex items-center-justify-center p-5 z-50">


<div className="bg-white rounded-3xl max-w-md w-full p-6 text-center">


<h2 className="text-xl font-bold text-[#061a3a] mb-4">

Remover pedido?

</h2>



<p className="text-gray-600 mb-6">

Este pedido desaparecerá apenas da sua lista.
O histórico da paróquia continuará guardado.

</p>



<div className="flex gap-3 justify-center">


<button

onClick={()=>setPedidoRemover(null)}

className="px-5 py-2 rounded-xl bg-gray-200"

>

Cancelar

</button>



<button

onClick={removerPedido}

className="px-5 py-2 rounded-xl bg-red-500 text-white"

>

Remover

</button>


</div>


</div>

</div>


)}



</div>

</div>

);


}