"use client";


import {
  CalendarCheck2,
  Newspaper,
} from "lucide-react";


import {
  useEffect,
  useState,
} from "react";


import {
  motion,
  AnimatePresence
} from "framer-motion";



const API_URL = process.env.NEXT_PUBLIC_API_URL;




export default function SaoCarlos(){



const [noticias,setNoticias] = useState<any[]>([]);


const [index,setIndex] = useState(0);








async function carregarNoticias(){


try{


const resposta = await fetch(

`${API_URL}/noticias`

);



const dados = await resposta.json();



if(Array.isArray(dados)){


setNoticias(dados);


}



}catch(error){


console.log(
"Erro ao carregar notícias",
error
);


}



}









useEffect(()=>{


carregarNoticias();


},[]);









useEffect(()=>{


if(noticias.length <= 1)
return;



const intervalo = setInterval(()=>{


setIndex(

atual =>

(atual + 1) % noticias.length

);



},5000);



return ()=>clearInterval(intervalo);



},[noticias]);









const noticiaAtual = noticias[index];









return (



<section

className="
w-full
py-24
bg-gradient-to-b
from-[#061a3a]
to-[#081f45]
"

>



<div

className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-3
gap-12
items-center
"

>








{/* BIOGRAFIA */}



<div>


<h2

className="
text-white
text-2xl
font-bold
"

>

São Carlos Lwanga

</h2>





<p

className="
mt-4
text-gray-300
leading-relaxed
text-sm
md:text-base
"

>


São Carlos Lwanga foi um catequista e mártir angolano.
Exemplo de fé, humildade e amor a Cristo.
A sua vida inspira a caminhada cristã da nossa comunidade até hoje.


</p>



</div>













{/* IMAGEM */}



<div

className="
flex
justify-center
"

>


<motion.div


animate={{

scale:[1,1.03,1]

}}


transition={{

duration:4,

repeat:Infinity

}}



className="
w-56
h-56
rounded-full
border-4
border-yellow-400
overflow-hidden
shadow-2xl
"

>



<img


src="/images/logo.png"


className="
w-full
h-full
object-cover
"

/>



</motion.div>



</div>














{/* NOTÍCIAS */}



<div>



<h2

className="
text-white
text-2xl
font-bold
flex
items-center
gap-2
"

>



<CalendarCheck2

className="
text-yellow-400
"

/>



Notícias e Comunicados



</h2>









<div

className="
mt-5
min-h-[220px]
"

>




<AnimatePresence mode="wait">



{

noticiaAtual ?



(



<motion.div


key={noticiaAtual.id}



initial={{

opacity:0,

x:50

}}



animate={{

opacity:1,

x:0

}}



exit={{

opacity:0,

x:-50

}}



transition={{

duration:0.6

}}



className="
bg-white/10
backdrop-blur-md
border
border-white/20
rounded-2xl
p-5
shadow-xl
"

>









{
noticiaAtual.imagem &&



<img



src={noticiaAtual.imagem}



alt={noticiaAtual.titulo}



onError={(e)=>{


e.currentTarget.style.display="none";


}}



className="
w-full
h-32
rounded-xl
object-cover
mb-4
"



/>



}









<div

className="
flex
items-center
gap-2
text-yellow-400
text-sm
font-semibold
"

>


{

noticiaAtual.tipo==="COMUNICADO"

?

"📅 Comunicado"

:

"📰 Notícia"

}



</div>









<h3

className="
text-white
font-bold
text-lg
mt-2
"

>


{noticiaAtual.titulo}



</h3>









<p

className="
text-gray-300
text-sm
mt-2
line-clamp-3
"

>


{noticiaAtual.resumo}



</p>









{

noticiaAtual.dataEvento &&



<p

className="
text-yellow-300
text-xs
mt-3
"

>


Evento:

{" "}

{

new Date(

noticiaAtual.dataEvento

).toLocaleDateString()

}



</p>



}







</motion.div>



)

:



(



<motion.div


initial={{

opacity:0

}}



animate={{

opacity:1

}}



className="
bg-white/5
border
border-white/10
rounded-xl
p-5
text-gray-300
"

>


<Newspaper

className="
text-yellow-400
mb-3
"

/>



Nenhuma notícia publicada ainda.



</motion.div>



)



}



</AnimatePresence>



</div>









{

noticias.length > 1 &&



<div

className="
flex
gap-2
mt-4
"

>



{

noticias.map((item,i)=>(



<button


key={item.id}


onClick={()=>setIndex(i)}



className={`

w-3

h-3

rounded-full

${

i===index

?

"bg-yellow-400"

:

"bg-white/30"

}

`}



></button>



))


}



</div>



}







</div>







</div>







</section>



);



}