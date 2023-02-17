import {
  Controller,
  Get,
  Post,
  UseFilters,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { SuccessInterceptor } from 'src/common/interceptors/success.intercepter';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return 'current cat';
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
