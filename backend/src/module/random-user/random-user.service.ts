import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs'
import { IRandomUserResponse } from './interfaces/random-user'

@Injectable()
export class RandomUserService {
  constructor(private readonly httpService: HttpService) {}

  private api = 'https://randomuser.me/api/?seed=1010&nat=br&results=1'

  private async fetchRandomUsersFromApi() {
    const response = await lastValueFrom(
      this.httpService.get<IRandomUserResponse>(this.api, {
        headers: { 'Accept-Encoding': 'gzip' },
      }),
    )
    return response.data
  }

  async getRandomUsers(): Promise<IRandomUserResponse> {
    return this.fetchRandomUsersFromApi()
  }
}
