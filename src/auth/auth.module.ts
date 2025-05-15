import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/shared/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';

@Global()
@Module({
  imports: [
    HttpModule.register({
      timeout: 3000,
      maxRedirects: 2,
    }),
    JwtModule.register({
      secret: 'very_secret',
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
  exports: [],
})
export class AuthModule {}
