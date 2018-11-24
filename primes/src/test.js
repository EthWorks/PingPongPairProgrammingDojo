const { sumPrimes } = require('./solution');

it('works', () => {
  expect(sumPrimes([3])).toBe(3);
});

it('works for non prime', () => {
  expect(sumPrimes([4])).toBe(0);
});

it('works for another non prime', () => {
  expect(sumPrimes([6])).toBe(0);
});

it('works non prime', () => {
  expect(sumPrimes([5])).toBe(5);
});

it('works for non prime', () => {
  expect(sumPrimes([4])).toBe(0);
});

it('works for prime', () => {
  expect(sumPrimes([13])).toBe(13);
});

it('works for multiple', () => {
  expect(sumPrimes([2, 13])).toBe(15);
});

it('works for multiple', () => {
  expect(sumPrimes([9, 13])).toBe(13);
});

it('works for 1', () => {
  expect(sumPrimes([1])).toBe(0);
});

it('works for empty', () => {
  expect(sumPrimes([])).toBe(0);
});

it('to throw', () => {
  expect(() => sumPrimes([undefined])).toThrow(TypeError);
});

it('works for 25', () => {
  expect(sumPrimes([25])).toBe(0);
});



// check ===
// expect(1).toBe(1)

// check deep equality
// expect([1, 2]).toEqual([1, 2])
