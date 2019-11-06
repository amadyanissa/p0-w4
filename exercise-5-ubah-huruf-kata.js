function ubahHuruf(kata) {
  // you can only write your code here!
  var huruf = "abcdefghijklmnopqrstuvwxyz";
  var hasil = "";
  for (var i = 0; i < kata.length; i++) {
    for (var j = 0; j < huruf.length; j++) {
      if (kata[i] === huruf[j]) {
        if (huruf[j + 1] === undefined) {
          hasil += huruf[0];
        } else {
          hasil += huruf[j + 1];
        }
      }
    }
  }
  return hasil;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
