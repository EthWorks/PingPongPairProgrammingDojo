const { solve, solveRow, isValid, returnIdentical } = require('./solution');

it('is one element', () => {
  expect( solveRow(['X']) ).toBe('X');
});

it('works', () =>{
  expect(() => solveRow([])).toThrow();
});

it('works', () =>{
  expect(() => solveRow(['+'])).toThrow();
});

it('works', () =>{
  expect(isValid('X')).toBe(true);
  expect(isValid('O')).toBe(true);
  expect(isValid('-')).toBe(false);
  expect(isValid([])).toBe(false);
});

it('works', () =>{
  expect(() => solveRow(['Y', 'Y', 'X'])).toThrow();
  expect(() =>  solveRow(['X', 'Y', 'Y'])).toThrow()
});

it('works', () =>{
  expect( returnIdentical(['Y', 'Y', 'Y'])).toBe('Y');
});

it('works', () =>{
  expect( returnIdentical(['?', 'X', 'Y'])).toBe('?');
});

it('works', () =>{
  expect( solveRow(['X', 'X', 'X'])).toBe('X');
  expect( solveRow(['O', 'O', 'O'])).toBe('O');
});

it('works', () =>{
  expect( solveRow(['O', 'X', 'X'])).toBe('?');
});

it('works', () =>{
  expect( solve([['X', 'X'], ['Y', 'Y']])).toBe('?');
});

it('works', () =>{
  expect( () => solve([['X', 'X', 'Y'], ['Y', 'Y', 'Y']])).toThrow();
});


// it('works', () =>{
//   expect( solve([
//     ['X', 'X', 'X'], 
//     ['Y', 'Y', 'X'],
//     ['Y', 'Y', 'X']
//   ])).toBe('X');
// });

// check ===
// expect(1).toBe(1)

// check deep equality
// expect([1, 2]).toEqual([1, 2])
