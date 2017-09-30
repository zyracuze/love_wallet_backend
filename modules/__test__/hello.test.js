const hello = require('../hello');

test('should return hello world', () => {
  expect(hello()).toBe('Hello_World');
});