import { Controller, Get } from '@nestjs/common'
import { RandomUserService } from './random-user.service'

@Controller('api/random-user')
export class RandomUserController {
  constructor(private readonly randomUserService: RandomUserService) {}

  @Get()
  getRandomUsers() {
    return this.randomUserService.getRandomUsers()
  }
}
