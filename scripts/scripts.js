let mainForm = document.getElementById('mainForm');
let hexaInput = document.getElementById('hexaInput');
let binaryResult = document.getElementById('binaryResult');

mainForm.onsubmit = function (e) {

  e.preventDefault()
  binaryResult.innerHTML = hexadecimalToBinary(hexaInput.value);

}
