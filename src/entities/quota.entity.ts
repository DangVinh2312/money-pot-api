import { Column, Entity, ManyToOne } from 'typeorm';
import { Base } from './base.entity';
import { User } from './user.entity';

@Entity()
export class Quota extends Base {
  @Column()
  year: number;

  @Column()
  month: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User | string | null;
}
