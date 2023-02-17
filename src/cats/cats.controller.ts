import {
  Controller,
  Get,
  Post,
  UseFilters,
  Body,
  UseInterceptors,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { SuccessInterceptor } from 'src/common/interceptors/success.intercepter';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { PositiveIntPipe } from 'src/common/pipes/positiveint.pipe';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return 'current cat';
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    // 원래 param의 type은 string으로 나온다.
    return 'one cat';
  }

  @Post()
  async signUp(@Body() body: CatRequestDto) {
    console.log(body);
    return await this.catsService.signup(body);
  }

  @Post()
  async logIn() {
    return 'login';
  }

  @Post()
  async logOut() {
    return 'logout';
  }

  @Post()
  async 'upload/cats'() {
    return 'uploadImg';
  }
}
