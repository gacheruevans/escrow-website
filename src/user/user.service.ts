import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
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
  async updateUserDetails({ id, updateUser }) {
    await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        first_name: updateUser.first_name,
        last_name: updateUser.last_name,
        username: updateUser.username,
        country: updateUser.country,
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
