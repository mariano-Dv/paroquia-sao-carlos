import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';


import {
  FileInterceptor,
} from '@nestjs/platform-express';


import {
  diskStorage,
} from 'multer';


import {
  extname,
} from 'path';


import { NoticiasService } from './noticias.service';



@Controller('noticias')
export class NoticiasController {


  constructor(

    private readonly noticiasService: NoticiasService,

  ) {}





  @Post()


  @UseInterceptors(

    FileInterceptor(

      'imagem',

      {

        storage: diskStorage({

          destination:
          './uploads/noticias',


          filename:(req,file,callback)=>{


            const nomeUnico =

            Date.now()
            +
            extname(file.originalname);



            callback(

              null,

              nomeUnico

            );


          },


        }),


      }

    )

  )



  criarNoticia(

    @UploadedFile() imagem:any,

    @Body() data:any,

  ){



    return this.noticiasService.criarNoticia({


      titulo:data.titulo,


      resumo:data.resumo,


      conteudo:data.conteudo,


      tipo:data.tipo,


      dataEvento:data.dataEvento,


      publicada:data.publicada,


      destaque:data.destaque,


      imagem:

      imagem

      ?

      `uploads/noticias/${imagem.filename}`

      :

      null,


    });


  }









  @Get()


  listarNoticias(){


    return this.noticiasService.listarNoticias();


  }









  @Get(':id')


  buscarPorId(

    @Param('id') id:string,

  ){


    return this.noticiasService.buscarPorId(id);


  }









  @Delete(':id')


  removerNoticia(

    @Param('id') id:string,

  ){


    return this.noticiasService.removerNoticia(id);


  }



}