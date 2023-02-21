import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaOptions } from 'mongoose';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Cat extends Document {
  // * mongoose의 document를 상속받았다.
  @ApiProperty({
    example: 'gywlsh274@gmail.com',
    description: 'email',
    required: true,
  })
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string; // * 이건 validation이 아니고 typping ->  class validator

  @ApiProperty({
    example: '꼬미',
    description: '고양이 이름',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'catcat1234',
    description: '비밀번호',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Prop()
  @IsString()
  imgUrl: string;

  readonly readOnlyData: { id: string; email: string; name: string }; // -> service에서 return을 할 때 필요한 것만 사용
}

// * class를 schema로 만들어주었다. -> 실제 스키마는 CatSchma
export const CatSchema = SchemaFactory.createForClass(Cat);

// mongoose에서는 virtual field를 제공하는데, 실제 필드는 아니지만 비즈니스적으로 사용할 수 있는 가상으로 필터링해서 사용자에게만 보여주는 필드
CatSchema.virtual('readOnlyData').get(function (this: Cat) {
  return {
    id: this.id, // * this는 database 객체
    email: this.email,
    name: this.name,
  };
});
