import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto/user.dto';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async users() {
    try {
      const users = await this.prisma.user.findMany({
        select: {
          id: true,
          first_name: true,
          last_name: true,
          username: true,
          country: true,
          email: true,
        },
      });
      return users;
    } catch (error) {
      throw error;
    }
  }

  async userDetails(id: any) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          first_name: true,
          last_name: true,
          username: true,
          country: true,
          email: true,
        },
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateUserDetails(id: string, dto: EditUserDto) {
    await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...dto,
      },
      select: {
        first_name: true,
        last_name: true,
        username: true,
        country: true,
      },
    });
  }

  async deleteUserDetails(id) {
    await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
