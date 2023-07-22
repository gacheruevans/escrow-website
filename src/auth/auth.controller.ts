import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupAuthDto, SigninAuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: SignupAuthDto) {
    try {
      const result = await this.authService.signup(dto);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Post('signin')
  async signin(@Body() dto: SigninAuthDto) {
    try {
      const result = await this.authService.signin(dto);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
