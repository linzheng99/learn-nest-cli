import {
  Controller,
  Get,
  Header,
  HostParam,
  HttpCode,
  Next,
  Redirect,
  Render,
  Req,
  Res,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Controller({ host: ':host.0.0.1', path: 'host' })
export class HostController {
  @Get('bbb')
  hello(@HostParam('host') host: string) {
    return host;
  }

  @Get('ccc')
  ccc(@Req() req: Request) {
    console.log(req.hostname);
    console.log(req.url);
  }

  @Get('ddd')
  ddd(@Res({ passthrough: true }) res: Response) {
    // res.end('ddd'); // 自己回应响应
    return 'ddd';
  }

  // 处理同一个了路由 - next() 会调用到下面这个handler
  @Get('eee')
  eee(@Next() next: NextFunction) {
    console.log('handler1');
    next();
    return '111';
  }

  @Get('eee')
  eee2() {
    console.log('handler2');
    return 'eee';
  }

  @Get('fff')
  @HttpCode(222) // 修改 status
  fff() {
    return 'hello, 222';
  }

  @Get('ggg')
  @Header('aaa', 'bbb') // 修改header请求头的内容
  ggg() {
    return 'hello, ggg';
  }

  @Get('hhh')
  @Redirect('http://juejin.cn') // 重定向
  hhh() {}

  @Get('user')
  @Render('user')
  user() {
    return { name: 'lin', age: 18 };
  }
}
