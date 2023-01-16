import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { HttpCatController } from './http-cat.controller'
import { HttpCatService } from './http-cat.service'

@Module({
  imports: [HttpModule],
  controllers: [HttpCatController],
  providers: [HttpCatService],
})
export class HttpCatModule {}
