import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  async getUser(@Param() params: any): Promise<object> {
    const result = await this.userService.userDetails(params.id);
    return result;
  }
}
