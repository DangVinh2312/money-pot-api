import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMoneyPotDto } from './dto/create-money_pot.dto';
import { UpdateMoneyPotDto } from './dto/update-money_pot.dto';
import { MoneyPotService } from './money_pot.service';

@Controller('money-pot')
export class MoneyPotController {
  constructor(private readonly moneyPotService: MoneyPotService) {}

  @Post()
  create(@Body() createMoneyPotDto: CreateMoneyPotDto) {
    return this.moneyPotService.create(createMoneyPotDto);
  }

  @Get()
  findAll() {
    return this.moneyPotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moneyPotService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMoneyPotDto: UpdateMoneyPotDto,
  ) {
    return this.moneyPotService.update(id, updateMoneyPotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moneyPotService.remove(id);
  }
}
