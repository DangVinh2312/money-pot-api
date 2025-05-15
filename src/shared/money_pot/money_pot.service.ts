import { Injectable } from '@nestjs/common';
import { CreateMoneyPotDto } from './dto/create-money_pot.dto';
import { UpdateMoneyPotDto } from './dto/update-money_pot.dto';
import { MoneyPotRepository } from './money_pot.repository';

@Injectable()
export class MoneyPotService {
  constructor(private readonly moneyPotRepository: MoneyPotRepository) {}

  async create(createMoneyPotDto: CreateMoneyPotDto) {
    await this.moneyPotRepository.insert(createMoneyPotDto);

    return 'This action adds a new moneyPot';
  }

  async findAll() {
    const moneyPots = await this.moneyPotRepository.find();

    return moneyPots;
  }

  async findOne(id: string) {
    const moneyPot = await this.moneyPotRepository.findOneBy({ id });

    return moneyPot;
  }

  async update(id: string, updateMoneyPotDto: UpdateMoneyPotDto) {
    await this.moneyPotRepository.update(id, updateMoneyPotDto);

    return `This action updates a #${id} moneyPot`;
  }

  async remove(id: string) {
    await this.moneyPotRepository.delete(id);

    return `This action removes a #${id} moneyPot`;
  }
}
