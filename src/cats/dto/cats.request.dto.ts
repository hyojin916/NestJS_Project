import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// * type이나 interface가 이닌 class를 사용하는 이유?
// * 1. @ 패턴을 적용할 수 있다., 2. 상속을 통해 -> 재사용성 증가
export class CatRequestDto {
  @ApiProperty({
    example: 'gywlsh274@gmail.com',
    description: 'email',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'catcat1234',
    description: '비밀번호',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: '꼬미',
    description: '고양이 이름',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
