import { Injectable } from '@nestjs/common';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { IncomeRepository } from './income.repository';

@Injectable()
export class IncomeService {
  constructor(private readonly incomeRepository: IncomeRepository) {}

  async create(createIncomeDto: CreateIncomeDto) {
    await this.incomeRepository.insert(createIncomeDto);

    return 'This action adds a new income';
  }

  async findAll() {
    const incomes = await this.incomeRepository.find();

    return incomes;
  }

  async findOne(id: string) {
    const income = await this.incomeRepository.findOneBy({ id });

    return income;
  }

  async update(id: string, updateIncomeDto: UpdateIncomeDto) {
    await this.incomeRepository.update(id, updateIncomeDto);

    return `This action updates a #${id} income`;
  }

  async remove(id: string) {
    await this.incomeRepository.delete(id);

    return `This action removes a #${id} income`;
  }
}
