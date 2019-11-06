function changeMe(arr) {
  // you can only write your code here!
  if (arr.length === 0) {
    return "";
  }
  var actor = {};
  actor["firstName"] = "";
  actor["lastName"] = "";
  actor["gender"] = "";
  actor["age"] = 0;
  var nomor = 0;
  for (var i = 0; i < arr.length; i++) {
    nomor++;
    actor["firstName"] = arr[i][0];
    actor["lastName"] = arr[i][1];
    actor["gender"] = arr[i][2];
    if (!arr[i][3]) {
      actor["age"] = "Invalid Birth Year";
    } else {
      actor["age"] = 2019 - arr[i][3];
    }

    var nama =
      nomor + ". " + actor["firstName"] + " " + actor["lastName"] + ":";
    console.log(nama);
    console.log(actor);
  }
}

// TEST CASES
changeMe([["Christ", "Evans", "Male", 1982], ["Robert", "Downey", "Male"]]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
