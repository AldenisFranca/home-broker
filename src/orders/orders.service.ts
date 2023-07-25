import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { InitTransactionDto } from './order.dto';
// import { OrderStatus } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  initTransaction(input: InitTransactionDto) {
    // prismaService.$use()
    return this.prismaService.order.create({
      data: {
        asset_id: input.asset_id,
        wallet_id: input.wallet_id,
        shares: input.shares,
        partial: input.shares,
        price: input.price,
        // type: input.type,
        // status: OrderStatus.PENDING,
      },
    });
  }
  // async executeTransaction(input: InputExecuteTransactionDto) {
  //   const order = await this.prismaService.order.findUniqueOrThrow({
  //     where: { id: input.order_id },
  //   });

  // await this.prismaService.order.update({
  //   where: { id: input.order_id },
  //   data: {
  //     partial: order.partial - input.negotiated_shares,
  //     status: input.status,
  //     Transactions: {
  //       create: {
  //         broker_transaction_id: input.broker_transaction_id,
  //         related_investor_id: input.related_investor_id,
  //         shares: input.negotiated_shares,
  //         price: input.price,
  //       },
  //     },
  //   },
  // });
  // if (input.status == OrderStatus.CLOSED) {
  //   await this.prismaService.asset.update({
  //     where: { id: order.asset_id },
  //     data: {
  //       price: input.price,
  //     },
  //   });
  //   await this.prismaService.walletAsset.findUnique({
  //     where: {
  //       wallet_id_asset_id: {
  //         asset_id: order.asset_id,
  //         wallet_id: order.wallet_id,
  //       },
  //     },
  //   });
  // }
  // adicionar a transação em order
  // contabilizar a qtd de ativos na carteira
  // atualizar o status da ordem OPEN ou CLOSED
  // atualizar o preço do ativo
  // }
}
