// A Higher Order Function is a function that either takes one or more functions as arguments or returns a function as its result. HOFs allow for functional composition, where smaller functions are combined to create more complex ones.

let array = ["dog", "cat", "pig"];

function manipulate(callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

function pluralize(word) {
  return `${word}s`;
}

function capitalize(word) {
  return `${word[0].toUpperCase() + word.slice(1)}`;
}

function pigLatin(word) {
  return `${word.slice(1) + word[0] + "ay"}`;
}

console.log(manipulate(pluralize));
console.log(manipulate(capitalize));
console.log(manipulate(pigLatin));
