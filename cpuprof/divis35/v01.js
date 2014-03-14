function multiplesOf3and5() {
  var result = [], sum = 0;
  for (var i = 0; i < 1000 * 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
      result.push(i);
    }
  }
  return [result, result.length, sum];
}

for (var i = 100; i > 0; i--) {
  var res = multiplesOf3and5();
  if (i === 1) {
    print('length: ' + res[1] + ' - sum: ' + res[2]);
  }
}
