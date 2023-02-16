import { PositiveIntPipe } from './../common/pipes/positiveint.pipe';
import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  HttpException,
  UseFilters,
  Param,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';

@Controller('cats')
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
    return 'signUp';
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
