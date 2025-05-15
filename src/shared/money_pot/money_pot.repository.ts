import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoneyPot } from 'src/entities/money_pot.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoneyPotRepository extends Repository<MoneyPot> {
  constructor(
    @InjectRepository(MoneyPot)
    readonly moneyPotRepository: Repository<MoneyPot>,
  ) {
    super(MoneyPot, moneyPotRepository.manager, moneyPotRepository.queryRunner);
  }
}
