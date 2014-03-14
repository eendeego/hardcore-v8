var fs = require('fs');

require('heapdump');
fs.readdirSync('.').map(function (filename) {
  if (filename.match(/^heapdump-/)) {
    console.log(filename);
    fs.unlinkSync(filename);
  }
});

setInterval(function heapDumper() {
  process.kill(process.pid, 'SIGUSR2');
}, 5000);

var LIMIT = 1000000;
function Spinner() {
  var buffer = new Array(LIMIT);
  var i = 0;
  setInterval(function () {
    buffer[i] = Date.now() * (1 + Math.sqrt(5)) / 2;
    i = (i + 1) % LIMIT;
  }, 200);
}

var i = 0;
var mouseClick = function () {
  new Spinner();
  if (i++ < 100) {
    setTimeout(mouseClick, 100);
  }
}

mouseClick();
