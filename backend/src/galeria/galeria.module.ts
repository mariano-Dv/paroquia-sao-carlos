import { Module } from '@nestjs/common';


import { GaleriaController } from './galeria.controller';


import { GaleriaService } from './galeria.service';


import { PrismaModule } from '../prisma/prisma.module';


import { CloudinaryModule } from '../cloudinary/cloudinary.module';




@Module({

  imports:[

    PrismaModule,

    CloudinaryModule,

  ],



  controllers:[

    GaleriaController,

  ],



  providers:[

    GaleriaService,

  ],



  exports:[

    GaleriaService,

  ],


})


export class GaleriaModule {}