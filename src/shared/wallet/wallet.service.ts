import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { WalletRepository } from './wallet.repository';

@Injectable()
export class WalletService {
  constructor(private readonly walletRepository: WalletRepository) {}

  async create(createWalletDto: CreateWalletDto) {
    await this.walletRepository.insert(createWalletDto);

    return 'This action adds a new wallet';
  }

  async findAll() {
    return await this.walletRepository.find();
  }

  async findOne(id: string) {
    const wallet = await this.walletRepository.findOneBy({ id });

    return wallet;
  }

  async update(id: string, updateWalletDto: UpdateWalletDto) {
    await this.walletRepository.update(id, updateWalletDto);

    return `This action updates a #${id} wallet`;
  }

  async remove(id: string) {
    await this.walletRepository.delete(id);

    return `This action removes a #${id} wallet`;
  }
}
