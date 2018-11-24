exports.sumPrimes = (anArray) => 
  anArray
    .filter(isPrime)
    .reduce((acc, el) => acc + el, 0);


function isPrime(x) {
  if (typeof x !== "number") {
    throw new TypeError('Invalid input');
  }
  if (x === 1) {
    return false;
  }
  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}