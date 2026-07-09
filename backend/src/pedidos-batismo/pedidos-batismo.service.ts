import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PedidosBatismoService {

  constructor(
    private prisma: PrismaService,
  ) {}



  async criarPedido(data: any) {

    return this.prisma.pedido.create({

      data: {

        tipo: "BATISMO",

        nomeCompleto: data.nomeCompleto,

        dataNascimento: new Date(
          data.dataNascimento
        ),

        sexo: data.sexo,

        nomePai: data.nomePai,

        nomeMae: data.nomeMae,

        endereco: data.endereco,

        telefone: data.telefone,

        email: data.email,

      },

    });

  }





  async listarPedidos() {

    return this.prisma.pedido.findMany({

      orderBy: {

        createdAt: "desc"

      }

    });

  }

}