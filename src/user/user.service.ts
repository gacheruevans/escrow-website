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
}
