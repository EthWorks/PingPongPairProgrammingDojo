exports.solve = function (param) {
  if (param === 'a') {
    return false;
  }
  return true;
}

const solveConsonants = function(string) {
  return string.split(/[ae1yio]+/i).sort((a, b) => b.length - a.length)[0];
}

const isConsonant = (letter) => {
  let consonants = [
    'b', 'c', 'd', 'f', 'g', 'h', 
    'j', 'k', 'l', 'm', 'n', 'p', 
    'r', 's', 't', 'w', 'z'];
  
  return consonants.includes(letter);
}

exports.isConsonant = isConsonant;
exports.solveConsonants = solveConsonants