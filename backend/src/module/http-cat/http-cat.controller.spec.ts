import { Test, TestingModule } from '@nestjs/testing';
import { HttpCatController } from './http-cat.controller';

describe('HttpCatController', () => {
  let controller: HttpCatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HttpCatController],
    }).compile();

    controller = module.get<HttpCatController>(HttpCatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
