import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './auth/guards/auth.guard';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: true,
  });

  app.useGlobalGuards(app.get(AuthGuard));
  app.useGlobalInterceptors(app.get(ResponseInterceptor));

  await app.listen(configService.get('PORT', 8080));
}

bootstrap();
