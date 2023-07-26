import { Module } from '@nestjs/common';
// import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: 'ORDERS_PUBLISHER',
    //     transport: Transport.KAFKA,
    //     options: {
    //       client: {
    //         clientId: 'orders',
    //         brokers: ['localhost:9094'],
    //       },
    //     },
    //   },
    // ]),
  ],
  controllers: [OrdersController],
  // providers: [OrdersService, PrismaService, ClientKafka],
  providers: [OrdersService, PrismaService],
})
export class OrdersModule {}
