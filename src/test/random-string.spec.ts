// Function.
import { randomString } from '../lib/function/random-string.func';
// Class.
import { Testing } from "./main";
import { ExecuteSpec } from './execute';

import { TestingExpectToBe } from '../lib/expectation/testing-expect-to-be.class';

const execute = false;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  /**
   * Initialize testing.
   */
  const t = new Testing(
    executeDescribe || ExecuteSpec.describe['random-string'],
    executeIt || ExecuteSpec.it['random-string']
  );
  // const toBe = new TestingToBeMatchers();
  /**
   * Execute.
   */
  t.describe(`randomString()`, () => {
    t
      .it(`to 10`, () => t.expect.toBeString(randomString(10)))
      // .it(`between 0 and 19500`, () => toBe.stringOfLengthBetween(randomString(19500), 0, 19500))
      .it(`to be less than 200`, () => expect(randomString(200).length).toBeLessThanOrEqual(200));
  });
}
