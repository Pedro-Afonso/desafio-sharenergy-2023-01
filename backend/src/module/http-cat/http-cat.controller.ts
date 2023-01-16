import { Controller, Get, Param } from '@nestjs/common'
import { getHttpCat } from './dto/get-http-cat'
import { HttpCatService } from './http-cat.service'

@Controller('api/http-cat/:statusCode')
export class HttpCatController {
  constructor(private readonly httpCatService: HttpCatService) {}

  @Get()
  getHttpCat(@Param() statusDto: getHttpCat) {
    return this.httpCatService.getHttpCat(statusDto)
  }
}
