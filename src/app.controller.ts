import { Public } from './auth/decorators/access.decorator';
import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LoginDto } from './frontend/user/dto/login-user.dto';

@Public()
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  hello(): string {
    return this.appService.getHello();
  }

  @Get('/about')
  about(): string {
    return 'somnath';
  }

  // @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Query() login: LoginDto) {
    return this.authService.login(login);
  }

  // @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }
}
