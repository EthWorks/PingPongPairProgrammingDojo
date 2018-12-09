const { sumPrimes, isPrime } = require('./solution');

it('it should be sum', () => {
  expect(typeof sumPrimes([])).toBe('number');
  expect(sumPrimes([1, 2, 3])).toBe(5);
})

it('check number', () => {
  expect(isPrime(1)).toBe(false);
  expect(isPrime(2)).toBe(true);
  expect(isPrime(4)).toBe(false);
  expect(isPrime(5)).toBe(true);
  expect(isPrime(33)).toBe(false);
  expect(isPrime(3)).toBe(true);
  expect(isPrime(0)).toBe(false);
  expect(isPrime(6)).toBe(false);
  expect(isPrime(25)).toBe(false);
  expect(() => isPrime('a')).toThrow('only numbers allowed');
})

// check ===
// expect(1).toBe(1)

// check deep equality
// expect([1, 2]).toEqual([1, 2])
