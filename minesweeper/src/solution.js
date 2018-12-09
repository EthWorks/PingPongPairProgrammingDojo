exports.solve = function (param) {
  if(param.some(row => row.length !== param.length)) {
    throw new Error
  }

  

  if (!param.length || param.some(value => !isValid(value))) {
    return '?';
  }
  return returnIdentical(param);
}

exports.solveRow = function (param) {
  if (!param.length || param.some(value => !isValid(value))) {
    throw new Error();
  }
  return returnIdentical(param);
}

const returnIdentical = function (params) {
  for (let index = 0; index < params.length; index++) {
    if (params[index] !== params[0]) {
      return '?';
    }
  }

  return params[0];
}

const isValid = function (param) {
  return param === 'X' || param === 'O';
}



exports.isValid = isValid;
exports.returnIdentical = returnIdentical;