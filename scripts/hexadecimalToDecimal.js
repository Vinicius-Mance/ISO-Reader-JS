const hexadecimalToDecimal = isoString => {

// loop to transform ISO string into four digit binary
    let decimalPairs = [];
    let decimalArray = [];
    let decimalString = '';

// loop to separate hexadecimals in pairs
for (var i = 0; i < isoString.length; i+=2) {
    decimalPairs.push(isoString[i] + isoString[i+1]);
}

  return decimalPairs;
}

// converter to hexadecimal letters into decimal numbers
let convertiontoDecimal = [];
for (var i = 0; i < isoString.length; i++) {

  if (isoString[i].match(/[Aa]/i)) {
    convertiontoDecimal.push(10)
  } else if (isoString[i].match(/[Bb]/i)) {
      convertiontoDecimal.push(11)
  } else if (isoString[i].match(/[Cc]/i)) {
      convertiontoDecimal.push(12)
  } else if (isoString[i].match(/[Dd]/i)) {
      convertiontoDecimal.push(13)
  } else if (isoString[i].match(/[Ee]/i)) {
      convertiontoDecimal.push(14)
  } else if (isoString[i].match(/[Ff]/i)) {
      convertiontoDecimal.push(15)
  } else {
      convertiontoDecimal.push(isoString[i]);
  }
}

console.log(hexadecimalToDecimal("7EFF4601A8E1E20A"));
