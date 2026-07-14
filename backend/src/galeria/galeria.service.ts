import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';


import { PrismaService } from '../prisma/prisma.service';


import { CloudinaryService } from '../cloudinary/cloudinary.service';




@Injectable()
export class GaleriaService {


  constructor(

    private prisma: PrismaService,


    private cloudinaryService: CloudinaryService,


  ) {}







  // =====================================
  // CRIAR IMAGEM
  // =====================================


  async criarImagem(data:any){


    let imagemUrl = "";



    if(data.imagem){


      imagemUrl = await this.cloudinaryService.uploadImagem(

        data.imagem,

        "paroquia/galeria"

      );


    }







    return this.prisma.galeria.create({

      data:{


        titulo:data.titulo,


        descricao:data.descricao,


        imagemUrl,


      },


    });


  }







  // =====================================
  // LISTAR GALERIA
  // =====================================


  async listarGaleria(){


    return this.prisma.galeria.findMany({

      orderBy:{


        createdAt:"desc",


      },


    });


  }







  // =====================================
  // BUSCAR POR ID
  // =====================================


  async buscarPorId(id:string){


    const imagem = await this.prisma.galeria.findUnique({

      where:{

        id,

      },

    });





    if(!imagem){


      throw new NotFoundException(

        "Imagem não encontrada"

      );


    }



    return imagem;


  }







  // =====================================
  // REMOVER IMAGEM
  // =====================================


  async removerImagem(id:string){


    const imagem = await this.buscarPorId(id);





    if(imagem.imagemUrl){


      await this.cloudinaryService.removerImagem(

        imagem.imagemUrl

      );


    }







    return this.prisma.galeria.delete({

      where:{

        id,

      },

    });


  }



}