function fpb(angka1, angka2) {
  // you can only write your code here!
  var bagi1 = [];
  var bagi2 = [];
  var sama = [];
  for (var i = 0; i <= angka1; i++) {
    if (angka1 % i === 0) {
      bagi1.push(i);
    }
  }
  for (var i = 0; i <= angka1; i++) {
    if (angka2 % i === 0) {
      bagi2.push(i);
    }
  }
  for (var i = 0; i < bagi1.length; i++) {
    for (var j = 0; j < bagi2.length; j++) {
      if (bagi1[i] === bagi2[j]) {
        sama.push(bagi1[i]);
      }
    }
  }
  return sama[sama.length - 1];
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
