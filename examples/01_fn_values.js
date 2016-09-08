// What is the difference between these two functions?
var displayItem = function(item) {
  console.log(item.name);
}

// console.log("Value: ", displayItem);
// console.log("Name: ", displayItem.name);
// console.log("Type: ", typeof displayItem);

function renderItem(item) {
  console.log(item.name);
}

// console.log("Value: ", renderItem);
// console.log("Name: ", renderItem.name);
// console.log("Type: ", typeof renderItem);

var copyOfDisplayItem = displayItem;
var copyOfRenderItem = renderItem;

// Does copyOfRenderItem still have a name? What would it be?
