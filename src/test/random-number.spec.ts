// Function.
import { randomNumber } from '../lib/function/random-number.func';
// Class.
import { Testing } from '../lib/testing.class';
// Constant.
import { ExecuteSpec } from './execute';
/**
 * Initialize testing.
 */

const execute = false;
const executeDescribe = true;
const executeIt = true;

if (execute ) {
  const t = new Testing(
    executeDescribe || ExecuteSpec.describe['random-number'],
    executeIt || ExecuteSpec.it['random-number']
  );
  /**
   * Execute.
   */
  t.describe(`randomNumber()`, () =>
    t
      .it(`to 10`, () => t.expect.toBeNumber(randomNumber(10)))
      // .it(`between 0 and 19500`, () => toBe.numberBetween(randomNumber(19500), 0, 19500))
      .it(`to be less than 200`, () => t.expect.toBeLessThan(randomNumber(200), 200))
  );
    
}
