import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';
import { AaaService } from 'src/aaa/aaa.service';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class BbbService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private aaaService: AaaService) {}
  onModuleInit() {
    console.log('BbbService OnModuleInit');
  }
  onApplicationBootstrap() {
    console.log('BbbService OnApplicationBootstrap');
  }
  onModuleDestroy() {
    console.log('BbbService OnModuleDestroy');
  }
  beforeApplicationShutdown(signal?: string | undefined) {
    console.log('BbbService BeforeApplicationShutdown', signal);
  }
  onApplicationShutdown(signal?: string | undefined) {
    console.log('BbbService OnApplicationShutdown', signal);
  }

  create(createBbbDto: CreateBbbDto) {
    return 'This action adds a new bbb';
  }

  findAll() {
    return `This action returns all bbb` + this.aaaService.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} bbb`;
  }

  update(id: number, updateBbbDto: UpdateBbbDto) {
    return `This action updates a #${id} bbb`;
  }

  remove(id: number) {
    return `This action removes a #${id} bbb`;
  }
}
