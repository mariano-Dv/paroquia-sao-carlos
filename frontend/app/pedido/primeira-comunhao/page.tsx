"use client";

import { useState } from "react";


const API_URL = process.env.NEXT_PUBLIC_API_URL;


export default function PrimeiraComunhaoPage() {


  const [form, setForm] = useState({

    nomeCompleto: "",
    dataNascimento: "",
    sexo: "",
    nomePai: "",
    nomeMae: "",
    endereco: "",
    telefone: "",
    email: "",
    observacao: ""

  });



  const [loading,setLoading] = useState(false);

  const [mensagem,setMensagem] = useState("");

  const [erro,setErro] = useState("");





  function atualizarCampo(
    campo:string,
    valor:string
  ){

    setForm({

      ...form,

      [campo]:valor

    });

  }








  async function enviarPedido(
    e:React.FormEvent
  ){

    e.preventDefault();


    setLoading(true);

    setMensagem("");

    setErro("");



    try{


      const token =
      localStorage.getItem("token");



      const usuarioSalvo =
      localStorage.getItem("user");



      if(!usuarioSalvo){

        throw new Error(
          "Usuário não autenticado."
        );

      }



      const usuario =
      JSON.parse(usuarioSalvo);





      const resposta = await fetch(

        `${API_URL}/pedidos`,

        {

          method:"POST",


          headers:{

            "Content-Type":"application/json",

            Authorization:
            `Bearer ${token}`

          },



          body:JSON.stringify({

            tipo:"PRIMEIRA_COMUNHAO",

            userId:usuario.id,

            ...form

          })


        }

      );






      const data =
      await resposta.json();





      if(!resposta.ok){

        throw new Error(

          data.message ||
          "Erro ao enviar pedido"

        );

      }






      setMensagem(

        "Pedido de Primeira Comunhão enviado com sucesso. A Secretaria Paroquial irá analisar."

      );





      setForm({

        nomeCompleto:"",
        dataNascimento:"",
        sexo:"",
        nomePai:"",
        nomeMae:"",
        endereco:"",
        telefone:"",
        email:"",
        observacao:""

      });



    }


    catch(error:any){

      setErro(
        error.message
      );

    }


    finally{

      setLoading(false);

    }


  }









return (

<main

className="
min-h-screen
bg-[#050B16]
p-6
"


>


<div

className="
max-w-3xl
mx-auto
bg-white
rounded-3xl
shadow-xl
p-6
sm:p-10
"


>


<h1

className="
text-3xl
font-bold
text-[#061a3a]
mb-3
"

>

Pedido de Primeira Comunhão

</h1>



<p

className="
text-gray-600
mb-8
"

>

Preencha os dados do catequizando para solicitar a Primeira Comunhão.

</p>







<form

onSubmit={enviarPedido}

className="
space-y-5
"

>





<input

required

placeholder="Nome completo do catequizando"

value={form.nomeCompleto}

onChange={(e)=>
atualizarCampo(
"nomeCompleto",
e.target.value
)}

className="
w-full
border
rounded-xl
p-3
"

/>






<input

required

type="date"

value={form.dataNascimento}

onChange={(e)=>
atualizarCampo(
"dataNascimento",
e.target.value
)}

className="
w-full
border
rounded-xl
p-3
"

/>






<select

value={form.sexo}

onChange={(e)=>
atualizarCampo(
"sexo",
e.target.value
)}

className="
w-full
border
rounded-xl
p-3
"

>

<option value="">
Selecionar sexo
</option>


<option value="Masculino">
Masculino
</option>


<option value="Feminino">
Feminino
</option>


</select>







<input

placeholder="Nome do pai"

value={form.nomePai}

onChange={(e)=>
atualizarCampo(
"nomePai",
e.target.value
)}

className="
w-full
border
rounded-xl
p-3
"

/>






<input

placeholder="Nome da mãe"

value={form.nomeMae}

onChange={(e)=>
atualizarCampo(
"nomeMae",
e.target.value
)}

className="
w-full
border
rounded-xl
p-3
"

/>






<input

placeholder="Morada"

value={form.endereco}

onChange={(e)=>
atualizarCampo(
"endereco",
e.target.value
)}

className="
w-full
border
rounded-xl
p-3
"

/>






<input

placeholder="Telefone"

value={form.telefone}

onChange={(e)=>
atualizarCampo(
"telefone",
e.target.value
)}

className="
w-full
border
rounded-xl
p-3
"

/>







<input

type="email"

placeholder="Email"

value={form.email}

onChange={(e)=>
atualizarCampo(
"email",
e.target.value
)}

className="
w-full
border
rounded-xl
p-3
"

/>








<textarea

placeholder="Observação"

value={form.observacao}

onChange={(e)=>
atualizarCampo(
"observacao",
e.target.value
)}

className="
w-full
border
rounded-xl
p-3
h-32
"

/>








{

mensagem &&

<div

className="
bg-green-100
text-green-700
p-4
rounded-xl
"

>

{mensagem}

</div>

}







{

erro &&

<div

className="
bg-red-100
text-red-700
p-4
rounded-xl
"

>

{erro}

</div>

}








<button

disabled={loading}

className="
w-full
bg-gradient-to-r
from-yellow-600
to-yellow-400
text-white
font-bold
py-3
rounded-xl
"

>

{

loading

?

"Enviando..."

:

"Enviar Pedido"

}


</button>






</form>





</div>


</main>


);


}