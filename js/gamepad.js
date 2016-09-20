(function(window, document, navigator) {
  var gpInterval; // interval timer for gamepad
  var gpDiv = document.getElementById("gamepads");

  function pollGamePad(gpIndex, state) {
    var gp = navigator.getGamepads()[gpIndex];
    console.log("polling");
    // console.log("state: ", state.buttons);
    // console.log("_____: ", getState(gp).buttons);
    var changedState = updateState(gp, state);
    console.log("changes: ", changedState.buttons);
    for(k in changedState.buttons) {

      gpDiv.innerHTML += "<br>Button " + 	k + " is " + ((changedState.buttons[k] === true) ? "Pressed" : "Unpressed");
    };
    gpDiv.scrollTop = gpDiv.scrollHeight;
    // console.log(gpDiv);
  }
  //
  function updateState(gp, state) {
    var changes = {buttons: {}};
    gp.buttons.forEach(function(button, index) {
      // debugger;
      if (state.buttons[index] != button.pressed) {
        changes.buttons[index] = button.pressed;
        state.buttons[index] = button.pressed;
      }
    });
    return changes;
  }
  //
  function getState(gp) {
    var state = {
      buttons: [],
      axes: []
    };
    gp.buttons.forEach(function(button) {
      state.buttons.push(button.pressed);
    });

    return state;
  }

  window.addEventListener("gamepadconnected", function(e) {
    console.log("Connected", e);
    var gpIndex = 0;
    var gp = navigator.getGamepads()[gpIndex];


    gpDiv.innerHTML = "Gamepad connected at index " + gp.index + ": " + gp.id + ". " + gp.buttons.length + " buttons, " + gp.axes.length + " axes.";
    var gpState = getState(gp);
    //
    gpInterval = setInterval(pollGamePad, 500, gpIndex, gpState);
  });

  window.addEventListener("gamepaddisconnected", function(e) {
    console.log("Disconnectd", e);
    clearInterval(gpInterval);
  });

})(window, document, navigator);
