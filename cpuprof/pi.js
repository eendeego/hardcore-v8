var total  = 2000000;
var inside = 0;
for (var i = 0; i < total; i++) {
  var x = Math.random();
  var y = Math.random();
  if (Math.pow(x,2) + Math.pow(y,2) < 1) inside++;
}

print('pi=' + inside / total * 4);