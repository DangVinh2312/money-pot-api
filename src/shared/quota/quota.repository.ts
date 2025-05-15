import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quota } from 'src/entities/quota.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuotaRepository extends Repository<Quota> {
  constructor(
    @InjectRepository(Quota)
    readonly quotaRepository: Repository<Quota>,
  ) {
    super(Quota, quotaRepository.manager, quotaRepository.queryRunner);
  }
}
