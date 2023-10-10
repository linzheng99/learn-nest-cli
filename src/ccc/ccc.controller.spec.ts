import { Test, TestingModule } from '@nestjs/testing';
import { CccController } from './ccc.controller';

describe('CccController', () => {
  let controller: CccController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CccController],
    }).compile();

    controller = module.get<CccController>(CccController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
