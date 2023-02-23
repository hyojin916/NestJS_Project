import { PickType } from '@nestjs/swagger';
import { Cat } from 'src/cats/cats.schema';

export class loginRequestDto extends PickType(Cat, [
  'email',
  'password',
] as const) {}
