function angkaPrima(angka) {
  // you can only write your code here!
  var dividible = []
  for(var i = 0; i <= angka; i++){
    if( angka % i === 0){
      dividible.push(i)
    }
  }
  if(dividible.length === 2){
    return true
  }else{
    return false
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
