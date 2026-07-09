import { Module } from '@nestjs/common';
import { PedidosBatismoController } from './pedidos-batismo.controller';
import { PedidosBatismoService } from './pedidos-batismo.service';
import { PrismaService } from '../prisma/prisma.service';


@Module({

  controllers: [
    PedidosBatismoController
  ],

  providers: [
    PedidosBatismoService,
    PrismaService
  ],

})

export class PedidosBatismoModule {}