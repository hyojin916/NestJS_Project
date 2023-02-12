import { CatsService } from './cats/cats.service';
import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  // class 내부에서 생성자로 초기화를 한 다음에 사용을 한다.
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {}

  @Get()
  getHello() {
    return this.catsService.hiCatServicePriduct();
    // return this.appService.getHello();
  }
}
