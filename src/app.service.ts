import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'مرحبًا بكم في لقاء ال mean stack';
  }
}
