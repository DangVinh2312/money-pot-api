import { Controller, Headers, Post } from '@nestjs/common';
import { HEADERS } from 'src/common/constants';
import { Public } from 'src/common/decorators/is_public.decorator';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  login(@Headers(HEADERS.ZALO_ACCESS_TOKEN_HEADER) accessToken: string) {
    return this.authService.login(accessToken);
  }
}
