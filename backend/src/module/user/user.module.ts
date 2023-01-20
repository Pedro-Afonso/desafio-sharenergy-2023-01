import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'

import { USER_COLLECTION_NAME } from 'src/config/constants'
import { UserController } from './user.controller'
import { UserSchema } from './schema/user.schema'
import { UserService } from './user.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: USER_COLLECTION_NAME, schema: UserSchema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
