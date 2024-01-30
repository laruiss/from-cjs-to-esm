import { Injectable } from '@nestjs/common';

import { add } from '@cjs-to-esm/shared';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello ${add(40, 4)}!`;
  }
}
