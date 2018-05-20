import { BlockUiModule } from './block-ui.module';

describe('BlockUiModule', () => {
  let blockUiModule: BlockUiModule;

  beforeEach(() => {
    blockUiModule = new BlockUiModule();
  });

  it('should create an instance', () => {
    expect(blockUiModule).toBeTruthy();
  });
});
