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


import { GaleriaService } from './galeria.service';



@Controller('galeria')
export class GaleriaController {


  constructor(

    private readonly galeriaService: GaleriaService,

  ) {}







  // =====================================
  // ADICIONAR IMAGEM
  // POST /galeria
  // =====================================


  @Post()

  @UseInterceptors(

    FileInterceptor(
      'imagem',

      {

        storage: diskStorage({

          destination:
          './uploads/galeria',



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


  criarImagem(

    @UploadedFile() imagem:any,

    @Body() data:any,

  ){



    return this.galeriaService.criarImagem({

      titulo:data.titulo,

      imagemUrl:

      imagem
      ?

      `uploads/galeria/${imagem.filename}`

      :

      null,


    });


  }









  // =====================================
  // LISTAR GALERIA
  // =====================================


  @Get()

  listarGaleria(){


    return this.galeriaService.listarGaleria();


  }









  // =====================================
  // BUSCAR POR ID
  // =====================================


  @Get(':id')

  buscarPorId(

    @Param('id') id:string,

  ){


    return this.galeriaService.buscarPorId(id);


  }









  // =====================================
  // REMOVER IMAGEM
  // =====================================


  @Delete(':id')

  removerImagem(

    @Param('id') id:string,

  ){


    return this.galeriaService.removerImagem(id);


  }



}