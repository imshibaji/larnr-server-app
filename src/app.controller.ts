import { Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LoginDto } from './frontend/user/dto/login-user.dto';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Get()
  hello(): string {
    return this.appService.getHello();
  }

  @Get('/about')
  about(): string {
    return 'somnath';
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Query() login: LoginDto) {
    return this.authService.login(login);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }
}
