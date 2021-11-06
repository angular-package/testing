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
    .it(`between 0 and 19500`, () => toBe.stringOfLength(randomString(19500), { min: 0, max: 19500 }))
    .it(`to be less than 200`, () => expect(randomString(200).length).toBeLessThanOrEqual(200))
    .it(`different chars`, () => {
      const str = randomString(30, `0123456789`);
      expect(str.indexOf(`45`)).toEqual(-1);
    });
});