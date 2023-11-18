import {
  Controller,
  Get,
  Inject,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';

@Controller()
// 对 Controller 启用
// @UseInterceptors(TimeInterceptor)
// @UsePipes(ValidatePipe)
// @UseFilters(TestFilter)
export class AppController {
  constructor(
    // private readonly appService: AppService,
    private readonly appService: AppService,
    @Inject('person') private readonly person: { name: string; age: number },
    @Inject('person2') private readonly person2: { name: string; desc: number },
    @Inject('person3') private readonly person3: { name: string; age: number },
  ) {}
  // @Inject(AppService)
  // private readonly appService: AppService;
  // @Inject('person')
  // private readonly person: { name: string; age: number };
  // @Inject('person2')
  // private readonly person2: { name: string; desc: string };

  @Get()
  getHello(): string {
    console.log('handler...');

    return this.appService.getHello();
  }
  @Get('aaa')
  // @UseGuards(LoginGuard) // 启用守卫
  aaa(): string {
    console.log('aaa...');
    return 'aaa';
  }

  @Get('bbb')
  // @UseInterceptors(TimeInterceptor)
  bbb(@Query('age') age: number): number {
    console.log('bbb...');
    return age;
  }

  @Get('ccc')
  // @UseFilters(TestFilter)
  // ccc(@Query('num', ValidatePipe) num: number) {
  //   return num + 1;
  // }
  // 全局启用 / 整个controller启用
  ccc(@Query('num') num: number) {
    return num + 1;
  }
}
