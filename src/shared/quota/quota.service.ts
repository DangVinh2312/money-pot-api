import { Injectable } from '@nestjs/common';
import { CreateQuotaDto } from './dto/create-quota.dto';
import { UpdateQuotaDto } from './dto/update-quota.dto';
import { QuotaRepository } from './quota.repository';

@Injectable()
export class QuotaService {
  constructor(private readonly quotaRepository: QuotaRepository) {}

  async create(createQuotaDto: CreateQuotaDto) {
    await this.quotaRepository.insert(createQuotaDto);

    return 'This action adds a new quota';
  }

  async findAll() {
    const quotas = await this.quotaRepository.find();

    return quotas;
  }

  async findOne(id: string) {
    const quota = await this.quotaRepository.findOneBy({ id });

    return quota;
  }

  async update(id: string, updateQuotaDto: UpdateQuotaDto) {
    await this.quotaRepository.update(id, updateQuotaDto);

    return `This action updates a #${id} quota`;
  }

  async remove(id: string) {
    await this.quotaRepository.delete(id);

    return `This action removes a #${id} quota`;
  }
}
