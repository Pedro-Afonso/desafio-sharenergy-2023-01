import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs'
import { IRandomUser, IRandomUserResponse } from './interfaces/random-user'
import { GetRanodmUserFilter } from './dto/get-random-user-filter.dto'

@Injectable()
export class RandomUserService {
  constructor(private readonly httpService: HttpService) {}

  private readonly api = 'https://randomuser.me/api/?seed=101&nat=br&results=10'

  private randomUsers: IRandomUser[] = []

  async fetchRandomUsersFromApi(): Promise<IRandomUser[]> {
    const response = await lastValueFrom(
      this.httpService.get<IRandomUserResponse>(this.api, {
        headers: { 'Accept-Encoding': 'gzip' },
      }),
    )

    this.randomUsers = response.data.results

    return this.randomUsers
  }

  async getRandomUsers(): Promise<IRandomUser[]> {
    return this.fetchRandomUsersFromApi()
  }

  async getRandomUsersWithFilter(
    filterDto: GetRanodmUserFilter,
  ): Promise<IRandomUser[]> {
    const { search } = filterDto

    let randomUsers = await this.fetchRandomUsersFromApi()

    if (search) {
      randomUsers = randomUsers.filter(
        (user) =>
          user.name.first.includes(search) ||
          user.name.last.includes(search) ||
          user.email.includes(search) ||
          user.login.username.includes(search),
      )
    }

    return randomUsers
  }
}
