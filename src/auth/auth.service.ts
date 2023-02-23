import { JwtService } from '@nestjs/jwt';
import { CatsRepository } from './../cats/cats.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { loginRequestDto } from './dto/login.request.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly catsRepository: CatsRepository,
    private readonly jwtService: JwtService,
  ) {}

  async jwtLogin(data: loginRequestDto) {
    const { email, password } = data;

    const cat = await this.catsRepository.findOneByEmail(email);

    // * validation - 1. email 있는가?, 2. password 맞는가?
    if (!cat) {
      throw new UnauthorizedException('가입되지 않은 고양이입니다.');
    }

    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      cat.password,
    );

    if (!isPasswordValidated) {
      throw new UnauthorizedException('비밀번호를 확인해주세요.');
    }

    //  * 유효성 검사를 통화하면 client에 JWT를 반환한다.
    // * Nest jwt에서 사용하는 jwt를 사용한다.

    const payload = { email, sub: cat.id }; // * jwt의 payload는 이렇게 만들어줄 것 (내 맘)

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
