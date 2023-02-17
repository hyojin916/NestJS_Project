import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './cats.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService],
  // * 모듈은 기본적으로 공급자(Providers)를 캡슐화한다
  // * 즉, 현재 모듈의 직접 부분이 아니거나 가져온 모듈에서 내보내지 않은 공급자를 사용할 수 없다.
  // * 따라서 여기에서 exports를 해준다.
  exports: [CatsService],
})
export class CatsModule {}
