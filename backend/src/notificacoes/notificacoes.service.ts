import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class NotificacoesService {


constructor(
private prisma: PrismaService
){}





// Buscar notificações de um usuário

async buscarPorUsuario(userId:string){


return await this.prisma.notificacao.findMany({

where:{
userId
},

orderBy:{
createdAt:"desc"
},

include:{
pedido:true
}

});


}





// Contar notificações não lidas

async contarNaoLidas(userId:string){


return await this.prisma.notificacao.count({

where:{

userId,

lida:false

}

});


}







// Marcar uma notificação como lida

async marcarComoLida(id:string){


return await this.prisma.notificacao.update({

where:{
id
},

data:{
lida:true
}

});


}





// Criar uma notificação

async criar(data:{


titulo:string;

mensagem:string;

userId:string;

pedidoId?:string;


}){


return await this.prisma.notificacao.create({

data:{

titulo:data.titulo,

mensagem:data.mensagem,

userId:data.userId,

pedidoId:data.pedidoId,

}

});


}



}