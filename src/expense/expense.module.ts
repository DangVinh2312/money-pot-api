import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from 'src/entities/expense.entity';
import { SharedModule } from 'src/shared/shared.module';
import { ExpenseController } from './expense.controller';
import { ExpenseRepository } from './expense.repository';
import { ExpenseService } from './expense.service';

@Module({
  imports: [TypeOrmModule.forFeature([Expense]), SharedModule],
  controllers: [ExpenseController],
  providers: [ExpenseService, ExpenseRepository],
})
export class ExpenseModule {}
