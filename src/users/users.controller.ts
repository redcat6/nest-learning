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
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServise: UsersService) {}

  @Get()
  getAll(): any {
    return this.usersServise.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.usersServise.getuserById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersServise.create(createUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `delete item with id: ${id}`;
  }

  @Put(':id')
  uptade(@Body() updateUserdto: UpdateUserDto, @Param('id') id: number) {
    return `update item by id: ${id}`;
  }
}
