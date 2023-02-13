import { HttpException } from '@nestjs/common';
// * Pipe를 이해하기 위함
// * 역할 : id가 들어오면 (정수) 중 양수만 거르도록 함

import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform {
  transform(value: number) {
    if (value < 0) {
      throw new HttpException('value > 0', 400);
    }
    return value;
  }
}
