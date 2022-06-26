import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async getUserById(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(userDto);
    return await newUser.save();
  }

  async remove(id: string): Promise<User> {
    return await this.userModel.findByIdAndRemove(id);
  }

  async updateUser(id: string, userDto: UpdateUserDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, userDto, { new: true });
  }
}
