import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClsModule } from 'nestjs-cls';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { CLS_KEY } from './common/constants';
import { ormConfig } from './database/data_source.config';
import { User } from './entities/user.entity';
import { ExpenseModule } from './expense/expense.module';
import { IncomeModule } from './income/income.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ormConfig,
    }),
    ClsModule.forRoot({
      guard: {
        mount: true,
        setup: (cls, context) => {
          const req = context.switchToHttp().getRequest();
          cls.set(CLS_KEY.USER_ID, (req.user as User)?.id);
        },
      },
    }),
    AuthModule,
    CommonModule,
    ExpenseModule,
    IncomeModule,
    SharedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
