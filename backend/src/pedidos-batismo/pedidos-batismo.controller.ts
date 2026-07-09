import { Controller, Post, Body, Get } from '@nestjs/common';

import { PedidosBatismoService } from './pedidos-batismo.service';



@Controller('pedidos-batismo')

export class PedidosBatismoController {



constructor(
private service: PedidosBatismoService
){}




@Post()

async criar(
@Body() body:any
){


return this.service.criarPedido(body);


}




@Get()

async listar(){

return this.service.listarPedidos();

}




}