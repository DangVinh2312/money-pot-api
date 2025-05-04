import { Column, Entity, ManyToOne } from 'typeorm';
import { Base } from './base.entity';
import { MoneyPot } from './money_pot.entity';
import { Quota } from './quota.entity';
import { Wallet } from './wallet.entity';

@Entity()
export class Expense extends Base {
  @Column({ nullable: true })
  otherName: string;

  @Column()
  amount: number;

  @ManyToOne(() => MoneyPot, (moneyPot) => moneyPot.id, { nullable: true })
  moneyPot: MoneyPot | string | null;

  @ManyToOne(() => Quota, (moneyPot) => moneyPot.id)
  quota: Quota | string | null;

  @ManyToOne(() => Wallet, (moneyPot) => moneyPot.id)
  wallet: Wallet | string | null;
}
