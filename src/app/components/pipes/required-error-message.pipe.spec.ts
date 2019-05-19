import { RequiredErrorMessagePipe } from './required-error-message.pipe';

describe('RequiredErrorMessagePipe', () => {
  it('create an instance', () => {
    const pipe = new RequiredErrorMessagePipe();
    expect(pipe).toBeTruthy();
  });
});
