const { solve, solveConsonants, isConsonant } = require('./solution');

describe('solve', () => {
  it('should be consonant', () => {
    expect( solve('b') ).toBe(true);
  });

  it('should not be vowel', () => {
    expect( solve('a') ).toBe(false);
  });

  it('should return substring', () => {
    expect(isConsonant('b')).toBe(true);
  });

  it('should return substring', () => {
    expect(isConsonant('a')).toBe(false);
  });

  it('should return true if parameter if consonant', () => {
    expect(isConsonant('d')).toBe(true);
  });
});

describe('solveConsonants', () => {
  it('should return only consonants', () => {
    expect(solveConsonants('abc')).toBe('bc');
  })

  it('should return substring', () => {
    expect(solveConsonants('bcdabcdbcd')).toBe('bcdbcd');
  });

  it('should return substring', () => {
    expect(solveConsonants('bcdabcdbcda')).toBe('bcdbcd');
  });

  it('should return substring', () => {
    expect(solveConsonants('bcd1bcdbcda')).toBe('bcdbcd');
  });

  it('should return substring', () => {
    expect(solveConsonants('bcdghk')).toBe('bcdghk');
  });
})



// check ===
// expect(1).toBe(1)

// check deep equality
// expect([1, 2]).toEqual([1, 2])

// spółgłoski:
// b, c, d, f, g, h, j, k, l, m, n, p, r, s, t, w, z
// samogłoski:
// a, e, i, o, u, y