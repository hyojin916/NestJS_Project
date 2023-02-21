import { ApiProperty } from '@nestjs/swagger';

export class ReadOnlyCatDto {
  @ApiProperty({
    example: '23132342',
    description: 'id',
  })
  id: string;

  @ApiProperty({
    example: 'gywlsh274@gmail.com',
    description: 'email',
  })
  email: string;

  @ApiProperty({
    example: '꼬미',
    description: '고양이 이름',
  })
  name: string;
}
