import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { WalletAssetsController } from './wallet-assets/wallet-assets.controller';
import { WalletAssetsService } from './wallet-assets/wallet-assets.service';
import { WalletsController } from './wallets.controller';
import { WalletsService } from './wallets.service';

@Module({
  controllers: [WalletsController, WalletAssetsController],
  providers: [WalletsService, WalletAssetsService, PrismaService],
})
export class WalletsModule {}
