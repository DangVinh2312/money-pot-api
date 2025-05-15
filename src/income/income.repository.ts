import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Income } from 'src/entities/income.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IncomeRepository extends Repository<Income> {
  constructor(
    @InjectRepository(Income)
    readonly incomeRepository: Repository<Income>,
  ) {
    super(Income, incomeRepository.manager, incomeRepository.queryRunner);
  }
}
