const hexadecimalToBinary = isoString => {

// loop to transform ISO string into four digit binary
    let binaryArray = [];
    let binaryString = '';

    for (var i = 0; i < isoString.length; i++) {
      if (isoString[i] == 0) {
          binaryArray.push("0000")
      } else if (isoString[i] == 1) {
          binaryArray.push("0001")
      } else if (isoString[i] == 2) {
          binaryArray.push("0010")
      } else if (isoString[i] == 3) {
          binaryArray.push("0011")
      } else if (isoString[i] == 4) {
          binaryArray.push("0100")
      } else if (isoString[i] == 5) {
          binaryArray.push("0101")
      } else if (isoString[i] == 6) {
          binaryArray.push("0110")
      } else if (isoString[i] == 7) {
          binaryArray.push("0111")
      } else if (isoString[i] == 8) {
          binaryArray.push("1000")
      } else if (isoString[i] == 9) {
          binaryArray.push("1001")
      } else if (isoString[i].match(/[Aa]/i)) {
          binaryArray.push("1010")
      } else if (isoString[i].match(/[Bb]/i)) {
          binaryArray.push("1011")
      } else if (isoString[i].match(/[Cc]/i)) {
          binaryArray.push("1100")
      } else if (isoString[i].match(/[Dd]/i)) {
          binaryArray.push("1101")
      } else if (isoString[i].match(/[Ee]/i)) {
          binaryArray.push("1110")
      } else if (isoString[i].match(/[Ff]/i)) {
          binaryArray.push("1111")
      }
    }

    for (var i = 0; i < binaryArray.length; i++) {
        binaryString = binaryString + binaryArray[i];
    }
  return binaryString;
}

// non-used loop to separate hexadecimals in pairs
// let pairs = [];
// for (var i = 0; i < isoString.length; i+=2) {
//     pairs.push(isoString[i] + isoString[i+1]);
// }
