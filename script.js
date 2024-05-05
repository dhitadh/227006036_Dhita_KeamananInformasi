function encrypt() {
  var inputText = document.getElementById("inputText").value;
  var shift = parseInt(document.getElementById("shift").value);
  var encryptedText = "";

  for (var i = 0; i < inputText.length; i++) {
    var charCode = inputText.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      encryptedText += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      encryptedText += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      encryptedText += inputText.charAt(i);
    }
  }

  document.getElementById("outputText").value = encryptedText;
}

function decrypt() {
  var inputText = document.getElementById("inputText").value;
  var shift = parseInt(document.getElementById("shift").value);
  var decryptedText = "";

  for (var i = 0; i < inputText.length; i++) {
    var charCode = inputText.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      decryptedText += String.fromCharCode(
        ((charCode - 65 - shift + 26) % 26) + 65
      );
    } else if (charCode >= 97 && charCode <= 122) {
      decryptedText += String.fromCharCode(
        ((charCode - 97 - shift + 26) % 26) + 97
      );
    } else {
      decryptedText += inputText.charAt(i);
    }
  }

  document.getElementById("outputText").value = decryptedText;
}
