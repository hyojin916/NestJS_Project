import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Cat } from './cats.schema';
import { CatsRepository } from './cats.repository';

@Injectable()
export class CatsService {
  constructor(private readonly catsRepository: CatsRepository) {}

  async signup(body) {
    const { email, name, password } = body;

    const isCatExist = await this.catsRepository.checkExistByEmail(email);

    if (isCatExist) {
      throw new UnauthorizedException('해당 고양이는 이미 존재합니다.'); // * 403
    }
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    const cat = await this.catsRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    return cat.readOnlyData; // * 이렇게 하면 vircual data만 return된다.
  }
}
