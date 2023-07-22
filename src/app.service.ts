import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getLanding(): string {
    return 'Escrow P2P Platform';
  }
}
