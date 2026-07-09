import { Injectable } from '@nestjs/common';
import PDFDocument from 'pdfkit';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class PdfService {


  constructor(
    private prisma: PrismaService
  ) {}




  async gerarPedidoPDF(id:string){



    const pedido =
    await this.prisma.pedido.findUnique({

      where:{
        id
      }

    });




    if(!pedido){

      throw new Error(
        "Pedido não encontrado"
      );

    }




    const doc = new PDFDocument({

      size:"A4",

      margin:50

    });





    /*
      GERAR NÚMERO OFICIAL DO PEDIDO

      Exemplo:
      BAT-2026-0001
    */


    const ano =
    new Date().getFullYear();



    const prefixo =
    pedido.tipo
    ?
    pedido.tipo
    .substring(0,3)
    .toUpperCase()
    :
    "PED";



    const numeroPedido =
    `${prefixo}-${ano}-${pedido.id.substring(0,4).toUpperCase()}`;







    /*
      CABEÇALHO
    */


    doc

    .fontSize(18)

    .font("Helvetica-Bold")

    .text(
      "PARÓQUIA SÃO CARLOS LWANGA",
      {
        align:"center"
      }
    );



    doc.moveDown(0.3);



    doc

    .fontSize(12)

    .font("Helvetica")

    .text(
      "Secretaria Paroquial",
      {
        align:"center"
      }
    );



    doc.moveDown();



    doc

    .fontSize(14)

    .font("Helvetica-Bold")

    .text(
      "FICHA OFICIAL DE PEDIDO",
      {
        align:"center"
      }
    );



    doc.moveDown();




    /*
      LINHA
    */


    doc

    .moveTo(50,150)

    .lineTo(545,150)

    .stroke();





    doc.moveDown(2);





    /*
      IDENTIFICAÇÃO DO PEDIDO
    */


    doc

    .fontSize(12)

    .font("Helvetica-Bold")

    .text(
      `Número do pedido: ${numeroPedido}`
    );



    doc

    .font("Helvetica")

    .text(
      `Tipo de pedido: ${pedido.tipo || "-"}`
    );



    doc

    .text(
      `Data de submissão: ${
        pedido.createdAt
        ?
        new Date(
          pedido.createdAt
        ).toLocaleDateString("pt-AO")
        :
        "-"
      }`
    );





    doc.moveDown(2);






    /*
      DADOS DO SOLICITANTE
    */


    doc

    .fontSize(14)

    .font("Helvetica-Bold")

    .text(
      "Dados do solicitante"
    );



    doc.moveDown(0.5);



    doc

    .fontSize(11)

    .font("Helvetica")

    .text(
`Nome completo: ${pedido.nomeCompleto || "-"}

Data de nascimento: ${
pedido.dataNascimento
?
new Date(
pedido.dataNascimento
).toLocaleDateString("pt-AO")
:
"-"
}

Sexo: ${pedido.sexo || "-"}

Nome do pai: ${pedido.nomePai || "-"}

Nome da mãe: ${pedido.nomeMae || "-"}

Telefone: ${pedido.telefone || "-"}

Email: ${pedido.email || "-"}

Morada: ${pedido.endereco || "-"}`
    );







    doc.moveDown(2);





    /*
      OBSERVAÇÃO
    */


    doc

    .fontSize(14)

    .font("Helvetica-Bold")

    .text(
      "Informações adicionais"
    );



    doc.moveDown(0.5);



    doc

    .fontSize(11)

    .font("Helvetica")

    .text(
      pedido.observacao
      ||
      "Sem observações adicionais."
    );







    doc.moveDown(4);






    /*
      ASSINATURA
    */


    doc

    .fontSize(11)

    .text(
      "__________________________________",
      {
        align:"center"
      }
    );



    doc

    .text(
      "Secretaria Paroquial",
      {
        align:"center"
      }
    );



    doc

    .text(
      "Paróquia São Carlos Lwanga",
      {
        align:"center"
      }
    );








    /*
      RODAPÉ
    */


    doc

    .moveTo(50,760)

    .lineTo(545,760)

    .stroke();



    doc

    .fontSize(9)

    .text(

      "Documento oficial emitido pela Secretaria Paroquial São Carlos Lwanga.",

      50,

      770,

      {
        align:"center",
        width:495
      }

    );





    return {

      doc,

      pedido

    };


  }



}