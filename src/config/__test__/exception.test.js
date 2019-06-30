import { ValidationException } from '../exception';

describe('Exception Suite', () => {
  it('Should throw validation exception', () => {
    try {
      throw new ValidationException('Invalid parameter passed.');
    } catch (error) {
      expect(error.message).toMatchSnapshot();
      expect(error.name).toMatchSnapshot();
    }
  });
});
