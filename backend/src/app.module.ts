import { Module } from '@nestjs/common';


import { PrismaModule } from './prisma/prisma.module';


import { UsersModule } from './users/users.module';


import { AuthModule } from './auth/auth.module';


import { PedidosBatismoModule } from './pedidos-batismo/pedidos-batismo.module';


import { PedidosModule } from './pedidos/pedidos.module';


import { PdfModule } from './pdf/pdf.module';


import { NotificacoesModule } from './notificacoes/notificacoes.module';


import { GaleriaModule } from './galeria/galeria.module';


import { NoticiasModule } from './noticias/noticias.module';


import { CloudinaryModule } from './cloudinary/cloudinary.module';





@Module({

  imports: [


    PrismaModule,


    UsersModule,


    AuthModule,


    PedidosBatismoModule,


    PedidosModule,


    PdfModule,


    NotificacoesModule,


    GaleriaModule,


    NoticiasModule,


    CloudinaryModule,


  ],


})


export class AppModule {}