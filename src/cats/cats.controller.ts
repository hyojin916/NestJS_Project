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
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptot';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { PositiveIntPipe } from 'src/common/pipes/positiveint.pipe';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReadOnlyCatDto } from './dto/cat.dto';

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

  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: '성공',
    type: ReadOnlyCatDto,
  })
  @ApiOperation({ summary: '회원가입' })
  @Post('signup')
  async signUp(@Body() body: CatRequestDto) {
    console.log(body);
    return await this.catsService.signup(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('signin')
  async logIn() {
    return 'login';
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  async logOut() {
    return 'logout';
  }

  @ApiOperation({ summary: '이미지 업로드' })
  @Post('img')
  async 'upload/cats'() {
    return 'uploadImg';
  }
}
