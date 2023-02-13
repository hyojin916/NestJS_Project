import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  HttpException,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { CatsService } from './cats.service';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    throw new HttpException('api 부서져떠!', 401);
  }

  @Get(':id')
  getOneCat() {
    throw new HttpException('주인 아님!', 403);
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return;
  }

  @Patch(':id')
  updatePartialCat() {
    return;
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
