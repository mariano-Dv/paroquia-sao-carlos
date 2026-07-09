import { Controller, Get, Param, Patch } from '@nestjs/common';
import { NotificacoesService } from './notificacoes.service';



@Controller('notificacoes')
export class NotificacoesController {



constructor(
private readonly notificacoesService: NotificacoesService
){}






@Get('usuario/:userId')
buscarUsuario(
@Param('userId') userId:string
){

return this.notificacoesService.buscarPorUsuario(userId);

}






@Get('usuario/:userId/count')
contar(
@Param('userId') userId:string
){

return this.notificacoesService.contarNaoLidas(userId);

}







@Patch(':id/lida')
marcarLida(
@Param('id') id:string
){

return this.notificacoesService.marcarComoLida(id);

}



}