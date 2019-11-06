function urutkanAbjad(str) {
  // you can only write your code here!
  var split = [];

  for (var i = 0; i < str.length; i++) {
    split.push(str[i]);
  }
  var swap;
  for (var i = 0; i < split.length; i++) {
    for (var j = i + 1; j < split.length; j++) {
      if (split[i] > split[j]) {
        swap = split[j];
        split[j] = split[i];
        split[i] = swap;
      }
    }
  }
  var res = "";
  for (var i = 0; i < split.length; i++) {
    res += split[i];
  }
  return res;
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
