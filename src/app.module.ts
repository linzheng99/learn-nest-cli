import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';

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
  ],
  imports: [PersonModule],
})
export class AppModule {}
