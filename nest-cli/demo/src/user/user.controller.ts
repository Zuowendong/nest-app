import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(@Query() query) {
    // 读取前端传来的参数
    console.log(query);
    return {
      code: 200,
      message: query.name,
    };
  }

  @Post()
  create(@Body() body) {
    console.log(body);
    return {
      code: 200,
      message: body.name,
    };
  }

  // 动态参数
  @Get(':id')
  findOne(@Param() params) {
    console.log(params);
    return {
      code: 200,
    };
  }
}
