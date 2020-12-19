import { Test, TestingModule } from '@nestjs/testing';
import { TituloController } from './titulo.controller';

describe('TituloController', () => {
  let controller: TituloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TituloController],
    }).compile();

    controller = module.get<TituloController>(TituloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
