import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request, Response } from 'express';
import { faker } from '@faker-js/faker';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('fake')
  async fake() {
    const user = await this.userService.create({
      // id: +faker.random.numeric(),
      email: faker.internet.email(),
      password: faker.random.alphaNumeric(20),
      fname: faker.name.firstName(),
      lname: faker.name.lastName(),
      apiToken: '',
      mobile: faker.phone.number(),
      dob: faker.date.birthdate(),
      profession: faker.name.jobTitle(),
      orgname: faker.company.name(),
      whatsapp: faker.phone.number(),
      address:
        faker.address.secondaryAddress() + ', ' + faker.address.streetAddress,
      city: faker.address.cityName(),
      pincode: faker.address.zipCode(),
      state: faker.address.state(),
      country: faker.address.country(),
      userType: faker.random.words(1).slice(0, 8),
      active: false,
      premiumStatus: '',
      refferByUserId: 0,
      manageByUserId: 0,
      rememberToken: faker.random.alphaNumeric(16),
      createAt: new Date(),
      modifiedAt: new Date(),
    });

    return user;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    const total = (await this.userService.findAll()).length;
    const data = await this.userService.getList(req);
    return res
      .set({
        'X-Total-Count': `${total}`,
      })
      .set({ 'Access-Control-Expose-Headers': 'X-Total-Count' })
      .json(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
