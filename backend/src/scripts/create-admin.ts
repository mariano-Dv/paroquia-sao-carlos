import { PrismaClient, Role } from "@prisma/client";
import * as bcrypt from "bcrypt";


const prisma = new PrismaClient();



async function criarAdmin(){


  const senha = await bcrypt.hash(
    "Admin@2026",
    10
  );



  const admin = await prisma.user.create({

    data:{

      nome:"Administrador Paroquial",

      email:"admin@saocarloslwanga.com",

      password:senha,

      role:Role.ADMIN,

      telefone:"999999999",

      morada:"Paróquia São Carlos Lwanga"

    }

  });



  console.log(
    "Administrador criado com sucesso:"
  );


  console.log(admin);



}



criarAdmin()

.then(()=>{

  console.log("Processo finalizado");

})

.catch((erro)=>{

  console.error(
    erro
  );

})

.finally(async()=>{

  await prisma.$disconnect();

});