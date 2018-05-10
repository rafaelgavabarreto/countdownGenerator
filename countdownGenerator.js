var countdownGenerator = function (x) {

  return function() {
    if( x < 0) {
      console.log("Rockets already gone, bub!");
    } else if ( x === 0 ) {
      console.log("Blast off!"); x = -1;
    } else {
      console.log('T-minus ' + x-- + '...');
    }
  }
};

var countdown = countdownGenerator(4);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown();
