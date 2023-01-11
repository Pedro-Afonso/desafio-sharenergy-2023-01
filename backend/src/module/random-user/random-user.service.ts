import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs'
import { IRandomUser, IRandomUserResponse } from './interfaces/random-user'

@Injectable()
export class RandomUserService {
  constructor(private readonly httpService: HttpService) {}

  private readonly api = 'https://randomuser.me/api/?seed=1010&nat=br&results=1'

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
}
