import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs'
import { IRandomUser, IRandomUserResponse } from './interfaces/random-user'
import { GetRanodmUserFilter } from './dto/get-random-user-filter.dto'

@Injectable()
export class RandomUserService {
  constructor(private readonly httpService: HttpService) {}

  private readonly api = 'https://randomuser.me/api/?seed=11&nat=br&results=315'

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

  async getRandomUsersWithFilter(filterDto: GetRanodmUserFilter) {
    const { search, page, limit } = filterDto

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

    const total: number = randomUsers.length

    // Pagination
    if (+limit <= 150 && page) {
      const startIndex = (parseInt(page) - 1) * parseInt(limit)
      const endIndex = parseInt(page) * parseInt(limit)

      randomUsers = randomUsers.slice(startIndex, endIndex)
    } else {
      randomUsers = randomUsers.slice(0, 9)
    }

    return { randomUsers, total }
  }
}
