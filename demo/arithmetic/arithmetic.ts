/* eslint-disable */
import { strict as assert } from "assert";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

const add = 1 + 1;
assert.equal(add, 2);

const subtract = 2 - 1;
assert.equal(subtract, 1);

const multiply = 3 * 3;
assert.equal(multiply, 9);

const divide = 8 / 2;
assert.equal(divide, 4);

// You won't get a divide by zero error.
const infiinity = 1 / 0;
assert.equal(Infinity, Infinity);

const notANumber = 0 / 0;
assert(isNaN(notANumber));

const remainder = 10 % 3;
assert.equal(remainder, 1);

const negate = -remainder;
assert.equal(negate, -1);

const exponent = 2 ** 3;
assert.equal(exponent, 8);