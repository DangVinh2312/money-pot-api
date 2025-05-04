import { PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from './audit.entity';

export class Base extends Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
