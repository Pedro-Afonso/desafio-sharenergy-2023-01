import { Module } from '@nestjs/common'

import { RandomUserModule } from './module/random-user/random-user.module'
import { HttpCatModule } from './module/http-cat/http-cat.module'
import { MongodbModule } from './provider/mongo/mongodb.module'
import { UserModule } from './module/user/user.module'

@Module({
  imports: [RandomUserModule, HttpCatModule, UserModule, MongodbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
