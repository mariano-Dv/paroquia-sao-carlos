"use client";

import {
  Church,
  HeartHandshake,
  BookOpen,
  Users,
  Cross,
  ShieldCheck
} from "lucide-react";



export default function SobrePage(){


  const valores = [

    {
      titulo:"Fé e Evangelização",
      texto:
      "Anunciamos o Evangelho de Jesus Cristo, fortalecendo a vida espiritual dos fiéis através da Palavra de Deus e dos sacramentos.",
      icon:Cross
    },


    {
      titulo:"Comunidade",
      texto:
      "Somos uma família paroquial chamada a viver a união, a fraternidade e o amor ao próximo.",
      icon:Users
    },


    {
      titulo:"Formação Cristã",
      texto:
      "Promovemos a catequese e a formação dos cristãos para uma participação ativa na Igreja.",
      icon:BookOpen
    },


    {
      titulo:"Serviço",
      texto:
      "Inspirados por Cristo, colocamos nossos dons ao serviço da comunidade e dos mais necessitados.",
      icon:HeartHandshake
    },


  ];





return (

<main

className="
min-h-screen
bg-[#050B16]
text-white
"

>



{/* HERO */}


<section

className="
max-w-7xl
mx-auto
px-6
py-16
"

>


<div

className="
grid
md:grid-cols-2
gap-10
items-center
"

>



<div>


<p

className="
text-yellow-400
font-semibold
uppercase
tracking-widest
text-sm
"

>

Paróquia Católica

</p>




<h1

className="
text-4xl
md:text-5xl
font-bold
mt-4
leading-tight
"

>

Sobre a Paróquia
<br/>

<span className="text-yellow-400">

São Carlos Lwanga

</span>

</h1>




<p

className="
text-gray-300
mt-6
text-lg
leading-relaxed
"

>

A Paróquia São Carlos Lwanga é uma comunidade de fé,
oração e fraternidade, dedicada a anunciar Jesus Cristo
e servir ao povo de Deus através da evangelização,
dos sacramentos e da comunhão entre os irmãos.

</p>


</div>







<div

className="
flex
justify-center
"

>


<div

className="
w-64
h-64
rounded-full
border-4
border-yellow-400
overflow-hidden
shadow-2xl
"

>


<img

src="/images/logo.png"

alt="Paróquia São Carlos Lwanga"

className="
w-full
h-full
object-cover
"

/>


</div>


</div>




</div>


</section>








{/* HISTÓRIA */}


<section

className="
bg-white
text-[#061a3a]
py-16
"

>


<div

className="
max-w-6xl
mx-auto
px-6
"

>


<div

className="
flex
items-center
gap-4
mb-8
"

>

<Church

className="text-yellow-600"

size={38}

/>


<h2

className="
text-3xl
font-bold
"

>

Quem Somos

</h2>


</div>




<p

className="
text-gray-700
leading-relaxed
text-lg
"

>

A Paróquia São Carlos Lwanga tem como missão ser
uma presença viva de Cristo no meio da comunidade.
Inspirada pelo testemunho dos santos e pela mensagem
do Evangelho, procura acolher, formar e acompanhar
os fiéis na caminhada cristã.

</p>




<p

className="
text-gray-700
leading-relaxed
text-lg
mt-5
"

>

Através das celebrações litúrgicas, catequese,
grupos pastorais e ações comunitárias, a paróquia
procura construir uma Igreja mais próxima,
solidária e comprometida com a fé.

</p>


</div>


</section>









{/* PADROEIRO */}


<section

className="
max-w-6xl
mx-auto
px-6
py-16
"

>


<div

className="
bg-[#061a3a]
rounded-3xl
p-8
border
border-yellow-500/30
"

>


<div

className="
flex
items-center
gap-4
mb-5
"

>


<ShieldCheck

className="text-yellow-400"

size={38}

/>


<h2

className="
text-3xl
font-bold
"

>

São Carlos Lwanga

</h2>


</div>




<p

className="
text-gray-300
leading-relaxed
"

>

São Carlos Lwanga foi um jovem cristão de Uganda,
conhecido pela sua grande fé, coragem e fidelidade
a Cristo. Mesmo diante das perseguições, permaneceu
firme na sua esperança e tornou-se exemplo de amor,
pureza e dedicação a Deus.

</p>




</div>


</section>









{/* VALORES */}


<section

className="
bg-white
text-[#061a3a]
py-16
"

>


<div

className="
max-w-6xl
mx-auto
px-6
"

>


<h2

className="
text-3xl
font-bold
text-center
mb-10
"

>

Nossa Missão

</h2>





<div

className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-6
"

>


{

valores.map((item,index)=>{


const Icon=item.icon;


return (

<div

key={index}

className="
bg-gray-50
rounded-2xl
p-6
shadow-sm
hover:shadow-lg
transition
"

>


<div

className="
w-14
h-14
rounded-xl
bg-yellow-400
flex
items-center
justify-center
mb-5
"

>

<Icon

size={28}

className="text-[#061a3a]"

/>


</div>




<h3

className="
font-bold
text-xl
mb-3
"

>

{item.titulo}

</h3>



<p

className="
text-gray-600
text-sm
leading-relaxed
"

>

{item.texto}

</p>


</div>


);


})


}


</div>


</div>


</section>









{/* FINAL */}


<section

className="
py-16
text-center
px-6
"

>


<h2

className="
text-3xl
font-bold
"

>

Seja bem-vindo à nossa comunidade

</h2>



<p

className="
text-gray-300
mt-4
max-w-3xl
mx-auto
"

>

A Paróquia São Carlos Lwanga está de portas abertas
para todos aqueles que procuram viver a fé,
encontrar esperança e caminhar juntos como irmãos.

</p>


</section>





</main>


);


}