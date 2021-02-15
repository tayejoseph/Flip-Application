/** @flow */

/**
 * @description Polyfill for Object.is
 * */
if (!Object.is) {
  Object.is = (x, y) => {
    if (x === y) {
      // handles data types that are not objects or functions
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // handles data types that are objects or functions
      return x !== x && y !== y;
    }
  };
}

/**
 * @param {any} val
 * @description used to check it a value is neither null not undefined using type coersion
 * */
const isNotNull = (val) => {
  return !!val;
};

/**
 * @param {string | number | boolean | Object} a
 * @param {string | number | boolean | Object} b
 * @description used to check for equality of a and b
 * */
const isEqual = (a, b) => {
  if (isNotNull(a) && isNotNull(b)) {
    return Object.is(a, b);
  }
  return false;
};

export default isEqual;
