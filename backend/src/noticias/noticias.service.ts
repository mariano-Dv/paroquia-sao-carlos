import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';


import { PrismaService } from '../prisma/prisma.service';


import { CloudinaryService } from '../cloudinary/cloudinary.service';





@Injectable()
export class NoticiasService {



  constructor(

    private prisma: PrismaService,


    private cloudinaryService: CloudinaryService,

  ) {}







  // =====================================
  // CRIAR NOTÍCIA
  // =====================================


  async criarNoticia(data:any){


    let imagemUrl: string | null = null;



    if(data.imagem){


      imagemUrl = await this.cloudinaryService.uploadImagem(

        data.imagem,

        "paroquia/noticias"

      );


    }







    return this.prisma.noticia.create({


      data:{


        titulo:data.titulo,


        resumo:data.resumo,


        conteudo:data.conteudo,


        imagem: imagemUrl,


        tipo:data.tipo,


        dataEvento:data.dataEvento

        ?

        new Date(data.dataEvento)

        :

        null,



        publicada:

        data.publicada !== undefined

        ?

        data.publicada === "true"

        :

        true,



        destaque:

        data.destaque === "true",



      },


    });


  }









  // =====================================
  // LISTAR NOTÍCIAS
  // =====================================


  async listarNoticias(){


    return this.prisma.noticia.findMany({


      orderBy:{


        createdAt:"desc",


      },


    });


  }









  // =====================================
  // BUSCAR POR ID
  // =====================================


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









  // =====================================
  // REMOVER NOTÍCIA
  // =====================================


  async removerNoticia(id:string){


    const noticia = await this.buscarPorId(id);





    if(noticia.imagem){


      await this.cloudinaryService.removerImagem(

        noticia.imagem

      );


    }







    return this.prisma.noticia.delete({


      where:{


        id,


      },


    });


  }



}