exports.sumPrimes = function (params) {

  let sum = 0;

  for (let i=0; i<params.length; i++) {
    const isNumberPrime = isPrime(params[i]);
    if (isNumberPrime) {
      sum += params[i]; 
    }
  }

  return sum;
}

const isPrime = function (number) {
  if (typeof number !== 'number') {
    throw new Error('only numbers allowed')
  }

  return !(
    number === 1 ||
    (number > 2 && number % 2 === 0) ||
    (number !== 3 && number % 3 === 0) ||
    (number !== 5 && number % 5 === 0)
  );

}

exports.isPrime = isPrime