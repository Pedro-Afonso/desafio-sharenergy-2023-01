import { Module } from '@nestjs/common'

import { RandomUserModule } from './module/random-user/random-user.module'
import { HttpCatModule } from './module/http-cat/http-cat.module'

@Module({
  imports: [RandomUserModule, HttpCatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
