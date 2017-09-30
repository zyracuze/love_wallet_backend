const hello = require('../hello');

test('should return hello world', () => {
  const result = hello();
  result.then(function (res) {
    res.message.toBe('Hello_World');
  })
});