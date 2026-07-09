import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { NotificacoesService } from '../notificacoes/notificacoes.service';



@Injectable()
export class PedidosService {


  constructor(

    private prisma: PrismaService,

    private notificacoesService: NotificacoesService,

  ) {}







  // =====================================
  // CRIAR PEDIDO
  // =====================================

  async criarPedido(data:any){


    return this.prisma.pedido.create({

      data:{

        tipo:data.tipo,

        nomeCompleto:data.nomeCompleto,

        dataNascimento:data.dataNascimento
          ? new Date(data.dataNascimento)
          : null,


        sexo:data.sexo,

        nomePai:data.nomePai,

        nomeMae:data.nomeMae,

        endereco:data.endereco,

        telefone:data.telefone,

        email:data.email,

        userId:data.userId,


        visivelParaUsuario:true,


      },

    });


  }









  // =====================================
  // LISTAR TODOS OS PEDIDOS
  // ADMIN
  // =====================================

  async listarPedidos(){


    return this.prisma.pedido.findMany({


      orderBy:{


        createdAt:"desc",


      },


      include:{


        user:{


          select:{


            id:true,

            nome:true,

            email:true,


          },


        },


      },


    });


  }









  // =====================================
  // LISTAR PEDIDOS DO USUÁRIO
  // =====================================


  async listarMeusPedidos(userId:string){



    return this.prisma.pedido.findMany({


      where:{


        userId:userId,


        visivelParaUsuario:true,


      },


      orderBy:{


        createdAt:"desc",


      },


      include:{


        user:{


          select:{


            id:true,

            nome:true,

            email:true,


          },


        },


      },


    });



  }









  // =====================================
  // BUSCAR PEDIDO POR ID
  // =====================================


  async buscarPorId(id:string){


    const pedido = await this.prisma.pedido.findUnique({


      where:{


        id,


      },


      include:{


        user:true,


      },


    });




    if(!pedido){


      throw new NotFoundException(

        "Pedido não encontrado"

      );


    }



    return pedido;


  }









  // =====================================
  // ATUALIZAR STATUS
  // ADMIN
  // =====================================


  async atualizarStatus(

    id:string,

    status:any,

    observacao?:string,

  ){


    const pedido = await this.prisma.pedido.findUnique({


      where:{


        id,


      },


    });





    if(!pedido){


      throw new NotFoundException(

        "Pedido não encontrado"

      );


    }







    const pedidoAtualizado = await this.prisma.pedido.update({


      where:{


        id,


      },


      data:{


        status,

        observacao,


      },


    });









    if(pedido.userId){



      let titulo = "";

      let mensagem = "";





      if(status === "APROVADO"){


        titulo = "Pedido aprovado";


        mensagem =

        `O seu pedido de ${pedido.tipo} foi aprovado pela Secretaria Paroquial da Paróquia São Carlos Lwanga.`;



      }






      if(status === "CANCELADO"){


        titulo = "Pedido rejeitado";


        mensagem =

        `O seu pedido de ${pedido.tipo} foi rejeitado pela Secretaria Paroquial da Paróquia São Carlos Lwanga.`;



      }







      if(titulo && mensagem){


        await this.notificacoesService.criar({


          titulo,

          mensagem,

          userId:pedido.userId,

          pedidoId:pedido.id,


        });


      }



    }







    return pedidoAtualizado;


  }









  // =====================================
  // OCULTAR PEDIDO DO USUÁRIO
  // NÃO APAGA DO BANCO
  // =====================================


  async removerDaListaUsuario(

    id:string,

    userId:string,

  ){



    const pedido = await this.prisma.pedido.findUnique({


      where:{


        id,


      },


    });






    if(!pedido){


      throw new NotFoundException(

        "Pedido não encontrado"

      );


    }







    if(pedido.userId !== userId){


      throw new NotFoundException(

        "Este pedido não pertence ao usuário"

      );


    }








    return this.prisma.pedido.update({


      where:{


        id,


      },


      data:{


        visivelParaUsuario:false,


      },


    });



  }









  // =====================================
  // REMOVER DEFINITIVAMENTE
  // ADMIN
  // =====================================


  async removerPedido(id:string){



    const pedido = await this.prisma.pedido.findUnique({


      where:{


        id,


      },


    });






    if(!pedido){


      throw new NotFoundException(

        "Pedido não encontrado"

      );


    }







    return this.prisma.pedido.delete({


      where:{


        id,


      },


    });



  }



}