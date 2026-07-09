import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';


import { PrismaService } from '../prisma/prisma.service';


import * as fs from 'fs';

import * as path from 'path';



@Injectable()
export class GaleriaService {


  constructor(

    private prisma: PrismaService,

  ) {}







  // =====================================
  // CRIAR IMAGEM
  // =====================================


  async criarImagem(data:any){


    return this.prisma.galeria.create({

      data:{


        titulo:data.titulo,


        imagemUrl:data.imagemUrl,


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





    // caminho físico da imagem


    const caminho = path.join(

      process.cwd(),

      imagem.imagemUrl

    );





    // apagar arquivo se existir


    if(fs.existsSync(caminho)){


      fs.unlinkSync(caminho);


    }







    return this.prisma.galeria.delete({

      where:{


        id,


      },


    });


  }



}