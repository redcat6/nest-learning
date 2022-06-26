import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [];

  getAll() {
    return this.users;
  }

  getuserById(id: string) {
    return this.users.find((user) => user.id === id);
  }

  create(userDto: CreateUserDto) {
    this.users.push({ ...userDto, id: Date.now().toString() });
  }
}
