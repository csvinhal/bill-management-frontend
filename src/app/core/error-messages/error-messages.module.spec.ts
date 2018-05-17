import { ErrorMessagesModule } from './error-messages.module';

describe('ErrorMessagesModule', () => {
  let errorMessagesModule: ErrorMessagesModule;

  beforeEach(() => {
    errorMessagesModule = new ErrorMessagesModule();
  });

  it('should create an instance', () => {
    expect(errorMessagesModule).toBeTruthy();
  });
});
