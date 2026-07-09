"use client";


import { useEffect, useState } from "react";

import {
  Upload,
  Trash2,
  Image as ImageIcon,
  X
} from "lucide-react";



interface Galeria {

  id:string;

  titulo:string | null;

  imagemUrl:string;

  createdAt:string;

}




export default function GaleriaPage(){



  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";



  const [imagens,setImagens] = useState<Galeria[]>([]);

  const [titulo,setTitulo] = useState("");

  const [imagem,setImagem] = useState<File | null>(null);

  const [preview,setPreview] = useState("");

  const [carregando,setCarregando] = useState(false);

  const [mostrarConfirmacao,setMostrarConfirmacao] = useState(false);

  const [imagemExcluir,setImagemExcluir] = useState<string | null>(null);






  // ================================
  // BUSCAR GALERIA
  // ================================


  async function carregarGaleria(){


    try{


      const resposta = await fetch(
        `${API}/galeria`
      );


      if(!resposta.ok){

        throw new Error(
          "Erro ao buscar galeria"
        );

      }



      const dados = await resposta.json();


      setImagens(dados);



    }catch(error){


      console.log(error);


    }


  }






  useEffect(()=>{


    carregarGaleria();


  },[]);









  // ================================
  // ESCOLHER IMAGEM
  // ================================


  function selecionarImagem(
    e:React.ChangeEvent<HTMLInputElement>
  ){



    const arquivo = e.target.files?.[0];



    if(!arquivo)
      return;




    setImagem(arquivo);



    setPreview(
      URL.createObjectURL(arquivo)
    );


  }









  // ================================
  // ENVIAR IMAGEM
  // ================================


  async function enviarImagem(){



    if(!imagem){


      alert(
        "Selecione uma imagem primeiro"
      );


      return;


    }





    setCarregando(true);





    const formulario = new FormData();




    formulario.append(
      "imagem",
      imagem
    );



    formulario.append(
      "titulo",
      titulo
    );






    try{


      const resposta = await fetch(

        `${API}/galeria`,

        {

          method:"POST",

          body:formulario

        }

      );






      if(!resposta.ok){


        throw new Error(
          "Erro ao enviar imagem"
        );


      }







      setTitulo("");

      setImagem(null);

      setPreview("");




      await carregarGaleria();




      alert(
        "Imagem adicionada com sucesso!"
      );






    }catch(error){


      console.log(error);


      alert(
        "Não foi possível adicionar a imagem"
      );


    }



    setCarregando(false);



  }












  // ================================
  // REMOVER IMAGEM
  // ================================


  async function removerImagem(){



    if(!imagemExcluir)
      return;




    try{


      const resposta = await fetch(

        `${API}/galeria/${imagemExcluir}`,

        {

          method:"DELETE"

        }

      );



      if(!resposta.ok){


        throw new Error(
          "Erro ao remover"
        );


      }





      setImagemExcluir(null);

      setMostrarConfirmacao(false);



      carregarGaleria();




    }catch(error){


      console.log(error);


    }


  }










return (


<div className="min-h-screen bg-gray-100 p-6">



<div className="max-w-6xl mx-auto">





<div className="
bg-[#061a3a]
rounded-3xl
p-6
text-white
shadow-xl
mb-8
">


<h1 className="
text-3xl
font-bold
">

Galeria Paroquial

</h1>



<p className="
text-gray-300
mt-2
">

Gerencie as imagens da paróquia.

</p>


</div>









<div className="
bg-white
rounded-3xl
p-6
shadow-md
mb-8
">



<h2 className="
text-xl
font-bold
text-[#061a3a]
mb-5
">

Adicionar nova imagem

</h2>







<input


type="text"


placeholder="Descrição da imagem"


value={titulo}


onChange={(e)=>setTitulo(e.target.value)}


className="
w-full
border
rounded-xl
p-3
mb-4
"

/>








<label className="
border-2
border-dashed
rounded-2xl
p-6
flex
flex-col
items-center
justify-center
cursor-pointer
">


<Upload
size={35}
className="text-[#061a3a]"
/>



<p className="mt-3 text-gray-600">

Escolher imagem

</p>




<input

type="file"

accept="image/*"

onChange={selecionarImagem}

className="hidden"

/>



</label>









{preview && (

<img

src={preview}

className="
mt-5
w-full
max-h-72
object-cover
rounded-2xl
"

/>

)}








<button

type="button"


onClick={(e)=>{


e.preventDefault();

enviarImagem();


}}


disabled={carregando}


className="
mt-5
bg-yellow-400
text-[#061a3a]
font-bold
px-6
py-3
rounded-xl
flex
items-center
gap-2
hover:bg-yellow-500
"


>


<ImageIcon size={20}/>


{carregando
?
"Enviando..."
:
"Adicionar imagem"
}



</button>





</div>









<div className="
grid
md:grid-cols-3
gap-6
">



{

imagens.map((item)=>(


<div

key={item.id}

className="
bg-white
rounded-3xl
overflow-hidden
shadow-md
"

>


<img

src={`${API}/${item.imagemUrl}`}

className="
w-full
h-52
object-cover
"

/>





<div className="p-5">



<h3 className="
font-bold
text-[#061a3a]
">

{item.titulo || "Sem descrição"}

</h3>





<button


type="button"


onClick={()=>{


setImagemExcluir(item.id);

setMostrarConfirmacao(true);


}}


className="
mt-4
bg-red-500
text-white
px-4
py-2
rounded-xl
flex
items-center
gap-2
"

>


<Trash2 size={18}/>

Excluir


</button>



</div>


</div>


))


}



</div>









</div>









{

mostrarConfirmacao && (


<div className="
fixed
inset-0
bg-black/50
flex
items-center
justify-center
p-5
z-50
">



<div className="
bg-white
rounded-3xl
p-6
max-w-md
w-full
text-center
">



<button

type="button"

className="float-right"

onClick={()=>setMostrarConfirmacao(false)}

>

<X/>

</button>




<h2 className="
text-xl
font-bold
text-[#061a3a]
mb-4
">

Excluir imagem?

</h2>



<p className="
text-gray-600
mb-6
">

A imagem será removida da galeria.

</p>





<div className="
flex
justify-center
gap-4
">


<button

type="button"

onClick={()=>setMostrarConfirmacao(false)}

className="
px-5
py-2
bg-gray-200
rounded-xl
"

>

Cancelar

</button>




<button

type="button"

onClick={removerImagem}

className="
px-5
py-2
bg-red-500
text-white
rounded-xl
"

>

Excluir

</button>



</div>



</div>


</div>


)


}




</div>


);


}