import { HeaderNavModule } from './header-nav.module';

describe('HeaderNavModule', () => {
  let headerNavModule: HeaderNavModule;

  beforeEach(() => {
    headerNavModule = new HeaderNavModule();
  });

  it('should create an instance', () => {
    expect(headerNavModule).toBeTruthy();
  });
});
