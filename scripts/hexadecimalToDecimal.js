const hexadecimalToDecimal = isoString => {

    let decimalArray = [];
    let decimal = 0;

    for (var i = 0; i < isoString.length; i++) {

      if (isoString[i].match(/[Aa]/i)) {
        decimalArray.push(10)
      } else if (isoString[i].match(/[Bb]/i)) {
          decimalArray.push(11)
      } else if (isoString[i].match(/[Cc]/i)) {
          decimalArray.push(12)
      } else if (isoString[i].match(/[Dd]/i)) {
          decimalArray.push(13)
      } else if (isoString[i].match(/[Ee]/i)) {
          decimalArray.push(14)
      } else if (isoString[i].match(/[Ff]/i)) {
          decimalArray.push(15)
      } else {
          decimalArray.push(parseInt(isoString[i]));
      }
    }

    let u = 16;
    for (var i = 0; i < decimalArray.length; i++) {
      u--
      decimal = decimal + decimalArray[i] * Math.pow(16, u)
      console.log("Posição: "+i);
      console.log("Número: "+decimalArray[i]);
      console.log("Potência: "+u);
      console.log(parseFloat(decimal));
// 9.007.199.254.740.991
// 9.151.109.940.782.424.000
// 9.223.372.036.854.775.808
    }
    // console.log(decimal);
    // console.log(decimalArray);

}

hexadecimalToDecimal("7EFF4601A8E1E20A");

// loop to separate hexadecimals in pairs
// for (var i = 0; i < isoString.length; i+=2) {
//     decimalPairs.push(isoString[i] + isoString[i+1]);
// }
//
//   return decimalPairs;
// }
