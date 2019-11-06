function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  //your code here

  var hasil = [];
  for (var i = 0; i < arrPenumpang.length; i++) {
    var naik = false;
    var bayar = 0;
    for (var j = 0; j < rute.length; j++) {
      if (arrPenumpang[i][1] === rute[j]) {
        naik = true;
      }
      if (arrPenumpang[i][2] === rute[j]) {
        naik = false;
      }
      // console.log(rute[j], naik)
      if (naik === true) {
        bayar += 2000;
      }
    }

    var obj = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: bayar
    };
    hasil.push(obj);
  }
  return hasil;
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
