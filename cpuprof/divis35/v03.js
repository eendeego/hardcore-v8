var result = new Array(1000), size, sum;

function multiplesOf3and5() {
  size = 0;
  for (var i = 0; i < 1000 * 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      if (size === result.length) {
        result.length += 1000;
      }
      sum += i;
      result[size++] = i;
    }
  }
}

for (var i = 100; i > 0; i--) {
  multiplesOf3and5();
  if (i === 1) {
    print('length: ' + size + ' - sum: ' + sum);
  }
}
