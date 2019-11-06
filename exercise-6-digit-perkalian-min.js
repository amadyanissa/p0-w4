function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var faktor = [];
  for (var i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      faktor.push(i);
    }
  }
  var pasangan = [];
  for (var i = 0; i < faktor.length; i++) {
    pasangan.push([faktor[i], faktor[faktor.length - 1 - i]]);
  }
  var str = [];
  for (var i = 0; i < pasangan.length; i++) {
    var temp = "";
    for (var j = 0; j < pasangan[i].length; j++) {
      temp += pasangan[i][j].toString();
    }
    str.push(temp);
  }
  var swap;
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
      if (str[i].length > str[j].length) {
        swap = str[j];
        str[j] = str[i];
        str[i] = swap;
      }
    }
  }
  return str[0].length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
