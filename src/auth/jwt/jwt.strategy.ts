// * 인증할 때 사용
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // * 헤더에 토큰으로부터 추출을 한다.
      ignoreExpiration: false, // 만료기간
      secretOrKey: 'secret',
    });
  }

  async validate(payload: any) {
    // * 프론트에서 저장 된 JWT가 날아왔을 때 해당하는 것을 읽고 payload을 읽고 유효성 검사
  }
}
