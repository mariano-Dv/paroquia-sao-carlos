"use client";

import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function CrismaPage() {

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

            tipo:"CRISMA",

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

        "Pedido de Crisma enviado com sucesso. A Secretaria Paroquial irá analisar o pedido."

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
p-4
sm:p-6
"

>


<div

className="
max-w-3xl
mx-auto
bg-[#091426]
border
border-yellow-600/30
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
text-white
mb-3
"

>

Pedido de Crisma

</h1>




<p

className="
text-gray-300
mb-8
"

>

Preencha corretamente os dados para solicitar o Sacramento da Crisma.

</p>





<form

onSubmit={enviarPedido}

className="
space-y-5
"

>





<input

required

placeholder="Nome completo do crismando"

value={form.nomeCompleto}

onChange={(e)=>
atualizarCampo(
"nomeCompleto",
e.target.value
)}

className="
w-full
border
border-gray-600
rounded-xl
p-3
bg-[#0B172A]
text-white
placeholder:text-gray-400
outline-none
focus:border-yellow-500
focus:ring-2
focus:ring-yellow-500/30
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
border-gray-600
rounded-xl
p-3
bg-[#0B172A]
text-white
outline-none
focus:border-yellow-500
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
border-gray-600
rounded-xl
p-3
bg-[#0B172A]
text-white
outline-none
focus:border-yellow-500
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
)
}

className="
w-full
border
border-gray-600
rounded-xl
p-3
bg-[#0B172A]
text-white
placeholder:text-gray-400
outline-none
focus:border-yellow-500
focus:ring-2
focus:ring-yellow-500/30
"

/>





<input

placeholder="Nome da mãe"

value={form.nomeMae}

onChange={(e)=>
atualizarCampo(
"nomeMae",
e.target.value
)
}

className="
w-full
border
border-gray-600
rounded-xl
p-3
bg-[#0B172A]
text-white
placeholder:text-gray-400
outline-none
focus:border-yellow-500
focus:ring-2
focus:ring-yellow-500/30
"

/>





<input

placeholder="Morada"

value={form.endereco}

onChange={(e)=>
atualizarCampo(
"endereco",
e.target.value
)
}

className="
w-full
border
border-gray-600
rounded-xl
p-3
bg-[#0B172A]
text-white
placeholder:text-gray-400
outline-none
focus:border-yellow-500
focus:ring-2
focus:ring-yellow-500/30
"

/>





<input

placeholder="Telefone"

value={form.telefone}

onChange={(e)=>
atualizarCampo(
"telefone",
e.target.value
)
}

className="
w-full
border
border-gray-600
rounded-xl
p-3
bg-[#0B172A]
text-white
placeholder:text-gray-400
outline-none
focus:border-yellow-500
focus:ring-2
focus:ring-yellow-500/30
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
)
}

className="
w-full
border
border-gray-600
rounded-xl
p-3
bg-[#0B172A]
text-white
placeholder:text-gray-400
outline-none
focus:border-yellow-500
focus:ring-2
focus:ring-yellow-500/30
"

/>





<textarea

placeholder="Observação (ex: paróquia onde foi batizado, padrinho/madrinha, informações adicionais)"

value={form.observacao}

onChange={(e)=>
atualizarCampo(
"observacao",
e.target.value
)
}

className="
w-full
border
border-gray-600
rounded-xl
p-3
h-32
bg-[#0B172A]
text-white
placeholder:text-gray-400
outline-none
focus:border-yellow-500
focus:ring-2
focus:ring-yellow-500/30
"

/>







{

mensagem &&

<div

className="
bg-green-900/40
border
border-green-600
text-green-200
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
bg-red-900/40
border
border-red-600
text-red-200
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
text-[#061a3a]
font-bold
py-3
rounded-xl
shadow-lg
hover:opacity-90
transition
disabled:opacity-50
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