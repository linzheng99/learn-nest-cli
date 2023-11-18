import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NextFunction } from 'express';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('before', req.url);
    next();
    console.log('after');
  });
  // useStaticAssets 需要create指定泛类<NestExpressApplication>才能使用
  // app.useStaticAssets('public', { prefix: '/static' }); // 上传文件

  // app.useGlobalGuards(new LoginGuard()); // 全局启用guard
  // app.useGlobalInterceptors(new TimeInterceptor()); // 全局启用Interceptor
  // app.useGlobalPipes(new ValidatePipe()); // 全局启用Pipe
  app.useGlobalFilters(new TestFilter()); // 全局启用Filters
  await app.listen(3000);
  // setTimeout(() => {
  //   app.close(); // 触发销毁逻辑
  // }, 3000);
}
bootstrap();
