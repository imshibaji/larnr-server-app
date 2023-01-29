import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ required: false })
  id?: number;
  @ApiProperty()
  email: string;
  @ApiProperty({ required: false })
  emailVerifiedAt?: Date;
  @ApiProperty()
  password: string;
  @ApiProperty()
  fname: string;
  @ApiProperty()
  lname: string;
  @ApiProperty({ required: false })
  apiToken?: string;
  @ApiProperty()
  mobile: string;
  @ApiProperty()
  dob: Date;
  @ApiProperty()
  profession: string;
  @ApiProperty()
  orgname: string;
  @ApiProperty()
  whatsapp: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  city: string;
  @ApiProperty()
  pincode: string;
  @ApiProperty()
  state: string;
  @ApiProperty()
  country: string;
  @ApiProperty()
  userType: string;
  @ApiProperty({ required: false })
  active?: boolean;
  @ApiProperty()
  premiumStatus?: string;
  @ApiProperty()
  refferByUserId: number;
  @ApiProperty()
  manageByUserId: number;
  @ApiProperty({ required: false })
  rememberToken?: string;
  @ApiProperty()
  createAt: Date;
  @ApiProperty()
  modifiedAt: Date;
  @ApiProperty({ required: false })
  deletedAt?: Date;
}
