import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { BbbService } from './bbb.service';
import { BbbController } from './bbb.controller';
import { ModuleRef } from '@nestjs/core';

@Module({
  controllers: [BbbController],
  providers: [BbbService],
})
export class BbbModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private moduleRef: ModuleRef) {}
  onModuleInit() {
    console.log('BbbModule OnModuleInit');
  }
  onApplicationBootstrap() {
    console.log('BbbModule OnApplicationBootstrap');
  }
  onModuleDestroy() {
    console.log('BbbModule OnModuleDestroy');
  }
  beforeApplicationShutdown(signal?: string | undefined) {
    console.log('BbbModule BeforeApplicationShutdown', signal);
  }
  onApplicationShutdown(signal?: string | undefined) {
    const bbbService = this.moduleRef.get<BbbService>(BbbService);
    console.log('----------------', bbbService.findAll());
    console.log('BbbModule OnApplicationShutdown', signal);
  }
}
