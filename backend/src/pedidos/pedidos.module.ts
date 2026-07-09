import { Module } from '@nestjs/common';

import { PedidosController } from './pedidos.controller';

import { PedidosService } from './pedidos.service';

import { PrismaModule } from '../prisma/prisma.module';

import { NotificacoesModule } from '../notificacoes/notificacoes.module';


@Module({

  imports: [

    PrismaModule,

    NotificacoesModule,

  ],

  controllers: [

    PedidosController,

  ],

  providers: [

    PedidosService,

  ],

  exports: [

    PedidosService,

  ],

})

export class PedidosModule {}