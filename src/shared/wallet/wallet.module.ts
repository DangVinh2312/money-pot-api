import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from 'src/entities/wallet.entity';
import { UserModule } from '../user/user.module';
import { WalletController } from './wallet.controller';
import { WalletRepository } from './wallet.repository';
import { WalletService } from './wallet.service';

@Module({
  imports: [TypeOrmModule.forFeature([Wallet]), forwardRef(() => UserModule)],
  controllers: [WalletController],
  providers: [WalletService, WalletRepository],
  exports: [WalletService, WalletRepository],
})
export class WalletModule {}
