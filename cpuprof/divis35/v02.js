function multiplesOf3and5() {
  var result = [], j = 0, sum = 0;
  for (var i=0; i < 1000 * 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      if (j == result.length) {
        result.length += 1000;
      }
      sum += i;
      result[j++] = i;
    }
  }
  return [result, j, sum];
}

for (var i = 100; i > 0; i--) {
  var res = multiplesOf3and5();
  if (i === 1) {
    print('length: ' + res[1] + ' - sum: ' + res[2]);
  }
}
