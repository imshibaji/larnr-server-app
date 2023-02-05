/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.save(createUserDto);
    return user;
  }

  getList(req: Request) {
    const sort = (req.query._sort || 'id').toString();
    const val = req.query._order == 'DESC' ? 'DESC' : 'ASC';

    const start = req.query._start || 0;
    const end = req.query._end || 10;
    const take = +end - +start;
    // console.log(start, end, sort, order, take);
    return this.userRepository
      .createQueryBuilder()
      .orderBy(sort, val)
      .skip(+start)
      .take(take)
      .getMany();
  }

  findAll() {
    return this.userRepository.find();
  }

  findOneBy(obj) {
    return this.userRepository.findOneByOrFail(obj);
  }

  findOne(id: number) {
    return this.userRepository.findOneByOrFail({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
