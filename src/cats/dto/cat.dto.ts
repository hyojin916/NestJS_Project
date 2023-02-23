import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

// * 근데 readOnly에서는 password를 사용하지 않으려 한다. -> PickType
export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: '23132342',
    description: 'id',
  })
  id: string; // * 스키마에서 만들어주지는 않았지만 mongoose에서 자동으로 id를 구현해줘서 따로 만들었다.
}
