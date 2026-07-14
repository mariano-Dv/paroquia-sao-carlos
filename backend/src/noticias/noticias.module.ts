import { Module } from '@nestjs/common';


import { NoticiasController } from './noticias.controller';


import { NoticiasService } from './noticias.service';


import { PrismaModule } from '../prisma/prisma.module';


import { CloudinaryModule } from '../cloudinary/cloudinary.module';





@Module({

  imports:[


    PrismaModule,


    CloudinaryModule,


  ],



  controllers:[


    NoticiasController,


  ],



  providers:[


    NoticiasService,


  ],



  exports:[


    NoticiasService,


  ],


})


export class NoticiasModule {}