function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  var str = "";
  for (var i = 0; i < kalimat.length; i++) {
    if (kalimat[i].toLowerCase() === kalimat[i]) {
      str += kalimat[i].toUpperCase();
    } else {
      str += kalimat[i].toLowerCase();
    }
  }
  return str;
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
