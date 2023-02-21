import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Cat } from '../cats.schema';

// * type이나 interface가 이닌 class를 사용하는 이유?
// * 1. @ 패턴을 적용할 수 있다., 2. 상속을 통해 -> 재사용성 증가
export class CatRequestDto extends PickType(Cat, [
  'email',
  'password',
  'name',
] as const) {}
