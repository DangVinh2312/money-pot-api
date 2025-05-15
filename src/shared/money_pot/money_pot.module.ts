import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoneyPot } from 'src/entities/money_pot.entity';
import { UserModule } from '../user/user.module';
import { MoneyPotController } from './money_pot.controller';
import { MoneyPotRepository } from './money_pot.repository';
import { MoneyPotService } from './money_pot.service';

@Module({
  imports: [TypeOrmModule.forFeature([MoneyPot]), forwardRef(() => UserModule)],
  controllers: [MoneyPotController],
  providers: [MoneyPotService, MoneyPotRepository],
  exports: [MoneyPotService, MoneyPotRepository],
})
export class MoneyPotModule {}
