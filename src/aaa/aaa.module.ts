import {
  BeforeApplicationShutdown,
  Global,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { AaaService } from './aaa.service';
import { AaaController } from './aaa.controller';

@Global()
@Module({
  controllers: [AaaController],
  providers: [AaaService],
  exports: [AaaService],
})
export class AaaModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('AaaModule OnModuleInit');
  }
  onApplicationBootstrap() {
    console.log('AaaModule OnApplicationBootstrap');
  }
  onModuleDestroy() {
    console.log('AaaModule OnModuleDestroy');
  }
  beforeApplicationShutdown(signal?: string | undefined) {
    console.log('AaaModule BeforeApplicationShutdown', signal);
  }
  onApplicationShutdown(signal?: string | undefined) {
    console.log('AaaModule OnApplicationShutdown', signal);
  }
}
