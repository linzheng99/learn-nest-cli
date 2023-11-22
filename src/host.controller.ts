import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: ':host.0.0.1', path: 'host' })
export class HostController {
  @Get('bbb')
  hello() {
    return 'hello';
  }
}
