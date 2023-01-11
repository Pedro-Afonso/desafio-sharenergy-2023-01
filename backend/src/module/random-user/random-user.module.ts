import { RandomUserController } from './random-user.controller'
import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { RandomUserService } from './random-user.service'

@Module({
  imports: [HttpModule],
  controllers: [RandomUserController],
  providers: [RandomUserService],
})
export class RandomUserModule {}
