import { TranslateHubModule } from './translate-hub.module';

describe('TranslateModule', () => {
  let translateModule: TranslateHubModule;

  beforeEach(() => {
    translateModule = new TranslateHubModule();
  });

  it('should create an instance', () => {
    expect(translateModule).toBeTruthy();
  });
});
