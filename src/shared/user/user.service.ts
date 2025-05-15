import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    await this.userRepository.insert(createUserDto);

    return 'This action adds a new user';
  }

  async findAll() {
    return await this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);

    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    await this.userRepository.delete(id);

    return `This action removes a #${id} user`;
  }
}
