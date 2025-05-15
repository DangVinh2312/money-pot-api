import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quota } from 'src/entities/quota.entity';
import { UserModule } from '../user/user.module';
import { QuotaController } from './quota.controller';
import { QuotaRepository } from './quota.repository';
import { QuotaService } from './quota.service';

@Module({
  imports: [TypeOrmModule.forFeature([Quota]), forwardRef(() => UserModule)],
  controllers: [QuotaController],
  providers: [QuotaService, QuotaRepository],
  exports: [QuotaService, QuotaRepository],
})
export class QuotaModule {}
