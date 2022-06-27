import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServise: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.usersServise.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<User> {
    return this.usersServise.getUserById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersServise.create(createUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<User> {
    return this.usersServise.remove(id);
  }

  @Put(':id')
  uptade(
    @Body() updateUserdto: UpdateUserDto,
    @Param('id') id: string
  ): Promise<User> {
    return this.usersServise.updateUser(id, updateUserdto);
  }
}
