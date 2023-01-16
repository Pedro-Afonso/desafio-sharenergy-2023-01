import { Test, TestingModule } from '@nestjs/testing';
import { HttpCatService } from './http-cat.service';

describe('HttpCatService', () => {
  let service: HttpCatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpCatService],
    }).compile();

    service = module.get<HttpCatService>(HttpCatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
