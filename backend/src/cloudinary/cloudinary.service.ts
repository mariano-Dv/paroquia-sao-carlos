import { Injectable } from '@nestjs/common';

import { v2 as cloudinary } from 'cloudinary';

import { Readable } from 'stream';



@Injectable()
export class CloudinaryService {


  constructor(){


    cloudinary.config({

      cloud_name:
      process.env.CLOUDINARY_CLOUD_NAME,


      api_key:
      process.env.CLOUDINARY_API_KEY,


      api_secret:
      process.env.CLOUDINARY_API_SECRET,


    });


  }







  async uploadImagem(

    file: Express.Multer.File,

    pasta:string = "paroquia"

  ): Promise<string>{



    return new Promise((resolve,reject)=>{



      const stream = cloudinary.uploader.upload_stream(


        {

          folder:pasta,

          resource_type:"image",

        },


        (error,result)=>{


          if(error){

            reject(error);

            return;

          }



          resolve(
            result!.secure_url
          );


        }


      );





      Readable
      .from(file.buffer)
      .pipe(stream);



    });



  }






  async removerImagem(

    url:string

  ){


    try{


      const partes = url.split('/');


      const nomeArquivo = partes
      [partes.length - 1]
      .split('.')[0];



      return await cloudinary.uploader.destroy(

        nomeArquivo

      );



    }catch(error){


      console.log(
        "Erro ao remover imagem Cloudinary",
        error
      );


    }


  }



}