import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ExpenseRepository } from './expense.repository';

@Injectable()
export class ExpenseService {
  constructor(private readonly expenseRepository: ExpenseRepository) {}

  async create(createExpenseDto: CreateExpenseDto) {
    await this.expenseRepository.insert(createExpenseDto);

    return 'This action adds a new expense';
  }

  async findAll() {
    const expenses = await this.expenseRepository.find();

    return expenses;
  }

  async findOne(id: string) {
    const expense = await this.expenseRepository.findOneBy({ id });

    return expense;
  }

  async update(id: string, updateExpenseDto: UpdateExpenseDto) {
    await this.expenseRepository.update(id, updateExpenseDto);

    return `This action updates a #${id} expense`;
  }

  remove(id: string) {
    this.expenseRepository.delete(id);

    return `This action removes a #${id} expense`;
  }
}
