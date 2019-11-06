function cariModus(arr) {
  // you can only write your code here!
  var grup = [];
  for (var i = 0; i < arr.length; i++) {
    var sama = false;
    for (var j = 0; j < grup.length; j++) {
      if (arr[i] === grup[j][0]) {
        sama = true;
        grup[j].push(arr[i]);
      }
    }
    if (sama === false) {
      grup.push([arr[i]]);
    }
  }
  var swap;
  for (var i = 0; i < grup.length; i++) {
    for (var j = i + 1; j < grup.length; j++) {
      if (grup[i].length < grup[j].length) {
        swap = grup[j];
        grup[j] = grup[i];
        grup[i] = swap;
      }
    }
  }
  // return grup
  var jumlah = 0;
  for (var i = 0; i < grup.length; i++) {
    jumlah += grup[i].length;
  }
  if (jumlah === arr.length * grup[0].length || grup.length === 1) {
    return -1;
  } else {
    return grup[0][0];
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
