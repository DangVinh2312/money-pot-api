import { Column, Entity, ManyToOne } from 'typeorm';
import { Base } from './base.entity';
import { Quota } from './quota.entity';
import { User } from './user.entity';

@Entity()
export class Income extends Base {
  @Column()
  name: string;

  @Column()
  amount: number;

  @ManyToOne(() => Quota, (user) => user.id)
  quota: Quota | string | null;

  @ManyToOne(() => User, (user) => user.id)
  user: User | string | null;
}
