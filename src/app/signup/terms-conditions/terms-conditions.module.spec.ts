import { TermsConditionsModule } from './terms-conditions.module';

describe('TermsConditionsModule', () => {
  let termsConditionsModule: TermsConditionsModule;

  beforeEach(() => {
    termsConditionsModule = new TermsConditionsModule();
  });

  it('should create an instance', () => {
    expect(termsConditionsModule).toBeTruthy();
  });
});
