import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // useStaticAssets 需要create指定泛类<NestExpressApplication>才能使用
  app.useStaticAssets('public', { prefix: '/static' });
  await app.listen(3000);
  setTimeout(() => {
    app.close(); // 触发销毁逻辑
  }, 3000);
}
bootstrap();
