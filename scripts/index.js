const hexaDecimalReader = isoString => {

    let convertion = [];

    for (var i = 0; i < isoString.length; i++) {

      if (isoString[i].match(/[Aa]/i)) {
        convertion.push(10)
      } else if (isoString[i].match(/[Bb]/i)) {
          convertion.push(11)
      } else if (isoString[i].match(/[Cc]/i)) {
          convertion.push(12)
      } else if (isoString[i].match(/[Dd]/i)) {
          convertion.push(13)
      } else if (isoString[i].match(/[Ee]/i)) {
          convertion.push(14)
      } else if (isoString[i].match(/[Ff]/i)) {
          convertion.push(15)
      } else {
          convertion.push(isoString[i]);
      }


    }

    console.log(convertion);
    // loop to separate hexadecimals in pairs
    // let pairs = [];
    // for (var i = 0; i < isoString.length; i+=2) {
    //     pairs.push(isoString[i] + isoString[i+1]);
    // }

    return isoString;

}

console.log(hexaDecimalReader("7EFF4601A8E1E20A"));
