// __tests__/user-test.js
jest.mock('../request');

import * as user from '../user';

// The assertion for a promise must be returned.
it('testing mocked requested that will return resolved value', () => {
  expect.assertions(1);
  return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
});

it('should fail because id 7 does not exist', () => {
    expect.assertions(1);
    return user.getUserName(7).catch(e =>
        expect(e).toEqual({
          error: 'User with 7 not found.',
        }),
      );
  });