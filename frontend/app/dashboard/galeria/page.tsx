"use client";

import { useEffect, useState } from "react";

import {
  Upload,
  Trash2,
  Image as ImageIcon,
  X,
  Loader2
} from "lucide-react";

import { motion } from "framer-motion";


interface Galeria {

  id:string;

  titulo:string | null;

  imagemUrl:string;

  createdAt:string;

}



export default function GaleriaPage(){


const API_URL = process.env.NEXT_PUBLIC_API_URL;



const [imagens,setImagens] = useState<Galeria[]>([]);


const [titulo,setTitulo] = useState("");


const [imagem,setImagem] = useState<File | null>(null);


const [preview,setPreview] = useState("");


const [carregando,setCarregando] = useState(false);


const [mostrarConfirmacao,setMostrarConfirmacao] = useState(false);


const [imagemExcluir,setImagemExcluir] = useState<string | null>(null);






async function carregarGaleria(){


try{


const resposta = await fetch(
`${API_URL}/galeria`
);



if(!resposta.ok){

throw new Error(
"Erro ao carregar galeria"
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

`${API_URL}/galeria`,

{

method:"POST",

body:formulario

}

);




if(!resposta.ok){


throw new Error(
"Erro no envio"
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
"Erro ao adicionar imagem"
);



}finally{


setCarregando(false);


}



}









async function removerImagem(){



if(!imagemExcluir)
return;




try{


await fetch(

`${API_URL}/galeria/${imagemExcluir}`,

{

method:"DELETE"

}

);



setImagemExcluir(null);

setMostrarConfirmacao(false);



carregarGaleria();



}catch(error){


console.log(error);


}



}

return (

<div className="min-h-screen bg-[#050B16] p-6">


<div className="max-w-6xl mx-auto">





<motion.div

initial={{
opacity:0,
y:-20
}}

animate={{
opacity:1,
y:0
}}

className="
bg-gradient-to-r
from-[#061a3a]
to-[#0b2a55]
rounded-3xl
p-6
text-white
shadow-2xl
mb-8
"

>


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

Gerencie as imagens da comunidade paroquial.

</p>


</motion.div>









<div className="
bg-[#0B1628]
border
border-white/10
rounded-3xl
p-6
shadow-xl
mb-10
">



<h2 className="
text-xl
font-bold
text-white
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
bg-[#06101f]
border
border-white/20
text-white
placeholder-gray-400
rounded-xl
p-3
mb-4
outline-none
focus:border-yellow-400
"

/>








<label className="
border-2
border-dashed
border-white/20
rounded-2xl
p-6
flex
flex-col
items-center
justify-center
cursor-pointer
hover:border-yellow-400
transition
">


<Upload
size={35}
className="text-yellow-400"
/>



<p className="
mt-3
text-gray-300
">

Escolher imagem

</p>




<input

type="file"

accept="image/*"

onChange={selecionarImagem}

className="hidden"

/>



</label>








{
preview &&

<motion.img

initial={{
opacity:0
}}

animate={{
opacity:1
}}

src={preview}

className="
mt-5
w-full
max-h-72
object-cover
rounded-2xl
"

/>

}







<button


type="button"


onClick={enviarImagem}


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
transition
disabled:opacity-50
"


>


{

carregando

?

<Loader2 className="animate-spin"/>

:

<ImageIcon size={20}/>

}



{

carregando

?

"Enviando..."

:

"Adicionar imagem"

}



</button>





</div>









<h2 className="
text-xl
font-bold
text-white
mb-5
">

Imagens publicadas

</h2>









<div className="
grid
md:grid-cols-3
gap-6
">





{

imagens.map((item)=>(


<motion.div

key={item.id}


initial={{
opacity:0,
scale:0.95
}}


animate={{
opacity:1,
scale:1
}}


className="
bg-[#0B1628]
border
border-white/10
rounded-3xl
overflow-hidden
shadow-xl
"

>



<img


src={item.imagemUrl}


alt={item.titulo || "Imagem da galeria"}


onError={(e)=>{

e.currentTarget.src="/images/logo.png";

}}


className="
w-full
h-52
object-cover
"

/>








<div className="p-5">



<h3 className="
font-bold
text-white
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
hover:bg-red-600
transition
"


>


<Trash2 size={18}/>


Excluir


</button>




</div>






</motion.div>


))


}



</div>













{


mostrarConfirmacao && (



<div className="
fixed
inset-0
bg-black/70
flex
items-center
justify-center
p-5
z-50
">





<div className="
bg-[#0B1628]
border
border-white/10
rounded-3xl
p-6
max-w-md
w-full
text-center
">





<button


type="button"


className="
float-right
text-white
"


onClick={()=>setMostrarConfirmacao(false)}


>


<X/>


</button>







<h2 className="
text-xl
font-bold
text-white
mb-4
">

Excluir imagem?

</h2>







<p className="
text-gray-400
mb-6
">

A imagem será removida permanentemente da galeria.

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
bg-gray-700
text-white
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


</div>


);


}