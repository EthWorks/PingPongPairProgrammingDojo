const { sumPrimes, isPrime } = require('./solution');

it('works', () => {
  expect(sumPrimes).toBeTruthy();
  
});

it('works', () => {
  expect(sumPrimes([])).toBe(0);
});


it('works', () => {
  expect(sumPrimes([1])).toBe(0);
});

it('works', () => {
  expect(sumPrimes([2])).toBe(2);
});

it('works', () => {
expect(sumPrimes([4])).toBe(0);
});

it('works', () => {
  expect(sumPrimes([1,2])).toBe(2);
});

it('works', () => {
  expect(isPrime(1)).toBe(false);
});

it('works', () => {
  expect(isPrime(2)).toBe(true);
});

it('works', () => {
  expect(isPrime(4)).toBe(false);
});

it('works', () => {
  expect(isPrime(20)).toBe(false);
});

it('works', () => {
  expect(isPrime(7)).toBe(true);
});

it('works', () => {
  expect(sumPrimes([2,7,20,11,13])).toBe(33);
});
// check ===
// expect(1).toBe(1)

// check deep equality
// expect([1, 2]).toEqual([1, 2])
