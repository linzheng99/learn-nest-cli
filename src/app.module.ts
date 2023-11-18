import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { AaaModule } from './aaa/aaa.module';
import { BbbModule } from './bbb/bbb.module';
import { LogMiddleware } from './log.middleware';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';

@Module({
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'app_service',
      useClass: AppService,
    },
    {
      provide: 'person',
      useValue: {
        name: 'lin',
        age: 18,
      },
    },
    {
      provide: 'person2',
      useFactory(person: { name: string }, appService: AppService) {
        return {
          name: person.name,
          desc: appService.getHello(),
        };
      },
      inject: ['person', AppService],
    },
    {
      provide: 'person3',
      async useFactory(person: { name: string; age: number }) {
        await new Promise<void>((resolve, reject) => {
          setTimeout(resolve, 3000);
        });
        return {
          name: person.name,
          age: person.age,
        };
      },
      inject: ['person', AppService],
    },
    // {
    //   // Guard全局启用的方式之一
    //   provide: APP_GUARD,
    //   useClass: LoginGuard,
    // },
    // {
    //   // Interceptor全局启用的方式之一
    //   provide: APP_INTERCEPTOR,
    //   useClass: TimeInterceptor,
    // },
    // {
    //   // Pipe全局启用的方式之一
    //   provide: APP_PIPE,
    //   useClass: ValidatePipe,
    // },
    {
      // Filters全局启用的方式之一
      provide: APP_FILTER,
      useClass: TestFilter,
    },
  ],
  imports: [PersonModule, AaaModule, BbbModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('aaa*');
  }
}
