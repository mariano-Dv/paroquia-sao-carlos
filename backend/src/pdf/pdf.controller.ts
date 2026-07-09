import {
Controller,
Get,
Param,
Res
} from '@nestjs/common';

import type { Response } from 'express';

import { PdfService } from './pdf.service';



@Controller("pdf")
export class PdfController{


constructor(
private pdfService:PdfService
){}




@Get("pedido/:id")
async pedidoPDF(

@Param("id") id:string,

@Res() res:Response

){


const {
doc,
pedido
}= await this.pdfService.gerarPedidoPDF(id);




res.setHeader(
"Content-Type",
"application/pdf"
);



res.setHeader(
"Content-Disposition",
`inline; filename=pedido-${id}.pdf`
);




doc.pipe(res);





doc
.fontSize(20)
.text(
"Paróquia São Carlos Lwanga",
{
align:"center"
}
);



doc.moveDown();



doc
.fontSize(14)
.text(
"Ficha Oficial de Pedido",
{
align:"center"
}
);



doc.moveDown(2);




doc.fontSize(12);


doc.text(
`Número do pedido: ${pedido.id}`
);



doc.text(
`Tipo: ${pedido.tipo}`
);



doc.text(
`Estado: ${pedido.status}`
);



doc.moveDown();



doc.text(
`Nome completo: ${pedido.nomeCompleto}`
);



doc.text(
`Data nascimento: ${
pedido.dataNascimento
?
pedido.dataNascimento.toLocaleDateString()
:
"-"
}`
);



doc.text(
`Nome do pai: ${
pedido.nomePai || "-"
}`
);



doc.text(
`Nome da mãe: ${
pedido.nomeMae || "-"
}`
);



doc.text(
`Telefone: ${
pedido.telefone || "-"
}`
);



doc.text(
`Email: ${
pedido.email || "-"
}`
);



doc.text(
`Endereço: ${
pedido.endereco || "-"
}`
);




doc.moveDown(3);



doc.text(
"________________________________"
);



doc.text(
"Assinatura da Secretaria Paroquial",
);



doc.end();



}




}