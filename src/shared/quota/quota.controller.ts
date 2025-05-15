import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateQuotaDto } from './dto/create-quota.dto';
import { UpdateQuotaDto } from './dto/update-quota.dto';
import { QuotaService } from './quota.service';

@Controller('quota')
export class QuotaController {
  constructor(private readonly quotaService: QuotaService) {}

  @Post()
  create(@Body() createQuotaDto: CreateQuotaDto) {
    return this.quotaService.create(createQuotaDto);
  }

  @Get()
  findAll() {
    return this.quotaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quotaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuotaDto: UpdateQuotaDto) {
    return this.quotaService.update(id, updateQuotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quotaService.remove(id);
  }
}
