(function() {

  var divGlobalStuff = document.getElementById('globalstuff');

  Reveal.addEventListener( 'globalstuff', function() {
    var keys = Object.keys(window);
    setInterval(function() {
      var k = Object.keys(window);
      var difference = k.filter(x => keys.indexOf(x) == -1);
      // console.log(difference);
      difference.forEach(function(key) {
        console.log(key);
        divGlobalStuff.innerHTML += "Key Added: " + key + " of type: " + (typeof window[key]) + "<br>";
      });
      keys = k;
    }, 1000);
  }, false);
})();
