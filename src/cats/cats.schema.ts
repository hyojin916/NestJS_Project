import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaOptions } from 'mongoose';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Cat extends Document {
  // * mongoose의 document를 상속받았다.
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string; // * 이건 validation이 아니고 typping ->  class validator

  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Prop()
  @IsString()
  imgUrl: string;

  readonly readOnlyData: { id: string; email: string; name: string };
}

// * class를 schema로 만들어주었다. -> 실제 스키마는 CatSchma
export const CatSchema = SchemaFactory.createForClass(Cat);

// 가상으로 필터링해서 사용자에게만 보여주는 필ㄷ즈
CatSchema.virtual('readOnlyData').get(function (this: Cat) {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
  };
});
