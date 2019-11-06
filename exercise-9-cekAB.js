function checkAB(num) {
  // you can only write your code here!
  var ab = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i] === "a" || num[i] === "b") {
      ab.push([num[i], i]);
    }
  }
  // return ab
  var jarak3 = [];
  for (var i = 0; i < ab.length; i++) {
    for (var j = 0; j < ab.length; j++) {
      if (
        (ab[i][0] === "a" && ab[j][0] === "b") ||
        (ab[i][0] === "b" && ab[j][0] === "a")
      ) {
        jarak3.push(Math.abs(ab[j][1] - 1 - ab[i][1]));
      }
    }
  }
  for (var i = 0; i < jarak3.length; i++) {
    if (jarak3[i] === 3) {
      return true;
    }
  }
  return false;
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon and meat")); // false
