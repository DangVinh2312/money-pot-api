import { Global, Module } from '@nestjs/common';
import { ResponseInterceptor } from './interceptors/response.interceptor';

@Global()
@Module({
  providers: [ResponseInterceptor],
  exports: [],
})
export class CommonModule {}
