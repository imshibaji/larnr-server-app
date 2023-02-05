import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  [x: string]: any;
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
