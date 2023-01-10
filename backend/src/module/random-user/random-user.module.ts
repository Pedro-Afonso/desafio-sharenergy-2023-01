import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RandomUserService } from './random-user.service';

@Module({
  imports: [HttpModule],
  providers: [RandomUserService],
})
export class RandomUserModule {}
