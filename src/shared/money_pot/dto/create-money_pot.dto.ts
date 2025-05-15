import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMoneyPotDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
