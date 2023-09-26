import {
  Body,
  Controller,
  Get,
  Param,
  UseGuards,
  Patch,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { EditUserDto } from './dto';
import { JwtGuard } from 'src/auth/guard';
import { UserService } from './user.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  async getUsers() {
    try {
      const user = await this.userService.users();
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    try {
      const user = await this.userService.userDetails(id);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Patch(':id')
  async editUser(@Param('id') id: string, @Body() dto: EditUserDto) {
    try {
      await this.userService.updateUserDetails(id, dto);

      return { message: 'Edited User Details.' };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    try {
      await this.userService.deleteUserDetails(id);
      return { message: 'Deleted User Details.' };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Record does not exist');
        }
      }
      throw error;
    }
  }
}
