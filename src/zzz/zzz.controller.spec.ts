import { Test, TestingModule } from '@nestjs/testing';
import { ZzzController } from './zzz.controller';

describe('ZzzController', () => {
  let controller: ZzzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZzzController],
    }).compile();

    controller = module.get<ZzzController>(ZzzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
