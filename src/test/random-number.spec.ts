// Function.
import { randomNumber } from '../lib/function/random-number.func';
// Class.
import { Testing } from '../lib/testing.class';
import { TestingToBeMatchers } from '../lib/testing-tobe-matchers.class';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Execute.
 */
testing.describe(`randomNumber()`, () => {
  testing
    .it(`to 10`, () => toBe.number(randomNumber(10)))
    .it(`between 0 and 19500`, () => toBe.numberBetween(randomNumber(19500), 0, 19500))
    .it(`to be less than 200`, () => expect(randomNumber(200)).toBeLessThan(200));
});

