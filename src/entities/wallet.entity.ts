import { Column, Entity, ManyToOne } from 'typeorm';
import { Base } from './base.entity';
import { User } from './user.entity';

@Entity()
export class Wallet extends Base {
  @Column()
  icon: string;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User | string | null;
}
