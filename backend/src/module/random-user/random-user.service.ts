import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs'
import { IRandomUserResponse } from './interfaces/random-user'

@Injectable()
export class RandomUserService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<IRandomUserResponse> {
    const url = 'https://randomuser.me/api/?seed=1010&nat=br&results=1'
    const response = await lastValueFrom(
      this.httpService.get<IRandomUserResponse>(url, {
        headers: { 'Accept-Encoding': 'gzip' },
      }),
    )

    return response.data
  }
}
