import { RandomUserModule } from './module/random-user/random-user.module'
import { Module } from '@nestjs/common'

@Module({
  imports: [RandomUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
