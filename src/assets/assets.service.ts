import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AssetsService {
  constructor(private prismaService: PrismaService) {}

  async all() {
    return await this.prismaService.asset.findMany();
  }

  async create(data: Prisma.AssetCreateInput) {
    return await this.prismaService.asset.create({ data });
  }
}
