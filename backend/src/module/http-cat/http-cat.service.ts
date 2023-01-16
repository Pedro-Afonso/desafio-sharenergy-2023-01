import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { lastValueFrom } from 'rxjs'
import { getHttpCat } from './dto/get-http-cat'

@Injectable()
export class HttpCatService {
  constructor(private readonly httpService: HttpService) {}

  private readonly api = 'https://http.cat/'

  async getHttpCat(statusDto: getHttpCat) {
    const { statusCode } = statusDto

    try {
      await lastValueFrom(this.httpService.get(this.api + statusCode))
      return `https://http.cat/${statusCode}`
    } catch {
      return 'https://img.freepik.com/vetores-gratis/ups-erro-404-com-ilustracao-de-conceito-de-robo-quebrado_114360-5529.jpg?w=2000'
    }
  }
}
