function neighbour(data, index) {
  let res = 0;
  if(data[index + 1] === '*') {
    res++;
  }
  if(data[index - 1]=== '*') {
    res++;
  }
  return res;
}

function solveOne(data, index) {
  if (data[index] === '*') {
    return '*'
  } else {
    return neighbour(data, index);
  }
}

exports.solve = function (input) {
  return input.map((_, index, data) => solveOne(data, index));
}