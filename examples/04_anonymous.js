var fn = function() {
  console.log("Hi, I am function!");
  throw new Error('To many cats');
}

// Why do mad? I just wanted to make a function?
// We could assign this to a variable and run it, but where's the fun in that?
// console.log(fn.name);

// Refactor as

function logResult(cb) {
  console.log('fn name "%s"', cb.name);
  cb();
};

logResult(function () {
  console.log("Hi, I am function!");
  throw new Error('OMG I want a cat');
});

// logResult(fn);

// Now we call this with our anonymous function, used as a callback!
