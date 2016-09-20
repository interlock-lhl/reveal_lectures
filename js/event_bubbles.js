(function() {
  // first slide
  document.querySelector("#red_event1").addEventListener('click', function(e) {
    console.log("Red Event", this, e.target);
  });
  document.querySelector("#blue_event1").addEventListener('click', function(e) {
    console.log("Blue Event", this, e.target);
  });
  document.querySelector("#green_event1").addEventListener('click', function(e) {
    console.log("Green Event", this, e.target);
  });
  // document.addEventListener('click', function(e) {
  //   console.log("Document Click", this, e.target);
  // });

  // second slide
  // stops at red and green, but not blue
  document.querySelector("#red_event2").addEventListener('click', function(event) {
    event.stopPropagation();
    console.log("Red Event");
  });
  document.querySelector("#blue_event2").addEventListener('click', function(event) {
    console.log("Blue Event");
  });
  document.querySelector("#green_event2").addEventListener('click', function(event) {
    console.log("Green Event");
    event.stopPropagation();
  });

  // third slide
  document.querySelector("#red_event3").addEventListener('click', function(event) {
    console.log("Red Event #1");
  });
  document.querySelector("#red_event3").addEventListener('click', function(event) {
    console.log("Red Event #2");
  });

  // fourth slide
  document.querySelector("#red_event4").addEventListener('click', function(event) {
    console.log("Red Event #1", this.href);
    event.preventDefault();
  });
})();
