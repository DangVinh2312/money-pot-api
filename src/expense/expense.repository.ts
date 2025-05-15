import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from 'src/entities/expense.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExpenseRepository extends Repository<Expense> {
  constructor(
    @InjectRepository(Expense)
    readonly expenseRepository: Repository<Expense>,
  ) {
    super(Expense, expenseRepository.manager, expenseRepository.queryRunner);
  }
}
