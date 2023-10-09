const sum = require('./sum');

test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sums two negative numbers', () => {
  expect(sum(-1, -2)).toBe(-3);
});
