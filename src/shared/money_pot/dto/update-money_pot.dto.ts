import { PartialType } from '@nestjs/mapped-types';
import { CreateMoneyPotDto } from './create-money_pot.dto';

export class UpdateMoneyPotDto extends PartialType(CreateMoneyPotDto) {}
