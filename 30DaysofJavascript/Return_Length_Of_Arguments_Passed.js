/**
 * @return {number}
 */

// Solution 1
var argumentsLength = function(...args) {
  return args.length
};

// Solution 2
const argumentsLength = (...args) => args.length;
/**
* argumentsLength(1, 2, 3); // 3
*/