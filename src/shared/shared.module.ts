import { Module } from '@nestjs/common';
import { MoneyPotModule } from './money_pot/money_pot.module';
import { QuotaModule } from './quota/quota.module';
import { UserModule } from './user/user.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [MoneyPotModule, QuotaModule, UserModule, WalletModule],
  exports: [MoneyPotModule, QuotaModule, UserModule, WalletModule],
})
export class SharedModule {}
