// Function.
import { randomString } from '../lib/function/random-string.func';
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
testing.describe(`randomString()`, () => {
  testing
    .it(`to 10`, () => toBe.string(randomString(10)))
    .it(`between 0 and 19500`, () => toBe.stringOfLengthBetween(randomString(19500), 0, 19500))
    .it(`to be less than 200`, () => expect(randomString(200).length).toBeLessThanOrEqual(200));
});
