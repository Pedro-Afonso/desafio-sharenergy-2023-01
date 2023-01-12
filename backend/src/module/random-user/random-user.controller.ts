import { Controller, Get, Query } from '@nestjs/common'
import { GetRanodmUserFilter } from './dto/get-random-user-filter.dto'
import { RandomUserService } from './random-user.service'

@Controller('api/random-user')
export class RandomUserController {
  constructor(private readonly randomUserService: RandomUserService) {}

  @Get()
  getRandomUsers(@Query() filterDto: GetRanodmUserFilter) {
    if (Object.keys(filterDto).length) {
      return this.randomUserService.getRandomUsersWithFilter(filterDto)
    } else {
      return this.randomUserService.getRandomUsers()
    }
  }
}
