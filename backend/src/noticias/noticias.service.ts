import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';


import { PrismaService } from '../prisma/prisma.service';


import * as fs from 'fs';

import * as path from 'path';



@Injectable()
export class NoticiasService {


  constructor(

    private prisma: PrismaService,

  ) {}







  async criarNoticia(data:any){


    return this.prisma.noticia.create({

      data:{


        titulo:data.titulo,


        resumo:data.resumo,


        conteudo:data.conteudo,


        imagem:data.imagem,


        tipo:data.tipo,


        dataEvento:data.dataEvento
        ?
        new Date(data.dataEvento)
        :
        null,


        publicada:
        data.publicada !== undefined
        ?
        data.publicada === 'true'
        :
        true,


        destaque:
        data.destaque === 'true',


      },


    });


  }







  async listarNoticias(){


    return this.prisma.noticia.findMany({


      orderBy:{


        createdAt:"desc",


      },


    });


  }







  async buscarPorId(id:string){


    const noticia = await this.prisma.noticia.findUnique({


      where:{


        id,


      },


    });




    if(!noticia){


      throw new NotFoundException(

        "Notícia não encontrada"

      );


    }



    return noticia;


  }







  async removerNoticia(id:string){


    const noticia = await this.buscarPorId(id);




    if(noticia.imagem){


      const caminho = path.join(

        process.cwd(),

        noticia.imagem

      );



      if(fs.existsSync(caminho)){


        fs.unlinkSync(caminho);


      }


    }





    return this.prisma.noticia.delete({


      where:{


        id,


      },


    });


  }


}