// Lets make a function to loop over an array and print the items out

var items = "q. How do you comfort a JavaScript bug? a. You console it".split(" ");

// console.log(items);

// var results = '';
// for(var i = 0; i < items.length; i = i + 1) {
//   results = results + ' ' + items[i];
// }

// items.forEach(function(item) {
//   results = results + ' ' + item;
// });

// var results = items.reduce(function(result, item, index, arr) {
//   console.log('result at [%d] => %s', index, result);
//   return result + ' ' + item;
// }, '');

// console.log(results);

// What if we wanted to make this function invoke a callback for each item in the array?

// refactor!

var cats = [
  {
    name: 'mittens',
    age: 1
  },
  {
    name: 'lynx',
    age: 12
  }
];

var map = function map(arr, cb) {
  var result = [];
  for(var i = 0; i < arr.length; i = i + 1) {
    var item = arr[i];
    result.push(cb(item))
  }
  return result;
}

var catSummary = map(cats, function(item) {
  // return item.name + ' age:' + item.age;
  return `name: ${item.name} age: ${item.age}`;
});

console.log(catSummary);
