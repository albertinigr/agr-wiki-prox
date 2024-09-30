import { Test, TestingModule } from '@nestjs/testing';
import { LanguageController } from './language.controller';
import { TranslateService } from '@/common/service/translate/translate.service';

describe('LanguageController', () => {
  let controller: LanguageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageController],
      providers: [TranslateService],
    }).compile();

    controller = module.get<LanguageController>(LanguageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});