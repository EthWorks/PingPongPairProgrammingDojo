const { solve } = require('./solution');


it('works for a single array', () => {
  expect(solve(['*'])).toEqual(['*']);
});

it('works for a single array', () => {
  expect(solve(['_'])).toEqual([0]);
});

it('works for a single array', () => {
  expect(solve(['_', '*'])).toEqual([1, '*']);
});

it('works for a single array', () => {
  expect(solve(['*', '_', '*'])).toEqual(['*', 2, '*']);
});


it('works for a single array', () => {
  expect(solve(['_', '_'])).toEqual([0, 0]);
});

// check ===
// expect(1).toBe(1)

// check deep equality
// expect([1, 2]).toEqual([1, 2])
