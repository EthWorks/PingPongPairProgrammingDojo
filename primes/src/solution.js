exports.sumPrimes = function (array) {
  return array
    .filter(isPrime)
    .reduce((acc, val) => acc + val, 0)
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0)
      return false;
  }
  return true;
}

exports.isPrime = isPrime