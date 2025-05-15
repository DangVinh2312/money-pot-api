import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Income } from 'src/entities/income.entity';
import { SharedModule } from 'src/shared/shared.module';
import { IncomeController } from './income.controller';
import { IncomeRepository } from './income.repository';
import { IncomeService } from './income.service';

@Module({
  imports: [TypeOrmModule.forFeature([Income]), SharedModule],
  controllers: [IncomeController],
  providers: [IncomeService, IncomeRepository],
})
export class IncomeModule {}
