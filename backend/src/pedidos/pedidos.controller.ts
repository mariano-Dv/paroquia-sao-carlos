import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { PedidosService } from './pedidos.service';




@Controller('pedidos')
export class PedidosController {



  constructor(

    private readonly pedidosService: PedidosService,

  ) {}









  // =====================================
  // CRIAR PEDIDO
  // POST /pedidos
  // =====================================


  @Post()

  criarPedido(

    @Body() data:any,

  ){

    return this.pedidosService.criarPedido(data);

  }









  // =====================================
  // LISTAR TODOS OS PEDIDOS
  // ADMIN
  // GET /pedidos
  // =====================================


  @Get()

  listarPedidos(){

    return this.pedidosService.listarPedidos();

  }









  // =====================================
  // LISTAR PEDIDOS DO USUÁRIO
  // GET /pedidos/meus/:userId
  // =====================================


  @Get('meus/:userId')

  listarMeusPedidos(

    @Param('userId') userId:string,

  ){

    return this.pedidosService.listarMeusPedidos(userId);

  }









  // =====================================
  // BUSCAR PEDIDO POR ID
  // GET /pedidos/:id
  // =====================================


  @Get(':id')

  buscarPorId(

    @Param('id') id:string,

  ){

    return this.pedidosService.buscarPorId(id);

  }









  // =====================================
  // ATUALIZAR STATUS
  // ADMIN
  // PATCH /pedidos/:id/status
  // =====================================


  @Patch(':id/status')

  atualizarStatus(

    @Param('id') id:string,

    @Body() data:any,

  ){


    return this.pedidosService.atualizarStatus(

      id,

      data.status,

      data.observacao,

    );


  }









  // =====================================
  // OCULTAR PEDIDO DO USUÁRIO
  // NÃO APAGA DO BANCO
  // PATCH /pedidos/:id/remover-usuario/:userId
  // =====================================


  @Patch(':id/remover-usuario/:userId')

  removerDaListaUsuario(

    @Param('id') id:string,

    @Param('userId') userId:string,

  ){


    return this.pedidosService.removerDaListaUsuario(

      id,

      userId,

    );


  }









  // =====================================
  // REMOVER PEDIDO DEFINITIVAMENTE
  // ADMIN
  // DELETE /pedidos/:id
  // =====================================


  @Delete(':id')

  removerPedido(

    @Param('id') id:string,

  ){


    return this.pedidosService.removerPedido(id);


  }



}