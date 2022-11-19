import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  async getAllUsers() {
    try {
      const userList = await this.usersService.findAllUsers();

      return userList;
    } catch (error) {
      throw new InternalServerErrorException({
        message: `Something wrong happens: ${error}`,
        name: 'InternalServerError',
      });
    }
  }

  @Get('/:username')
  async findOneChapter(@Param('username') username: string) {
    try {
      const query = {
        username,
      };
      const user = await this.usersService.findOneUser(query);
      return user;
    } catch (error) {
      throw new InternalServerErrorException({
        message: `Something wrong happens: ${error}`,
        name: 'InternalServerError',
      });
    }
  }
}
