import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallet } from './../../entities/wallet.entity';

@Injectable()
export class WalletRepository extends Repository<Wallet> {
  constructor(
    @InjectRepository(Wallet)
    readonly quotaRepository: Repository<Wallet>,
  ) {
    super(Wallet, quotaRepository.manager, quotaRepository.queryRunner);
  }
}
