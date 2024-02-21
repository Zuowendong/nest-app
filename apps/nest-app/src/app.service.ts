import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! from nest-app';
  }

  findAll(): string {
    return 'findAll';
  }
}
