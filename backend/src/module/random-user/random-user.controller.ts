import { Controller, Get, Query } from '@nestjs/common'
import { GetRanodmUserFilter } from './dto/get-random-user-filter.dto'
import { RandomUserService } from './random-user.service'

@Controller('api/random-user')
export class RandomUserController {
  constructor(private readonly randomUserService: RandomUserService) {}

  @Get()
  getRandomUsers(@Query() filterDto: GetRanodmUserFilter) {
    return this.randomUserService.getRandomUsersWithFilter(filterDto)
  }
}
