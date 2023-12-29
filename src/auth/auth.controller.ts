import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupAuthDto, SigninAuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: SignupAuthDto) {
    const result = await this.authService.signup(dto);
    return result;
  }
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signin(@Body() dto: SigninAuthDto) {
    const result = await this.authService.signin(dto);
    return result;
  }
}
