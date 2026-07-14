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


import { memoryStorage } from 'multer';


import { NoticiasService } from './noticias.service';



@Controller('noticias')
export class NoticiasController {


  constructor(

    private readonly noticiasService: NoticiasService,

  ) {}





  // =====================================
  // CRIAR NOTÍCIA
  // POST /noticias
  // =====================================


  @Post()


  @UseInterceptors(

    FileInterceptor(

      'imagem',

      {

        storage: memoryStorage(),

      }

    )

  )


  criarNoticia(

    @UploadedFile() imagem: Express.Multer.File,

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

      imagem,

    });


  }







  // =====================================
  // LISTAR
  // =====================================


  @Get()


  listarNoticias(){


    return this.noticiasService.listarNoticias();


  }







  // =====================================
  // BUSCAR POR ID
  // =====================================


  @Get(':id')


  buscarPorId(

    @Param('id') id:string,

  ){


    return this.noticiasService.buscarPorId(id);


  }







  // =====================================
  // REMOVER
  // =====================================


  @Delete(':id')


  removerNoticia(

    @Param('id') id:string,

  ){


    return this.noticiasService.removerNoticia(id);


  }



}