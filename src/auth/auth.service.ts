import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { calculateHMacSHA256 } from 'src/common/utils/encode';
import { UserRepository } from 'src/shared/user/user.repository';
import { TZaloOAUser } from './auth.type';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
  ) {}

  async login(accessToken: string) {
    const zaloOAUser = await this.getUserFromAccessToken(accessToken);
    await this.userRepository.upsert(zaloOAUser, {
      conflictPaths: {
        id: true,
      },
    });

    const payload = {
      id: zaloOAUser.id,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  private async getUserFromAccessToken(accessToken: string) {
    if (this.configService.get('NODE_ENV') === 'local') {
      return {
        id: '123456789',
      };
    }

    const response = await this.httpService.axiosRef.get<TZaloOAUser>(
      `https://graph.zalo.me/v2.0/me`,
      {
        params: {
          fields: 'id',
        },
        headers: {
          access_token: accessToken,
          appsecret_proof: calculateHMacSHA256(
            accessToken,
            this.configService.get('ZALO_APP_SECRET'),
          ),
        },
        responseType: 'json',
      },
    );

    return response.data;
  }
}
