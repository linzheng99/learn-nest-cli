import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';
import { XxxModule } from './xxx/xxx.module';
import { ZzzController } from './zzz/zzz.controller';
import { CccController } from './ccc/ccc.controller';

@Module({
  imports: [AaaModule, XxxModule],
  controllers: [AppController, ZzzController, CccController],
  providers: [AppService],
})
export class AppModule {}
