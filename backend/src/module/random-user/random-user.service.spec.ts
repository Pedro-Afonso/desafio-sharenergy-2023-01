import { HttpService } from '@nestjs/axios'
import { Test, TestingModule } from '@nestjs/testing'
import { of } from 'rxjs'
import { RandomUserService } from './random-user.service'
import { randomUserStub } from './test/stub/random-user-stub'

describe('RandomUserService', () => {
  let randomUserService: RandomUserService
  let httpService: HttpService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RandomUserService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile()

    randomUserService = module.get<RandomUserService>(RandomUserService)
    httpService = module.get<HttpService>(HttpService)
  })

  it('should be defined', () => {
    expect(randomUserService).toBeDefined()
    expect(httpService).toBeDefined()
  })

  describe('findAll', () => {
    it('should return a random user list', async () => {
      // Arrange
      const expected = randomUserStub()

      jest.spyOn(httpService, 'get').mockReturnValueOnce(
        of({
          status: 200,
          statusText: 'OK',
          config: {},
          headers: {},
          data: expected,
        }),
      )

      // Act
      const result = await randomUserService.findAll()

      // Assert
      expect(result).toEqual(expected)
    })
  })
})
