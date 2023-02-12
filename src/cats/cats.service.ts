import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  hiCatServicePriduct() {
    return 'hello cat!';
  }
}
