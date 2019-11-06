function highestScore(students) {
  // Code disini

  var kelas = [];
  var obj = {};
  for (var i = 0; i < students.length; i++) {
    var sama = false;
    for (var j = 0; j < kelas.length; j++) {
      if (students[i]["class"] === kelas[j]) {
        sama = true;
      }
    }
    if (sama === false) {
      kelas.push(students[i]["class"]);
    }
  }
  for (var i = 0; i < kelas.length; i++) {
    obj[kelas[i]] = {};
  }
  for (var keys in obj) {
    var highest = 0;
    var nama = "";
    for (var i = 0; i < students.length; i++) {
      if (students[i]["score"] > highest && students[i]["class"] === keys) {
        highest = students[i]["score"];
        nama = students[i]["name"];
      }
    }
    obj[keys]["name"] = nama;
    obj[keys]["score"] = highest;
  }
  return obj;
}

// TEST CASE
console.log(
  highestScore([
    {
      name: "Dimitri",
      score: 90,
      class: "foxes"
    },
    {
      name: "Alexei",
      score: 85,
      class: "wolves"
    },
    {
      name: "Sergei",
      score: 74,
      class: "foxes"
    },
    {
      name: "Anastasia",
      score: 78,
      class: "wolves"
    }
  ])
);

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(
  highestScore([
    {
      name: "Alexander",
      score: 100,
      class: "foxes"
    },
    {
      name: "Alisa",
      score: 76,
      class: "wolves"
    },
    {
      name: "Vladimir",
      score: 92,
      class: "foxes"
    },
    {
      name: "Albert",
      score: 71,
      class: "wolves"
    },
    {
      name: "Viktor",
      score: 80,
      class: "tigers"
    }
  ])
);

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}
