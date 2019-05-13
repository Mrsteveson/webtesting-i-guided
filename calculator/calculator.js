module.exports = {
  add,
};

// function add(a, b) {
//   return a + b;
// }

function add(args) {
  const numbers = Array.isArray(args) ? args : [...arguments]
  //accumulator, element
  return numbers.reduce((acc, element) => acc + element, 0)
}
